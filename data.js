const SITE = {

  /* ── HEADER ─────────────────────────────────────────────────────────────── */
  person: {
    name: "Morten Arendt Rasmussen",
    role: "Professor of Computational Food and Health Science",
    photo: "images/team/morten-arendt-rasmussen.jpg",
    intro: "I develop and apply data-driven mathematical and statistical methods for modelling complex biological systems such as chemometrics, metabolomics and the microbiome, and use them to tie food and nutrition to clinical health in early life, childhood and adolescence.",
    affiliations: [
      "Department of Food Science, University of Copenhagen",
      "Food Microbiology, Gut Health &amp; Fermentation",
      "COPSAC — Copenhagen Prospective Studies on Asthma in Childhood",
      "Danish Pediatric Asthma Center, Gentofte Hospital",
      "Simula, Oslo — Data Science &amp; Knowledge Discovery (E. Acar)"
    ],
    caption: "One cohort, three modes. Most of what we build is a way of writing a messy biological array as a few components someone can reason about.",
    links: [
      { label: "Email", href: "mailto:mortenr@food.ku.dk", solid: true },
      { label: "KU profile", href: "https://research.ku.dk/search/result/profile/?id=311655" },
      { label: "Google Scholar", href: "https://scholar.google.com/citations?hl=en&user=znmjM3UAAAAJ" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/mortenarendtrasmussen/" },
      { label: "ORCID", href: "https://orcid.org/0000-0001-7431-5206" },
      { label: "MICRO-FOOD", href: "https://food.ku.dk/english/research_at_food/microbiology/" },
      { label: "COPSAC", href: "https://copsac.com/home/about/staff/morten-rasmussen/" },
      { label: "Simula DataSci", href: "https://www.simulamet.no/research/research-departments/data-science-and-knowledge-discovery" },
      { label: "GitHub", href: "https://github.com/mortenarendt/" }
    ]
  },

  stats: [
    { value: "9,500+", label: "Citations" },
    { value: "53", label: "h-index" },
    { value: "2012", label: "PhD, Medicometrics" }
  ],

  /* ── RESEARCH PROGRAMME ─────────────────────────────────────────────────── */
  researchTitle: "Turning high-dimensional biology into decisions about food and health",
  researchLede: "Modern food and health studies produce measurements that are wide, correlated, longitudinal and noisy: spectra, untargeted metabolite profiles, microbial community counts, repeated clinical phenotyping. The programme develops the statistical machinery that makes such data interpretable, and applies it inside deeply phenotyped human cohorts so the conclusions reach the clinic and the plate.",

  /* Three driving questions — the spine of the programme. */
  questions: [
    "How do we model measurements that arrive as multi-way arrays rather than tidy tables, without discarding the structure that makes them informative?",
    "Which signals in the metabolome and microbiome genuinely carry information about diet, and which are artefacts of design or processing?",
    "How does early-life nutrition shape the trajectory towards asthma, allergy and other inflammatory disease — and can that trajectory be predicted?"
  ],

  /* accent: "--c1" (methods) | "--c2" (microbiome) | "--c3" (metabolomics) */
  research: [
    {
      accent: "--c1", tag: "Methods",
      title: "Chemometrics &amp; multivariate modelling",
      body: "Latent-variable and multi-way models for arrays that carry structure across samples, variables and time, together with the validation strategies needed to keep such models honest on small n and large p. Recent work extends this to time-aware coupled matrix and tensor factorisation for fusing several modalities at once.",
      keywords: ["PARAFAC", "PLS", "multi-way analysis", "data fusion", "cross-validation"]
    },
    {
      accent: "--c3", tag: "Metabolomics",
      title: "Metabolomics of diet and health",
      body: "Untargeted and targeted metabolite profiles as an objective readout of what people actually eat and how their metabolism responds — dietary biomarker discovery, meal challenge tests and continuous glucose monitoring, and the interpretation of randomised dietary intervention studies.",
      keywords: ["NMR", "LC-MS", "dietary biomarkers", "meal challenge", "CGM"]
    },
    {
      accent: "--c2", tag: "Microbiome",
      title: "Microbiome &amp; early-life health",
      body: "Development of gut and airway microbiota through childhood, and its relation to asthma, allergy and inflammatory disease, using compositional and longitudinal models on birth-cohort data — extending to the infant virome and to microbial therapeutics.",
      keywords: ["16S &amp; shotgun", "compositional data", "birth cohorts", "virome", "asthma"]
    }
  ],

  /* ── METHODS ────────────────────────────────────────────────────────────── */
  methodsLede: "A short account of the technical toolkit, for people deciding whether their problem fits.",
  methods: [
    {
      name: "Multi-way decomposition", tag: "Core", meta: "PARAFAC, Tucker, CP-based models",
      body: "Modelling three- and higher-way arrays — sample x variable x time or x condition — so that components stay interpretable rather than becoming an unlabelled projection."
    },
    {
      name: "Latent-variable regression", tag: "Core", meta: "PLS, PCR, sparse variants",
      body: "Prediction and interpretation when variables outnumber samples and are strongly collinear, as in spectroscopy and omics."
    },
    {
      name: "Multimodal data fusion", tag: "Core", meta: "coupled matrix-tensor factorisation",
      body: "Joint analysis of static and time-resolved data blocks — metabolomics, microbiome, clinical phenotype — under constraints that keep the shared and block-specific variation separable. The methodological core of the TrACEr collaboration."
    },
    {
      name: "Compositional data analysis", tag: "Applied", meta: "log-ratio methods",
      body: "Handling microbiome counts on their correct geometry rather than treating relative abundances as if they were independent measurements."
    },
    {
      name: "Longitudinal &amp; trajectory modelling", tag: "Applied", meta: "mixed models, dynamic phenotypes",
      body: "Describing how a phenotype develops across childhood, and testing what shifts that development."
    },
    {
      name: "Machine learning on clinical data", tag: "Applied", meta: "explainable models, mechanistic priors",
      body: "Supervised and representation-learning models for multi-modal clinical data, built so that the resulting signal can be attributed back to measurable biology rather than left as a black box."
    },
    {
      name: "Study design &amp; validation", tag: "Practice", meta: "power, confounding, reproducibility",
      body: "Bringing data science to the design stage of a study instead of the interpretation stage — the argument behind much of this work."
    }
  ],

  /* ── PUBLICATIONS ───────────────────────────────────────────────────────── */
  pubsLede: "A selection organised by year. The complete and current list is on Google Scholar and the KU research portal.",
  pubsMore: 'Full list: <a href="https://scholar.google.com/citations?hl=en&user=znmjM3UAAAAJ">Google Scholar</a> · <a href="https://researchprofiles.ku.dk/en/persons/morten-arendt-rasmussen/">KU research portal</a> · <a href="https://orcid.org/0000-0001-7431-5206">ORCID</a>',
  publications: [

    {
      year: "2026", authors: "Panah, F. M., Støving, R. K., Sjögren, M., Micali, N., … Rasmussen, M. A., Barfod, K. K.",
      title: "Impact of a single fecal microbiome transplantation in adult women with anorexia nervosa: an open-label feasibility pilot trial",
      venue: "Nature Communications", link: "https://doi.org/10.1038/s41467-026-68455-8",
      note: "Faecal microbiota transplantation by capsule was feasible and well tolerated, and shifted the gut microbiota towards the donor within a week — without a measurable change in eating-disorder symptoms at one-week follow-up."
    },

    {
      year: "2026", authors: "Wang, T., Jepsen, J. R. M., Vinding, R., Brustad, N., … Rasmussen, M. A., … Chawes, B.",
      title: "Longitudinal metabolome profiling from pregnancy through childhood and risk of neurodevelopmental disorders at age 10",
      venue: "Nature Communications", link: "https://doi.org/10.1038/s41467-025-68115-3"
    },

    {
      year: "2026", authors: "Chen, L., Brustad, N., Thorsen, J., Wang, T., … Rasmussen, M. A., … Chawes, B.",
      title: "Maternal 12-HETE is associated with childhood asthma and the responses to prenatal omega-3 supplementation",
      venue: "Cell Reports Medicine", link: "https://doi.org/10.1016/j.xcrm.2026.102689"
    },

    {
      year: "2026", authors: "Ali, M., Horner, D., Wang, T., Brustad, N., … Rasmussen, M. A., Chawes, B.",
      title: "Western dietary pattern during pregnancy and early childhood increases risk of childhood asthma dependent on socioeconomic status",
      venue: "Pediatric Allergy and Immunology", link: "https://doi.org/10.1111/pai.70351"
    },

    {
      year: "2025", authors: "Horner, D., Jepsen, J. R. M., Chawes, B., Aagaard, K., … Stokholm, J., Rasmussen, M. A.",
      title: "A western dietary pattern during pregnancy is associated with neurodevelopmental disorders in childhood and adolescence",
      venue: "Nature Metabolism", link: "https://doi.org/10.1038/s42255-025-01230-z",
      note: "Maternal diet in pregnancy scored as a single dietary pattern, replicated across cohorts, tracks ADHD and autism risk in the offspring — and points to specific metabolites as the mediating signal."
    },

    {
      year: "2025", authors: "Horner, D., Jepsen, J. R. M., Chawes, B., Vinding, R., … Stokholm, J., Rasmussen, M. A.",
      title: "Maternal dietary patterns, breastfeeding duration, and their association with child cognitive function and head circumference growth",
      venue: "PLOS Medicine", link: "https://doi.org/10.1371/journal.pmed.1004454"
    },

    {
      year: "2025", authors: "Boulund, U., Thorsen, J., Larsen, F., Poulsen, C. S., … Rasmussen, M. A., … Stokholm, J.",
      title: "Infant gut anellovirus composition associates with early life factors and childhood atopic disease",
      venue: "Nature Communications", link: "https://doi.org/10.1038/s41467-025-66732-6"
    },

    {
      year: "2025", authors: "Horner, D., Jahn, M., Bønnelykke, K., Chawes, B., … Stokholm, J., Rasmussen, M. A.",
      title: "Screen time is associated with cardiometabolic and cardiovascular disease risk in childhood and adolescence",
      venue: "Journal of the American Heart Association", link: "https://doi.org/10.1161/JAHA.125.041486"
    },

    {
      year: "2025", authors: "Horner, D., Vinding, R., Wang, T., Ali, M., … Chawes, B., Rasmussen, M. A.",
      title: "A metabolomic signature of maternal BMI is associated with pregnancy complications across two independent pregnancy cohorts",
      venue: "Communications Medicine", link: "https://doi.org/10.1038/s43856-025-01289-5"
    },

    {
      year: "2024", authors: "Li, L., Hoefsloot, H., Bakker, B. M., Horner, D., Rasmussen, M. A., Smilde, A. K., Acar, E.",
      title: "Longitudinal metabolomics data analysis informed by mechanistic models",
      venue: "Metabolites", link: "https://doi.org/10.3390/metabo15010002",
      note: "Methodological: what a mechanistic model of metabolism buys you when you decompose a longitudinal metabolomics array."
    },

    {
      year: "2024", authors: "Lovrić, M., Horner, D., Chen, L., Brustad, N., Schoos, A.-M., Lasky-Su, J., Chawes, B., Rasmussen, M. A.",
      title: "Vertical metabolome transfer from mother to child: an explainable machine learning method for detecting metabolomic heritability",
      venue: "Metabolites", link: "https://doi.org/10.3390/metabo14030136"
    },

    {
      year: "2024", authors: "Stokholm, J., Thorsen, J., Schoos, A.-M. M., Rasmussen, M. A., … Bønnelykke, K.",
      title: "Infantile colic is associated with development of later constipation and atopic disorders",
      venue: "Allergy", link: "https://doi.org/10.1111/all.16274"
    },

    {
      year: "2023", authors: "Shah, S. A., Deng, L., Thorsen, J., … Rasmussen, M. A., … Nielsen, D. S.",
      title: "Expanding known viral diversity in the healthy infant gut",
      venue: "Nature Microbiology", link: "https://doi.org/10.1038/s41564-023-01345-7"
    },

    {
      year: "2020", authors: "Stokholm, J., Thorsen, J., Blaser, M. J., Rasmussen, M. A., … Sørensen, S. J., Bisgaard, H.",
      title: "Delivery mode and gut microbial changes correlate with an increased risk of childhood asthma",
      venue: "Science Translational Medicine", link: "https://doi.org/10.1126/scitranslmed.aax9929"
    },

    {
      year: "2018", authors: "Stokholm, J., Blaser, M. J., Thorsen, J., Rasmussen, M. A., … Sørensen, S. J., Bisgaard, H.",
      title: "Maturation of the gut microbiome and risk of asthma in childhood",
      venue: "Nature Communications", link: "https://doi.org/10.1038/s41467-017-02573-2",
      note: "Most cited paper of the group — the maturation of the infant gut microbiome, not its composition at a single point, is what tracks asthma risk."
    },

    {
      year: "2016", authors: "Bisgaard, H., Stokholm, J., Chawes, B., … Rasmussen, M. A., … Bønnelykke, K.",
      title: "Fish oil–derived fatty acids in pregnancy and wheeze and asthma in offspring",
      venue: "New England Journal of Medicine", link: "https://doi.org/10.1056/NEJMoa1503734",
      note: "The COPSAC2010 n-3 LCPUFA randomised trial: supplementation in the third trimester reduced persistent wheeze and asthma in the offspring."
    },

    {
      year: "2016", authors: "Chawes, B., Bønnelykke, K., Stokholm, J., … Rasmussen, M. A., Bisgaard, H.",
      title: "Effect of vitamin D3 supplementation during pregnancy on risk of persistent wheeze in the offspring: a randomized clinical trial",
      venue: "JAMA", link: "https://doi.org/10.1001/jama.2015.18318"
    },

    {
      year: "2016", authors: "Thorsen, J., Brejnrod, A., Mortensen, M. S., Rasmussen, M. A., … Bisgaard, H., Waage, J.",
      title: "Large-scale benchmarking reveals false discoveries and count transformation sensitivity in 16S rRNA gene amplicon data analysis methods used in microbiome studies",
      venue: "Microbiome", link: "https://doi.org/10.1186/s40168-016-0208-8",
      note: "A methods paper that changed practice: which differential-abundance tools survive contact with real 16S data, and which do not."
    },

    {
      year: "2012", authors: "Rasmussen, M. A. &amp; Bro, R.",
      title: "A tutorial on the Lasso approach to sparse modeling",
      venue: "Chemometrics and Intelligent Laboratory Systems", link: "https://doi.org/10.1016/j.chemolab.2012.10.003"
    }
  ],

  /* ── PROJECTS ───────────────────────────────────────────────────────────── */
  projects: [
    {
      name: "Bugs4Urate", role: "Project lead &amp; coordinator", period: "2024–2027",
      body: "Precision-nutrition strategies for hyperuricemia and gout: how diet, dietary glycans and the gut microbiome interact to control urate metabolism, and whether a prebiotic and microbial therapeutic can lower serum urate. My part is the microbiome stratification and the algorithm that separates responders from non-responders. EIC Pathfinder Challenges (GA 101161281); six partners across DK, SE, NL, FR and PT.",
      link: "https://bugs4urate.ku.dk/"
    },

    {
      name: "FOODTOP", role: "Principal investigator", period: "From 2021",
      body: "First-principles models, neural networks and functional graphical models for defining metabolic capacity as a tool for personalised nutrition — in short, a data model for a personalised food pyramid for people living with inflammatory disease such as asthma. Built on continuous glucose monitoring, meal imagery, metabolomics and microbiome data from 300+ young adults in COPSAC2000. Novo Nordisk Foundation Data Science Investigator grant, DKK 9.3M.",
      link: "https://researchleaderprogramme.com/recipients/morten-arendt-rasmussen/"
    },

    {
      name: "TrACEr", role: "Co-PI, lead of the Danish side", period: "2020–2024",
      body: "Time-Aware ConstrainEd Multimodal Data Fusion: constrained coupled matrix and tensor factorisation for joint analysis of static and time-resolved data, tested on COPSAC metabolomics, microbiome and clinical phenotype. With Evrim Acar Ataman's Data Science and Knowledge Discovery department at Simula in Oslo, UCPH FOOD and the University of Amsterdam; I lead the five researchers on the Danish side. Research Council of Norway (IKTPLUSS) with Novo Nordisk Foundation support.",
      link: "https://www.simulamet.no/research/projects/tracer-time-aware-constrained-multimodal-data-fusion"
    },

    {
      name: "MICROORC", role: "UCPH partner", period: "Ongoing",
      body: "Orchestrating food system microbiomes to minimise food waste: microbiome monitoring for process control and shelf-life prediction, and shelf-life extension through bioprotective cultures and packaging, on raw chicken, salmon and plant-based meat alternatives. Horizon Europe Innovation Action (GA 101136248), coordinated by Nofima; 18 partners in 9 countries.",
      link: "https://www.microorc.eu/"
    },

    {
      name: "RECIPE", role: "Participant",
      period: "Ongoing",
      body: "A consortium developing a personalised food recommender system, integrating food composition, dietary and flavour databases with protein-quality and sustainability measures across Danish and Dutch partners.",
      link: "https://research.wur.nl/en/projects/recipe-recommender-engine-for-complete-individualised-plant-rich-/"
    },

    {
      name: "Microbiota transplantation in anorexia nervosa", role: "Collaborator", period: "2023–2026",
      body: "A Lundbeck Foundation Experiment trial led by Kenneth Klingenberg Barfod at UCPH FOOD, testing whether faecal microbiota transplantation delivered as oral capsules is feasible and safe in adults with anorexia nervosa — the premise being that disrupted gut–brain signalling physically hinders patients who are motivated to eat. Published in Nature Communications in 2026.",
      link: "https://food.ku.dk/english/news/2023/forsker-i-anoreksi-behandling-via-udskiftning-af-tarmbakterier/"
    }
  ],

  /* ── DATA &amp; COHORTS ─────────────────────────────────────────────────────── */
  dataLede: "The empirical base the methods are built on and tested against — deeply phenotyped birth cohorts in Denmark, the UK and the US, plus the measurement platforms that feed them.",
  dataResources: [
    {
      name: "COPSAC2010", tag: "Cohort", meta: "736 mothers · 700 children · from 2008",
      body: "Unselected Danish mother–child cohort followed from week 24 of pregnancy, with a factorial design of two randomised interventions — n-3 LCPUFA and high-dose vitamin D — plus deep clinical phenotyping, genetics, metabolomics, microbiome sampling and a biobank.",
      link: "https://copsac.com/home/copsac-cohorts/copsac2010-cohort/"
    },

    {
      name: "COPSAC2000", tag: "Cohort", meta: "411 children · 1998–2001 · 25+ years follow-up",
      body: "High-risk cohort of children of asthmatic mothers, enrolled at one month of age and followed into adulthood, with a nested randomised trial of inhaled budesonide. The cohort behind FOODTOP's metabolic-capacity work in young adults.",
      link: "https://copsac.com/home/copsac-cohorts/copsac2000cohort/"
    },

    {
      name: "Danish National Birth Cohort (DNBC)", tag: "Cohort", meta: "100,000 pregnancies · from 1996",
      body: "Statens Serum Institut's national cohort: interviews during and after pregnancy, a mid-pregnancy food frequency questionnaire, maternal and cord blood, and linkage of every participant to the Danish health registries. Used as an independent replication cohort for the maternal-diet work.",
      link: "https://en.ssi.dk/research/epidemiology/danish-national-birth-cohort"
    },

    {
      name: "VDAART", tag: "Trial", meta: "881 pregnancies · US · from 2009",
      body: "The Vitamin D Antenatal Asthma Reduction Trial, a randomised placebo-controlled trial across three US centres with the coordinating centre at Brigham and Women's Hospital / Harvard. A long-running collaboration giving an independent test bed for the prenatal-nutrition and metabolomics findings.",
      link: "https://clinicaltrials.gov/study/NCT00902621"
    },

    {
      name: "ALSPAC", tag: "Cohort", meta: "14,500+ pregnancies · UK · from 1991",
      body: "Children of the 90s: three generations of the Avon population with repeat questionnaires, clinic assessments, biosamples, genomics and record linkage. Collaboration on replication of dietary-pattern and growth findings.",
      link: "https://www.bristol.ac.uk/alspac/"
    },

    {
      name: "Measurement platforms", tag: "Platform", meta: "NMR · LC-MS · sequencing · CGM",
      body: "Untargeted and targeted NMR and LC-MS metabolomics, 16S amplicon and shotgun metagenomic sequencing, continuous glucose monitoring and standardised meal challenge tests — the four modalities most of the modelling work is built on.",
      link: ""
    }
  ],

  /* ── CODE &amp; DATASETS ────────────────────────────────────────────────────── */
  codeLede: "Software, teaching data and paper-reproduction repositories, all on GitHub. Cohort data are shared under the access rules of the study they come from.",
  code: [
    {
      name: "ASCA", type: "Code", meta: "MATLAB",
      body: "ANOVA Simultaneous Component Analysis for mixed models including continuous covariates: permutation testing, contrast estimation and design-matrix construction for designed omics experiments.",
      link: "https://github.com/mortenarendt/ASCA"
    },

    {
      name: "genL1", type: "Code", meta: "MATLAB · doi:10.1002/cem.2855",
      body: "Generalized L1-norm penalised matrix factorisation — a dual-optimisation solver with applications to PLS regression, MANOVA and CCA.",
      link: "https://github.com/mortenarendt/genL1"
    },

    {
      name: "KerGLASSO", type: "Code", meta: "MATLAB",
      body: "Kernelized graphical LASSO for network analysis of unstructured data types, with EBIC model selection and simulation-based evaluation.",
      link: "https://github.com/mortenarendt/KerGLASSO"
    },

    {
      name: "MBtransfeR", type: "Code", meta: "R · MIT",
      body: "Microbiome transfer analysis — the methodology behind the mother-to-infant vaginal transfer work, packaged for reuse.",
      link: "https://github.com/mortenarendt/MBtransfeR"
    },

    {
      name: "OneButtonChemometrics", type: "Code", meta: "MATLAB",
      body: "A fully automated calibration pipeline — outlier removal, preprocessing selection, variable selection and PLS component optimisation — built as a benchmark against manual modelling by chemometricians.",
      link: "https://github.com/mortenarendt/OneButtonChemometrics"
    },

    {
      name: "NIRchallenge", type: "Dataset", meta: "4 NIR datasets · open challenge",
      body: "Barley, feed, straw and tablet NIR datasets with calibration and test splits, released as a modelling competition across software platforms.",
      link: "https://github.com/mortenarendt/NIRchallenge"
    },

    {
      name: "multiomics_menstrual_effluent", type: "Code", meta: "R · Quarto · reproduction",
      body: "Full analysis behind the longitudinal multi-omics profiling of menstrual effluent, published as a browsable Quarto site.",
      link: "https://mortenarendt.github.io/multiomics_menstrual_effluent/"
    },

    {
      name: "VagTransfer", type: "Code", meta: "R · reproduction",
      body: "Data and code for the stability of the vaginal microbiota during pregnancy and its importance for early infant colonisation.",
      link: "https://github.com/mortenarendt/VagTransfer"
    },

    {
      name: "data4consumerscience &amp; DataAnalysisinFoodScience", type: "Dataset", meta: "R packages · MIT",
      body: "The datasets behind the course books — food, sensory and consumer science data, installable as R packages.",
      link: "https://github.com/mortenarendt/data4consumerscience"
    }
  ],

  /* ── TALKS, AWARDS, NEWS ────────────────────────────────────────────────── */
  news: [
    {
      when: "January 2026", kind: "Paper",
      title: "Faecal microbiota transplantation in anorexia nervosa published in Nature Communications",
      body: "The Lundbeck Foundation Experiment trial reports that FMT by oral capsule is feasible and well tolerated in adult women with anorexia nervosa, and shifts the gut microbiota towards the donor within a week.",
      link: "https://doi.org/10.1038/s41467-026-68455-8"
    },

    {
      when: "March 2025", kind: "Paper",
      title: "A western dietary pattern in pregnancy linked to neurodevelopmental disorders",
      body: "Nature Metabolism. Maternal diet scored as a single pattern, replicated across independent cohorts, tracks ADHD and autism risk in children and adolescents — with metabolites identified as the mediating signal.",
      link: "https://doi.org/10.1038/s42255-025-01230-z"
    },

    {
      when: "September 2024", kind: "Grant",
      title: "Bugs4Urate funded by the European Innovation Council",
      body: "An EIC Pathfinder Challenges grant for a six-partner consortium on precision nutrition against hyperuricemia and gout, coordinated from UCPH FOOD.",
      link: "https://science.ku.dk/english/press/news/2024/common-rheumatic-disease-can-be-prevented-through-the-gut/"
    },

    {
      when: "January 2023", kind: "Appointment",
      title: "Appointed Professor of Computational Food and Health Science",
      body: "A chair split between UCPH FOOD and the Danish Pediatric Asthma Center at Gentofte Hospital, arguing that data science belongs at the design stage of food research rather than after the lab work is finished.",
      link: "https://food.ku.dk/english/news/2022/newly-appointed-professor-data-science-can-save-food-research-decades/"
    },

    {
      when: "December 2021", kind: "Grant",
      title: "Novo Nordisk Foundation Data Science Investigator grant for FOODTOP",
      body: "DKK 9.3M to build a data model for a personalised food pyramid, using continuous glucose monitoring, metabolomics and microbiome data from young adults in COPSAC2000.",
      link: "https://science.ku.dk/english/press/news/2021/food-scientist-wants-to-create-data-model-for-personalised-dietary-recommendations/"
    },

    {
      when: "2021", kind: "Award",
      title: "Research Leader Programme",
      body: "Selected for the Danish programme for emerging research leaders.",
      link: "https://researchleaderprogramme.com/recipients/morten-arendt-rasmussen/"
    }
  ],

  /* ── TEAM ───────────────────────────────────────────────────────────────── */
  teamLede: "The Arendt Rasmussen group works across COPSAC and the Department of Food Science, combining methods for characterising metabolism at work with machine learning on multi-modal clinical data.",
  team: [
    {
      name: "David Horner", who: "Postdoc, MD, PhD", photo: "images/team/david-horner.jpg",
      body: "Maternal dietary patterns in pregnancy and their impact on child health, development and growth.",
      links: [{ label: "COPSAC", href: "https://copsac.com/home/about/staff/david-horner/" }]
    },

    {
      name: "Mansi Goel", who: "Postdoc, PhD", photo: "images/team/mansi-goel.jpg",
      body: "NLP and machine learning for food and flavour science — knowledge graphs, Bayesian predictive modelling and predictive microbiology.",
      links: [{ label: "Website", href: "https://mansigoel01.github.io" }]
    },

    {
      name: "Rasmus Riemer Jakobsen", who: "Postdoc, PhD", photo: "images/team/rasmus-riemer-jakobsen.jpg",
      body: "Early-life gut microbiome: the impact of preterm birth, breastfeeding and maternal factors on infant health and development.",
      links: [{ label: "KU profile", href: "https://researchprofiles.ku.dk/en/persons/rasmus-riemer-jakobsen/" }]
    },

    {
      name: "Zhi Ye", who: "Postdoc, PhD", photo: "images/team/zhi-ye.jpg",
      body: "Machine learning and statistical models for multi-modal clinical data — continuous glucose monitoring, metabolites, genetics and images.",
      links: [{ label: "COPSAC", href: "https://copsac.com/home/about/staff/zhi-ye/" }]
    },

    {
      name: "Zhuobing Peng", who: "Postdoc, PhD", photo: "images/team/zhuobing-peng.jpg",
      body: "Gut microbiome and health outcomes, specialising in virome genetics and novel virus discovery in the human gut.",
      links: [{ label: "COPSAC", href: "https://copsac.com/home/about/staff/zhuobing-peng/" }]
    },

    {
      name: "Michele Rossi", who: "PhD student, MSc", photo: "images/team/michele-rossi.jpg",
      body: "Multi-omics integration with representation-learning approaches, between UCPH and COPSAC.",
      links: [{ label: "COPSAC", href: "https://copsac.com/home/about/staff/michele-rossi/" }]
    },

    {
      name: "Michael Forsmann", who: "PhD student, MSc", photo: "images/team/michael-forsmann.jpg",
      body: "Statistical modelling of environmental exposure and microbiome measurements in the COPSAC cohorts.",
      links: [{ label: "COPSAC", href: "https://copsac.com/home/about/staff/michael-forsmann/" }]
    }
  ],

  alumni: [
    { name: "Parvaneh Ibrahimi", note: "Postdoc — now Assistant Professor, DTU Health Tech" },
    { name: "Sarah Nørgaard", note: "PhD — now Statens Serum Institut" },
    { name: "Emil Christensen", note: "PhD student" },
    { name: "Negar Chahibakhsh", note: "Research assistant" }
  ],

  /* Visiting researchers. "link" is the visitor's home institution — leave it
     as "" and the affiliation renders as plain text. */
  visitorsLede: "Researchers who have spent a period with the group.",
  visitors: [
    {
      name: "Mario Lovrić", note: "Centre for Applied Bioanthropology, Institute for Anthropological Research, Zagreb",
      link: "https://inantro.hr/"
    },
    {
      name: "Iva Šunić", note: "Centre for Applied Bioanthropology, Institute for Anthropological Research, Zagreb",
      link: "https://inantro.hr/"
    },
    {
      name: "Lana Žoldoš", note: "Institute for Anthropological Research, Zagreb",
      link: "https://inantro.hr/"
    },
    {
      name: "David Visentin", note: "Faculty of Biotechnology and Drug Development, University of Rijeka",
      link: "https://portal.uniri.hr/"
    },
    { name: "Antigoni Cheilari", note: "National and Kapodistrian University of Athens", link: "" },
    { name: "Pablo Reina Jiménez", note: "Universidad de Sevilla", link: "" },
    { name: "Manuel Jesús Jiménez Navarro", note: "Universidad de Sevilla", link: "" },
    {
      name: "Laura Garcia-Urtiaga", note: "AZTI, Food and Health Area",
      link: "https://www.azti.es/en/sectors/food-health/"
    },
    { name: "Ena Babac", note: "Visiting researcher", link: "" },
    { name: "Nika Svesko", note: "Visiting researcher", link: "" },
    { name: "Aikaterini Makri", note: "Visiting researcher", link: "" },
    { name: "Elisavet Dimoula", note: "Visiting researcher", link: "" },
    { name: "Sunniva Verhoeven", note: "Visiting researcher", link: "" }
  ],

  /* BSc and MSc students supervised — plain names, newest additions at the top. */
  studentsLede: "Bachelor and master students supervised at the Department of Food Science.",
  students: [
    "Simon Fynbo Stendal",
    "Martin Ingwersen Engberg",
    "Jiyun Long",
    "Ronja Beck Christensen",
    "Sille Dahl Jensen",
    "Katrine Melgaard",
    "Kristina Heilmann",
    "Jacqueline Nicole Dizon",
    "Sangita Sharma Poudel",
    "Weizhe Zhang",
    "Jakob Kim Bülow-Hansen",
    "Asger Flytkjær-Hansen",
    "Niklas Harder",
    "Aisha Alayna Brown",
    "Isabella France Jasmer",
    "Jakob Riber Rasmussen",
    "Daniel Høg",
    "Alessandra Olarini",
    "Despoina Stavrianou"
  ],

  /* ── TEACHING ───────────────────────────────────────────────────────────── */
  teachingLede: "Course material is written openly and published as browsable books, so it stays useful after the course ends. I supervise BSc, MSc and PhD projects across all three research themes.",
  teaching: [
    {
      code: "BSc", title: "Data Analysis for Food Science", meta: "R &amp; jamovi · 8 weeks",
      body: "Second-year bachelor course in Food Science and Technology: descriptive statistics, distributions and the central limit theorem, hypothesis testing, count data, power, ANOVA and regression — each built on real food-science problems rather than textbook data. Published as an open Quarto book.",
      link: "https://mortenarendt.github.io/fooddataanalysis/"
    },

    {
      code: "PhD", title: "Microbiome Data Analysis", meta: "2-week doctoral course",
      body: "Statistical analysis of amplicon-sequencing microbiome data: preprocessing, alpha and beta diversity, differential abundance including repeated measures, heatmaps, canonical correlation and mediation analysis via propensity scoring — extending to integration with other omics.",
      link: "https://mortenarendt.github.io/MicrobiomeDataAnalysis/"
    },

    {
      code: "MSc", title: "Data Analysis in R for Sensory and Consumer Science", meta: "Bookdown · with co-authors",
      body: "From R fundamentals through PCA, consumer segmentation, hedonic ratings, CATA, preference and projective mapping. Written for the UCPH courses in meal systems, consumer research and food innovation.",
      link: "https://mortenarendt.github.io/dataanalyssisconsumerscience/"
    },

    {
      code: "Intensive", title: "Basic R for Food Science", meta: "One-day course · Dept. of Food Science",
      body: "A compressed introduction to R for staff and students: import, data frames, aggregation, ggplot2, linear models and PCA, with datasets from sensory, aroma and intervention studies.",
      link: "https://github.com/mortenarendt/basicR4FOOD"
    },

    {
      code: "Short course", title: "Basic chemometrics for industrial researchers", meta: "Continuing education",
      body: "Two-day courses for researchers working in industry, on getting multivariate calibration and design right in practice.",
      link: ""
    }
  ],

  /* ── CONTACT ────────────────────────────────────────────────────────────── */
  contact: {
    note: "I am glad to hear from prospective PhD students and postdocs, and from groups sitting on multi-way or longitudinal data that resists standard analysis. A short description of the design and the measurements is the most useful first email.",
    fields: [
      { label: "Email", value: '<a href="mailto:mortenr@food.ku.dk">mortenr@food.ku.dk</a>' },
      { label: "COPSAC", value: '<a href="mailto:morten.arendt@dbac.dk">morten.arendt@dbac.dk</a>' },
      { label: "Phone", value: "+45 35 33 31 97" },
      { label: "Office", value: "Rolighedsvej 26, 1958 Frederiksberg C, Denmark" },
      { label: "Dept.", value: "Department of Food Science, University of Copenhagen" }
    ],
    links: [
      { label: "Google Scholar", href: "https://scholar.google.com/citations?hl=en&user=znmjM3UAAAAJ" },
      { label: "KU research portal", href: "https://researchprofiles.ku.dk/en/persons/morten-arendt-rasmussen/" },
      { label: "COPSAC", href: "https://copsac.com/home/about/staff/morten-rasmussen/" },
      { label: "GitHub", href: "https://github.com/mortenarendt/" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/mortenarendtrasmussen/" },
      { label: "ORCID", href: "https://orcid.org/0000-0001-7431-5206" }
    ],
    updated: "Last updated August 2026"
  }

};
