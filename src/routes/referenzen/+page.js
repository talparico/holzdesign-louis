import projekte from '../../content/projekte/projekte.json';

/** @type {import('./$types').PageLoad} */
export async function load() {
  const sorted = [...projekte].sort((a, b) => (b.jahr || 0) - (a.jahr || 0));
  return { projekte: sorted };
}
