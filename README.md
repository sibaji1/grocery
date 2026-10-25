# Mahalaxmi Stores app

Installable web app (PWA) with customer pre-orders and a shop owner orders screen.

## Try it right now (demo mode)
Leave config.js empty. Open the site, place an order, then open "Shop owner login" at the bottom
of the page (or "Owner" in the top bar). Sign in with owner@demo.shop / demo1234.
Demo mode keeps orders on one device only, so it is for testing the screens.

## Take real orders (about 15 minutes, free)
1. Create a free project at supabase.com.
2. Authentication > Users > Add user: enter the owner's email and a strong password, tick "Auto confirm".
3. Authentication > Sign In / Providers (or Settings): turn OFF "Allow new users to sign up".
4. SQL Editor: open supabase/setup.sql, replace OWNER_EMAIL (2 places) with the owner's email, paste, Run.
5. Project Settings > API: copy the Project URL and the "anon public" key into config.js.
   The anon key is meant to be public. Row level security (the SQL above) is what protects the orders:
   customers can only add orders, only the owner's login can read or change them.
6. Host the folder over HTTPS (Netlify Drop: app.netlify.com/drop) and open the site.

## Install in Chrome
Desktop: install icon at the right end of the address bar. Android: menu, then Install app.
The shop owner can install it too and long-press the icon for the "Shop orders" shortcut.

## Notes
- The owner screen refreshes every 20 seconds and shows the count of new orders in the tab title.
- Handwritten list photos are stored with the order and open from the order card.
- When you change files after hosting, upload the folder again; the app fetches fresh files when online.
- Replace the sample address, phone number, UPI ID (yourshop@upi) and products in index.html.
