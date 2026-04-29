<script>
  import SeoHead from '$lib/components/SeoHead.svelte';

  import cmsData from '../../content/einstellungen/ueber-uns.json';
  const cms = cmsData;


  const meilensteine = cms.meilensteine || [];
  const werte = cms.werte || [
    { icon: 'favorite',                 titel: 'Leidenschaft',    text: 'Jedes Projekt ist Ausdruck unserer Begeisterung für den Werkstoff Holz.' },
    { icon: 'precision_manufacturing',  titel: 'Präzision',       text: 'Schweizer Qualität bedeutet für uns: kein Kompromiss. Jeder Millimeter zählt.' },
    { icon: 'nature',                   titel: 'Nachhaltigkeit',  text: 'Wir verarbeiten nur nachhaltig geerntetes Holz aus kontrollierten Quellen.' },
    { icon: 'handshake',                titel: 'Vertrauen',       text: 'Ehrliche Beratung, transparente Preise und zuverlässige Ausführung.' },
  ];
</script>

<SeoHead
  title="Über Holzdesign Louis – Schreiner aus Thal SG"
  description="Thomas Louis, Schreinermeister aus Thal SG. Erfahren Sie mehr über Holzdesign Louis – unsere Geschichte, Werte und Leidenschaft für Holz."
  canonical="/ueber-uns"
/>

<!-- HERO -->
<section class="ueber-hero">
  <div class="container">
    <div class="hero-grid">
      <div class="hero-text">
        <span class="label-caps hero-badge">Über Holzdesign Louis</span>
        <h1>{cms.heroTitel}</h1>
<p class="hero-lead">{cms.heroText}</p>
        <a href="/kontakt" class="btn-primary">
          Kontakt aufnehmen
          <span class="material-symbols-outlined">arrow_forward</span>
        </a>
      </div>
      <div class="hero-bild-wrap">
        <img
          src="/images/thomas-portrait.jpg"
          alt="Thomas Louis – Schreinermeister und Gründer von Holzdesign Louis"
          class="hero-img"
          loading="eager"
        />
        <div class="hero-stamp">
          <span class="stamp-zahl">15+</span>
          <span class="label-caps stamp-label">Jahre Erfahrung</span>
        </div>
      </div>
    </div>
  </div>
  <div class="container"><div class="grain-divider" style="margin-top:3rem;"></div></div>
</section>

<!-- THOMAS -->
<section class="thomas-section container">
  <div class="thomas-grid">
    <div class="thomas-text">
      <span class="label-caps section-badge">Der Mensch dahinter</span>
      <h2>{@html cms.thomasTitel.replace(" –", "<br/>–")}</h2>
      <p>{cms.thomasText1}</p>
      <p>{cms.thomasText2}</p>
      <p>{cms.thomasText3}</p>
    </div>
    <div class="kenn-grid">
      <div class="kenn-tile">
        <span class="kenn-zahl">200+</span>
        <span class="label-caps kenn-label">Realisierte Projekte</span>
      </div>
      <div class="kenn-tile">
        <span class="kenn-zahl">15+</span>
        <span class="label-caps kenn-label">Jahre Erfahrung</span>
      </div>
      <div class="kenn-tile">
        <span class="kenn-zahl">100%</span>
        <span class="label-caps kenn-label">Schweizer Qualität</span>
      </div>
      <div class="kenn-tile">
        <span class="kenn-zahl">1</span>
        <span class="label-caps kenn-label">Leidenschaft</span>
      </div>
    </div>
  </div>
</section>

<div class="container"><div class="grain-divider"></div></div>

<!-- WERTE -->
<section class="werte-section container">
  <div class="section-header">
    <span class="label-caps section-badge">Wofür wir stehen</span>
    <h2>Unsere Werte</h2>
  </div>
  <div class="werte-grid">
    {#each werte as w}
      <div class="wert-card">
        <span class="material-symbols-outlined wert-icon">{w.icon}</span>
        <h3 class="wert-titel">{w.titel}</h3>
        <p class="wert-text">{w.text}</p>
      </div>
    {/each}
  </div>
</section>

<div class="container"><div class="grain-divider"></div></div>

<!-- TIMELINE -->
<section class="timeline-section container">
  <div class="section-header">
    <span class="label-caps section-badge">Unsere Geschichte</span>
    <h2>Von der Leidenschaft zum Beruf</h2>
  </div>
  <div class="timeline">
    {#each meilensteine as m, i}
      <div class="tl-item">
        <div class="tl-linie">
          <div class="tl-punkt"></div>
        </div>
        <div class="tl-card">
          <span class="tl-jahr">{m.jahr}</span>
          <h3 class="tl-titel">{m.titel}</h3>
          <p class="tl-text">{m.text}</p>
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- CTA -->
<section class="ueber-cta">
  <div class="container">
    <div class="cta-box">
      <span class="material-symbols-outlined cta-icon">carpenter</span>
      <h2>Lassen Sie uns Ihr Projekt besprechen</h2>
      <p class="cta-text">Wir nehmen uns Zeit für Ihre Ideen. Kontaktieren Sie uns für ein unverbindliches Erstgespräch.</p>
      <div class="cta-btns">
        <a href="/kontakt" class="btn-primary">Kontakt aufnehmen <span class="material-symbols-outlined">arrow_forward</span></a>
        <a href="/referenzen" class="btn-secondary">Unsere Referenzen</a>
      </div>
    </div>
  </div>
</section>

<style>
  /* HERO */
  .ueber-hero { padding: 5rem 0 0; }
  .hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
  .hero-badge, .section-badge { color: var(--color-primary-container); display: block; margin-bottom: 1rem; }
  .ueber-hero h1 { margin-bottom: 1.5rem; }
  .hero-lead { font-size: var(--text-body-lg); color: var(--color-on-surface-variant); line-height: 1.7; margin-bottom: 2.5rem; }
  .hero-bild-wrap { position: relative; }
  .hero-img { width: 100%; aspect-ratio: 3/4; object-fit: cover; }
  .hero-stamp {
    position: absolute; bottom: 1.5rem; left: -2rem;
    background: var(--color-background); padding: 1.5rem 2rem;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    display: flex; flex-direction: column; align-items: center;
  }
  .stamp-zahl { font-family: var(--font-serif); font-size: 2.5rem; font-weight: 700; color: var(--color-primary-container); line-height: 1; }
  .stamp-label { color: var(--color-secondary); font-size: 10px; margin-top: 0.25rem; }

  /* THOMAS */
  .thomas-section { padding: var(--space-section) 0; }
  .thomas-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start; }
  .thomas-text h2 { font-family: var(--font-serif); font-size: var(--text-h2); font-weight: 600; margin-bottom: 1.5rem; }
  .thomas-text p { color: var(--color-on-surface-variant); font-size: var(--text-body-md); line-height: 1.7; margin-bottom: 1.25rem; }
  .kenn-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
  .kenn-tile {
    display: flex; flex-direction: column; align-items: center; text-align: center;
    padding: 2rem 1rem; background: var(--color-surface-container-low);
    border: 1px solid var(--color-outline-variant);
  }
  .kenn-zahl { font-family: var(--font-serif); font-size: 2.5rem; font-weight: 700; color: var(--color-primary-container); line-height: 1; margin-bottom: 0.5rem; }
  .kenn-label { color: var(--color-on-surface-variant); font-size: 10px; }

  /* WERTE */
  .werte-section { padding: var(--space-section) 0; }
  .section-header { text-align: center; margin-bottom: 4rem; }
  .section-header h2 { font-family: var(--font-serif); font-size: var(--text-h2); font-weight: 600; }
  .werte-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
  .wert-card {
    padding: 2rem; background: var(--color-surface-container-low);
    border: 1px solid var(--color-outline-variant); text-align: center;
  }
  .wert-icon { color: var(--color-primary-container); font-size: 2.5rem !important; display: block; margin-bottom: 1rem; }
  .wert-titel { font-family: var(--font-serif); font-size: var(--text-h3); font-weight: 500; margin-bottom: 0.75rem; }
  .wert-text { color: var(--color-on-surface-variant); font-size: 14px; line-height: 1.6; }

  /* TIMELINE */
  .timeline-section { padding: var(--space-section) 0; }
  .timeline { display: flex; flex-direction: column; gap: 0; max-width: 700px; margin: 0 auto; }
  .tl-item { display: flex; gap: 2rem; }
  .tl-linie {
    display: flex; flex-direction: column; align-items: center;
    flex-shrink: 0; width: 24px;
  }
  .tl-punkt {
    width: 16px; height: 16px; border-radius: 50%;
    background: var(--color-primary-container);
    border: 3px solid var(--color-background);
    box-shadow: 0 0 0 2px var(--color-primary-container);
    flex-shrink: 0; margin-top: 0.4rem;
    z-index: 1;
  }
  .tl-linie::after {
    content: ''; width: 2px; flex: 1; min-height: 2rem;
    background: var(--color-outline-variant);
    margin-top: 0.5rem;
  }
  .tl-item:last-child .tl-linie::after { display: none; }
  .tl-card { padding-bottom: 3rem; }
  .tl-jahr {
    font-family: var(--font-sans); font-size: 12px; font-weight: 700;
    letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--color-primary-container); display: block; margin-bottom: 0.5rem;
  }
  .tl-titel { font-family: var(--font-serif); font-size: var(--text-h3); font-weight: 500; margin-bottom: 0.75rem; }
  .tl-text { color: var(--color-on-surface-variant); font-size: var(--text-body-md); line-height: 1.7; }

  /* CTA */
  .ueber-cta { background: var(--color-surface-container); padding: var(--space-section) 0; }
  .cta-box { border: 1px solid var(--color-outline-variant); padding: 4rem; display: flex; flex-direction: column; align-items: center; text-align: center; }
  .cta-icon { color: var(--color-primary-container); font-size: 3rem !important; margin-bottom: 1.5rem; }
  .cta-box h2 { font-family: var(--font-serif); font-size: var(--text-h2); font-weight: 600; margin-bottom: 1rem; }
  .cta-text { font-size: var(--text-body-lg); color: var(--color-on-surface-variant); max-width: 36rem; margin-bottom: 2.5rem; line-height: 1.6; }
  .cta-btns { display: flex; gap: 1.5rem; align-items: center; flex-wrap: wrap; justify-content: center; }

  /* BUTTONS */
  .btn-primary {
    display: inline-flex; align-items: center; gap: .75rem;
    background: var(--color-on-surface); color: #fff;
    padding: 1.25rem 2.5rem; font-family: var(--font-sans);
    font-size: var(--text-label); font-weight: 700; letter-spacing: .1em;
    text-transform: uppercase; border-radius: var(--radius-sm);
    text-decoration: none; transition: background .2s;
  }
  .btn-primary:hover { background: #333; }
  .btn-secondary {
    display: inline-flex; align-items: center; gap: .75rem;
    background: transparent; color: var(--color-on-surface);
    padding: 1.25rem 2.5rem; font-family: var(--font-sans);
    font-size: var(--text-label); font-weight: 700; letter-spacing: .1em;
    text-transform: uppercase; border: 1.5px solid var(--color-on-surface);
    border-radius: var(--radius-sm); text-decoration: none; transition: all .2s;
  }
  .btn-secondary:hover { background: var(--color-on-surface); color: #fff; }

  /* RESPONSIVE */
  @media (max-width: 900px) {
    .werte-grid { grid-template-columns: repeat(2, 1fr); }
    .thomas-grid { grid-template-columns: 1fr; gap: 3rem; }
  }

  @media (max-width: 768px) {
    .hero-grid { grid-template-columns: 1fr; gap: 3rem; text-align: center; }
    .hero-stamp { left: 50%; transform: translateX(-50%); bottom: -2rem; }
    .hero-bild-wrap { padding-bottom: 3rem; }
    .hero-lead { text-align: center; }
    .hero-badge { text-align: center; }
    .kenn-grid { grid-template-columns: repeat(2, 1fr); }
    .werte-grid { grid-template-columns: 1fr; }
    .thomas-text { text-align: center; }
    .cta-box { padding: 2rem 1.25rem; }
    .cta-btns { flex-direction: column; width: 100%; }
    .cta-btns a { width: 100%; justify-content: center; }
    .timeline { max-width: 100%; }
    .section-header { text-align: center; }
  }
</style>
