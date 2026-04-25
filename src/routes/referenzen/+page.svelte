<script>
  import SeoHead from '$lib/components/SeoHead.svelte';

  export let data;
  const projekte = data?.projekte || [];

  const kategorien = [
    { slug: 'möbel',            label: 'Möbel',               icon: 'chair' },
    { slug: 'küchen',           label: 'Küchen',               icon: 'kitchen' },
    { slug: 'türen-fenster',    label: 'Türen / Fenster',      icon: 'door_front' },
    { slug: 'holzbau',          label: 'Allgemeiner Holzbau',  icon: 'stairs' },
    { slug: 'gebäudehülle',     label: 'Gebäudehülle',         icon: 'home' },
    { slug: 'terrasse-carport', label: 'Terrasse / Carport',   icon: 'deck' },
  ];

  const beschreibungen = {
    'möbel':            'Massgeschneiderte Möbelstücke die perfekt zu Ihrem Zuhause passen – von der Planung bis zur Montage alles aus einer Hand.',
    'küchen':           'Funktionale und elegante Küchen, die das Herz Ihres Zuhauses werden. Jedes Detail wird nach Ihren Wünschen gefertigt.',
    'türen-fenster':    'Hochwertige Türen und Fenster nach Mass – mit traditionellen Techniken und modernen Dämmeigenschaften.',
    'holzbau':          'Von der Treppe bis zur Raumgestaltung – individuelle Holzlösungen für jeden Bedarf in Wohn- und Geschäftsräumen.',
    'gebäudehülle':     'Fassaden, Verkleidungen und Aussenarbeiten mit natürlichem Holz – langlebig, nachhaltig und ästhetisch ansprechend.',
    'terrasse-carport': 'Terrassen und Carports aus nachhaltigem Holz – massgeschneidert für Ihren Aussenbereich und das Schweizer Klima.',
  };

  function getProjekte(slug) {
    return projekte.filter(p => p.kategorie === slug);
  }

  // Slider state
  let currentIndex = {};
  kategorien.forEach(k => currentIndex[k.slug] = 0);

  function slide(slug, dir) {
    const max = getProjekte(slug).length - 1;
    currentIndex[slug] = Math.max(0, Math.min(max, currentIndex[slug] + dir));
    currentIndex = { ...currentIndex };
  }

  function goTo(slug, idx) {
    currentIndex[slug] = idx;
    currentIndex = { ...currentIndex };
  }

  // Lightbox
  let lightbox = null;
  let lbBildIndex = 0;

  function openLightbox(projekt, idx = 0) {
    lightbox = projekt;
    lbBildIndex = idx;
  }

  function closeLightbox() { lightbox = null; }

  function lbNav(dir) {
    if (!lightbox) return;
    lbBildIndex = Math.max(0, Math.min(lightbox.bilder.length - 1, lbBildIndex + dir));
  }

  function handleKey(e) {
    if (!lightbox) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') lbNav(1);
    if (e.key === 'ArrowLeft') lbNav(-1);
  }

  const CARD_W = 404; // 380px + 24px gap

  const seoSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Referenzen – Holzdesign Louis",
    "description": "Realisierte Projekte von Holzdesign Louis aus Thal SG.",
    "url": "https://www.holzdesign-louis.ch/referenzen"
  };
</script>

<svelte:window on:keydown={handleKey} />

<SeoHead
  title="Referenzen & Projekte – Holzdesign Louis Thal SG"
  description="Entdecken Sie realisierte Projekte von Holzdesign Louis: Massmöbel, Küchen, Türen, Holzbau, Gebäudehülle und Terrassen. Schreinerei aus Thal SG."
  canonical="/referenzen"
  schema={seoSchema}
/>

<!-- HERO -->
<section class="ref-hero">
  <div class="container">
    <span class="label-caps ref-badge">Unsere Arbeiten</span>
    <h1>Referenzen</h1>
    <p class="ref-lead">
      Jedes Projekt erzählt eine Geschichte – von der ersten Idee bis zum fertigen Stück.
      Entdecken Sie unsere realisierten Arbeiten aus der ganzen Schweiz.
    </p>
  </div>
  <div class="container"><div class="grain-divider" style="margin-top:3rem;"></div></div>
</section>

<!-- ANKER NAV -->
<nav class="anker-nav container" aria-label="Kategorien">
  <div class="anker-inner">
    {#each kategorien as kat}
      <a href="#{kat.slug}" class="anker-btn">
        <span class="material-symbols-outlined">{kat.icon}</span>
        {kat.label}
      </a>
    {/each}
  </div>
</nav>

<!-- KATEGORIEN -->
{#each kategorien as kat, i}
  {@const katProjekte = getProjekte(kat.slug)}
  {@const idx = currentIndex[kat.slug] ?? 0}
  <section
    id={kat.slug}
    class="kat-section"
    class:alt={i % 2 === 1}
  >
    <div class="container">
      <div class="kat-header">
        <div>
          <div class="kat-badge">
            <span class="material-symbols-outlined">{kat.icon}</span>
            <span class="label-caps">{kat.label}</span>
          </div>
          <h2 class="kat-h2">{kat.label}</h2>
          <p class="kat-beschreibung">{beschreibungen[kat.slug]}</p>
        </div>
        {#if katProjekte.length > 1}
          <div class="kat-controls">
            <button
              class="slider-btn"
              on:click={() => slide(kat.slug, -1)}
              disabled={idx === 0}
              aria-label="Vorheriges Projekt"
            >
              <span class="material-symbols-outlined">arrow_back</span>
            </button>
            <button
              class="slider-btn"
              on:click={() => slide(kat.slug, 1)}
              disabled={idx >= katProjekte.length - 1}
              aria-label="Nächstes Projekt"
            >
              <span class="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        {/if}
      </div>

      {#if katProjekte.length === 0}
        <div class="kat-leer">
          <span class="material-symbols-outlined">construction</span>
          <p>Projekte werden demnächst hinzugefügt.</p>
        </div>
      {:else}
        <div class="slider-wrap">
          <div
            class="slider-track"
            style="transform: translateX({-idx * CARD_W}px)"
          >
            {#each katProjekte as projekt}
              <article class="projekt-card" on:click={() => openLightbox(projekt, 0)}>
                <div class="projekt-img-wrap">
                  {#if projekt.bilder && projekt.bilder.length > 0}
                    <img
                      src={projekt.bilder[0].bild}
                      alt={projekt.bilder[0].alt}
                      class="projekt-img"
                      loading="lazy"
                    />
                    {#if projekt.bilder.length > 1}
                      <span class="bild-count">
                        <span class="material-symbols-outlined">photo_library</span>
                        {projekt.bilder.length}
                      </span>
                    {/if}
                  {/if}
                </div>
                <div class="projekt-meta">
                  <span class="label-caps projekt-kat">{kat.label}</span>
                  <span class="projekt-jahr">{projekt.jahr}</span>
                </div>
                <h3 class="projekt-titel">{projekt.title}</h3>
                <p class="projekt-text">{projekt.description}</p>
              </article>
            {/each}
          </div>
        </div>

        {#if katProjekte.length > 1}
          <div class="slider-dots">
            {#each katProjekte as _, di}
              <button
                class="dot"
                class:active={di === idx}
                on:click={() => goTo(kat.slug, di)}
                aria-label="Projekt {di + 1}"
              ></button>
            {/each}
          </div>
        {/if}
      {/if}
    </div>

    {#if i < kategorien.length - 1}
      <div class="container" style="margin-top:4rem;">
        <div class="grain-divider"></div>
      </div>
    {/if}
  </section>
{/each}

<!-- LIGHTBOX -->
{#if lightbox}
  <div
    class="lightbox"
    on:click={closeLightbox}
    role="dialog"
    aria-modal="true"
  >
    <button class="lb-close" on:click={closeLightbox}>
      <span class="material-symbols-outlined">close</span>
    </button>
    <div class="lb-inner" on:click|stopPropagation={() => {}}>
      <img
        src={lightbox.bilder[lbBildIndex].bild}
        alt={lightbox.bilder[lbBildIndex].alt}
        class="lb-img"
      />
      {#if lightbox.bilder.length > 1}
        <button class="lb-nav lb-prev" on:click={() => lbNav(-1)} disabled={lbBildIndex === 0}>
          <span class="material-symbols-outlined">arrow_back</span>
        </button>
        <button class="lb-nav lb-next" on:click={() => lbNav(1)} disabled={lbBildIndex >= lightbox.bilder.length - 1}>
          <span class="material-symbols-outlined">arrow_forward</span>
        </button>
        <p class="lb-counter">{lbBildIndex + 1} / {lightbox.bilder.length}</p>
      {/if}
      <div class="lb-caption">
        <p class="lb-titel">{lightbox.title}</p>
      </div>
    </div>
  </div>
{/if}

<!-- CTA -->
<section class="ref-cta">
  <div class="container">
    <div class="cta-box">
      <span class="material-symbols-outlined cta-icon">handshake</span>
      <h2>Ihr Projekt ist das nächste</h2>
      <p class="cta-text">
        Nehmen Sie Kontakt auf – wir besprechen Ihre Idee und erstellen Ihnen
        ein unverbindliches Angebot.
      </p>
      <a href="/kontakt" class="btn-primary">
        Kontakt aufnehmen
        <span class="material-symbols-outlined">arrow_forward</span>
      </a>
    </div>
  </div>
</section>

<style>
  /* HERO */
  .ref-hero { padding: 5rem 0 0; }
  .ref-badge { color: var(--color-primary-container); display: block; margin-bottom: 1rem; }
  .ref-hero h1 { margin-bottom: 1.5rem; }
  .ref-lead { font-size: var(--text-body-lg); color: var(--color-on-surface-variant); line-height: 1.7; max-width: 600px; }

  /* ANKER */
  .anker-nav { padding: 2.5rem 0; }
  .anker-inner { display: flex; flex-wrap: wrap; gap: .75rem; }
  .anker-btn {
    display: inline-flex; align-items: center; gap: .4rem;
    font-family: var(--font-sans); font-size: 12px; font-weight: 700;
    letter-spacing: .08em; text-transform: uppercase;
    padding: .6rem 1.25rem; border: 1.5px solid var(--color-outline-variant);
    background: transparent; color: var(--color-on-surface-variant);
    border-radius: var(--radius-full); text-decoration: none; transition: all .2s;
  }
  .anker-btn:hover { border-color: var(--color-primary-container); color: var(--color-primary-container); }
  .anker-btn .material-symbols-outlined { font-size: 16px !important; }

  /* SEKTION */
  .kat-section { padding: 5rem 0; }
  .kat-section.alt { background: var(--color-surface-container-low); }
  .kat-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 2rem; gap: 2rem; flex-wrap: wrap; }
  .kat-badge { display: inline-flex; align-items: center; gap: .4rem; color: var(--color-primary-container); margin-bottom: .5rem; }
  .kat-badge .material-symbols-outlined { font-size: 16px !important; }
  .kat-h2 { font-family: var(--font-serif); font-size: var(--text-h2); font-weight: 600; margin-bottom: .75rem; }
  .kat-beschreibung { color: var(--color-on-surface-variant); font-size: var(--text-body-md); line-height: 1.7; max-width: 500px; }
  .kat-leer { text-align: center; padding: 4rem 0; color: var(--color-outline); display: flex; flex-direction: column; align-items: center; gap: 1rem; }
  .kat-leer .material-symbols-outlined { font-size: 3rem !important; }

  /* CONTROLS */
  .kat-controls { display: flex; gap: .5rem; flex-shrink: 0; }
  .slider-btn {
    width: 44px; height: 44px; border-radius: 50%;
    border: 1.5px solid var(--color-outline-variant);
    background: transparent; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    color: var(--color-on-surface); transition: all .2s;
  }
  .slider-btn:hover:not(:disabled) { background: var(--color-primary-container); border-color: var(--color-primary-container); color: #fff; }
  .slider-btn:disabled { opacity: .3; cursor: not-allowed; }

  /* SLIDER */
  .slider-wrap { overflow: hidden; }
  .slider-track {
    display: flex; gap: 1.5rem;
    transition: transform .4s cubic-bezier(.4,0,.2,1);
    will-change: transform;
  }

  /* KARTE */
  .projekt-card {
    flex: 0 0 380px; display: flex; flex-direction: column; gap: 1rem;
    cursor: pointer;
  }
  .projekt-img-wrap { position: relative; overflow: hidden; aspect-ratio: 4/3; background: var(--color-surface-container); }
  .projekt-img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s; }
  .projekt-card:hover .projekt-img { transform: scale(1.04); }
  .bild-count {
    position: absolute; bottom: .75rem; right: .75rem;
    background: rgba(0,0,0,.6); color: #fff;
    padding: .3rem .75rem; border-radius: 2rem;
    font-size: 12px; font-weight: 600;
    display: flex; align-items: center; gap: .3rem;
  }
  .bild-count .material-symbols-outlined { font-size: 14px !important; }
  .projekt-meta { display: flex; justify-content: space-between; align-items: center; }
  .projekt-kat { color: var(--color-primary-container); font-size: 10px; }
  .projekt-jahr { font-size: 12px; color: var(--color-outline); font-family: var(--font-sans); }
  .projekt-titel { font-family: var(--font-serif); font-size: 20px; font-weight: 500; }
  .projekt-text { font-size: 14px; color: var(--color-on-surface-variant); line-height: 1.6; }

  /* DOTS */
  .slider-dots { display: flex; gap: .5rem; margin-top: 1.5rem; }
  .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--color-outline-variant); border: none; cursor: pointer; transition: all .2s; padding: 0; }
  .dot.active { background: var(--color-primary-container); width: 24px; border-radius: 4px; }

  /* LIGHTBOX */
  .lightbox {
    position: fixed; inset: 0; background: rgba(0,0,0,.93);
    z-index: 100; display: flex; align-items: center; justify-content: center; padding: 2rem;
  }
  .lb-close {
    position: absolute; top: 1.5rem; right: 1.5rem;
    background: rgba(255,255,255,.1); border: none; color: #fff;
    width: 48px; height: 48px; border-radius: 50%; cursor: pointer;
    display: flex; align-items: center; justify-content: center; transition: background .2s;
  }
  .lb-close:hover { background: rgba(255,255,255,.25); }
  .lb-inner { position: relative; max-width: 90vw; display: flex; flex-direction: column; align-items: center; gap: 1rem; }
  .lb-img { max-width: 100%; max-height: 80vh; object-fit: contain; }
  .lb-nav {
    position: absolute; top: 50%; transform: translateY(-50%);
    background: rgba(255,255,255,.15); border: none; color: #fff;
    width: 48px; height: 48px; border-radius: 50%; cursor: pointer;
    display: flex; align-items: center; justify-content: center; transition: background .2s;
  }
  .lb-nav:hover:not(:disabled) { background: rgba(255,255,255,.3); }
  .lb-nav:disabled { opacity: .25; cursor: not-allowed; }
  .lb-prev { left: -4rem; }
  .lb-next { right: -4rem; }
  .lb-counter { color: rgba(255,255,255,.5); font-size: 13px; font-family: var(--font-sans); }
  .lb-titel { color: #fff; font-family: var(--font-serif); font-size: 1.1rem; text-align: center; }

  /* CTA */
  .ref-cta { background: var(--color-surface-container); padding: var(--space-section) 0; }
  .cta-box { border: 1px solid var(--color-outline-variant); padding: 4rem; display: flex; flex-direction: column; align-items: center; text-align: center; }
  .cta-icon { color: var(--color-primary-container); font-size: 3rem !important; margin-bottom: 1.5rem; }
  .cta-text { font-size: var(--text-body-lg); color: var(--color-on-surface-variant); max-width: 36rem; margin-bottom: 2.5rem; line-height: 1.6; }
  .btn-primary {
    display: inline-flex; align-items: center; gap: .75rem;
    background: var(--color-on-surface); color: #fff;
    padding: 1.25rem 2.5rem; font-family: var(--font-sans);
    font-size: var(--text-label); font-weight: 700; letter-spacing: .1em;
    text-transform: uppercase; border-radius: var(--radius-sm); text-decoration: none; transition: background .2s;
  }
  .btn-primary:hover { background: #333; }

  /* RESPONSIVE */
  @media (max-width: 768px) {
    .projekt-card { flex: 0 0 85vw; }
    .lb-prev { left: -1rem; }
    .lb-next { right: -1rem; }
    .cta-box { padding: 2rem 1.25rem; }
  }
</style>
