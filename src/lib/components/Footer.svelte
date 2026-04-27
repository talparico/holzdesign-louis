<script>
  const year = 2026;
</script>

<footer class="site-footer">
  <div class="container footer-inner">

    <!-- BRAND + IMPRESSUM -->
    <div class="footer-brand">
      <span class="footer-logo">Holzdesign Louis</span>
      <div class="footer-impressum">
        <p>Thomas Louis</p>
        <p>Rheineckerstrasse 7, 9425 Thal SG</p>
        <p>
          <a href="tel:+41795544030">+41 79 554 40 30</a>
          &nbsp;·&nbsp;
          <a href="mailto:holzdesignlouis@gmail.com">holzdesignlouis@gmail.com</a>
        </p>
      </div>
    </div>

    <!-- LINKS -->
    <nav class="footer-links" aria-label="Footer Navigation">
      <a href="/impressum" class="footer-link">Impressum</a>
      <a href="/datenschutz" class="footer-link">Datenschutz</a>
      <a href="/kontakt" class="footer-link">Kontakt</a>
      <a
        href="https://www.linkedin.com"
        class="footer-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Holzdesign Louis"
      >
        LinkedIn ↗
      </a>
    </nav>

  </div>

  <!-- BOTTOM BAR -->
  <div class="footer-bottom container">
    <p class="footer-copy">© {year} Holzdesign Louis. Schreiner Ostschweiz.</p>
  </div>

  <!-- E-Commotion Credit -->
  <div class="footer-credit container">
    <p>Webseite erstellt von <a href="https://www.e-commotion.ch/" target="_blank" rel="noopener noreferrer" class="credit-link">E-Commotion</a></p>
  </div>

  <!-- GEO für KI-Crawler -->
  <div
    aria-hidden="true"
    style="display:none"
    data-geo-updated="2026-01-01"
    data-geo-region="CH-SG"
    data-geo-locality="Thal"
    data-schema-type="LocalBusiness"
  >
    Holzdesign Louis | Schreinerei | Rheineckerstrasse 7, 9425 Thal SG, Schweiz
  </div>
</footer>

<style>
  .site-footer {
    background: var(--color-surface-container-low);
    border-top: 1px solid var(--color-outline-variant);
    padding: 3rem 0 0;
    margin-top: 5rem;
  }

  .footer-inner {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 3rem;
    flex-wrap: wrap;
    padding-bottom: 2.5rem;
  }

  /* BRAND */
  .footer-brand {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .footer-logo {
    font-family: var(--font-serif);
    font-style: italic;
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--color-on-surface);
  }

  .footer-impressum {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .footer-impressum p {
    font-family: var(--font-serif);
    font-size: 0.85rem;
    color: var(--color-on-surface-variant);
    line-height: 1.5;
  }

  .footer-impressum a {
    color: var(--color-on-surface-variant);
    text-decoration: none;
    transition: color 0.2s;
  }
  .footer-impressum a:hover { color: var(--color-primary-container); }

  /* LINKS */
  .footer-links {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    align-items: flex-end;
  }

  @media (max-width: 600px) {
    .footer-links { align-items: flex-start; }
  }

  .footer-link {
    font-family: var(--font-serif);
    font-size: 0.875rem;
    color: var(--color-outline);
    text-decoration: none;
    transition: color 0.2s;
  }
  .footer-link:hover { color: var(--color-on-surface); }

  /* BOTTOM */
  .footer-bottom {
    border-top: 1px solid var(--color-outline-variant);
    padding: 1.25rem 0;
    margin-top: 0;
  }

  .footer-credit {
    border-top: 1px solid var(--color-outline-variant);
    padding: 0.75rem 0;
    text-align: center;
  }

  .footer-credit p {
    font-family: var(--font-sans);
    font-size: 10px;
    color: var(--color-outline-variant);
    letter-spacing: 0.03em;
  }

  .credit-link {
    color: var(--color-outline);
    text-decoration: none;
    transition: color 0.2s;
  }
  .credit-link:hover { color: var(--color-primary-container); }

  .footer-copy {
    font-family: var(--font-serif);
    font-size: 0.8rem;
    color: var(--color-outline);
    text-align: center;
  }
</style>
