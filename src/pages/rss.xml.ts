import type { APIRoute } from 'astro';
import inventoryData from '../data/inventory.json';
import companyData from '../data/company.json';

const siteUrl = 'https://mastersgolfcars.com';

// Helper function to get full image URL
function getFullImageUrl(imagePath: string): string {
	if (imagePath.startsWith('http')) {
		return imagePath;
	}
	return `${siteUrl}${imagePath}`;
}

// Helper function to generate cart description based on model
function getCartDescription(cart: typeof inventoryData[0]): string {
	const baseFeatures = [
		'<p><strong>Deluxe Sunbrella Enclosure w/ Loxx Snaps</strong></p>',
		'<p><strong>12" Wheels on Radial Tires</strong></p>',
		'<p><strong>4 Wheel Disc Brakes</strong></p>',
		'<p><strong>Speedometer/Odometer</strong></p>',
		'<p><strong>Deluxe LED Light Kit</strong></p>',
		'<p><strong>LED Turn Signal Mirrors</strong></p>',
		'<p><strong>Seat Belts</strong></p>',
		'<p><strong>Floormat</strong></p>',
		'<p><strong>Dual USB Charge Port</strong></p>',
		'<p><strong>Lockable Drivers & Passenger Dash</strong></p>',
		'<p><strong>5 Yr Warranty on Cart and 8 Yr Warranty on Battery</strong></p>'
	];

	let features = [...baseFeatures];

	// Model-specific features
	if (cart.model === 'Advent 2') {
		features.unshift('<p><strong>Luxury Bench Seat w/ 3 Arm Rests</strong></p>');
		features.splice(4, 0, '<p><strong>160AH Lithium Battery Pack w/ Onboard Charger</strong></p>');
		features.splice(9, 0, '<p><strong>2 Sand Bottles</strong></p>', '<p><strong>Cooler</strong></p>', '<p><strong>Ball Washer</strong></p>');
	} else if (cart.model === 'Advent 4') {
		features.unshift('<p><strong>Luxury Bench Seat w/ 3 Arm Rests</strong></p>');
		features.splice(4, 0, '<p><strong>105AH Trojan Lithium Battery Pack w/ Onboard Charger</strong></p>');
	} else if (cart.model === 'Advent 4F') {
		features.unshift('<p><strong>Luxury Bench Seats</strong></p>');
		features.splice(4, 0, '<p><strong>200AH Lithium Battery Pack w/ Onboard Charger</strong></p>');
		features.splice(9, 0, '<p><strong>2 Sand Bottles</strong></p>', '<p><strong>Cooler</strong></p>', '<p><strong>Ball Washer</strong></p>');
	}

	return `Stock #${cart.stock} - ${features.join('\n')}`;
}

export const GET: APIRoute = () => {
	const items = inventoryData.map((cart) => {
		const link = cart.slug ? `${siteUrl}/${cart.slug}` : `${siteUrl}/cart/${cart.id}`;
		const imageUrl = getFullImageUrl(cart.image);
		const title = `${cart.name} - Stock #${cart.stock}`;
		const description = getCartDescription(cart);
		
		// Use a recent date for pubDate (you can customize this)
		const pubDate = new Date().toUTCString();
		
		return {
			title,
			link,
			description,
			pubDate,
			imageUrl,
		};
	});

	const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:media="http://search.yahoo.com/mrss/" version="2.0">
	<channel>
		<title>Masters Golf Cars Unit Inventory</title>
		<link>${siteUrl}/</link>
		<description>All units entered in inventory for Masters Golf Cars</description>
		<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
		<image>
			<title>Masters Golf Cars Unit Inventory</title>
			<url>${companyData.logo}</url>
			<link>${siteUrl}/</link>
		</image>
		${items
			.map(
				(item) => `	<item>
		<media:content medium="image" url="${item.imageUrl}"/>
		<title><![CDATA[${item.title}]]></title>
		<link>${item.link}</link>
		<description><![CDATA[${item.description}]]></description>
		<guid isPermaLink="true">${item.link}</guid>
		<pubDate>${item.pubDate}</pubDate>
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

