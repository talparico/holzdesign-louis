<script>
  import '../app.css';
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import KontaktLeiste from '$lib/components/KontaktLeiste.svelte';
</script>

<Nav />

<KontaktLeiste />

<main id="main-content">
  <slot />
</main>

<Footer />
