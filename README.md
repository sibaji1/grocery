# Mahalaxmi Stores app

Installable web app (PWA). Chrome only offers "Install" when the files are served over HTTPS.

## Host it (free, about 2 minutes)
- Netlify: open app.netlify.com/drop and drag this whole folder onto the page.
- Or GitHub Pages / Vercel / Cloudflare Pages: upload the folder contents so index.html is at the site root.

## Install in Chrome
- Desktop: open the site, click the install icon at the right end of the address bar, then Install.
- Android: open the site, tap the menu (three dots), then Install app.

## Test locally
python3 -m http.server 8080  then open http://localhost:8080 (localhost counts as secure, so Install works).

## Before going live
Replace the sample address, phone number, UPI ID (yourshop@upi) and products in index.html.
