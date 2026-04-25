<script>
  const telefon = '+41795544030';
  const telefonAnzeige = '+41 79 554 40 30';
  const email = 'holzdesignlouis@gmail.com';
</script>

<!-- Fixe Kontakt-Leiste rechts -->
<div class="kontakt-leiste" aria-label="Schnellkontakt">

  <a
    href="tel:{telefon}"
    class="kontakt-btn"
    aria-label="Jetzt anrufen: {telefonAnzeige}"
    title="Anrufen – {telefonAnzeige}"
  >
    <span class="material-symbols-outlined kontakt-icon">phone</span>
    <span class="kontakt-label">{telefonAnzeige}</span>
  </a>

  <a
    href="mailto:{email}"
    class="kontakt-btn"
    aria-label="E-Mail schreiben an {email}"
    title="E-Mail schreiben"
  >
    <span class="material-symbols-outlined kontakt-icon">mail</span>
    <span class="kontakt-label">{email}</span>
  </a>

</div>

<style>
  .kontakt-leiste {
    position: fixed;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: 40;
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .kontakt-btn {
    display: flex;
    align-items: center;
    gap: 0;
    background: var(--color-primary-container);
    color: #ffffff;
    text-decoration: none;
    padding: 0.875rem 0.75rem;
    overflow: hidden;
    max-width: 48px;
    transition: max-width 0.35s cubic-bezier(0.4, 0, 0.2, 1),
                background 0.2s ease,
                padding 0.35s ease;
    white-space: nowrap;
    border-left: 3px solid rgba(255,255,255,0.15);
  }

  .kontakt-btn:first-child {
    border-radius: 0.375rem 0 0 0;
    border-bottom: 1px solid rgba(255,255,255,0.2);
  }

  .kontakt-btn:last-child {
    border-radius: 0 0 0 0.375rem;
  }

  .kontakt-btn:hover {
    max-width: 280px;
    background: #b08d4a;
    padding: 0.875rem 1rem;
    gap: 0.75rem;
  }

  .kontakt-icon {
    font-size: 22px !important;
    flex-shrink: 0;
    line-height: 1;
  }

  .kontakt-label {
    font-family: var(--font-sans);
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.02em;
    opacity: 0;
    transition: opacity 0.2s ease 0.1s;
    overflow: hidden;
  }

  .kontakt-btn:hover .kontakt-label {
    opacity: 1;
  }

  /* Mobile – bleibt rechts fixiert */
  @media (max-width: 768px) {
    .kontakt-leiste {
      top: 50%;
      transform: translateY(-50%);
      right: 0;
      flex-direction: column;
      gap: 0;
    }

    .kontakt-btn {
      max-width: 44px !important;
      width: 44px;
      padding: 0.75rem 0.625rem !important;
      border-radius: 0 !important;
      gap: 0 !important;
    }

    .kontakt-btn:first-child {
      border-radius: 0.375rem 0 0 0 !important;
    }

    .kontakt-btn:last-child {
      border-radius: 0 0 0 0.375rem !important;
    }

    .kontakt-btn:hover {
      max-width: 44px !important;
      padding: 0.75rem 0.625rem !important;
      background: #b08d4a;
    }

    .kontakt-label {
      display: none;
    }

    .kontakt-icon {
      font-size: 20px !important;
    }
  }
</style>
