import type { APIRoute } from 'astro';
import inventoryData from '../data/inventory.json';

const siteUrl = 'https://mastersgolfcars.com';

// Define page groups with comments
const pageGroups = [
	{
		comment: 'Homepage',
		pages: [
			{ url: '/', changefreq: 'weekly', priority: '1.0' },
		]
	},
	{
		comment: 'Main Pages',
		pages: [
			{ url: '/contact/', changefreq: 'monthly', priority: '0.8' },
			{ url: '/gallery/', changefreq: 'monthly', priority: '0.7' },
			{ url: '/faq/', changefreq: 'monthly', priority: '0.7' },
			{ url: '/privacy-policy/', changefreq: 'yearly', priority: '0.3' },
			{ url: '/terms-conditions/', changefreq: 'yearly', priority: '0.3' },
		]
	},
	{
		comment: 'Golf Carts For Sale',
		pages: [
			{ url: '/golf-cart-inventory/', changefreq: 'daily', priority: '0.9' },
			{ url: '/advent-2/', changefreq: 'weekly', priority: '0.8' },
			{ url: '/advent-4/', changefreq: 'weekly', priority: '0.8' },
			{ url: '/advent-4f/', changefreq: 'weekly', priority: '0.8' },
			{ url: '/advent-4l/', changefreq: 'weekly', priority: '0.8' },
			{ url: '/advent-6/', changefreq: 'weekly', priority: '0.8' },
			{ url: '/advent-6l/', changefreq: 'weekly', priority: '0.8' },
			{ url: '/sell-your-cart/', changefreq: 'monthly', priority: '0.7' },
		]
	},
	{
		comment: 'Golf Carts For Sale - Location Pages',
		pages: [
			{ url: '/golf-carts-for-sale-ocala/', changefreq: 'monthly', priority: '0.8' },
			{ url: '/golf-carts-for-sale-the-villages/', changefreq: 'monthly', priority: '0.8' },
			{ url: '/golf-carts-for-sale-gainesville/', changefreq: 'monthly', priority: '0.8' },
			{ url: '/golf-carts-for-sale-otow/', changefreq: 'monthly', priority: '0.7' },
			{ url: '/golf-carts-for-sale-spruce-creek/', changefreq: 'monthly', priority: '0.7' },
		]
	},
	{
		comment: 'Golf Cart Rentals - Main Pages',
		pages: [
			{ url: '/golf-cart-rentals/', changefreq: 'weekly', priority: '0.9' },
			{ url: '/rent-a-golf-cart/', changefreq: 'monthly', priority: '0.9' },
			{ url: '/fleet-rentals-quote/', changefreq: 'monthly', priority: '0.8' },
		]
	},
	{
		comment: 'Golf Cart Rentals - Location Pages',
		pages: [
			{ url: '/golf-cart-rentals-ocala/', changefreq: 'monthly', priority: '0.8' },
			{ url: '/the-villages-golf-cart-rentals/', changefreq: 'monthly', priority: '0.8' },
			{ url: '/golf-cart-rentals-gainesville/', changefreq: 'monthly', priority: '0.8' },
			{ url: '/golf-cart-rentals-belleview/', changefreq: 'monthly', priority: '0.8' },
		]
	},
	{
		comment: 'Golf Cart Rentals - Community Pages',
		pages: [
			{ url: '/golf-cart-rentals-otow/', changefreq: 'monthly', priority: '0.7' },
			{ url: '/golf-cart-rentals-spruce-creek/', changefreq: 'monthly', priority: '0.7' },
			{ url: '/golf-cart-rentals-oak-run/', changefreq: 'monthly', priority: '0.7' },
			{ url: '/golf-cart-rentals-rv-parks/', changefreq: 'monthly', priority: '0.7' },
		]
	},
	{
		comment: 'Golf Cart Rentals - Venue Pages',
		pages: [
			{ url: '/golf-cart-rentals-wec/', changefreq: 'monthly', priority: '0.8' },
			{ url: '/golf-cart-rentals-hits-ocala/', changefreq: 'monthly', priority: '0.8' },
			{ url: '/golf-cart-rentals-florida-horse-park/', changefreq: 'monthly', priority: '0.7' },
		]
	},
	{
		comment: 'Golf Cart Rentals - Event Pages',
		pages: [
			{ url: '/golf-cart-rentals-weddings/', changefreq: 'monthly', priority: '0.7' },
			{ url: '/golf-cart-rentals-corporate-events/', changefreq: 'monthly', priority: '0.7' },
			{ url: '/golf-cart-rentals-festivals/', changefreq: 'monthly', priority: '0.7' },
			{ url: '/golf-cart-rentals-golf-tournaments/', changefreq: 'monthly', priority: '0.7' },
		]
	},
	{
		comment: 'Golf Cart Repairs',
		pages: [
			{ url: '/golf-cart-repairs/', changefreq: 'monthly', priority: '0.9' },
			{ url: '/schedule-golf-cart-service/', changefreq: 'monthly', priority: '0.8' },
			{ url: '/golf-cart-repairs-ocala/', changefreq: 'monthly', priority: '0.7' },
			{ url: '/golf-cart-repairs-belleview/', changefreq: 'monthly', priority: '0.7' },
			{ url: '/golf-cart-repairs-gainesville/', changefreq: 'monthly', priority: '0.7' },
		]
	},
	{
		comment: 'Blog',
		pages: [
			{ url: '/blog/', changefreq: 'weekly', priority: '0.8' },
			{ url: '/blog/golf-cart-guide-the-villages/', changefreq: 'monthly', priority: '0.6' },
			{ url: '/blog/lithium-battery-conversion-guide/', changefreq: 'monthly', priority: '0.6' },
			{ url: '/blog/golf-cart-maintenance-checklist/', changefreq: 'monthly', priority: '0.6' },
			{ url: '/blog/best-neighborhoods-golf-carts-ocala/', changefreq: 'monthly', priority: '0.6' },
			{ url: '/blog/electric-vs-gas-golf-carts/', changefreq: 'monthly', priority: '0.6' },
		]
	},
];

export const GET: APIRoute = () => {
	// Build static pages XML with comments
	const staticPagesXml = pageGroups.map(group => {
		const pagesXml = group.pages.map(page =>
`<url>
<loc>${siteUrl}${page.url}</loc>
<changefreq>${page.changefreq}</changefreq>
<priority>${page.priority}</priority>
</url>`
		).join('\n');

		return `<!-- ${group.comment} -->
${pagesXml}`;
	}).join('\n');

	// Build inventory pages XML
	const inventoryXml = inventoryData.length > 0 ? `<!-- Inventory Items -->
${inventoryData.map(cart => {
		const slug = cart.slug || `cart/${cart.id}`;
		return `<url>
<loc>${siteUrl}/${slug}/</loc>
<changefreq>weekly</changefreq>
<priority>0.7</priority>
</url>`;
	}).join('\n')}` : '';

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${staticPagesXml}
${inventoryXml}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
		},
	});
};
