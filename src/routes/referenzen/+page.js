import data from '../../content/projekte/projekte.json';

/** @type {import('./$types').PageLoad} */
export async function load() {
  const projekte = data.projekte || [];
  const sorted = [...projekte].sort((a, b) => (b.jahr || 0) - (a.jahr || 0));
  return { projekte: sorted };
}
