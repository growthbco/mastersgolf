import fallback from './inventory.json';

/**
 * Live inventory from the Masters app — the single source of truth.
 *
 * The old hand-edited inventory.json was emptied in the April 2026 Advent
 * brand purge and never refilled; the site showed "0 of 0 carts" for four
 * months. Now: staff manage carts in the Masters app, and a cart appears
 * here automatically once it has a list price and at least one photo
 * (status available). A Netlify build hook fires when carts change.
 *
 * Fetched at BUILD time (static site) — falls back to inventory.json if
 * the feed is unreachable so a deploy never breaks the page.
 */

export interface SiteCart {
  id: string;
  slug: string;
  name: string;
  brand: string;
  model: string;
  year: string;
  type?: string;
  price: number;
  salePrice: number | null;
  stock: string;
  image: string;
  images: string[];
}

const FEED = 'https://us-central1-masters-saas.cloudfunctions.net/websiteInventory';

function slugify(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

export async function loadInventory(): Promise<SiteCart[]> {
  try {
    const res = await fetch(FEED, { signal: AbortSignal.timeout(15000) });
    if (!res.ok) throw new Error(`feed ${res.status}`);
    const data = (await res.json()) as { carts: Array<Record<string, unknown>> };
    const carts = (data.carts ?? []).map((c) => {
      const name = `${c.year ?? ''} ${c.make ?? ''} ${c.model ?? ''}`.trim();
      const photos = (c.photos as string[]) ?? [];
      return {
        id: String(c.id),
        slug: slugify(`${name}-${String(c.id).slice(0, 6)}`),
        name,
        brand: String(c.make ?? ''),
        model: String(c.model ?? ''),
        year: String(c.year ?? ''),
        type: String(c.type ?? ''),
        price: Number(c.price ?? 0),
        salePrice: null,
        stock: String(c.id).slice(0, 6).toUpperCase(),
        image: photos[0] ?? '',
        images: photos,
      };
    });
    if (carts.length) return carts;
  } catch (err) {
    console.warn('[inventory] live feed unavailable, using fallback:', err);
  }
  return fallback as unknown as SiteCart[];
}
