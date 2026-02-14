# 🚀 ASIC Website Deployment Guide

Panduan lengkap untuk deploy ASIC website ke Netlify.

---

## Prerequisites

- ✅ GitHub/GitLab account
- ✅ Netlify account (free tier cukup)
- ✅ Code dah push ke Git repository

---

## Method 1: Deploy via Netlify Dashboard (Recommended)

### Step 1: Push Code to GitHub

```bash
# Initialize git (if not already)
cd asic-website
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - ASIC website with i18n"

# Create repo on GitHub, then:
git remote add origin https://github.com/yourusername/asic-website.git
git branch -M main
git push -u origin main
```

### Step 2: Connect to Netlify

1. Go to https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Choose "Deploy with GitHub" (or GitLab)
4. Authorize Netlify to access your repos
5. Select `asic-website` repository

### Step 3: Configure Build Settings

Netlify will auto-detect Next.js. Verify these settings:

```
Build command: npm run build
Publish directory: .next
```

Click "Deploy site"

### Step 4: Wait for Deployment

- First build takes 2-3 minutes
- Netlify will give you a URL like: `https://random-name-123.netlify.app`
- Test the site!

### Step 5: Custom Domain (Optional)

1. In Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Enter your domain (e.g., `asic.edu.my`)
4. Follow DNS configuration instructions
5. SSL certificate will be auto-generated

---

## Method 2: Deploy via Netlify CLI

### Install Netlify CLI

```bash
npm install -g netlify-cli
```

### Login to Netlify

```bash
netlify login
```

### Initialize and Deploy

```bash
cd asic-website

# Initialize
netlify init

# Follow prompts:
# - Create & configure a new site
# - Choose team
# - Site name: asic-website
# - Build command: npm run build
# - Publish directory: .next

# Deploy to production
netlify deploy --prod
```

---

## Netlify Configuration File

Create `netlify.toml` in project root for advanced config:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "20"

[[plugins]]
  package = "@netlify/plugin-nextjs"

# Redirect rules for i18n
[[redirects]]
  from = "/ms/*"
  to = "/ms/:splat"
  status = 200

[[redirects]]
  from = "/*"
  to = "/:splat"
  status = 200

# Security headers
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    X-XSS-Protection = "1; mode=block"
```

---

## Post-Deployment Checklist

### Test All Pages

- [ ] Home page (English) - `/`
- [ ] Home page (Malay) - `/ms/`
- [ ] Programs page - `/programs` & `/ms/programs`
- [ ] Community page - `/community` & `/ms/community`
- [ ] Contact page - `/contact` & `/ms/contact`

### Test Language Switcher

- [ ] Switch from EN to MS
- [ ] Switch from MS to EN
- [ ] URL updates correctly
- [ ] Content changes properly

### Test Responsive Design

- [ ] Mobile view (< 640px)
- [ ] Tablet view (640px - 1024px)
- [ ] Desktop view (> 1024px)
- [ ] Navigation menu works on mobile

### Performance Check

```bash
# Run Lighthouse audit
# In Chrome DevTools:
# 1. Open DevTools (F12)
# 2. Go to Lighthouse tab
# 3. Generate report

# Target scores:
# Performance: > 90
# Accessibility: > 90
# Best Practices: > 90
# SEO: > 90
```

### SEO Verification

- [ ] Meta titles correct
- [ ] Meta descriptions present
- [ ] Open Graph tags working
- [ ] Sitemap accessible (if generated)
- [ ] Robots.txt accessible

---

## Continuous Deployment

Netlify automatically deploys when you push to main branch:

```bash
# Make changes
git add .
git commit -m "Update content"
git push

# Netlify will auto-deploy in 2-3 minutes
```

### Deploy Previews

Every pull request gets a preview URL:
- Create PR on GitHub
- Netlify builds preview
- Test before merging
- Merge to deploy to production

---

## Environment Variables (If Needed)

If you need environment variables:

1. Go to Netlify dashboard
2. Site settings → Environment variables
3. Add variables:
   ```
   NEXT_PUBLIC_SITE_URL=https://asic.edu.my
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

---

## Custom Domain Setup

### DNS Configuration

If using custom domain `asic.edu.my`:

**Option A: Netlify DNS (Recommended)**
1. Change nameservers to Netlify's
2. Netlify manages everything

**Option B: External DNS**
Add these records:

```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: your-site.netlify.app
```

### SSL Certificate

- Netlify provides free SSL via Let's Encrypt
- Auto-renews every 90 days
- HTTPS enforced automatically

---

## Troubleshooting

### Build Fails

```bash
# Check build logs in Netlify dashboard
# Common issues:

# 1. Node version mismatch
# Solution: Add to netlify.toml:
[build.environment]
  NODE_VERSION = "20"

# 2. Missing dependencies
# Solution: Delete node_modules and package-lock.json
npm install
git add package-lock.json
git commit -m "Update dependencies"
git push
```

### 404 Errors

```bash
# If pages show 404:
# Check publish directory is set to: .next
# Check build command is: npm run build
```

### Language Switching Not Working

```bash
# Ensure redirects are configured in netlify.toml
# See configuration section above
```

---

## Monitoring & Analytics

### Add Google Analytics

1. Get GA4 tracking ID
2. Add to environment variables
3. Update layout.tsx with GA script

### Netlify Analytics

- Built-in analytics available
- Go to Site → Analytics
- View traffic, performance, etc.

---

## Rollback Deployment

If something goes wrong:

1. Go to Netlify dashboard
2. Deploys tab
3. Find previous working deploy
4. Click "Publish deploy"

---

## Performance Optimization

### After Deployment

1. **Enable Brotli Compression** (auto-enabled)
2. **Image Optimization** (using next/image)
3. **CDN Distribution** (auto via Netlify)
4. **Caching Headers** (configured in netlify.toml)

### Monitor Performance

```bash
# Use these tools:
- Google PageSpeed Insights
- GTmetrix
- WebPageTest
- Lighthouse CI
```

---

## Cost Estimate

**Netlify Free Tier:**
- ✅ 100GB bandwidth/month
- ✅ 300 build minutes/month
- ✅ Unlimited sites
- ✅ Free SSL
- ✅ CDN included

**For ASIC website:**
- Estimated traffic: < 10GB/month
- Build time: ~2 minutes
- **Cost: $0/month** (Free tier sufficient)

---

## Support

**Netlify Support:**
- Docs: https://docs.netlify.com
- Community: https://answers.netlify.com

**Next.js Support:**
- Docs: https://nextjs.org/docs
- Deployment: https://nextjs.org/docs/deployment

---

## Quick Commands Reference

```bash
# Local development
npm run dev

# Build locally
npm run build
npm start

# Deploy via CLI
netlify deploy --prod

# Check deployment status
netlify status

# Open site in browser
netlify open:site
```

---

**Selamat deploy! 🚀**

Jika ada masalah, refer to Netlify docs atau contact support.
