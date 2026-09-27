# Redesign status

The site has been rebuilt in the approved black, white and green design. `npm run build` passes and every URL in `sitemap.xml.ts` returns 200.

## Done

- Foundation: `src/styles/design.css` (fonts, tokens, shared patterns), new `Header.astro` (top bar, nav, mobile drawer), `Footer.astro`, `CallBar.astro` (sticky Call / Get a quote on phones). Old lime `#86CA26` replaced with `#76c82f` everywhere.
- Shared pieces in `src/components/ui/` and `src/components/sections/` (Btn, Ring, Eyebrow, Check, Stars, HeroSplit, HeroDark, ProofBar, Steps, Faq, Reviews, CartCard, LinkList, LocalContent, LocationPage, ServicePage, InventoryGrid, PostLayout).
- Forms restyled with the same Netlify names and field names: `rental-inquiry`, `fleet-rentals-quote`, `service-request`, `cart-inquiry`, `sell-cart`. All post to `/success`.
- Pages: home, rentals, fleet, service (+ schedule and 3 city repair pages), contact, 16 city / venue / event rental pages, inventory, cart detail, 5 city sales pages, sell your cart, gallery, FAQ, blog + 5 posts, privacy, terms, success, 404.
- New pages, added to the sitemap: `/about/`, `/locations/`, `/bolt-lithium/`, `/customize/`.
- Local SEO copy from the old city pages was carried over verbatim (see `src/data/locations/*.json`) and rendered in the new style. Titles, descriptions, canonicals, JSON-LD and FAQ schema were kept.
- Home page schema corrected from an invented 5.0 / 150 reviews to the real 4.9 / 93.

## Still old style (work, but not redesigned)

`/rent-a-golf-cart`, `/rentals`, `/home`, `/fleet`, `/advent-*`, `/sitemap` (HTML) and `/ps-search-results`. They get the new header and footer automatically. `/home`, `/advent-*` and old inventory URLs already redirect via `public/_redirects`.

## Client still owes

- 2 and 6 passenger weekly rental prices (cards say "Call for weekly rate" until then).
- Lithium conversion starting price.
- Delivery pricing wording (pages say "quoted with your reservation").
- About page: team names and photos (the team section was left out rather than shipped with placeholders), plus any community or sponsorship photos.
- Customize page: photos of real customer builds (currently uses the gallery's custom cart photos).
- Confirmation that "most repairs done in 24 hours" and the 24hr Cart Club first year free offer are still current.
- Inventory: `src/data/inventory.json` is empty, so the Carts for Sale pages show a "call for current inventory" state. Cart detail pages appear once listings are added (fields used: name, model, brand, year, price, salePrice, stock, image, images, slug, condition, seats, power, color, type, description, features).

## Deploy

1. `npm install` in this folder (the iCloud copy of node_modules is not downloaded), then `npm run build` to confirm.
2. Commit on a `redesign` branch and push to `growthbco/mastersgolf`. Netlify builds a deploy preview.
3. Client reviews the preview. Merge to `main` to publish. No DNS change.
4. After launch: resubmit `sitemap.xml` in Search Console, check Netlify Forms shows the five form names, watch 404s for two weeks.

`design-handoff/` holds the approved design HTML, screenshots and media for reference. `design-handoff/_repo-src.tgz` is a scratch archive and can be deleted.
