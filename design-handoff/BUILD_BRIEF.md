# Masters Golf Cars redesign: build brief

This folder is the design handoff for rebuilding mastersgolfcars.com in the existing Astro 5 / Tailwind 4 / Netlify repo. The design is finished and approved by the client. The job is to port it into Astro without losing any SEO, forms, tracking or URLs.

Approved preview (what the client signed off on): https://claude.ai/artifact/LXhSJ15Ui35gbxKmzJ24Jy

## What is in this folder

- `pages/<page>.desktop.html` and `pages/<page>.mobile.html`: the exact approved markup for each template at 1440 and 390 wide, inline styles, real copy, real photos. These are the source of truth for layout, spacing, type sizes, copy and image choice. Open them in a browser.
- `media/`: every photo and video the design uses (hero-loop.mp4/webm, sweep.mp4/webm, fleet and cart photos, Bolt battery). Copy into `public/images/redesign/` (or wherever fits) and reference from there.
- `screens/`: full page screenshots of every desktop and mobile board for quick reference.
- `manifest.json`: page key to file mapping.

## Design system

- Colors: black `#000`, near black `#111`, off white page `#f6f6f4`, white cards, green accent `#76c82f`, dark green text `#2f6b0e` for green words on light backgrounds. Flame gradient is a secondary accent only (thin lines, eyebrow dashes): `linear-gradient(90deg,#f5c400,#f07a00,#d81f26)`.
- Type: headlines Archivo, weight 800, `font-stretch: 125%` (expanded), uppercase, tight letter spacing. Body Instrument Sans 400/500/600. Review quotes Instrument Serif italic. Load from Google Fonts: `Archivo:wdth,wght@125,700;125,800`, `Instrument+Sans:wght@400;500;600;700`, `Instrument+Serif:ital@0;1`.
- Buttons: 56px tall, 0 28px padding, uppercase, letter spaced, arrow icon right. Primary is black on light or green on dark. Secondary is outlined. No rounded corners anywhere (square).
- Icons: 1.5px line icons inside a thin circle ring (see `ring()` markup in the HTML). No emoji, no filled icon sets.
- Photos: full color. Hero video is desaturated (B&W) with the green accent on top.
- Layout: content max 1320px, 60px side gutters at 1440 and up, fluid gutters below. Sections stack with 100px vertical padding on desktop, 60px on mobile.
- Header: top utility bar (tagline, address, hours, phone) on black, then logo + nav + green Get a quote button, flame hairline underneath. Nav: Home, Rentals, Fleet & Events, Bolt Lithium, Customize, Service, Carts for Sale. Mobile: hamburger, sticky bottom call bar (Call / Get a quote).
- Copy rules: plain conversational English, no em dashes, no invented numbers. Anything in [square brackets] is a placeholder that still needs a real value from the client. Keep it as visibly bracketed text or hide the element, never make up a value.

## Page map (all 42 sitemap URLs plus the extras)

Every URL below already exists in `src/pages/` and must keep its exact path, `<title>`, meta description, breadcrumbs and any page level schema. Only the markup and styling change. Read the existing page file first, copy its frontmatter (title, description, schema objects, breadcrumbs), then rebuild the body using the design template listed.

| Live URL | Design template | Notes |
|---|---|---|
| `/` | `home` | `index.astro`. Keep `hideHeader` logic out; new header is part of the design. Hero uses `hero-loop` video with `fleet-poster.jpg` poster. |
| `/golf-cart-rentals/` | `rentals` | Main rentals page. Reserve form = existing `RentalInquiryForm`. |
| `/rent-a-golf-cart/`, `/rentals/` | `rentals` | Keep as they are today (same content or redirect). Do not delete. |
| `/the-villages-golf-cart-rentals/` | `location` | City template, Villages copy from existing page. |
| `/golf-cart-rentals-ocala/`, `-gainesville/`, `-belleview/`, `-oak-run/`, `-otow/`, `-spruce-creek/`, `-rv-parks/` | `location` | City/community template. Pull each page's existing title, description and local copy into the template. |
| `/golf-cart-rentals-wec/`, `-hits-ocala/`, `-florida-horse-park/` | `location` | Venue variant of the same template (venue name in hero, event fleet CTA). |
| `/golf-cart-rentals-weddings/`, `-festivals/`, `-golf-tournaments/`, `-corporate-events/` | `location` (event variant) | Same template, event type in hero, points to fleet quote form. |
| `/fleet-rentals-quote/` | `fleet` | Fleet & events page. Quote form = existing `FleetQuoteForm`. |
| `/golf-cart-repairs/` | `service` | Service page. |
| `/golf-cart-repairs-ocala/`, `-gainesville/`, `-belleview/` | `service` | Same template with city in hero and copy from existing page. |
| `/schedule-golf-cart-service/` | `service` (form section only, `#schedule`) | Keep the URL. Can be the service page scrolled to the form, or the form section standalone with the service header. Existing `ServiceRequestForm`. |
| `/golf-cart-inventory/` | `sales` | Carts for sale. Cards render from `src/data/inventory.json` via `CartCard`. inventory.json is currently empty, so build the empty state too ("Call for current inventory"). |
| `/[slug]` (cart detail) | `cart` | `[slug].astro`, keep Product schema. |
| `/golf-carts-for-sale-the-villages/`, `-ocala/`, `-gainesville/`, `-otow/`, `-spruce-creek/` | `sales` | Sales template with city hero and existing local copy. |
| `/sell-your-cart/` | `sell` | Existing `CartInquiryForm` or its sell variant, keep field names. |
| `/gallery/` | `gallery` | Images from `public/images/gallery/`. |
| `/contact/` | `contact` | Hours Mon to Fri 8:30 to 5, Sat 9 to 2, Sun closed. Email sales@mastersgolfcars.com. Map embed of 12885 S US Hwy 441, Belleview FL 34420. |
| `/faq/` | `faq` | Keep `FAQSchema` component and existing questions. |
| `/blog/` | `blog` | |
| `/blog/<5 posts>/` | `post` | Keep post content, dates, and any Article schema. |
| `/about/` | `about` | New page. Add to sitemap.xml.ts. Team and story sections have [placeholders] until the client sends them. |
| Locations hub | `locations` | New page at `/locations/` linking every city, community and venue page. Add to sitemap. |
| Bolt lithium | `lithium` | New page at `/bolt-lithium/` (conversions and battery info). Add to sitemap. |
| Customize | `customize` | New page at `/customize/`. Add to sitemap. |
| `/privacy-policy/`, `/terms-conditions/` | simple text page | No board. Use the `post` template's article styling with the existing text. |
| `/success/` | simple | Thank you page in the new header/footer. Forms post here, keep the URL. |
| `/ps-search-results/`, `/sitemap` (html), `/home`, `/rentals`, `/fleet` | keep | Keep these files as they are or as redirects. `/home` already redirects in `_redirects`. |
| 404 | simple | New `404.astro` in the header/footer with links to rentals, service, sales, contact. |

## Things that must not change

1. `public/_redirects`: keep the file as is.
2. `src/pages/sitemap.xml.ts`, `rss.ts`, `rss.xml.ts`, `robots.txt`: keep, add the new pages (about, locations, bolt-lithium, customize) to the sitemap.
3. `Layout.astro`: keep the LocalBusiness JSON-LD, BreadcrumbList, canonical, OG and Twitter tags, geo meta, the Google site verification meta, the LeadConnector chat widget script and the roadsidelaunch tracking script. Replace only the visual parts (brand color vars, sticky phone button, body classes). The new sticky mobile call bar replaces the old floating phone pill on mobile; keep a small floating call button on desktop or drop it, the design does not have one.
4. Netlify forms: form `name` values (`rental-inquiry`, `service-request`, fleet and cart inquiry names), the hidden `form-name` input, `data-netlify="true"`, `netlify-honeypot="bot-field"`, `action="/success"`, and every field `name` attribute (name, phone, email, cart_type, cart_quantity, start_date, end_date, delivery_address, notes, sms_consent, page_source, service_type, cart_make, cart_model, cart_year, preferred_date, service_address, details). Restyle the inputs, do not rename anything, or Netlify notifications and the CRM flow break.
5. Page titles and meta descriptions: copy from each existing page. Do not rewrite them for the redesign.
6. Google Business names, address, phone numbers: exactly as in `src/data/company.json`.
7. Brand color in existing Tailwind utilities: `#86CA26` becomes `#76c82f` everywhere (`--brand-green`, `.bg-brand-green`, etc.). Search and replace, then delete the inline style block in Layout in favor of `global.css`.

## Suggested build order (one Claude Code session per group is fine)

1. Foundation: fonts in `global.css`, tokens as CSS variables, new `Header.astro` (desktop nav + mobile drawer + top bar), new `Footer.astro`, mobile `CallBar.astro`, shared section components: `SectionHead` (eyebrow + headline), `RingIcon`, `Button`, `ProofBar`, `Steps`, `Checks`, `ReviewGrid`, `FaqList`, `FormShell`. Build these by reading `pages/home.desktop.html` and `pages/home.mobile.html`.
2. Home page.
3. Rentals, Fleet, Service (+ schedule), Contact.
4. Location template as one component (`LocationPage.astro`) with props for city, venue or event variant, then wire all 16 city/venue/event pages through it.
5. Sales + cart detail + city sales pages, Sell your cart.
6. Gallery, FAQ, Blog + posts, About, Locations hub, Bolt lithium, Customize.
7. Privacy, terms, success, 404.
8. QA: `npm run build` clean, every sitemap URL returns 200 in `npm run preview`, run Lighthouse on home, rentals and a city page (target 90+ mobile performance: lazy load below the fold images, `loading="eager"` and `fetchpriority="high"` only on the hero, videos `preload="none"` with poster, hero video muted autoplay loop playsinline with webm first then mp4).
9. Deploy preview: push branch `redesign` to `growthbco/mastersgolf`. Netlify builds a deploy preview URL. Client reviews. Merge to `main` for production. DNS and domain do not change, so nothing from `SEO_MIGRATION_CHECKLIST.md` needs redoing, but do submit the sitemap again in Search Console after launch and watch 404s for two weeks.

## Placeholders still open (client to supply)

- 2 and 6 passenger rental prices (4 passenger and weekly/monthly structure are on the rentals page).
- Minimum renter age.
- Service turnaround wording (old site said most repairs within 24 hours, confirm).
- Lithium conversion starting price.
- Delivery pricing or radius wording (client removed "free within 50 miles" and "150 mile radius", so say "delivery quoted with your reservation").
- About page story and team photos.
- Customize page photos of real customer builds (no manufacturer renders).
- Warranty wording on new carts ("5 year cart / 8 year battery" came from the old site, confirm it is still current).
- Two more Google reviews (Scott Lenhart, Megan O'Brien) if the client wants five on the home page.

## Verified facts used in the design

Founded 1999, Belleview FL, 12885 S US Hwy 441, 352-307-0111, sales@mastersgolfcars.com. Hours Mon to Fri 8:30 to 5, Sat 9 to 2, closed Sunday. Google rating 4.9 from 93 reviews. Over 300 carts in the rental fleet. Sheffield Financial dealer. 24hr Cart Club partner, first year free with a new cart. Reviews from Jay DeFalco, Robert McIntyre and West Shore Outfitters are real and quoted as given.
