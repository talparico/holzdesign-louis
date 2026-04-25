<script>
  import SeoHead from '$lib/components/SeoHead.svelte';

  let name = '';
  let email = '';
  let telefon = '';
  let nachricht = '';
  let status = ''; // 'sending' | 'success' | 'error'

  async function handleSubmit(e) {
    e.preventDefault();
    status = 'sending';

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'kontakt',
          name, email, telefon, nachricht
        }).toString()
      });

      if (res.ok) {
        status = 'success';
        name = ''; email = ''; telefon = ''; nachricht = '';
      } else {
        status = 'error';
      }
    } catch {
      status = 'error';
    }
  }

  const seoSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Kontakt – Holzdesign Louis",
    "description": "Nehmen Sie Kontakt mit Holzdesign Louis auf. Wir freuen uns auf Ihre Anfrage.",
    "url": "https://www.holzdesign-louis.ch/kontakt"
  };
</script>

<SeoHead
  title="Kontakt – Holzdesign Louis Thal SG"
  description="Nehmen Sie Kontakt mit Holzdesign Louis auf. Wir freuen uns auf Ihre Anfrage für Massmöbel, Küchen und Innenausbauten aus Thal SG."
  canonical="/kontakt"
  schema={seoSchema}
/>

<!-- HERO -->
<section class="kontakt-hero">
  <div class="container">
    <div class="hero-grid">
      <div class="hero-text">
        <span class="label-caps hero-badge">Kontakt aufnehmen</span>
        <h1>Lassen Sie uns gemeinsam etwas Besonderes schaffen.</h1>
        <p class="hero-lead">
          Ob Massmöbel, Küche oder Innenausbau – wir freuen uns auf Ihre Ideen
          und beraten Sie gerne unverbindlich. Nehmen Sie Kontakt auf und wir
          melden uns schnellstmöglich bei Ihnen.
        </p>
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

<!-- HAUPT-CONTENT -->
<section class="kontakt-section container">
  <div class="kontakt-grid">

    <!-- FORMULAR -->
    <div class="form-wrap">
      <h2 class="form-title">Nachricht senden</h2>

      {#if status === 'success'}
        <div class="form-success">
          <span class="material-symbols-outlined">check_circle</span>
          <div>
            <p class="success-title">Nachricht erhalten!</p>
            <p class="success-text">Wir melden uns so schnell wie möglich bei Ihnen. Vielen Dank für Ihre Anfrage.</p>
          </div>
        </div>
      {:else}
        <form
          name="kontakt"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          on:submit={handleSubmit}
          class="kontakt-form"
        >
          <input type="hidden" name="form-name" value="kontakt" />
          <p class="hidden"><label>Nicht ausfüllen: <input name="bot-field" /></label></p>

          <div class="form-row">
            <div class="form-group">
              <label for="name" class="form-label">Name *</label>
              <input
                id="name" name="name" type="text"
                bind:value={name}
                required
                placeholder="Ihr vollständiger Name"
                class="form-input"
              />
            </div>
            <div class="form-group">
              <label for="email" class="form-label">E-Mail *</label>
              <input
                id="email" name="email" type="email"
                bind:value={email}
                required
                placeholder="ihre@email.ch"
                class="form-input"
              />
            </div>
          </div>

          <div class="form-group">
            <label for="telefon" class="form-label">Telefon (optional)</label>
            <input
              id="telefon" name="telefon" type="tel"
              bind:value={telefon}
              placeholder="+41 79 000 00 00"
              class="form-input"
            />
          </div>

          <div class="form-group">
            <label for="nachricht" class="form-label">Ihre Nachricht *</label>
            <textarea
              id="nachricht" name="nachricht"
              bind:value={nachricht}
              required
              rows="6"
              placeholder="Beschreiben Sie Ihr Projekt oder Ihre Idee..."
              class="form-input form-textarea"
            ></textarea>
          </div>

          {#if status === 'error'}
            <div class="form-error">
              <span class="material-symbols-outlined">error</span>
              Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt eine E-Mail.
            </div>
          {/if}

          <button type="submit" class="btn-submit" disabled={status === 'sending'}>
            {#if status === 'sending'}
              <span class="material-symbols-outlined spin">autorenew</span>
              Wird gesendet...
            {:else}
              Nachricht senden
              <span class="material-symbols-outlined">send</span>
            {/if}
          </button>

          <p class="form-hinweis">* Pflichtfelder. Ihre Daten werden vertraulich behandelt.</p>
        </form>
      {/if}
    </div>

    <!-- KONTAKTDETAILS -->
    <div class="details-wrap">
      <h2 class="details-title">So erreichen Sie uns</h2>

      <div class="detail-items">
        <div class="detail-item">
          <div class="detail-icon">
            <span class="material-symbols-outlined">location_on</span>
          </div>
          <div>
            <p class="label-caps detail-label">Werkstatt</p>
            <p class="detail-text">Rheineckerstrasse 7<br/>9425 Thal SG<br/>Schweiz</p>
          </div>
        </div>

        <div class="detail-item">
          <div class="detail-icon">
            <span class="material-symbols-outlined">call</span>
          </div>
          <div>
            <p class="label-caps detail-label">Telefon</p>
            <a href="tel:+41795544030" class="detail-text detail-link">+41 79 554 40 30</a>
          </div>
        </div>

        <div class="detail-item">
          <div class="detail-icon">
            <span class="material-symbols-outlined">mail</span>
          </div>
          <div>
            <p class="label-caps detail-label">E-Mail</p>
            <a href="mailto:holzdesignlouis@gmail.com" class="detail-text detail-link">holzdesignlouis@gmail.com</a>
          </div>
        </div>

        <div class="detail-item">
          <div class="detail-icon">
            <span class="material-symbols-outlined">schedule</span>
          </div>
          <div>
            <p class="label-caps detail-label">Erreichbarkeit</p>
            <p class="detail-text">Mo – Fr: 07:30 – 17:30 Uhr<br/>Sa: nach Vereinbarung</p>
          </div>
        </div>
      </div>

      <!-- Instagram -->
      <div class="insta-box">
        <span class="material-symbols-outlined insta-icon">photo_camera</span>
        <p class="insta-text">
          Folgen Sie unserem Alltag auf Instagram
          <a
            href="https://www.instagram.com/holzdesign.louis"
            target="_blank"
            rel="noopener noreferrer"
            class="insta-link"
          >
            @holzdesign.louis
          </a>
        </p>
      </div>

      <!-- Google Maps -->
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
        <a
          href="https://maps.google.com/?q=Rheineckerstrasse+7,+9425+Thal,+Schweiz"
          target="_blank"
          rel="noopener noreferrer"
          class="map-link"
        >
          <span class="material-symbols-outlined">open_in_new</span>
          Auf Google Maps öffnen
        </a>
      </div>
    </div>

  </div>
</section>

<style>
  /* HERO */
  .kontakt-hero { padding: 5rem 0 0; }
  .hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: end; }
  .hero-badge { color: var(--color-primary-container); display: block; margin-bottom: 1rem; }
  .kontakt-hero h1 { margin-bottom: 1.5rem; font-size: 2.75rem; }
  .hero-lead { font-size: var(--text-body-lg); color: var(--color-on-surface-variant); line-height: 1.7; }
  .hero-bild { aspect-ratio: 4/3; overflow: hidden; }
  .hero-img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(15%); }

  @media (max-width: 768px) {
    .hero-grid { grid-template-columns: 1fr; gap: 2rem; }
    .hero-bild { aspect-ratio: 16/9; }
    .kontakt-hero h1 { font-size: 2rem; }
  }

  /* HAUPTSEKTION */
  .kontakt-section { padding: 5rem 0 var(--space-section); }
  .kontakt-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start; }

  @media (max-width: 900px) {
    .kontakt-grid { grid-template-columns: 1fr; gap: 4rem; }
  }

  /* FORMULAR */
  .form-wrap {}
  .form-title {
    font-family: var(--font-serif); font-size: var(--text-h2);
    font-weight: 600; margin-bottom: 2rem;
  }
  .kontakt-form { display: flex; flex-direction: column; gap: 1.5rem; }
  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
  @media (max-width: 600px) { .form-row { grid-template-columns: 1fr; } }

  .form-group { display: flex; flex-direction: column; gap: 0.5rem; }
  .form-label {
    font-family: var(--font-sans); font-size: 12px; font-weight: 700;
    letter-spacing: 0.08em; text-transform: uppercase;
    color: var(--color-on-surface-variant);
  }
  .form-input {
    font-family: var(--font-sans); font-size: var(--text-body-md);
    color: var(--color-on-surface);
    background: var(--color-surface-container-lowest);
    border: 1.5px solid var(--color-outline-variant);
    padding: 0.875rem 1rem;
    border-radius: var(--radius-sm);
    transition: border-color 0.2s;
    outline: none;
    width: 100%;
  }
  .form-input:focus { border-color: var(--color-primary-container); }
  .form-input::placeholder { color: var(--color-outline); }
  .form-textarea { resize: vertical; min-height: 160px; }

  .hidden { display: none; }

  .form-error {
    display: flex; align-items: center; gap: 0.75rem;
    background: var(--color-error-container);
    color: var(--color-on-error-container);
    padding: 1rem; border-radius: var(--radius-sm);
    font-size: 14px;
  }

  .form-success {
    display: flex; align-items: flex-start; gap: 1rem;
    background: var(--color-surface-container-low);
    border: 1.5px solid var(--color-primary-container);
    padding: 1.5rem; border-radius: var(--radius-sm);
  }
  .form-success .material-symbols-outlined { color: var(--color-primary-container); font-size: 2rem !important; flex-shrink: 0; }
  .success-title { font-family: var(--font-serif); font-size: 1.1rem; font-weight: 600; margin-bottom: 0.25rem; }
  .success-text { color: var(--color-on-surface-variant); font-size: 14px; line-height: 1.6; }

  .btn-submit {
    display: inline-flex; align-items: center; justify-content: center; gap: 0.75rem;
    background: var(--color-on-surface); color: #fff;
    padding: 1.25rem 2.5rem;
    font-family: var(--font-sans); font-size: var(--text-label); font-weight: 700;
    letter-spacing: 0.1em; text-transform: uppercase;
    border: none; cursor: pointer; border-radius: var(--radius-sm);
    transition: background 0.2s; width: 100%;
  }
  .btn-submit:hover:not(:disabled) { background: #333; }
  .btn-submit:disabled { opacity: 0.6; cursor: not-allowed; }

  @keyframes spin { to { transform: rotate(360deg); } }
  .spin { animation: spin 1s linear infinite; }

  .form-hinweis { font-size: 12px; color: var(--color-outline); text-align: center; }

  /* DETAILS */
  .details-wrap {}
  .details-title {
    font-family: var(--font-serif); font-size: var(--text-h2);
    font-weight: 600; margin-bottom: 2rem;
  }
  .detail-items { display: flex; flex-direction: column; gap: 1.75rem; margin-bottom: 2rem; }
  .detail-item { display: flex; align-items: flex-start; gap: 1.25rem; }
  .detail-icon {
    background: var(--color-surface-container);
    padding: 0.75rem; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }
  .detail-icon .material-symbols-outlined { color: var(--color-primary-container); font-size: 22px !important; }
  .detail-label { color: var(--color-primary-container); font-size: 10px; margin-bottom: 0.25rem; }
  .detail-text { color: var(--color-on-surface); font-size: var(--text-body-md); line-height: 1.6; }
  .detail-link { text-decoration: none; transition: color 0.2s; }
  .detail-link:hover { color: var(--color-primary-container); }

  /* INSTAGRAM BOX */
  .insta-box {
    display: flex; align-items: center; gap: 1rem;
    background: var(--color-surface-container);
    border: 1px solid var(--color-outline-variant);
    padding: 1.25rem; margin-bottom: 2rem;
    border-radius: var(--radius-sm);
  }
  .insta-icon { color: var(--color-on-surface-variant); font-size: 22px !important; flex-shrink: 0; }
  .insta-text { font-size: 14px; color: var(--color-on-surface-variant); font-style: italic; }
  .insta-link { color: var(--color-primary-container); font-weight: 600; text-decoration: none; margin-left: 0.25rem; }
  .insta-link:hover { text-decoration: underline; }

  /* MAP */
  .map-wrap {
    position: relative; aspect-ratio: 4/3;
    border: 1px solid var(--color-outline-variant);
    overflow: hidden;
  }
  .map-wrap iframe { position: absolute; inset: 0; width: 100%; height: 100%; }
  .map-link {
    position: absolute; bottom: 0.75rem; right: 0.75rem;
    display: inline-flex; align-items: center; gap: 0.4rem;
    background: var(--color-primary-container); color: #fff;
    padding: 0.5rem 1rem; border-radius: 2px;
    font-family: var(--font-sans); font-size: 11px; font-weight: 700;
    letter-spacing: 0.08em; text-transform: uppercase;
    text-decoration: none; z-index: 2;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    transition: background 0.2s;
  }
  .map-link:hover { background: #b08d4a; }
  .map-link .material-symbols-outlined { font-size: 14px !important; }
</style>
