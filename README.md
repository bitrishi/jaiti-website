# Jaiti NGO Website

A clean, professional website for Jaiti - an NGO providing free education to underprivileged children in Jaipur, India.

## 📁 File Structure

```
jaiti-website/
├── index.html          # Home page
├── about.html          # About Us page
├── gallery.html        # Photo Gallery page
├── contact.html        # Contact Us page
├── styles.css          # Main stylesheet
├── script.js           # JavaScript functionality
├── images/             # Create this folder for photos
│   ├── photo1.jpg
│   ├── photo2.jpg
│   ├── ... (up to photo10.jpg)
│   └── video-poster.jpg  # Optional: thumbnail for video
└── videos/             # Create this folder for video
    └── jaiti-video.mp4
```

## 🔧 Things You Need to Update

### 1. Contact Information (in `contact.html`)
Look for `<!-- UPDATE: -->` comments and replace:
- Email address
- Phone number
- Full address

### 2. Social Media Links (in all HTML files)
Search for `href="#"` in footer and contact page, replace with:
- Your LinkedIn URL
- Your Instagram URL

### 3. Contact Form (in `contact.html`)
The form uses Formspree (free). To set it up:
1. Go to https://formspree.io
2. Sign up for free
3. Create a new form
4. Copy your form ID
5. Replace `YOUR_FORM_ID` in the form action URL:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### 4. Images
Create an `images` folder and add your photos named:
- `photo1.jpg`, `photo2.jpg`, ... `photo10.jpg`
- (Optional) `video-poster.jpg` - thumbnail shown before video plays

### 5. Video
Create a `videos` folder and add your video as:
- `jaiti-video.mp4`

### 6. Google Map (in `contact.html`)
To show your exact location:
1. Go to Google Maps
2. Search your address
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the existing iframe in `contact.html`

## 🚀 Deploying to GitHub Pages

### Step 1: Push to GitHub
```bash
cd jaiti-website
git init
git add .
git commit -m "Initial commit - Jaiti NGO website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 2: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in left sidebar)
3. Under "Source", select **main** branch
4. Click **Save**
5. Wait 1-2 minutes, your site will be live at:
   `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

### Step 3: Connect Your GoDaddy Domain

#### In GitHub:
1. Go to Settings → Pages
2. Under "Custom domain", enter your domain (e.g., `jaiti.org` or `www.jaiti.org`)
3. Click Save
4. Check "Enforce HTTPS" (after DNS propagates)

#### In GoDaddy:
1. Log in to GoDaddy → My Products → DNS
2. Add these DNS records:

**For apex domain (jaiti.org):**
| Type | Name | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

**For www subdomain:**
| Type | Name | Value |
|------|------|-------|
| CNAME | www | YOUR_USERNAME.github.io |

3. Wait for DNS propagation (can take up to 48 hours, usually faster)

## 📝 Notes

- The website is fully responsive (mobile, tablet, desktop)
- Gallery has a lightbox feature - click any image to view larger
- All animations are subtle and professional
- The contact form will email submissions to your Formspree account

## 🆘 Need Help?

If you run into issues:
1. Make sure all file names match exactly (lowercase, correct extensions)
2. Check that images and videos are in the correct folders
3. Ensure the Formspree form ID is correct
4. DNS changes can take time - be patient!

---

Built with ❤️ for Jaiti NGO
