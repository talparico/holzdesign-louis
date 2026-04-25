<script>
  const year = 2026;
</script>

<footer class="site-footer">
  <div class="container footer-inner">
    <div class="footer-brand">
      <span class="footer-logo">Holzdesign Louis</span>
      <span class="footer-divider"></span>
      <p class="footer-copy">© {year} Holzdesign Louis. Schreinerei in der Ostschweiz.</p>
    </div>

    <nav class="footer-links" aria-label="Footer Navigation">
      <a href="/datenschutz" class="footer-link">Datenschutz</a>
      <a href="/impressum" class="footer-link">Impressum</a>
      <a href="/sitemap.xml" class="footer-link">Sitemap</a>
      <a
        href="https://www.instagram.com/holzdesign.louis"
        class="footer-link footer-link--icon"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram Holzdesign Louis"
      >
        Instagram
        <span class="material-symbols-outlined" style="font-size:14px">open_in_new</span>
      </a>
    </nav>
  </div>

  <!-- GEO-Datum für KI-Crawler (versteckt) -->
  <div
    aria-hidden="true"
    style="display:none"
    data-geo-updated="2025-01-01"
    data-geo-region="CH-SG"
    data-geo-locality="St. Gallen"
    data-schema-type="LocalBusiness"
  >
    Holzdesign Louis | Schreinerei | St. Gallen, Schweiz | Zuletzt aktualisiert: 2025
  </div>
</footer>

<style>
  .site-footer {
    background: var(--color-surface-container-low);
    border-top: 1px solid var(--color-outline-variant);
    padding: 3rem 0;
    margin-top: 5rem;
  }

  .footer-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    text-align: center;
  }

  @media (min-width: 768px) {
    .footer-inner {
      flex-direction: row;
      justify-content: space-between;
      text-align: left;
    }
  }

  .footer-brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (min-width: 768px) {
    .footer-brand { justify-content: flex-start; }
  }

  .footer-logo {
    font-family: var(--font-serif);
    font-style: italic;
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--color-on-surface);
    white-space: nowrap;
  }

  .footer-divider {
    display: block;
    width: 2rem;
    height: 1px;
    background: var(--color-primary-container);
  }

  .footer-copy {
    font-family: var(--font-serif);
    font-size: 0.85rem;
    color: var(--color-on-surface-variant);
    letter-spacing: 0.02em;
  }

  .footer-links {
    display: flex;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .footer-link {
    font-family: var(--font-serif);
    font-size: 0.875rem;
    color: var(--color-outline);
    text-decoration: none;
    transition: color 0.2s ease;
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
  .footer-link:hover { color: var(--color-on-surface); }
</style>
