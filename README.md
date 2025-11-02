# Masters Golf Cars Website

A modern, responsive website for Masters Golf Cars, LLC - Your #1 Source For Golf Carts in Ocala, The Villages and Central Florida.

## 🚀 Technology Stack

- **[Astro](https://astro.build)** - The web framework for content-driven websites
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[Firecrawl](https://firecrawl.dev)** - Web scraping and content migration
- **[Netlify](https://netlify.com)** - Deployment and hosting
- **[GitHub](https://github.com)** - Version control

## 📁 Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.astro      # Navigation header
│   │   ├── Footer.astro      # Site footer
│   │   └── CartCard.astro    # Golf cart display card
│   ├── data/
│   │   ├── company.json      # Company information
│   │   ├── inventory.json    # Golf cart inventory
│   │   └── services.json     # Services and brands data
│   ├── layouts/
│   │   └── Layout.astro      # Main page layout
│   ├── pages/
│   │   ├── index.astro       # Homepage
│   │   ├── inventory.astro   # Golf cart inventory
│   │   ├── rentals.astro     # Golf cart rentals
│   │   ├── fleet.astro       # Fleet rentals
│   │   └── contact.astro     # Contact page
│   └── styles/
│       └── global.css        # Global styles
├── astro.config.mjs          # Astro configuration
├── netlify.toml              # Netlify deployment config
└── package.json              # Dependencies and scripts
```

## 🛠️ Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:4321` to view the site

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📦 Deployment

This site is deployed on Netlify with continuous deployment from the `main` branch on GitHub.

### Build Settings
- **Build Command:** `npm run build`
- **Publish Directory:** `dist`
- **Node Version:** 18.x or higher

## 📝 Content Management

Content is stored in JSON files in the `src/data/` directory:
- `company.json` - Company details, contact info, location
- `inventory.json` - Golf cart inventory listings
- `services.json` - Brands, service areas, fleet use cases

## 🎨 Features

- **Responsive Design** - Mobile-first, works on all devices
- **Fast Performance** - Optimized builds with Astro
- **SEO Optimized** - Meta tags and structured content
- **Modern UI** - Beautiful design with Tailwind CSS
- **Multiple Pages** - Home, Inventory, Rentals, Fleet, Contact

## 📞 Contact

Masters Golf Cars, LLC
- 📍 12885 S US Hwy 441 Belleview, FL 34420
- 📞 (352) 307-0111
- 🌐 www.mastersgolfcars.com

## 📄 License

© 2025 Masters Golf Cars, LLC. All rights reserved.
