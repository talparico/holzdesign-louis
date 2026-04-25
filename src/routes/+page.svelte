<script>
  import SeoHead from '$lib/components/SeoHead.svelte';
  import homepage from '../content/einstellungen/homepage.json';
  import seo from '../content/einstellungen/seo.json';

  const seoSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Holzdesign Louis – Massgeschneiderte Schreinerei",
    "description": seo.metaDescription,
    "url": "https://www.holzdesign-louis.ch"
  };

  const kennzahlen = homepage.kennzahlen;

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
      <span class="label-caps hero-badge">{homepage.heroBadge}</span>
      <h1 class="hero-h1">{@html homepage.heroTitel.replace(" auf", "<br />auf")}</h1>
      <p class="hero-lead">
        {homepage.heroText}
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
      <h2>{homepage.philosophieTitel}</h2>
      <div class="philosophie-body">
        <p>
          {homepage.philosophieText1}
        </p>
        <p>
          {homepage.philosophieText2}
        </p>

      </div>
      <div class="philosophie-autor">
        <div>
          <p class="autor-name">Thomas Louis</p>
          <p class="label-caps autor-titel">Schreinermeister &amp; Gründer</p>
        </div>
      </div>
    </div>

    <div class="philosophie-bild-wrap">
      <div class="philosophie-bild">
        <img
          src="/images/thomas-portrait.jpg"
          alt="Thomas Louis – Schreinermeister in seiner Werkstatt in Thal SG"
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
      <h2 class="region-h2">{homepage.regionTitel}</h2>
      <p class="region-p">
        {homepage.regionText}
      </p>
      <div class="region-pills">
        <span class="region-pill"><span class="material-symbols-outlined">location_on</span> Thal SG</span>
        <span class="region-pill"><span class="material-symbols-outlined">directions_car</span> Ganze Schweiz</span>
        <span class="region-pill"><span class="material-symbols-outlined">handshake</span> Persönlich vor Ort</span>
      </div>
    </div>
    <div class="region-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2726.5!2d9.5333!3d47.4833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479b1b1b1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sThal%2C%20St.%20Gallen!5e0!3m2!1sde!2sch!4v1620000000000!5m2!1sde!2sch&q=Thal+SG+Schweiz"
        width="100%"
        height="100%"
        style="border:0; display:block;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="Standort Holzdesign Louis, Thal SG"
      ></iframe>
      <a
        href="https://maps.google.com/?q=Thal,+St.+Gallen,+Schweiz"
        target="_blank"
        rel="noopener noreferrer"
        class="region-map-link"
      >
        <span class="material-symbols-outlined">open_in_new</span>
        Auf Google Maps öffnen
      </a>
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
    aspect-ratio: 3/4;
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
    position: relative;
    overflow: hidden;
  }

  .region-map iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
  }

  .region-map-link {
    position: absolute;
    bottom: 0.75rem;
    right: 0.75rem;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    background: var(--color-primary-container);
    color: #ffffff;
    padding: 0.5rem 1rem;
    font-family: var(--font-sans);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    text-decoration: none;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    z-index: 2;
    transition: background 0.2s;
  }

  .region-map-link:hover {
    background: #b08d4a;
  }

  .region-map-link .material-symbols-outlined {
    font-size: 14px !important;
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

  /* ═══════════════════════════════
     RESPONSIVE – MOBILE FIRST
  ═══════════════════════════════ */

  /* Tablet (max 1024px) */
  @media (max-width: 1024px) {
    .bento-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .bento-wide {
      grid-column: span 2;
    }
    .bento-card {
      height: 320px;
    }
    .region-inner {
      gap: 3rem;
    }
    .cta-box {
      padding: 3rem 2rem;
    }
  }

  /* Mobile (max 768px) */
  @media (max-width: 768px) {
    /* Hero */
    .hero {
      height: auto;
      min-height: 100svh;
      padding: 6rem 0 3rem;
    }
    .hero-box {
      padding: 1.75rem;
      margin: 0;
      max-width: 100%;
      background: rgba(0,0,0,0.35);
    }
    .hero-h1 {
      font-size: 2.25rem;
    }
    .hero-lead {
      font-size: 1rem;
    }
    .hero-ctas {
      flex-direction: column;
      gap: 1rem;
    }
    .hero-ctas a {
      width: 100%;
      justify-content: center;
    }

    /* KPI */
    .kpi-grid {
      grid-template-columns: repeat(3, 1fr);
      gap: 0.75rem;
    }
    .kpi-tile {
      padding: 1.25rem 0.75rem;
    }
    .kpi-zahl {
      font-size: 1.75rem;
    }

    /* Philosophie */
    .philosophie-grid {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }
    .philosophie-deko {
      display: none;
    }
    .philosophie-autor {
      margin-top: 2rem;
    }

    /* Leistungen */
    .bento-grid {
      grid-template-columns: 1fr;
    }
    .bento-wide {
      grid-column: span 1;
    }
    .bento-card {
      height: 280px;
    }
    .leistungen-header h2 {
      font-size: 1.75rem;
    }

    /* Region */
    .region-inner {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    .region-h2 {
      font-size: 1.75rem;
    }
    .region-map {
      aspect-ratio: 3/2;
    }

    /* CTA */
    .cta-box {
      padding: 2rem 1.25rem;
    }
    .cta-h2 {
      font-size: 1.75rem;
    }
    .cta-text {
      font-size: 1rem;
    }
    .cta-buttons {
      flex-direction: column;
      width: 100%;
    }
    .cta-buttons a {
      width: 100%;
      justify-content: center;
    }
  }

  /* Kleines Mobile (max 480px) */
  @media (max-width: 480px) {
    .kpi-grid {
      grid-template-columns: repeat(3, 1fr);
      gap: 0.5rem;
    }
    .kpi-zahl {
      font-size: 1.5rem;
    }
    .kpi-label {
      font-size: 9px;
    }
    .hero-h1 {
      font-size: 1.875rem;
    }
    .region-pills {
      flex-direction: column;
    }
  }

</style>
