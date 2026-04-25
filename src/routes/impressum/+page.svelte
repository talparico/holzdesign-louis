<script>
  import SeoHead from '$lib/components/SeoHead.svelte';
</script>

<SeoHead
  title="Impressum – Holzdesign Louis"
  description="Impressum von Holzdesign Louis, Thomas Louis, Rheineckerstrasse 7, 9425 Thal SG."
  canonical="/impressum"
/>

<section class="impressum-hero">
  <div class="container">
    <span class="label-caps hero-badge">Rechtliches</span>
    <h1>Impressum</h1>
  </div>
  <div class="container"><div class="grain-divider" style="margin-top:2rem;"></div></div>
</section>

<section class="impressum-content container">
  <div class="impressum-box">

    <div class="impressum-section">
      <h2>Angaben gemäss Art. 12 DSG</h2>
      <div class="impressum-detail">
        <p><strong>Firmenname</strong></p>
        <p>Holzdesign Louis</p>
      </div>
      <div class="impressum-detail">
        <p><strong>Inhaber</strong></p>
        <p>Thomas Louis</p>
      </div>
      <div class="impressum-detail">
        <p><strong>Adresse</strong></p>
        <p>Rheineckerstrasse 7<br/>9425 Thal SG<br/>Schweiz</p>
      </div>
    </div>

    <div class="impressum-section">
      <h2>Kontakt</h2>
      <div class="impressum-detail">
        <p><strong>Telefon</strong></p>
        <a href="tel:+41795544030" class="impressum-link">+41 79 554 40 30</a>
      </div>
      <div class="impressum-detail">
        <p><strong>E-Mail</strong></p>
        <a href="mailto:holzdesignlouis@gmail.com" class="impressum-link">holzdesignlouis@gmail.com</a>
      </div>
    </div>

    <div class="impressum-section">
      <h2>Haftungsausschluss</h2>
      <p>Der Autor übernimmt keine Gewähr für die Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen. Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, die aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen entstanden sind, werden ausgeschlossen.</p>
      <p>Alle Angebote sind freibleibend. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne besondere Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.</p>
    </div>

    <div class="impressum-section">
      <h2>Urheberrechte</h2>
      <p>Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf dieser Website, gehören ausschliesslich Thomas Louis oder den speziell genannten Rechteinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung des Urheberrechtsträgers im Voraus einzuholen.</p>
    </div>

  </div>
</section>

<style>
  .impressum-hero { padding: 5rem 0 0; }
  .hero-badge { color: var(--color-primary-container); display: block; margin-bottom: 1rem; }
  .impressum-hero h1 { margin-bottom: 0.5rem; }

  .impressum-content { padding: 4rem 0 var(--space-section); }

  .impressum-box {
    max-width: 700px;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .impressum-section h2 {
    font-family: var(--font-serif);
    font-size: var(--text-h3);
    font-weight: 600;
    margin-bottom: 1.5rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid var(--color-outline-variant);
  }

  .impressum-detail {
    display: grid;
    grid-template-columns: 160px 1fr;
    gap: 0.5rem;
    padding: 0.75rem 0;
    border-bottom: 1px solid var(--color-surface-container-high);
    font-size: var(--text-body-md);
  }

  .impressum-detail p { color: var(--color-on-surface); line-height: 1.6; }
  .impressum-detail p:first-child { color: var(--color-on-surface-variant); }

  .impressum-link {
    color: var(--color-primary-container);
    text-decoration: none;
    transition: opacity 0.2s;
  }
  .impressum-link:hover { opacity: 0.8; text-decoration: underline; }

  .impressum-section p {
    color: var(--color-on-surface-variant);
    font-size: var(--text-body-md);
    line-height: 1.7;
    margin-bottom: 1rem;
  }

  @media (max-width: 600px) {
    .impressum-detail { grid-template-columns: 1fr; gap: 0.25rem; }
  }
</style>
