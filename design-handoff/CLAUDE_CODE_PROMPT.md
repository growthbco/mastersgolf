# Claude Code prompts

Run these from the repo root (`Masters Golf Cars (Main)`) in Claude Code, one at a time. Each one ends with a working `npm run build`.

## Session 1: foundation + home

```
Read design-handoff/BUILD_BRIEF.md fully before touching anything. Then read design-handoff/pages/home.desktop.html and design-handoff/pages/home.mobile.html; they are the approved design, inline styled, and are the source of truth for layout, spacing, copy and images.

Create a git branch named redesign.

Build the foundation:
1. Copy design-handoff/media/* into public/images/redesign/.
2. In src/styles/global.css add the Google Fonts import (Archivo expanded 700/800, Instrument Sans 400-700, Instrument Serif italic) and CSS variables for the tokens in the brief. Change every #86CA26 in the repo to #76c82f. Remove the inline brand style block from Layout.astro.
3. Rewrite src/components/Header.astro to match the design: black top bar (tagline, address, hours, phone), then logo, nav (Home, Rentals, Fleet & Events, Bolt Lithium, Customize, Service, Carts for Sale), green GET A QUOTE button, flame hairline under the header. Mobile: hamburger with a full-screen drawer listing the same links plus Sell Your Cart, Gallery, Blog, FAQ, Contact, Locations. Keep the same hrefs the current Header uses for those pages.
4. Rewrite src/components/Footer.astro to match the design's footer (four columns: brand + address + hours, Rentals links, Service and Sales links, Company links; bottom row with copyright, privacy, terms).
5. Add src/components/CallBar.astro: fixed bottom bar on screens under 760px with Call (352) 307-0111 and Get a quote. Include it in Layout.astro and remove the old floating phone pill on mobile.
6. Create small shared components in src/components/ui/: SectionHead (eyebrow with flame dash + expanded uppercase headline + optional lede), RingIcon (thin circle ring with a 1.5px line SVG icon), Button (primary/secondary/dark variants, 56px, arrow), ProofBar, Steps, Checks, ReviewGrid, FaqList. Match the markup in the handoff HTML.
7. Do not touch: public/_redirects, sitemap.xml.ts, rss, robots, the JSON-LD in Layout.astro, the Google verification meta, the LeadConnector chat script, the roadsidelaunch tracking script, any form name or field name.

Then rebuild src/pages/index.astro section by section from home.desktop.html (hero with the hero-loop video and fleet-poster.jpg poster, proof strip, fleet and events with the sweep video and four cart cards, Bolt lithium with the range picker, Your Stay Your Needs Your Cart steps, service half, reviews, where we deliver, get a quote form). Keep the existing title and description. Use the mobile HTML for the responsive breakpoints. No em dashes anywhere in copy. Leave any [bracketed] placeholder visible as is.

Run npm run build, fix errors, then npm run preview and confirm / renders. Commit.
```

## Session 2: rentals, fleet, service, contact

```
Read design-handoff/BUILD_BRIEF.md. Using the shared components from the redesign branch, rebuild these pages from the matching design-handoff/pages files, keeping each page's existing title, description, breadcrumbs, schema and form component (restyle the form inputs to match the design but do not change form names or field names):
- src/pages/golf-cart-rentals.astro from rentals.desktop.html / rentals.mobile.html (RentalInquiryForm)
- src/pages/fleet-rentals-quote.astro from fleet (FleetQuoteForm)
- src/pages/golf-cart-repairs.astro from service (ServiceRequestForm in the #schedule section)
- src/pages/schedule-golf-cart-service.astro: service header + the schedule form section only
- src/pages/contact.astro from contact (hours, sales@mastersgolfcars.com, map embed of 12885 S US Hwy 441 Belleview FL 34420)
Also make rent-a-golf-cart.astro and rentals.astro render the same rentals page content (or keep their current redirect behaviour if they redirect today).
npm run build clean, commit.
```

## Session 3: location template and all city, venue and event pages

```
Read design-handoff/BUILD_BRIEF.md and design-handoff/pages/location.desktop.html and location.mobile.html. Create src/components/LocationPage.astro that takes props: kind ("city" | "community" | "venue" | "event"), name, heroPhoto, intro, areas served list, faq list, and which form to show (RentalInquiryForm for city/community, FleetQuoteForm for venue/event). Then rewrite each of these pages to use it, moving each page's existing title, description, breadcrumbs, schema and local copy into props (do not lose any of the existing local text, it is there for SEO):
the-villages-golf-cart-rentals, golf-cart-rentals-ocala, -gainesville, -belleview, -oak-run, -otow, -spruce-creek, -rv-parks (city/community); golf-cart-rentals-wec, -hits-ocala, -florida-horse-park (venue); golf-cart-rentals-weddings, -festivals, -golf-tournaments, -corporate-events (event).
Do the same for the three golf-cart-repairs-<city> pages using the service template with a city hero.
Then build src/pages/locations.astro from locations.desktop.html linking every page above, and add /locations/ to sitemap.xml.ts.
npm run build clean, commit.
```

## Session 4: sales, cart detail, sell, gallery, faq, blog, about, lithium, customize

```
Read design-handoff/BUILD_BRIEF.md. Rebuild from the matching handoff pages, keeping titles, descriptions, schema and forms:
- golf-cart-inventory.astro from sales (CartCard restyled; inventory.json is empty today so build a clean empty state: "Call (352) 307-0111 for current inventory" plus the sell your cart and financing blocks)
- [slug].astro from cart (keep Product schema)
- golf-carts-for-sale-<city> pages (5) from sales with a city hero and their existing local copy
- sell-your-cart.astro from sell
- gallery.astro from gallery using public/images/gallery
- faq.astro from faq (keep FAQSchema)
- blog/index.astro from blog and the 5 posts from post
- new about.astro from about, new bolt-lithium.astro from lithium, new customize.astro from customize; add all three to sitemap.xml.ts
- privacy-policy, terms-conditions, success: existing text in the post article styling
- new 404.astro
npm run build clean. Then npm run preview and curl every URL in sitemap.xml.ts, all must return 200. Commit.
```

## Session 5: QA and deploy preview

```
On the redesign branch: run Lighthouse (mobile) against npm run preview for /, /golf-cart-rentals/, /golf-cart-rentals-ocala/ and /golf-cart-repairs/. Fix anything under 90 performance: lazy load below the fold images, width/height on every img, hero video preload="none" with poster except on the home hero, webm source before mp4, font-display swap, no layout shift from the header. Check every form renders and posts to /success with data-netlify intact. Grep the src tree for em dashes and remove them from copy. Grep for #86CA26 (should be none). Push the branch to origin and give me the Netlify deploy preview URL.
```

After the client approves the deploy preview: merge `redesign` into `main`, Netlify publishes to mastersgolfcars.com, resubmit the sitemap in Search Console.
