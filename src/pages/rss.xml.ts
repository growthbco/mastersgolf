import type { APIRoute } from 'astro';
import inventoryData from '../data/inventory.json';
import companyData from '../data/company.json';

const siteUrl = 'https://mastersgolfcars.com';

export const GET: APIRoute = () => {
	const items = [
		{
			title: 'Home',
			link: `${siteUrl}/`,
			description: companyData.description,
			pubDate: new Date().toUTCString(),
		},
		{
			title: 'Golf Cart Rentals',
			link: `${siteUrl}/golf-cart-rentals`,
			description: 'Reserve high-quality golf cart rentals for neighborhoods, events, and businesses across Central Florida.',
			pubDate: new Date().toUTCString(),
		},
		{
			title: 'Rent a Golf Cart',
			link: `${siteUrl}/rent-a-golf-cart`,
			description: 'Fill out our rental form to reserve your golf cart rental today.',
			pubDate: new Date().toUTCString(),
		},
		{
			title: 'Fleet Rentals Quote',
			link: `${siteUrl}/fleet-rentals-quote`,
			description: 'Get a quote for fleet golf cart rentals for your business or event.',
			pubDate: new Date().toUTCString(),
		},
		{
			title: 'Golf Cart Repairs',
			link: `${siteUrl}/golf-cart-repairs`,
			description: 'Professional golf cart repair and maintenance services.',
			pubDate: new Date().toUTCString(),
		},
		{
			title: 'Schedule Golf Cart Service',
			link: `${siteUrl}/schedule-golf-cart-service`,
			description: 'Schedule your golf cart service appointment.',
			pubDate: new Date().toUTCString(),
		},
		{
			title: 'Golf Cart Inventory',
			link: `${siteUrl}/golf-cart-inventory`,
			description: 'Browse our selection of new and used golf carts for sale.',
			pubDate: new Date().toUTCString(),
		},
		{
			title: 'Gallery',
			link: `${siteUrl}/gallery`,
			description: 'View our gallery of golf carts, fleets, and custom builds.',
			pubDate: new Date().toUTCString(),
		},
		...inventoryData.map((cart) => ({
			title: cart.name,
			link: cart.slug ? `${siteUrl}/${cart.slug}` : `${siteUrl}/cart/${cart.id}`,
			description: `${cart.year} ${cart.brand} ${cart.model} - Stock #${cart.stock} - Sale Price: $${(cart.salePrice || cart.price).toLocaleString()}`,
			pubDate: new Date().toUTCString(),
		})),
	];

	const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
	<channel>
		<title>${companyData.name}</title>
		<link>${siteUrl}</link>
		<description>${companyData.description}</description>
		<language>en-us</language>
		<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
		<atom:link href="${siteUrl}/rss" rel="self" type="application/rss+xml"/>
		${items
			.map(
				(item) => `	<item>
		<title><![CDATA[${item.title}]]></title>
		<link>${item.link}</link>
		<description><![CDATA[${item.description}]]></description>
		<pubDate>${item.pubDate}</pubDate>
		<guid isPermaLink="true">${item.link}</guid>
	</item>`
			)
			.join('\n')}
	</channel>
</rss>`;

	return new Response(rss, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
		},
	});
};

