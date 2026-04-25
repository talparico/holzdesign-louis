import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load() {
  try {
    // Alle Projekt-Markdown-Dateien laden
    const modules = import.meta.glob('../../content/projekte/*.md', { eager: true });

    const projekte = Object.entries(modules).map(([path, module]) => {
      const { metadata } = module;
      return {
        ...metadata,
        slug: path.split('/').pop().replace('.md', ''),
      };
    });

    // Nach Jahr sortieren (neueste zuerst)
    projekte.sort((a, b) => (b.jahr || 0) - (a.jahr || 0));

    return { projekte };
  } catch (e) {
    return { projekte: [] };
  }
}
