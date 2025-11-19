# Google Search Console Setup Guide
**For: Core Visuals NYC**
**Created:** November 19, 2025

---

## 🎯 What This Does

Google Search Console tells Google your site exists and lets you:
- Submit your sitemap (so Google indexes all your pages)
- See what searches bring people to your site
- Monitor site health (errors, mobile issues, security)
- Request re-indexing when you update pages
- Track search performance (clicks, impressions, rankings)

**Time Required:** 15-20 minutes
**Cost:** Free

---

## 📋 Before You Start

You need:
- ✅ A Google account (personal Gmail or business account)
- ✅ Access to your website files (you have this)
- ✅ Your domain: `corevisualsnyc.com`
- ✅ Your sitemap URL: `https://corevisualsnyc.com/sitemap.xml`

---

## 🚀 Step-by-Step Setup

### Step 1: Go to Search Console

1. Open a new browser tab
2. Go to: https://search.google.com/search-console
3. Sign in with your Google account (if not already signed in)

---

### Step 2: Add Your Property

You'll see a screen asking "Select property type"

**Choose: Domain** (left option)

1. Enter: `corevisualsnyc.com` (without https://)
2. Click **Continue**

**Why Domain vs URL Prefix?**
- Domain property = covers all versions (http, https, www, non-www)
- URL Prefix = only one specific URL
- Domain is better for you

---

### Step 3: Verify Ownership (DNS Method)

Google will show you a DNS TXT record. This proves you own the domain.

**IMPORTANT:** You need access to your domain DNS settings. Where did you buy your domain?

#### If You Have Namecheap:
1. Copy the TXT record Google gives you (looks like: `google-site-verification=abc123xyz...`)
2. Go to Namecheap dashboard
3. Click **Domain List** → Select `corevisualsnyc.com`
4. Click **Advanced DNS**
5. Click **Add New Record**
   - Type: **TXT Record**
   - Host: **@**
   - Value: **Paste the Google verification string**
   - TTL: **Automatic**
6. Click **Save All Changes**
7. Go back to Google Search Console
8. Click **Verify**

#### If You Have GoDaddy:
1. Copy the TXT record Google gives you
2. Go to GoDaddy DNS Management
3. Click **Add** → Select **TXT**
   - Name: **@**
   - Value: **Paste the Google verification string**
   - TTL: **1 Hour**
4. Click **Save**
5. Go back to Google Search Console
6. Click **Verify**

#### If You Have Cloudflare:
1. Copy the TXT record Google gives you
2. Go to Cloudflare dashboard
3. Select your domain
4. Click **DNS** tab
5. Click **Add Record**
   - Type: **TXT**
   - Name: **@**
   - Content: **Paste the Google verification string**
   - TTL: **Auto**
6. Click **Save**
7. Go back to Google Search Console
8. Click **Verify**

**Note:** DNS changes can take up to 24 hours, but usually work in 5-15 minutes.

If verification fails immediately, wait 10 minutes and try again.

---

### Step 4: Alternative Verification (HTML File Method)

**If DNS is too complicated, use this method instead:**

1. Google will give you an HTML file to download (like `google1234567890abcdef.html`)
2. Download that file
3. Upload it to your website root directory (same folder as `index.html`)
4. Go back to Google Search Console
5. Click **Verify**

**To upload the file:**
```bash
# If you're using GitHub Pages, commit and push:
git add google*.html
git commit -m "Add Google Search Console verification file"
git push
```

Then wait 2-3 minutes for GitHub to deploy, and click Verify in Search Console.

---

### Step 5: Submit Your Sitemap

Once verified, you'll see the Search Console dashboard.

1. Click **Sitemaps** in the left sidebar
2. Under "Add a new sitemap", enter: `sitemap.xml`
3. Click **Submit**

**What happens next:**
- Google will fetch your sitemap within 24 hours
- Your pages will start appearing in search results in 3-7 days
- Full indexing takes 2-4 weeks

---

## ✅ Confirmation

You'll know it's working when:

**Immediately:**
- Dashboard shows "Property verified" ✅
- Sitemap shows "Success" status

**Within 24-48 hours:**
- Coverage report shows pages discovered
- You'll see data in Performance report (clicks, impressions)

**Within 7 days:**
- Search `site:corevisualsnyc.com` on Google
- You should see all your pages listed

---

## 🎯 What to Check Weekly

Once set up, check Search Console weekly:

1. **Coverage Report** - Are all pages indexed?
2. **Performance Report** - What searches bring traffic?
3. **Enhancements** - Any mobile usability issues?
4. **Security & Manual Actions** - Any warnings?

---

## 🚨 Troubleshooting

### "Verification Failed"
- Wait 10-15 minutes after adding DNS record
- Try clicking Verify again
- Check you pasted the full TXT record (no spaces, no line breaks)

### "Sitemap Could Not Be Read"
- Check the URL: https://corevisualsnyc.com/sitemap.xml
- Make sure it loads in your browser
- Wait 24 hours and check again (sometimes takes time)

### "Some Pages Not Indexed"
- Normal! Google indexes gradually
- Check "Coverage" report for errors
- Some pages (like 404.html, food.html with noindex) won't be indexed—that's correct

---

## 📊 Next Steps After Setup

1. **Wait 7 Days** - Let Google index your site
2. **Check Performance** - See what keywords bring traffic
3. **Monitor Coverage** - Make sure all pages are indexed
4. **Submit New Pages** - When you add blog posts, request indexing

---

## 🔗 Quick Reference

**Search Console Dashboard:**
https://search.google.com/search-console

**Your Sitemap URL:**
https://corevisualsnyc.com/sitemap.xml

**Verification Status:**
Search Console → Settings → Ownership verification

**Submit New Pages:**
Search Console → URL Inspection → Enter URL → Request Indexing

---

## 💡 Pro Tips

1. **Install Browser Extension** - "Search Console Helper" Chrome extension for quick access
2. **Enable Email Alerts** - Get notified of critical issues
3. **Link to Google Analytics** - Connect GA4 for cross-platform insights
4. **Check Mobile Usability** - Your site is mobile-friendly, but verify Google agrees
5. **Use URL Inspection Tool** - Test individual pages before submitting sitemap

---

## ❓ Need Help?

If you get stuck:
1. Take a screenshot of the error
2. Check what step you're on
3. Try the HTML file verification method (simpler than DNS)
4. Search Console Help: https://support.google.com/webmasters

**Most Common Issue:** DNS verification timing. Just wait 10-30 minutes and try again.

---

**Ready to start?** Open https://search.google.com/search-console and follow Step 1 above!
