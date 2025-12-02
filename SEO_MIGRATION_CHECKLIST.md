# SEO Migration Checklist - mastersgolfcars.com
**Migration Date: Friday**

## Pre-Migration Setup ✅

### Files Created/Updated:
- ✅ `public/_redirects` - Netlify redirects file with all SEO redirects
- ✅ `public/robots.txt` - Robots.txt pointing to sitemap
- ✅ `src/layouts/Layout.astro` - Updated with canonical tags, OG tags, Twitter cards
- ✅ `src/pages/sitemap.xml.ts` - XML sitemap generator
- ✅ `src/data/inventory.json` - Added missing slugs for all carts

### Redirects Configured:
- ✅ www → non-www (301 redirects)
- ✅ HTTP → HTTPS (301 redirects)
- ✅ `/schedule-service` → `/schedule-golf-cart-service` (preserved)
- ✅ `/home` → `/` (preserved)
- ✅ Query parameter canonicalization
- ✅ Cart detail page URL variations

## Migration Day Checklist

### 1. Domain Configuration in Netlify
- [ ] Add `mastersgolfcars.com` as custom domain in Netlify
- [ ] Configure DNS records:
  - [ ] A Record: `@` → Netlify IP (or use CNAME if supported)
  - [ ] CNAME Record: `www` → Netlify domain (will redirect via _redirects)
- [ ] Verify SSL certificate is issued automatically
- [ ] Test domain resolves correctly

### 2. Google Search Console Setup
- [ ] Add `https://mastersgolfcars.com` as new property
- [ ] Verify domain ownership (DNS or HTML file)
- [ ] Submit new sitemap: `https://mastersgolfcars.com/sitemap.xml`
- [ ] Request indexing for key pages:
  - [ ] Homepage
  - [ ] `/golf-cart-inventory`
  - [ ] `/golf-cart-rentals`
  - [ ] Individual cart pages

### 3. Google Analytics (if applicable)
- [ ] Update property settings if domain changed
- [ ] Verify tracking code is working
- [ ] Check that events are firing correctly

### 4. Testing & Verification
- [ ] Test all redirects work:
  - [ ] `www.mastersgolfcars.com` → `mastersgolfcars.com`
  - [ ] `http://` → `https://`
  - [ ] `/schedule-service` → `/schedule-golf-cart-service`
  - [ ] `/home` → `/`
- [ ] Verify canonical tags on all pages
- [ ] Check OG tags with Facebook Debugger: https://developers.facebook.com/tools/debug/
- [ ] Test sitemap: `https://mastersgolfcars.com/sitemap.xml`
- [ ] Verify robots.txt: `https://mastersgolfcars.com/robots.txt`
- [ ] Test RSS feed: `https://mastersgolfcars.com/rss`

### 5. External Links & Citations
- [ ] Update Google Business Profile (if applicable)
- [ ] Update social media profiles with new domain
- [ ] Check major directories (Yelp, Yellow Pages, etc.)
- [ ] Update any paid advertising campaigns

### 6. Monitoring (First 2-4 Weeks)
- [ ] Monitor Netlify Analytics for 404 errors
- [ ] Check Google Search Console for crawl errors
- [ ] Monitor rankings for key keywords
- [ ] Track organic traffic in Google Analytics
- [ ] Set up alerts for critical pages dropping

## Post-Migration Tasks

### Week 1
- [ ] Review all 404 errors and add redirects if needed
- [ ] Check Google Search Console for any issues
- [ ] Verify all internal links work correctly
- [ ] Test forms and contact functionality

### Week 2-4
- [ ] Monitor keyword rankings
- [ ] Check backlink profile (Ahrefs/SEMrush)
- [ ] Review page speed and Core Web Vitals
- [ ] Ensure all pages are being crawled

## Important Notes

### URLs Preserved:
All existing URLs are maintained - no URL structure changes. This preserves:
- Existing backlinks
- Bookmarked pages
- Search engine rankings
- Social media shares

### Redirects Handle:
- www vs non-www (non-www is primary)
- HTTP to HTTPS
- Query parameters (canonicalized)
- Cart page URL variations

### SEO Elements Added:
- Canonical tags on all pages
- Open Graph tags for social sharing
- Twitter Card tags
- XML sitemap
- Proper robots.txt

## Emergency Contacts
- Netlify Support: https://www.netlify.com/support/
- Google Search Console Help: https://support.google.com/webmasters

## Files Reference
- Redirects: `public/_redirects`
- Robots: `public/robots.txt`
- Sitemap: `src/pages/sitemap.xml.ts`
- Layout: `src/layouts/Layout.astro`

