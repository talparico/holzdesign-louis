<script>
  import SeoHead from '$lib/components/SeoHead.svelte';

  const seoSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Holzdesign Louis – Massgeschneiderte Schreinerei",
    "description": "Holzdesign Louis fertigt einzigartige Massmöbel, Küchen und Innenausbauten. Erleben Sie traditionelles Handwerk mit moderner Designästhetik.",
    "url": "https://www.holzdesign-louis.ch"
  };

  const kennzahlen = [
    { zahl: '15+', label: 'Jahre Meisterschaft' },
    { zahl: '200+', label: 'Realisierte Projekte' },
    { zahl: '100%', label: 'Schweizer Handwerk' },

  ];

  const leistungen = [
    {
      title: 'Möbel',
      text: 'Einzigartige Möbelstücke, massgeschneidert auf Ihren Wohnraum und persönlichen Stil.',
      href: '/portfolio/möbel',
      cta: 'Projekte ansehen',
      span: 2,
      imgAlt: 'Massgeschneidertes Möbelstück aus edlem Holz',
    },
    {
      title: 'Küchen',
      text: 'Funktionale Eleganz für das Herz Ihres Zuhauses.',
      href: '/portfolio/küchen',
      cta: 'Projekte ansehen',
      span: 1,
      imgAlt: 'Handgefertigte Holzküche mit modernem Design',
    },
    {
      title: 'Türen / Fenster',
      text: 'Hochwertige Türen und Fenster nach Mass – präzise gefertigt.',
      href: '/portfolio/türen-fenster',
      cta: 'Projekte ansehen',
      span: 1,
      imgAlt: 'Massgeschneiderte Holztür mit traditionellen Beschlägen',
    },
    {
      title: 'Allgemeiner Holzbau',
      text: 'Von der Treppe bis zur Raumgestaltung – Holzlösungen für jede Anforderung.',
      href: '/portfolio/holzbau',
      cta: 'Projekte ansehen',
      span: 1,
      imgAlt: 'Holztreppe und Innenausbau',
    },
    {
      title: 'Gebäudehülle',
      text: 'Fassaden, Verkleidungen und Aussenverputz mit natürlichem Holz.',
      href: '/portfolio/gebäudehülle',
      cta: 'Projekte ansehen',
      span: 1,
      imgAlt: 'Holzfassade und Gebäudeverkleidung',
    },
    {
      title: 'Terrasse / Carport',
      text: 'Terrassen und Carports aus nachhaltigem Holz – für draussen gemacht.',
      href: '/portfolio/terrasse-carport',
      cta: 'Projekte ansehen',
      span: 2,
      imgAlt: 'Holzterrasse mit Carport aus Naturholz',
    },
  ];
</script>

<SeoHead
  title="Holzdesign Louis – Handwerkliche Schreinerei St. Gallen"
  description="Holzdesign Louis fertigt massgeschneiderte Massmöbel, Küchen und Innenausbauten in St. Gallen. 15+ Jahre Meisterschaft. Jetzt unverbindlich Kontakt aufnehmen."
  canonical="/"
  schema={seoSchema}
/>

<!-- ═══════════════════════════════════════════
     HERO
═══════════════════════════════════════════ -->
<section class="hero" aria-label="Hero-Bereich">
  <div class="hero-bg">
    <!-- Platzhalter – ersetzen Sie src durch Ihr echtes Bild -->
    <img
      src="/images/hero-holzbearbeitung.jpg"
      alt="Meisterhände beim Hobeln einer Eichenplanke – Holzdesign Louis"
      class="hero-img"
      loading="eager"
      fetchpriority="high"
    />
    <div class="hero-overlay"></div>
  </div>

  <div class="container hero-content">
    <div class="hero-box">
      <span class="label-caps hero-badge">Traditionelles Handwerk</span>
      <h1 class="hero-h1">Wo Präzision auf<br />Natur trifft</h1>
      <p class="hero-lead">
        Massgeschneiderte Holzarbeiten für gehobene Wohnräume. Wir verwandeln edelstes Holz
        in zeitlose Möbel und Innenausbauten – mit Leidenschaft und Schweizer Präzision.
      </p>
      <div class="hero-ctas">
        <a href="/portfolio" class="btn-gold">Portfolio ansehen</a>
        <a href="/über-uns" class="btn-ghost-white">Unsere Geschichte</a>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════
     KENNZAHLEN
═══════════════════════════════════════════ -->
<section class="kpi-section container" aria-label="Kennzahlen">
  <div class="kpi-grid">
    {#each kennzahlen as k}
      <div class="kpi-tile">
        <span class="kpi-zahl">{k.zahl}</span>
        <span class="kpi-label label-caps">{k.label}</span>
      </div>
    {/each}
  </div>
</section>

<!-- Grain Divider -->
<div class="container"><div class="grain-divider"></div></div>

<!-- ═══════════════════════════════════════════
     PHILOSOPHIE
═══════════════════════════════════════════ -->
<section class="section-gap container philosophie" aria-label="Unsere Philosophie">
  <div class="philosophie-grid">
    <div class="philosophie-text">
      <span class="label-caps philosophie-badge">Unsere Philosophie</span>
      <h2>Handwerkliche Holzkunst als lebenslange Leidenschaft</h2>
      <div class="philosophie-body">
        <p>
          Holz hat eine Seele – und einen Herzschlag. Jede Maserung erzählt eine Geschichte
          von Widerstandskraft, Wärme und Schönheit. Bei Holzdesign Louis ist es unsere
          Leidenschaft, diese Geschichte durch sorgfältiges Handwerk und zeitgemässe
          Designästhetik zum Leben zu erwecken.
        </p>
        <p>
          Unsere Werkstatt verbindet jahrhundertealte Techniken mit modernster Präzision.
          Wir verarbeiten nur nachhaltige und hochwertige Hölzer – damit jedes Stück,
          das wir schaffen, nicht einfach ein Möbelstück ist, sondern ein Vermächtnis,
          das Generationen überdauert.
        </p>

      </div>
      <div class="philosophie-autor">
        <div class="autor-avatar">
          <img
            src="/images/louis-portrait.jpg"
            alt="Thomas Louis – Schreinermeister und Gründer"
            width="64"
            height="64"
            loading="lazy"
          />
        </div>
        <div>
          <p class="autor-name">Thomas Louis</p>
          <p class="label-caps autor-titel">Schreinermeister &amp; Gründer</p>
        </div>
      </div>
    </div>

    <div class="philosophie-bild-wrap">
      <div class="philosophie-bild">
        <img
          src="/images/werkstatt.jpg"
          alt="Helle Schreinerwerkstatt mit natürlichem Licht und hochwertigen Werkzeugen"
          class="philosophie-img"
          loading="lazy"
        />
        <div class="philosophie-badge-bild">
          <span class="philosophie-zahl">15+</span>
          <span class="label-caps philosophie-jahre">Jahre Meisterschaft</span>
        </div>
      </div>
      <div class="philosophie-deko" aria-hidden="true"></div>
    </div>
  </div>
</section>

<!-- Grain Divider -->
<div class="container"><div class="grain-divider"></div></div>

<!-- ═══════════════════════════════════════════
     LEISTUNGEN (Bento Grid)
═══════════════════════════════════════════ -->
<section class="section-gap container leistungen-section" aria-labelledby="leistungen-heading">
  <div class="leistungen-header">
    <span class="label-caps leistungen-badge">Was wir tun</span>
    <h2 id="leistungen-heading">Individuelle Schreinerei-Dienstleistungen</h2>
  </div>

  <div class="bento-grid">
    {#each leistungen as l, i}
      <a
        href={l.href}
        class="bento-card"
        class:bento-wide={l.span === 2}
        aria-label="{l.title} – mehr erfahren"
      >
        <!-- Platzhalterfläche (ersetzen durch echtes Bild) -->
        <div class="bento-img-wrap">
          <img
            src="/images/leistung-{i + 1}.jpg"
            alt={l.imgAlt}
            class="bento-img"
            loading="lazy"
          />
        </div>
        <div class="bento-overlay" aria-hidden="true"></div>
        <div class="bento-content">
          <h3 class="bento-title">{l.title}</h3>
          <p class="bento-text">{l.text}</p>
          <span class="bento-cta label-caps">
            {l.cta}
            <span class="material-symbols-outlined bento-arrow">arrow_forward</span>
          </span>
        </div>
      </a>
    {/each}
  </div>
</section>

<!-- ═══════════════════════════════════════════
     REGION
═══════════════════════════════════════════ -->
<section class="region-section" aria-label="Unser Standort">
  <div class="container region-inner">
    <div class="region-text-wrap">
      <span class="label-caps region-badge">Unser Standort</span>
      <h2 class="region-h2">Verwurzelt in Thal SG –<br>unterwegs in der ganzen Schweiz</h2>
      <p class="region-p">
        Unsere Werkstatt liegt in Thal im Kanton St. Gallen, mitten im Herzen der Ostschweiz.
        Von hier aus realisieren wir Projekte in der gesamten Schweiz – ob Zürich, Basel,
        Bern oder Graubünden. Kurze Wege, persönlicher Kontakt und Schweizer Qualität,
        die man anfassen kann.
      </p>
      <div class="region-pills">
        <span class="region-pill"><span class="material-symbols-outlined">location_on</span> Thal SG</span>
        <span class="region-pill"><span class="material-symbols-outlined">directions_car</span> Ganze Schweiz</span>
        <span class="region-pill"><span class="material-symbols-outlined">handshake</span> Persönlich vor Ort</span>
      </div>
    </div>
    <div class="region-map">
      <div class="region-map-inner">
        <span class="material-symbols-outlined region-map-icon">map</span>
        <p class="region-map-label">Thal, Kanton St. Gallen</p>
        <a
          href="https://maps.google.com/?q=Thal,+St.+Gallen,+Schweiz"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-gold region-map-btn"
        >
          Auf Google Maps öffnen
          <span class="material-symbols-outlined">open_in_new</span>
        </a>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════
     CTA BLOCK
═══════════════════════════════════════════ -->
<section class="cta-section" aria-label="Kontaktaufruf">
  <div class="container">
    <div class="cta-box">
      <span class="material-symbols-outlined cta-icon">architecture</span>
      <h2 class="cta-h2">Bereit, Ihre Vision zum Leben zu erwecken?</h2>
      <p class="cta-text">
        Wir arbeiten mit Hausbesitzern und Architekten zusammen, um Räume zu schaffen,
        die inspirieren. Entdecken Sie unsere Sammlung erfolgreicher Projekte und nehmen
        Sie Kontakt auf.
      </p>
      <div class="cta-buttons">
        <a href="/portfolio" class="btn-primary">
          Unsere Referenzen durchsuchen
          <span class="material-symbols-outlined">collections</span>
        </a>
        <a href="/kontakt" class="btn-secondary">Beratungstermin vereinbaren</a>
      </div>
    </div>
  </div>
</section>

<style>
  /* ── Hero ── */
  .hero {
    position: relative;
    height: 870px;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  .hero-bg {
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  .hero-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(20%) brightness(85%);
  }

  .hero-overlay {
    position: absolute;
    inset: 0;
    background: rgba(27, 28, 25, 0.1);
  }

  .hero-content {
    position: relative;
    z-index: 10;
    width: 100%;
  }

  .hero-box {
    max-width: 640px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    padding: 3rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .hero-badge {
    color: var(--color-primary-container);
    display: block;
    margin-bottom: 1rem;
  }

  .hero-h1 {
    color: #ffffff;
    margin-bottom: 1.5rem;
    line-height: 1.15;
  }

  .hero-lead {
    font-size: var(--text-body-lg);
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 2.5rem;
    line-height: 1.6;
  }

  .hero-ctas {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  /* ── KPI ── */
  .kpi-section {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .kpi-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (min-width: 768px) {
    .kpi-grid { grid-template-columns: repeat(3, 1fr); }
  }

  .kpi-tile {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 2rem 1rem;
    background: var(--color-surface-container-low);
    border: 1px solid var(--color-outline-variant);
    gap: 0.5rem;
    border-radius: var(--radius-sm);
  }

  .kpi-zahl {
    font-family: var(--font-serif);
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--color-primary-container);
    line-height: 1;
  }

  .kpi-label {
    color: var(--color-on-surface-variant);
    font-size: 10px;
  }

  /* ── Philosophie ── */
  .philosophie-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 5rem;
    align-items: center;
  }

  @media (min-width: 768px) {
    .philosophie-grid { grid-template-columns: 1fr 1fr; }
  }

  .philosophie-badge {
    color: var(--color-primary-container);
    display: block;
    margin-bottom: 1rem;
  }

  .philosophie-text h2 {
    margin-bottom: 2rem;
  }

  .philosophie-body {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    color: var(--color-on-surface-variant);
    font-size: var(--text-body-md);
    line-height: 1.6;
  }

  .philosophie-autor {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 3rem;
  }

  .autor-avatar {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    overflow: hidden;
    background: var(--color-surface-container);
    flex-shrink: 0;
  }

  .autor-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .autor-name {
    font-size: var(--text-body-lg);
    font-weight: 700;
    color: var(--color-on-surface);
  }

  .autor-titel {
    color: var(--color-secondary);
    font-size: 10px;
  }

  .philosophie-bild-wrap {
    position: relative;
  }

  .philosophie-bild {
    position: relative;
    aspect-ratio: 4/5;
    background: var(--color-surface-container-high);
    overflow: hidden;
  }

  .philosophie-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.7s ease;
  }

  .philosophie-bild:hover .philosophie-img {
    transform: scale(1.05);
  }

  .philosophie-badge-bild {
    position: absolute;
    bottom: 0;
    right: 0;
    background: var(--color-background);
    padding: 2rem;
    margin: 1.5rem;
    box-shadow: 0 2px 12px rgba(0,0,0,0.08);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .philosophie-zahl {
    font-family: var(--font-serif);
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--color-primary-container);
    line-height: 1;
    margin-bottom: 0.25rem;
  }

  .philosophie-jahre {
    color: var(--color-secondary);
    font-size: 10px;
    text-align: center;
  }

  .philosophie-deko {
    position: absolute;
    top: -2.5rem;
    left: -2.5rem;
    width: 10rem;
    height: 10rem;
    border: 1px solid rgba(197, 160, 89, 0.2);
    z-index: -1;
  }

  /* ── Leistungen Bento ── */
  .leistungen-header {
    text-align: center;
    margin-bottom: 4rem;
  }

  .leistungen-badge {
    color: var(--color-primary-container);
    display: block;
    margin-bottom: 1rem;
  }

  .bento-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  @media (min-width: 768px) {
    .bento-grid { grid-template-columns: repeat(3, 1fr); }
    .bento-wide { grid-column: span 2; }
  }

  .bento-card {
    position: relative;
    height: 400px;
    overflow: hidden;
    display: block;
    text-decoration: none;
    background: var(--color-surface-container);
    border-radius: var(--radius-sm);
  }

  .bento-img-wrap {
    position: absolute;
    inset: 0;
  }

  .bento-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
    transition: transform 0.7s ease, opacity 0.3s ease;
  }

  .bento-card:hover .bento-img {
    transform: scale(1.05);
    opacity: 0.9;
  }

  .bento-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 60%);
  }

  .bento-content {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 2.5rem;
    z-index: 2;
  }

  .bento-title {
    font-family: var(--font-serif);
    font-size: var(--text-h3);
    font-weight: 500;
    color: #ffffff;
    margin-bottom: 0.5rem;
  }

  .bento-text {
    color: rgba(255,255,255,0.8);
    font-size: 0.9rem;
    max-width: 28rem;
    margin-bottom: 1.5rem;
    line-height: 1.5;
  }

  .bento-cta {
    color: #ffffff;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 11px;
    transition: gap 0.2s ease;
  }

  .bento-card:hover .bento-cta { gap: 1rem; }

  .bento-arrow { font-size: 18px !important; }

  /* ── Region ── */
  .region-section {
    background: var(--color-surface-container-low);
    padding: var(--space-section) 0;
  }

  .region-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: center;
  }

  @media (max-width: 768px) {
    .region-inner { grid-template-columns: 1fr; gap: 3rem; }
  }

  .region-badge {
    color: var(--color-primary-container);
    display: block;
    margin-bottom: 1rem;
  }

  .region-h2 {
    font-family: var(--font-serif);
    font-size: var(--text-h2);
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 1.5rem;
  }

  .region-p {
    color: var(--color-on-surface-variant);
    font-size: var(--text-body-md);
    line-height: 1.7;
    margin-bottom: 2rem;
  }

  .region-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .region-pill {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    background: var(--color-surface-container-highest);
    border: 1px solid var(--color-outline-variant);
    color: var(--color-on-surface-variant);
    padding: 0.5rem 1rem;
    font-family: var(--font-sans);
    font-size: 13px;
    font-weight: 600;
    border-radius: var(--radius-full);
  }

  .region-pill .material-symbols-outlined {
    font-size: 16px !important;
    color: var(--color-primary-container);
  }

  .region-map {
    aspect-ratio: 4/3;
    background: var(--color-surface-container-high);
    border: 1px solid var(--color-outline-variant);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .region-map-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    text-align: center;
    padding: 2rem;
  }

  .region-map-icon {
    font-size: 3.5rem !important;
    color: var(--color-primary-container);
  }

  .region-map-label {
    font-family: var(--font-serif);
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--color-on-surface);
  }

  .region-map-btn {
    font-size: 11px;
    padding: 0.75rem 1.5rem;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
  }

  /* ── CTA ── */
  .cta-section {
    background: var(--color-surface-container);
    padding: var(--space-section) 0;
  }

  .cta-box {
    border: 1px solid var(--color-outline-variant);
    padding: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 768px) {
    .cta-box { padding: 2.5rem 1.5rem; }
  }

  .cta-icon {
    color: var(--color-primary-container);
    font-size: 3rem !important;
    margin-bottom: 2rem;
  }

  .cta-h2 {
    max-width: 40rem;
    margin-bottom: 1.5rem;
  }

  .cta-text {
    font-size: var(--text-body-lg);
    color: var(--color-on-surface-variant);
    max-width: 36rem;
    margin-bottom: 3rem;
    line-height: 1.6;
  }

  .cta-buttons {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }

  @media (min-width: 600px) {
    .cta-buttons { flex-direction: row; }
  }

  /* ── Hero responsive ── */
  @media (max-width: 768px) {
    .hero { height: auto; min-height: 600px; padding: 4rem 0; }
    .hero-box { padding: 2rem; }
  }
</style>
