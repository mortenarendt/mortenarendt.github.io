/* ══════════════════════════════════════════════════════════════════════════
   RENDERING — reads SITE (data.js) and fills the page.
   You should rarely need to change this file. Each block below maps to one
   section of index.html; if you add a section, add a block here.
   ══════════════════════════════════════════════════════════════════════════ */

(function () {
  "use strict";

  /* ── helpers ─────────────────────────────────────────────────────────── */
  const $ = id => document.getElementById(id);
  const set = (id, html) => { const el = $(id); if (el) el.innerHTML = html; };
  const initials = name => name.trim().split(/\s+/).map(w => w[0]).slice(0, 2).join("").toUpperCase();
  const linked = (text, href) => href ? `<a href="${href}">${text}</a>` : text;
  const list = (arr, fn) => (arr || []).map(fn).join("");

  /* ── header ──────────────────────────────────────────────────────────── */
  const p = SITE.person;
  const photo = $("hero-photo");
  if (photo) {
    if (p.photo) {
      photo.src = p.photo;
      photo.alt = p.name;
      photo.addEventListener("error", () => photo.remove());
      if (photo.complete && photo.naturalWidth === 0) photo.remove();
    } else {
      photo.remove();
    }
  }
  set("hero-role", p.role);
  set("hero-name", p.name);
  set("hero-intro", p.intro);
  set("hero-caption", p.caption);
  set("hero-affil", list(p.affiliations, a => `<li>${a}</li>`));
  set("hero-links", list(p.links, l =>
    `<a class="btn ${l.solid ? "btn-solid" : ""}" href="${l.href}">${l.label}</a>`));
  set("hero-stats", list(SITE.stats, s =>
    `<div><dt>${s.value}</dt><dd>${s.label}</dd></div>`));

  /* ── research ────────────────────────────────────────────────────────── */
  set("research-title", SITE.researchTitle);
  set("research-lede", SITE.researchLede);
  set("research-questions", list(SITE.questions, q => `<li>${q}</li>`));
  set("research-grid", list(SITE.research, r => `
    <article class="card theme" style="--accent:var(${r.accent})">
      <span class="tag">${r.tag}</span>
      <h3>${r.title}</h3>
      <p>${r.body}</p>
      <ul class="keys">${list(r.keywords, k => `<li>${k}</li>`)}</ul>
    </article>`));

  /* ── methods ─────────────────────────────────────────────────────────── */
  set("methods-lede", SITE.methodsLede);
  set("methods-list", list(SITE.methods, m => `
    <li>
      <div class="head">
        <h3>${m.name}</h3>
        <span class="pill">${m.tag}</span>
        <span class="meta">${m.meta}</span>
      </div>
      <p>${m.body}</p>
    </li>`));

  /* ── publications, grouped by year ───────────────────────────────────── */
  const byYear = (SITE.publications || []).reduce((acc, pub) => {
    (acc[pub.year] = acc[pub.year] || []).push(pub);
    return acc;
  }, {});
  const years = Object.keys(byYear).sort((a, b) => b.localeCompare(a));
  set("pubs-lede", SITE.pubsLede);
  set("pubs-list", list(years, y => `
    <section class="pub-year">
      <h3>${y}</h3>
      <ol>
        ${list(byYear[y], pub => `
          <li>
            <h4>${linked(pub.title, pub.link)}</h4>
            <p class="pub-meta">${pub.authors} — <em>${pub.venue}</em></p>
            ${pub.note ? `<p class="pub-note">${pub.note}</p>` : ""}
          </li>`)}
      </ol>
    </section>`));
  set("pubs-more", SITE.pubsMore);

  /* ── projects ────────────────────────────────────────────────────────── */
  set("projects-grid", list(SITE.projects, pr => `
    <article class="card">
      <h3>${linked(pr.name, pr.link)}</h3>
      <p class="sub-meta">${pr.role} · ${pr.period}</p>
      <p>${pr.body}</p>
    </article>`));

  /* ── data & cohorts ──────────────────────────────────────────────────── */
  set("data-lede", SITE.dataLede);
  set("data-list", list(SITE.dataResources, d => `
    <li>
      <div class="head">
        <h3>${linked(d.name, d.link)}</h3>
        <span class="pill">${d.tag}</span>
        <span class="meta">${d.meta}</span>
      </div>
      <p>${d.body}</p>
    </li>`));

  /* ── code & datasets ─────────────────────────────────────────────────── */
  set("code-lede", SITE.codeLede);
  set("code-list", list(SITE.code, c => `
    <li>
      <div class="head">
        <h3>${linked(c.name, c.link)}</h3>
        <span class="pill">${c.type}</span>
        <span class="meta">${c.meta}</span>
      </div>
      <p>${c.body}</p>
    </li>`));

  /* ── talks, awards, news ─────────────────────────────────────────────── */
  set("news-list", list(SITE.news, n => `
    <li>
      <div class="when"><span class="kind">${n.kind}</span>${n.when}</div>
      <div>
        <h3>${linked(n.title, n.link)}</h3>
        <p>${n.body}</p>
      </div>
    </li>`));

  /* ── team ────────────────────────────────────────────────────────────── */
  set("team-lede", SITE.teamLede);
  set("team-current", list(SITE.team, m => `
    <article class="person">
      <img class="avatar" src="${m.photo}" alt="${m.name}" loading="lazy" data-initials="${initials(m.name)}">
      <h3>${m.name}</h3>
      <p class="who">${m.who}</p>
      <p>${m.body}</p>
      <div class="plinks">${list((m.links || []).filter(l => l.href), l =>
        `<a href="${l.href}">${l.label} &#8599;</a>`)}</div>
    </article>`));
  set("team-alumni", list(SITE.alumni, a =>
    `<li><strong>${a.name}</strong><span>${a.note}</span></li>`));
  set("visitors-lede", SITE.visitorsLede || "");
  set("team-visitors", list(SITE.visitors, v =>
    `<li><strong>${v.name}</strong><span>${linked(v.note, v.link)}</span></li>`));
  set("students-lede", SITE.studentsLede || "");
  set("team-students", list(SITE.students, n => `<li>${n}</li>`));

  /* missing photo → initials tile.
     Checked immediately as well as on the error event, because an image that
     already failed before this script ran never fires "error" again. */
  const toInitials = img => {
    if (!img.parentNode) return;
    const tile = document.createElement("div");
    tile.className = "avatar fallback";
    tile.textContent = img.dataset.initials || "";
    img.replaceWith(tile);
  };
  document.querySelectorAll("img.avatar").forEach(img => {
    img.loading = "eager";
    img.addEventListener("error", () => toInitials(img));
    if (img.complete && img.naturalWidth === 0) toInitials(img);
  });

  /* ── teaching ────────────────────────────────────────────────────────── */
  set("teaching-lede", SITE.teachingLede);
  set("teaching-list", list(SITE.teaching, t => `
    <li>
      <div class="head">
        <h3>${linked(t.title, t.link)}</h3>
        <span class="pill">${t.code}</span>
        <span class="meta">${t.meta}</span>
      </div>
      <p>${t.body}</p>
    </li>`));

  /* ── contact ─────────────────────────────────────────────────────────── */
  set("contact-note", SITE.contact.note);
  set("contact-dl", list(SITE.contact.fields, f => `<dt>${f.label}</dt><dd>${f.value}</dd>`));
  set("contact-links", list(SITE.contact.links.filter(l => l.href), l =>
    `<a href="${l.href}">${l.label} &#8599;</a>`));
  set("foot-updated", SITE.contact.updated);

  /* ── external links open in a new tab ────────────────────────────────────
     Applied here once rather than on every href in data.js, so anything you
     add later gets it for free. In-page anchors (#research) and mailto: links
     are left alone — those should stay in the current tab.
     rel="noopener noreferrer" is the security counterpart to target="_blank".
     ──────────────────────────────────────────────────────────────────────── */
  document.querySelectorAll("a[href]").forEach(a => {
    const href = a.getAttribute("href") || "";
    if (!/^(https?:)?\/\//i.test(href)) return;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
  });
})();
