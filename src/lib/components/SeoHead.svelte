<script>
  export let title = 'Holzdesign Louis – Handwerkliche Schreinerei';
  export let description = 'Holzdesign Louis aus St. Gallen fertigt massgeschneiderte Möbel, Küchen und Innenausbauten in höchster Handwerksqualität. Jetzt Beratung anfragen.';
  export let canonical = '';
  export let schema = null;

  // Basis-URL – anpassen wenn Domain feststeht
  const siteUrl = 'https://www.holzdesign-louis.ch';
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />

  <!-- Canonical & hreflang -->
  <link rel="canonical" href={fullCanonical} />
  <link rel="alternate" hreflang="de-ch" href={fullCanonical} />
  <link rel="alternate" hreflang="x-default" href={fullCanonical} />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content={fullCanonical} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:locale" content="de_CH" />
  <meta property="og:site_name" content="Holzdesign Louis" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />

  <!-- Schema.org LocalBusiness (global) -->
  {@html `<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Holzdesign Louis",
    "description": "Handwerkliche Schreinerei für massgeschneiderte Möbel, Küchen und Innenausbauten.",
    "url": siteUrl,
    "telephone": "+41 XX XXX XX XX",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "St. Gallen",
      "addressRegion": "SG",
      "addressCountry": "CH"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 47.4245,
        "longitude": 9.3767
      },
      "geoRadius": "100000"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "07:30",
      "closes": "17:30"
    }
  })}<\/script>`}

  <!-- Seiten-spezifisches Schema (optional) -->
  {#if schema}
    {@html `<script type="application/ld+json">${JSON.stringify(schema)}<\/script>`}
  {/if}
</svelte:head>
