<script>
  import '../app.css';
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import KontaktLeiste from '$lib/components/KontaktLeiste.svelte';
  import { page } from '$app/stores';
</script>

<Nav currentPath={$page.url.pathname} />

<KontaktLeiste />

<main id="main-content">
  <slot />
</main>

<Footer />
