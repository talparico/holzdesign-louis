<script>
  import { page } from '$app/stores';

  let mobileOpen = false;
  let leistungenOpen = false;

  const leistungen = [
    { href: '/referenzen#möbel', label: 'Möbel' },
    { href: '/referenzen#küchen', label: 'Küchen' },
    { href: '/referenzen#türen-fenster', label: 'Türen / Fenster' },
    { href: '/referenzen#holzbau', label: 'Allgemeiner Holzbau' },
    { href: '/referenzen#gebäudehülle', label: 'Gebäudehülle' },
    { href: '/referenzen#terrasse-carport', label: 'Terrasse / Carport' },
  ];

  function toggleReferenzen() {
    leistungenOpen = !leistungenOpen;
  }

  function closeAll() {
    leistungenOpen = false;
    mobileOpen = false;
  }

  function handleKeydown(e) {
    if (e.key === 'Escape') closeAll();
  }

  function isActive(href) {
    return $page.url.pathname === href || $page.url.pathname.startsWith(href + '/');
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<!-- Klick ausserhalb schliesst Dropdown -->
{#if leistungenOpen}
  <div
    class="overlay"
    on:click={() => leistungenOpen = false}
    on:keydown={() => {}}
    role="button"
    tabindex="-1"
    aria-label="Menü schliessen"
  ></div>
{/if}

<header class="nav-header">
  <div class="container nav-inner">
    <!-- Logo -->
    <a href="/" class="nav-logo" aria-label="Holzdesign Louis – Startseite">
      <img
        src="/images/logo.png"
        alt="Holzdesign Louis Logo"
        class="nav-logo-img"
        width="48"
        height="48"
      />
      <span class="nav-logo-text">Holzdesign Louis</span>
    </a>

    <!-- Desktop Navigation -->
    <nav class="nav-desktop" aria-label="Hauptnavigation">
      <a href="/" class="nav-link" class:nav-link--active={isActive('/')}>Home</a>

      <!-- Leistungen Dropdown -->
      <div class="nav-dropdown-wrap">
        <button
          class="nav-link nav-dropdown-trigger"
          class:nav-link--active={isActive('/referenzen')}
          on:click={toggleLeistungen}
          aria-expanded={leistungenOpen}
          aria-haspopup="true"
        >
          Referenzen
          <span class="material-symbols-outlined nav-chevron" class:rotated={leistungenOpen}>
            expand_more
          </span>
        </button>

        {#if leistungenOpen}
          <div class="nav-dropdown" role="menu">
            {#each leistungen as item}
              <a
                href={item.href}
                class="nav-dropdown-item"
                class:nav-dropdown-item--active={isActive(item.href)}
                role="menuitem"
                on:click={closeAll}
              >
                {item.label}
              </a>
            {/each}
          </div>
        {/if}
      </div>

      <a href="/referenzen" class="nav-link" class:nav-link--active={isActive('/referenzen')}>Referenzen</a>
      <a href="/kontakt" class="nav-link" class:nav-link--active={isActive('/kontakt')}>Kontakt</a>
    </nav>

    <!-- CTA + Hamburger -->
    <div class="nav-actions">
      <a href="/kontakt" class="btn-gold nav-cta">Kontakt aufnehmen</a>
      <button
        class="nav-hamburger"
        on:click={() => mobileOpen = !mobileOpen}
        aria-label={mobileOpen ? 'Menü schliessen' : 'Menü öffnen'}
        aria-expanded={mobileOpen}
      >
        <span class="material-symbols-outlined">{mobileOpen ? 'close' : 'menu'}</span>
      </button>
    </div>
  </div>

  <!-- Mobile Menu -->
  {#if mobileOpen}
    <nav class="nav-mobile" aria-label="Mobile Navigation">
      <a href="/" class="nav-mobile-link" on:click={closeAll}>Home</a>
      <div class="nav-mobile-group">
        <button
          class="nav-mobile-link nav-mobile-parent"
          on:click={toggleLeistungen}
          aria-expanded={leistungenOpen}
        >
          Referenzen
          <span class="material-symbols-outlined nav-chevron" class:rotated={leistungenOpen}>
            expand_more
          </span>
        </button>
        {#if leistungenOpen}
          {#each leistungen as item}
            <a href={item.href} class="nav-mobile-sub" on:click={closeAll}>{item.label}</a>
          {/each}
        {/if}
      </div>
      <a href="/referenzen" class="nav-mobile-link" on:click={closeAll}>Referenzen</a>
      <a href="/kontakt" class="nav-mobile-link" on:click={closeAll}>Kontakt</a>
      <a href="/kontakt" class="btn-gold nav-mobile-cta" on:click={closeAll}>Kontakt aufnehmen</a>
    </nav>
  {/if}
</header>

<style>
  .nav-header {
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 50;
    background: rgba(251, 249, 244, 0.92);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--color-outline-variant);
  }

  .nav-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
  }

  .nav-logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    text-decoration: none;
  }

  .nav-logo-img {
    height: 48px;
    width: auto;
    object-fit: contain;
    flex-shrink: 0;
  }

  .nav-logo-text {
    font-family: var(--font-serif);
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--color-on-surface);
    letter-spacing: -0.02em;
    white-space: nowrap;
  }

  @media (max-width: 480px) {
    .nav-logo-img { height: 30px; }
    .nav-logo-text { font-size: 0.9rem; }
    .nav-logo { gap: 0.4rem; }
  }

  .nav-desktop {
    display: none;
    align-items: center;
    gap: 2rem;
  }

  @media (min-width: 768px) {
    .nav-desktop { display: flex; }
  }

  .nav-link {
    font-family: var(--font-serif);
    font-size: 0.95rem;
    color: var(--color-on-surface-variant);
    text-decoration: none;
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    transition: color 0.2s ease;
    padding: 0;
  }

  .nav-link:hover,
  .nav-link--active {
    color: var(--color-primary-container);
  }

  .nav-link--active {
    border-bottom: 1px solid var(--color-primary-container);
    padding-bottom: 2px;
  }

  .nav-chevron {
    font-size: 18px !important;
    transition: transform 0.2s ease;
  }
  .nav-chevron.rotated { transform: rotate(180deg); }

  /* Dropdown */
  .nav-dropdown-wrap {
    position: relative;
  }

  .nav-dropdown-trigger { font-weight: 400; }

  .nav-dropdown {
    position: absolute;
    top: calc(100% + 0.75rem);
    left: 50%;
    transform: translateX(-50%);
    background: var(--color-surface-container-lowest);
    border: 1px solid var(--color-outline-variant);
    box-shadow: 0 8px 24px rgba(0,0,0,0.08);
    min-width: 200px;
    z-index: 100;
    border-radius: var(--radius-md);
    overflow: hidden;
  }

  .nav-dropdown-item {
    display: block;
    padding: 0.75rem 1.25rem;
    font-family: var(--font-serif);
    font-size: 0.9rem;
    color: var(--color-on-surface-variant);
    text-decoration: none;
    transition: background 0.15s ease, color 0.15s ease;
  }
  .nav-dropdown-item:hover,
  .nav-dropdown-item--active {
    background: var(--color-surface-container-low);
    color: var(--color-primary-container);
  }

  /* Overlay */
  .overlay {
    position: fixed;
    inset: 0;
    z-index: 40;
    background: transparent;
  }

  /* Actions */
  .nav-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .nav-cta {
    display: none;
    font-size: 11px;
    padding: 0.6rem 1.25rem;
    text-decoration: none;
  }

  @media (min-width: 1024px) {
    .nav-cta { display: inline-flex; }
  }

  .nav-hamburger {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--color-on-surface);
    transition: background 0.15s ease;
    border-radius: var(--radius-sm);
  }
  .nav-hamburger:hover { background: var(--color-surface-container); }

  @media (min-width: 768px) {
    .nav-hamburger { display: none; }
  }

  /* Mobile Menu */
  .nav-mobile {
    display: flex;
    flex-direction: column;
    background: var(--color-surface-container-lowest);
    border-top: 1px solid var(--color-outline-variant);
    padding: 1rem var(--space-edge);
    gap: 0.25rem;
  }

  .nav-mobile-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: var(--font-serif);
    font-size: 1rem;
    color: var(--color-on-surface-variant);
    padding: 0.75rem 0;
    border-bottom: 1px solid var(--color-outline-variant);
    text-decoration: none;
    background: none;
    border-left: none;
    border-right: none;
    border-top: none;
    cursor: pointer;
    width: 100%;
    text-align: left;
    transition: color 0.2s;
  }
  .nav-mobile-link:hover { color: var(--color-primary-container); }

  .nav-mobile-parent { font-weight: 500; }

  .nav-mobile-sub {
    display: block;
    font-family: var(--font-serif);
    font-size: 0.9rem;
    color: var(--color-on-surface-variant);
    padding: 0.6rem 0 0.6rem 1.5rem;
    border-bottom: 1px solid var(--color-outline-variant);
    text-decoration: none;
    transition: color 0.2s;
  }
  .nav-mobile-sub:hover { color: var(--color-primary-container); }

  .nav-mobile-group { display: flex; flex-direction: column; }

  .nav-mobile-cta {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    text-align: center;
    justify-content: center;
    text-decoration: none;
  }
</style>
<style>
  /* Zusätzliche Mobile-Fixes für Nav */
  @media (max-width: 400px) {
    .nav-logo-text {
      font-size: 1rem;
    }
  }
</style>
