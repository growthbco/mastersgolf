# Deployment Guide

## Ready for Netlify Deployment! 🚀

Your Masters Golf Cars website has been successfully built and pushed to GitHub. You're now ready to deploy to Netlify.

## Deploy to Netlify

### Option 1: Automatic Deployment from GitHub (Recommended)

1. **Go to Netlify**: Visit [https://app.netlify.com](https://app.netlify.com)

2. **Login/Sign Up**: Create an account or login

3. **Add New Site**: Click "Add new site" → "Import an existing project"

4. **Connect to GitHub**: 
   - Click "GitHub" to connect your repository
   - Authorize Netlify to access your GitHub account
   - Select the `growthbco/mastersgolf` repository

5. **Configure Build Settings**:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - These settings are already configured in `netlify.toml`

6. **Deploy**: Click "Deploy site"

7. **Done!**: Netlify will automatically build and deploy your site

### Option 2: Deploy via Netlify CLI

If you prefer using the command line:

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy your site
netlify deploy --prod
```

## Post-Deployment

### Custom Domain Setup

1. In Netlify dashboard, go to **Site settings** → **Domain management**
2. Click **Add custom domain**
3. Enter your domain (e.g., `www.mastersgolfcars.com`)
4. Follow Netlify's DNS configuration instructions

### Environment Variables

If you add any API keys or environment variables later, add them in:
- Netlify Dashboard → **Site settings** → **Environment variables**

### Continuous Deployment

Netlify will automatically deploy whenever you push to the `main` branch on GitHub!

## Testing Your Deployment

After deployment, test these features:

- ✅ Homepage loads correctly
- ✅ Navigation works on all pages
- ✅ Mobile menu functions properly
- ✅ All images display
- ✅ Inventory page shows golf carts
- ✅ Contact form displays
- ✅ Footer links work

## Need Help?

- **Netlify Docs**: https://docs.netlify.com
- **Astro Deployment**: https://docs.astro.build/en/guides/deploy/netlify/
- **Netlify Support**: https://www.netlify.com/support/

## Next Steps

1. Deploy to Netlify (see above)
2. Add custom domain (optional)
3. Test all functionality
4. Monitor site analytics
5. Update content as needed via GitHub

Enjoy your new website! 🎉

