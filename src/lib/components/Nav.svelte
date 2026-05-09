<script>
  let mobileOpen = false;
  let leistungenOpen = false;

  const leistungen = [
    { href: '/referenzen#möbel', label: 'Möbel' },
    { href: '/referenzen#küchen', label: 'Küchen' },
    { href: '/referenzen#türen-fenster', label: 'Türen / Fenster' },
    { href: '/referenzen#holzbau', label: 'Allgemeiner Holzbau' },
    { href: '/referenzen#gebäudehülle', label: 'Gebäudehülle' },
    { href: '/referenzen#terrasse', label: 'Terrasse' },
  ];

  function toggleReferenzen() { leistungenOpen = !leistungenOpen; }
  function closeAll() { leistungenOpen = false; mobileOpen = false; }
  function handleKeydown(e) { if (e.key === 'Escape') closeAll(); }
</script>

<svelte:window on:keydown={handleKeydown} />

{#if leistungenOpen}
  <div class="overlay" on:click={() => leistungenOpen = false} on:keydown={() => {}} role="button" tabindex="-1" aria-label="Menü schliessen"></div>
{/if}

<header class="nav-header">
  <div class="container nav-inner">
    <a href="/" class="nav-logo" aria-label="Holzdesign Louis – Startseite">
      <img src="/images/logo.png" alt="Holzdesign Louis Logo" class="nav-logo-img" width="48" height="48" />
      <span class="nav-logo-text">Holzdesign Louis</span>
    </a>

    <nav class="nav-desktop" aria-label="Hauptnavigation">
      <a href="/" class="nav-link" data-sveltekit-preload-data>Home</a>

      <div class="nav-dropdown-wrap">
        <a
          class="nav-link nav-dropdown-trigger"
          href="/referenzen"
          on:click|preventDefault={() => leistungenOpen = !leistungenOpen}
          aria-expanded={leistungenOpen}
          aria-haspopup="true"
          data-sveltekit-preload-data
        >
          Referenzen
          <span class="material-symbols-outlined nav-chevron" class:rotated={leistungenOpen}>expand_more</span>
        </a>

        {#if leistungenOpen}
          <div class="nav-dropdown" role="menu">
            <a href="/referenzen" class="nav-dropdown-item" on:click={closeAll}>Alle Referenzen</a>
            {#each leistungen as item}
              <a href={item.href} class="nav-dropdown-item" role="menuitem" on:click={closeAll}>{item.label}</a>
            {/each}
          </div>
        {/if}
      </div>

      <a href="/kontakt" class="nav-link" data-sveltekit-preload-data>Kontakt</a>
      <a href="/ueber-uns" class="nav-link" data-sveltekit-preload-data>Über uns</a>
    </nav>

    <div class="nav-actions">
      <a href="/kontakt" class="btn-gold nav-cta">Kontakt aufnehmen</a>
      <button class="nav-hamburger" on:click={() => mobileOpen = !mobileOpen} aria-label={mobileOpen ? 'Menü schliessen' : 'Menü öffnen'} aria-expanded={mobileOpen}>
        <span class="material-symbols-outlined">{mobileOpen ? 'close' : 'menu'}</span>
      </button>
    </div>
  </div>

  {#if mobileOpen}
    <nav class="nav-mobile" aria-label="Mobile Navigation">
      <a href="/" class="nav-mobile-link" on:click={closeAll}>Home</a>
      <div class="nav-mobile-group">
        <div class="nav-mobile-row">
          <a href="/referenzen" class="nav-mobile-link nav-mobile-parent" on:click={closeAll}>Referenzen</a>
          <button class="nav-mobile-chevron-btn" on:click={toggleReferenzen} aria-expanded={leistungenOpen}>
            <span class="material-symbols-outlined nav-chevron" class:rotated={leistungenOpen}>expand_more</span>
          </button>
        </div>
        {#if leistungenOpen}
          {#each leistungen as item}
            <a href={item.href} class="nav-mobile-sub" on:click={closeAll}>{item.label}</a>
          {/each}
        {/if}
      </div>
      <a href="/kontakt" class="nav-mobile-link" on:click={closeAll}>Kontakt</a>
      <a href="/ueber-uns" class="nav-mobile-link" on:click={closeAll}>Über uns</a>
      <a href="/kontakt" class="btn-gold nav-mobile-cta" on:click={closeAll}>Kontakt aufnehmen</a>
    </nav>
  {/if}
</header>

<style>
  .nav-header { position: sticky; top: 0; width: 100%; z-index: 50; background: rgba(251,249,244,0.92); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border-bottom: 1px solid var(--color-outline-variant); }
  .nav-inner { display: flex; justify-content: space-between; align-items: center; padding-top: 1.25rem; padding-bottom: 1.25rem; }
  .nav-logo { display: flex; align-items: center; gap: 0.75rem; text-decoration: none; }
  .nav-logo-img { height: 48px; width: auto; object-fit: contain; flex-shrink: 0; }
  .nav-logo-text { font-family: var(--font-serif); font-size: 1.25rem; font-weight: 700; color: var(--color-on-surface); letter-spacing: -0.02em; white-space: nowrap; }
  @media (max-width: 480px) { .nav-logo-img { height: 30px; } .nav-logo-text { font-size: 0.9rem; } .nav-logo { gap: 0.4rem; } }
  .nav-desktop { display: none; align-items: center; gap: 2rem; }
  @media (min-width: 768px) { .nav-desktop { display: flex; } }
  .nav-link { font-family: var(--font-serif); font-size: 0.95rem; color: var(--color-on-surface-variant); text-decoration: none; background: none; border: none; cursor: pointer; display: flex; align-items: center; gap: 0.25rem; padding: 0; }
  .nav-link:hover { color: var(--color-primary-container); }

  /* SvelteKit setzt aria-current="page" automatisch auf aktiven Links */
  .nav-link[aria-current="page"] {
    color: var(--color-primary-container) !important;
    font-weight: 700;
  }

  .nav-chevron { font-size: 18px !important; transition: transform 0.2s ease; }
  .nav-chevron.rotated { transform: rotate(180deg); }
  .nav-dropdown-wrap { position: relative; }
  .nav-dropdown-trigger { font-weight: 400; }
  .nav-dropdown { position: absolute; top: calc(100% + 0.75rem); left: 50%; transform: translateX(-50%); background: var(--color-surface-container-lowest); border: 1px solid var(--color-outline-variant); box-shadow: 0 8px 24px rgba(0,0,0,0.08); min-width: 200px; z-index: 100; border-radius: var(--radius-md); overflow: hidden; }
  .nav-dropdown-item { display: block; padding: 0.75rem 1.25rem; font-family: var(--font-serif); font-size: 0.9rem; color: var(--color-on-surface-variant); text-decoration: none; transition: background 0.15s ease, color 0.15s ease; }
  .nav-dropdown-item:hover { background: var(--color-surface-container-low); color: var(--color-primary-container); }
  .overlay { position: fixed; inset: 0; z-index: 40; background: transparent; }
  .nav-actions { display: flex; align-items: center; gap: 1rem; }
  .nav-cta { display: none; font-size: 11px; padding: 0.6rem 1.25rem; text-decoration: none; }
  @media (min-width: 1024px) { .nav-cta { display: inline-flex; } }
  .nav-hamburger { display: flex; align-items: center; justify-content: center; padding: 0.5rem; background: none; border: none; cursor: pointer; color: var(--color-on-surface); transition: background 0.15s ease; border-radius: var(--radius-sm); }
  .nav-hamburger:hover { background: var(--color-surface-container); }
  @media (min-width: 768px) { .nav-hamburger { display: none; } }
  .nav-mobile { display: flex; flex-direction: column; background: var(--color-surface-container-lowest); border-top: 1px solid var(--color-outline-variant); padding: 1rem var(--space-edge); gap: 0.25rem; }
  .nav-mobile-link { display: flex; align-items: center; font-family: var(--font-serif); font-size: 1rem; color: var(--color-on-surface-variant); padding: 0.75rem 0; border-bottom: 1px solid var(--color-outline-variant); text-decoration: none; background: none; border-left: none; border-right: none; border-top: none; cursor: pointer; width: 100%; text-align: left; transition: color 0.2s; }
  .nav-mobile-link:hover { color: var(--color-primary-container); }
  .nav-mobile-link[aria-current="page"] { color: var(--color-primary-container); font-weight: 700; }
  .nav-mobile-parent { font-weight: 500; flex: 1; }
  .nav-mobile-row { display: flex; align-items: center; }
  .nav-mobile-chevron-btn { background: none; border: none; cursor: pointer; padding: 0.5rem; color: var(--color-on-surface-variant); }
  .nav-mobile-sub { display: block; font-family: var(--font-serif); font-size: 0.9rem; color: var(--color-on-surface-variant); padding: 0.6rem 0 0.6rem 1.5rem; border-bottom: 1px solid var(--color-outline-variant); text-decoration: none; transition: color 0.2s; }
  .nav-mobile-sub:hover { color: var(--color-primary-container); }
  .nav-mobile-group { display: flex; flex-direction: column; }
  .nav-mobile-cta { margin-top: 1rem; margin-bottom: 0.5rem; text-align: center; justify-content: center; text-decoration: none; }
</style>
