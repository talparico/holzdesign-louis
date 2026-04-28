<script>
  import SeoHead from '$lib/components/SeoHead.svelte';
  import allgemein from '../../content/einstellungen/allgemein.json';

  const cms = {
    heroTitel: "Lassen Sie uns gemeinsam etwas Besonderes schaffen.",
    heroText: "Ob Massmöbel, Küche oder Innenausbau – wir freuen uns auf Ihre Ideen und beraten Sie gerne unverbindlich. Rufen Sie einfach an oder schreiben Sie uns eine E-Mail.",
    oeffnung1: "Montag – Freitag",
    oeffnung2: "07:30 – 17:30 Uhr",
    oeffnungZusatz: "Samstag nach Vereinbarung"
  };
  import seo from '../../content/einstellungen/seo.json';

  const seoSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Kontakt – Holzdesign Louis",
    "description": "Nehmen Sie Kontakt mit Holzdesign Louis auf.",
    "url": "https://www.holzdesign-louis.ch/kontakt"
  };
</script>

<SeoHead
  title={seo.kontaktTitel}
  description="Nehmen Sie Kontakt mit Holzdesign Louis auf. Rufen Sie an oder schreiben Sie eine E-Mail – wir freuen uns auf Ihre Anfrage."
  canonical="/kontakt"
  schema={seoSchema}
/>

<!-- HERO -->
<section class="kontakt-hero">
  <div class="container">
    <div class="hero-grid">
      <div class="hero-text">
        <span class="label-caps hero-badge">Kontakt aufnehmen</span>
        <h1>{cms.heroTitel}</h1>
        <p class="hero-lead">{cms.heroText}</p>
      </div>
      <div class="hero-bild">
        <img
          src="/images/thomas-portrait.jpg"
          alt="Thomas Louis – Schreinermeister in seiner Werkstatt"
          class="hero-img"
          loading="eager"
        />
      </div>
    </div>
  </div>
  <div class="container"><div class="grain-divider" style="margin-top:3rem;"></div></div>
</section>

<!-- KONTAKT CARDS -->
<section class="kontakt-section container">
  <div class="cards-grid">

    <!-- Telefon -->
    <a href="tel:+41795544030" class="kontakt-card">
      <div class="card-icon">
        <span class="material-symbols-outlined">call</span>
      </div>
      <div class="card-content">
        <span class="label-caps card-label">Anrufen</span>
        <p class="card-wert">+41 79 554 40 30</p>
        <p class="card-hinweis">Mo – Fr, 07:30 – 17:30 Uhr</p>
      </div>
      <span class="material-symbols-outlined card-arrow">arrow_forward</span>
    </a>

    <!-- E-Mail -->
    <a href="mailto:holzdesignlouis@gmail.com" class="kontakt-card">
      <div class="card-icon">
        <span class="material-symbols-outlined">mail</span>
      </div>
      <div class="card-content">
        <span class="label-caps card-label">E-Mail schreiben</span>
        <p class="card-wert">holzdesignlouis@gmail.com</p>
        <p class="card-hinweis">Wir antworten so schnell wie möglich</p>
      </div>
      <span class="material-symbols-outlined card-arrow">arrow_forward</span>
    </a>

    <!-- LinkedIn -->
    <a
      href="https://www.linkedin.com/company/holzdesign-louis"
      target="_blank"
      rel="noopener noreferrer"
      class="kontakt-card"
    >
      <div class="card-icon">
        <span class="material-symbols-outlined">work</span>
      </div>
      <div class="card-content">
        <span class="label-caps card-label">LinkedIn</span>
        <p class="card-wert">Holzdesign Louis</p>
        <p class="card-hinweis">Folgen Sie uns auf LinkedIn</p>
      </div>
      <span class="material-symbols-outlined card-arrow">open_in_new</span>
    </a>

    <!-- Facebook -->
    <a
      href="https://www.facebook.com/thomas.louis.106"
      target="_blank"
      rel="noopener noreferrer"
      class="kontakt-card"
    >
      <div class="card-icon">
        <span class="material-symbols-outlined">thumb_up</span>
      </div>
      <div class="card-content">
        <span class="label-caps card-label">Facebook</span>
        <p class="card-wert">Holzdesign Louis</p>
        <p class="card-hinweis">Folgen Sie uns auf Facebook</p>
      </div>
      <span class="material-symbols-outlined card-arrow">open_in_new</span>
    </a>

  </div>

  <!-- ADRESSE + MAP -->
  <div class="standort-grid">
    <div class="adresse-wrap">
      <h2 class="adresse-titel">Unsere Werkstatt</h2>
      <div class="adresse-detail">
        <span class="material-symbols-outlined adresse-icon">location_on</span>
        <div>
          <p class="adresse-text">{allgemein.adresse}</p>
        </div>
      </div>
      <div class="adresse-detail">
        <span class="material-symbols-outlined adresse-icon">schedule</span>
        <div>
          <p class="adresse-text">Montag – Freitag</p>
          <p class="adresse-text">07:30 – 17:30 Uhr</p>
          <p class="adresse-text" style="color:var(--color-outline)">Samstag nach Vereinbarung</p>
        </div>
      </div>
      <a
        href="https://maps.google.com/?q=Rheineckerstrasse+7,+9425+Thal,+Schweiz"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-directions"
      >
        <span class="material-symbols-outlined">directions</span>
        Route planen
      </a>
    </div>

    <div class="map-wrap">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2726.5!2d9.5583!3d47.4833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479b1d0000000001%3A0x0!2sRheineckerstrasse+7%2C+9425+Thal!5e0!3m2!1sde!2sch!4v1620000000000!5m2!1sde!2sch"
        width="100%"
        height="100%"
        style="border:0; display:block;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="Holzdesign Louis – Rheineckerstrasse 7, 9425 Thal SG"
      ></iframe>
    </div>
  </div>
</section>

<style>
  /* HERO */
  .kontakt-hero { padding: 5rem 0 0; }
  .hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: end; }
  .hero-badge { color: var(--color-primary-container); display: block; margin-bottom: 1rem; }
  .kontakt-hero h1 { margin-bottom: 1.5rem; }
  .hero-lead { font-size: var(--text-body-lg); color: var(--color-on-surface-variant); line-height: 1.7; }
  .hero-bild { aspect-ratio: 4/3; overflow: hidden; }
  .hero-img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(15%); }

  @media (max-width: 768px) {
    .hero-grid { grid-template-columns: 1fr; gap: 2rem; }
    .hero-bild { aspect-ratio: 16/9; }
    .hero-text { text-align: center; }
    .hero-badge { text-align: center; }
  }

  /* KONTAKT CARDS */
  .kontakt-section { padding: 5rem 0 var(--space-section); }
  .cards-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    margin-bottom: 5rem;
  }

  @media (max-width: 768px) {
    .cards-grid { grid-template-columns: 1fr; }
    .kontakt-card { justify-content: center; text-align: center; flex-direction: column; align-items: center; }
    .card-arrow { display: none; }
    .standort-grid { grid-template-columns: 1fr; gap: 3rem; }
    .adresse-wrap { text-align: center; }
    .adresse-detail { justify-content: center; }
    .btn-directions { margin: 1rem auto 0; display: flex; width: fit-content; }
  }

  .kontakt-card {
    display: flex; align-items: center; gap: 1.5rem;
    padding: 2rem;
    background: var(--color-surface-container-low);
    border: 1.5px solid var(--color-outline-variant);
    text-decoration: none;
    transition: border-color 0.2s, background 0.2s, transform 0.2s;
    border-radius: var(--radius-sm);
  }
  .kontakt-card:hover {
    border-color: var(--color-primary-container);
    background: var(--color-surface-container);
    transform: translateY(-2px);
  }

  .card-icon {
    background: var(--color-primary-container);
    color: #fff;
    width: 56px; height: 56px;
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }
  .card-icon .material-symbols-outlined { font-size: 24px !important; }

  .card-content { flex: 1; }
  .card-label { color: var(--color-primary-container); font-size: 10px; display: block; margin-bottom: 0.25rem; }
  .card-wert { font-family: var(--font-serif); font-size: 1.1rem; font-weight: 600; color: var(--color-on-surface); margin-bottom: 0.25rem; }
  .card-hinweis { font-size: 13px; color: var(--color-on-surface-variant); }

  .card-arrow { color: var(--color-primary-container); font-size: 22px !important; flex-shrink: 0; transition: transform 0.2s; }
  .kontakt-card:hover .card-arrow { transform: translateX(4px); }

  /* STANDORT */
  .standort-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start; }

  @media (max-width: 768px) {
    .standort-grid { grid-template-columns: 1fr; gap: 3rem; }
  }

  .adresse-titel { font-family: var(--font-serif); font-size: var(--text-h2); font-weight: 600; margin-bottom: 2rem; }
  .adresse-detail { display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1.75rem; }
  .adresse-icon { color: var(--color-primary-container); font-size: 22px !important; margin-top: 2px; flex-shrink: 0; }
  .adresse-text { font-size: var(--text-body-md); color: var(--color-on-surface); line-height: 1.7; }

  .btn-directions {
    display: inline-flex; align-items: center; gap: 0.75rem;
    background: var(--color-on-surface); color: #fff;
    padding: 1rem 2rem;
    font-family: var(--font-sans); font-size: var(--text-label); font-weight: 700;
    letter-spacing: 0.1em; text-transform: uppercase;
    border-radius: var(--radius-sm); text-decoration: none;
    transition: background 0.2s; margin-top: 1rem;
  }
  .btn-directions:hover { background: #333; }

  /* MAP */
  .map-wrap {
    position: relative; aspect-ratio: 4/3;
    border: 1px solid var(--color-outline-variant);
    overflow: hidden;
  }
  .map-wrap iframe { position: absolute; inset: 0; width: 100%; height: 100%; }
</style>
