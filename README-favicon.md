# Favicon Setup Instructions

## Required Favicon Files

To complete the favicon setup, you need to create the following files in the `/public` directory:

### 1. Basic Favicon Files
- `favicon.ico` - Main favicon file (16x16, 32x32, 48x48)
- `favicon-16x16.png` - 16x16 PNG favicon
- `favicon-32x32.png` - 32x32 PNG favicon

### 2. Apple Touch Icon
- `apple-touch-icon.png` - 180x180 PNG for iOS devices

### 3. Android Chrome Icons
- `android-chrome-192x192.png` - 192x192 PNG for Android
- `android-chrome-512x512.png` - 512x512 PNG for Android

## How to Create Favicon Files

### Option 1: Use Online Favicon Generator
1. Go to https://realfavicongenerator.net/
2. Upload your SR IT Support logo
3. Generate all favicon files
4. Download and place in `/public` directory

### Option 2: Use Your Logo
1. Take your existing SR IT Support logo
2. Resize to different dimensions:
   - 16x16, 32x32, 48x48 for favicon.ico
   - 16x16, 32x32 for PNG files
   - 180x180 for Apple touch icon
   - 192x192, 512x512 for Android

### Option 3: Create Simple Text-Based Favicon
If you don't have a logo, create a simple "SR" text-based favicon:
1. Use a design tool (Canva, Figma, etc.)
2. Create a square canvas with blue background (#2563eb)
3. Add white "SR" text in the center
4. Export in all required sizes

## File Structure
```
public/
├── favicon.ico
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png
├── android-chrome-192x192.png
├── android-chrome-512x512.png
└── site.webmanifest
```

## Testing
After adding the files:
1. Clear browser cache
2. Refresh the website
3. Check browser tab for favicon
4. Test on mobile devices

The favicon will now appear in browser tabs, bookmarks, and when users add your site to their home screen! 