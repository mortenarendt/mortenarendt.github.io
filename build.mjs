import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { dirname, extname, join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

// Put this file beside index.html, style.css, data.js, and main.js.
const root = dirname(fileURLToPath(import.meta.url));
const read = name => readFile(join(root, name), "utf8");

const imageTypes = {
  ".avif": "image/avif",
  ".bmp": "image/bmp",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

async function findImages(directory) {
  let entries;
  try {
    entries = await readdir(directory, { withFileTypes: true });
  } catch (error) {
    if (error?.code === "ENOENT") return [];
    throw error;
  }

  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...await findImages(path));
    } else if (entry.isFile() && imageTypes[extname(entry.name).toLowerCase()]) {
      files.push(path);
    }
  }
  return files;
}

async function embedImages(html) {
  const imageFiles = await findImages(join(root, "images"));
  let embedded = 0;

  for (const imagePath of imageFiles) {
    const mime = imageTypes[extname(imagePath).toLowerCase()];
    const relativePath = relative(root, imagePath).split(sep).join("/");
    const encodedPath = encodeURI(relativePath);
    const contents = await readFile(imagePath);
    const dataUrl = `data:${mime};base64,${contents.toString("base64")}`;

    // Replace both images/photo.jpg and ./images/photo.jpg forms, including
    // paths whose spaces or non-ASCII characters are URL-encoded.
    const variants = [...new Set([
      `./${encodedPath}`,
      `./${relativePath}`,
      encodedPath,
      relativePath,
    ])].sort((a, b) => b.length - a.length);

    const before = html;
    for (const path of variants) html = html.split(path).join(dataUrl);
    if (html !== before) embedded += 1;
  }

  return { html, embedded, found: imageFiles.length };
}

function replaceRequired(source, pattern, replacement, description) {
  if (!pattern.test(source)) {
    throw new Error(`Could not find ${description} in index.html`);
  }
  return source.replace(pattern, replacement);
}

try {
  const [template, css, data, main] = await Promise.all([
    read("index.html"),
    read("style.css"),
    read("data.js"),
    read("main.js"),
  ]);

  // Prevent file contents from accidentally closing their inline HTML tags.
  const safeCss = css.replace(/<\/style/gi, "<\\/style");
  const safeData = data.replace(/<\/script/gi, "<\\/script");
  const safeMain = main.replace(/<\/script/gi, "<\\/script");

  let standalone = template;
  standalone = replaceRequired(
    standalone,
    /<link\b(?=[^>]*\bhref=["']style\.css["'])[^>]*>/i,
    `<style>\n${safeCss}\n</style>`,
    'the stylesheet link for "style.css"'
  );
  standalone = replaceRequired(
    standalone,
    /<script\b(?=[^>]*\bsrc=["']data\.js["'])[^>]*>\s*<\/script>/i,
    `<script>\n${safeData}\n</script>`,
    'the script tag for "data.js"'
  );
  standalone = replaceRequired(
    standalone,
    /<script\b(?=[^>]*\bsrc=["']main\.js["'])[^>]*>\s*<\/script>/i,
    `<script>\n${safeMain}\n</script>`,
    'the script tag for "main.js"'
  );

  const images = await embedImages(standalone);
  standalone = images.html;

  const outputDir = join(root, "dist");
  const output = join(outputDir, "portfolio-standalone.html");
  await mkdir(outputDir, { recursive: true });
  await writeFile(output, standalone, "utf8");

  console.log(`Built successfully: ${output}`);
  if (images.found === 0) {
    console.warn("No images folder was found; the HTML was built without embedded images.");
  } else {
    console.log(`Embedded ${images.embedded} referenced image(s) from ${images.found} image file(s) found.`);
  }
} catch (error) {
  if (error?.code === "ENOENT") {
    const missing = error.path ? error.path.split("/").pop() : "an input file";
    console.error(`Build failed: ${missing} was not found.`);
    console.error("Keep build.mjs, index.html, style.css, data.js, and main.js in the same folder.");
  } else {
    console.error(`Build failed: ${error.message}`);
  }
  process.exitCode = 1;
}
