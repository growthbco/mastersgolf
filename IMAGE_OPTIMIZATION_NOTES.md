# Image Optimization Notes

## Completed Optimizations

✅ **Lazy Loading**: Added `loading="lazy"` to all below-the-fold images
✅ **Width/Height Attributes**: Added explicit width and height attributes to all images for better LCP
✅ **Fetch Priority**: Added `fetchpriority="high"` and `loading="eager"` to critical above-the-fold images (hero images, logos)

## Images That Need WebP Conversion

The following JPG images should be converted to WebP format for better performance:

### Critical Images (Above the Fold)
- `/public/images/landing-pg-hero-3.jpg` - Used in hero sections (should be converted to WebP)

### Cart Images
- `/public/images/carts for sale/3_52004_139815_8156841.jpg`
- `/public/images/carts for sale/3_52004_139816_8156854.jpg`
- `/public/images/carts for sale/3_52004_139819_8156859.jpg`
- `/public/images/carts for sale/3_52004_139862_8158399.jpg`

### Inventory Gallery Images
- `/public/images/gallery/Inventory/Advanced EV Advent 2 Deluxe Golf Ready/*.jpg` (7 files)

## Conversion Instructions

To convert JPG images to WebP:

### Using ImageMagick (Command Line)
```bash
# Convert single image
magick input.jpg -quality 85 output.webp

# Convert all JPGs in a directory
for file in *.jpg; do
    magick "$file" -quality 85 "${file%.jpg}.webp"
done
```

### Using Online Tools
- Use tools like Squoosh (https://squoosh.app/) or CloudConvert
- Recommended quality: 85-90 for photos, 80-85 for graphics

### After Conversion
1. Replace `.jpg` extensions with `.webp` in:
   - `src/pages/index.astro` (line 12, 371)
   - `src/components/Header.astro` (line 34)
   - `src/data/inventory.json` (all image paths)

2. Update background-image URLs in CSS:
   - Change `url('/images/landing-pg-hero-3.jpg')` to `url('/images/landing-pg-hero-3.webp')`

## External Images

External images from `dlrwebservice.com` cannot be converted but already have lazy loading applied.

## Performance Impact

- **Lazy Loading**: Reduces initial page load by ~30-50%
- **Width/Height Attributes**: Prevents layout shift (CLS improvement)
- **WebP Format**: Reduces image file sizes by ~25-35% compared to JPG
- **Fetch Priority**: Prioritizes critical images for faster LCP

## Next Steps

1. Convert JPG files to WebP using the methods above
2. Update file references in code
3. Test page load performance with Lighthouse
4. Monitor Core Web Vitals scores

