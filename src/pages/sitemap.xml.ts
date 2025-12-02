import type { APIRoute } from 'astro';
import inventoryData from '../data/inventory.json';
import companyData from '../data/company.json';

const siteUrl = 'https://mastersgolfcars.com';
const lastmod = new Date().toISOString();

// Static pages
const staticPages = [
	{ url: '', changefreq: 'daily', priority: '1.0' },
	{ url: '/gallery', changefreq: 'weekly', priority: '0.8' },
	{ url: '/rent-a-golf-cart', changefreq: 'monthly', priority: '0.8' },
	{ url: '/golf-cart-rentals', changefreq: 'monthly', priority: '0.9' },
	{ url: '/contact', changefreq: 'monthly', priority: '0.7' },
	{ url: '/advent-2', changefreq: 'weekly', priority: '0.8' },
	{ url: '/advent-4', changefreq: 'weekly', priority: '0.8' },
	{ url: '/advent-4f', changefreq: 'weekly', priority: '0.8' },
	{ url: '/advent-4l', changefreq: 'weekly', priority: '0.8' },
	{ url: '/advent-6', changefreq: 'weekly', priority: '0.8' },
	{ url: '/advent-6l', changefreq: 'weekly', priority: '0.8' },
	{ url: '/sell-your-cart', changefreq: 'monthly', priority: '0.7' },
	{ url: '/schedule-golf-cart-service', changefreq: 'monthly', priority: '0.7' },
	{ url: '/fleet-rentals-quote', changefreq: 'monthly', priority: '0.8' },
	{ url: '/golf-cart-repairs', changefreq: 'monthly', priority: '0.8' },
	{ url: '/golf-cart-inventory', changefreq: 'daily', priority: '0.9' },
	{ url: '/privacy-policy', changefreq: 'yearly', priority: '0.3' },
	{ url: '/terms-conditions', changefreq: 'yearly', priority: '0.3' },
	{ url: '/success', changefreq: 'monthly', priority: '0.5' },
	{ url: '/ps-search-results', changefreq: 'weekly', priority: '0.6' },
];

export const GET: APIRoute = () => {
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages
	.map(
		(page) => `	<url>
		<loc>${siteUrl}${page.url}</loc>
		<lastmod>${lastmod}</lastmod>
		<changefreq>${page.changefreq}</changefreq>
		<priority>${page.priority}</priority>
	</url>`
	)
	.join('\n')}
${inventoryData
	.map((cart) => {
		const slug = cart.slug || `cart/${cart.id}`;
		return `	<url>
		<loc>${siteUrl}/${slug}</loc>
		<lastmod>${lastmod}</lastmod>
		<changefreq>weekly</changefreq>
		<priority>0.8</priority>
	</url>`;
	})
	.join('\n')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
		},
	});
};

