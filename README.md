# WoodRidge Real Estate one-page site

A custom, premium one-page real-estate marketing site for **WoodRidge Real Estate Pty Ltd**, built with Next.js App Router, TypeScript and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

For a production check:

```bash
npm run build
npm start
```

## Editing site content

Most client-editable copy is in:

```
/content/site.ts
```

That file contains:

- navigation labels and anchor links
- phone numbers, email addresses and office address
- principal names
- service titles, descriptions, images and links
- trust-strip statements
- optional stats
- current offer copy and expiry dates

### Optional stats

Stats are deliberately blank. A stat only renders when its `value` is non-empty.

Do not add sales counts, awards, ratings, years of experience or other proof points unless supplied and approved by the client.

## Editing listings

Listing data is in:

```
/data/listings.ts
```

The UI calls `getListings(status)` rather than importing a raw list into the section. That adapter is the intended replacement point for a live feed from Rex, Agentbox, VaultRE or another CRM.

The first listing is the supplied real property:

- 11 Angaston Circuit, Bacchus Marsh VIC
- Land
- $425,000

The other five entries are sample records with `isPlaceholder: true`. In development they display a small **Sample** ribbon.

Before launch, replace all five sample entries with verified live data or connect the feed adapter.

## Editing images

See:

```
/public/images/README.md
```

Every image is referenced locally through `next/image`. There are no remote image hosts.

The atmosphere images may be generated or commissioned. The principal portrait, listing photos and final logo must be supplied by the client.

## Enquiry form

The appraisal form posts JSON to:

```
/app/api/enquiry/route.ts
```

The route currently validates the payload, logs it server-side and returns HTTP 200.

Before production, replace the logging stub with one of:

- Resend
- SMTP
- CRM/webhook integration

Do not expose mail credentials in client-side code.

## SEO and accessibility

The root layout contains:

- page metadata
- Open Graph data
- `RealEstateAgent` JSON-LD
- skip link
- Australian English document language

The UI includes visible focus states, semantic landmarks, keyboard-operable tabs and carousel controls, reduced-motion handling, and a focus-trapped mobile navigation drawer.

## TODO / placeholder list

1. **CLIENT TO CONFIRM:** final offer expiry date for free conveyancing. Current placeholder: 31 December 2026.
2. **CLIENT TO CONFIRM:** final offer expiry date for 4% + GST leasing fee. Current placeholder: 31 December 2026.
3. **CLIENT TO CONFIRM:** complete offer terms/eligibility.
4. **CLIENT TO CONFIRM:** opening hours.
5. **CLIENT TO CONFIRM:** Victorian real-estate licence number.
6. **CLIENT TO SUPPLY:** final `/public/images/logo.svg`.
7. **CLIENT TO SUPPLY:** principal portrait `about.jpg`.
8. **CLIENT TO SUPPLY:** listing photos `listing-01.jpg` through `listing-06.jpg`.
9. Replace five placeholder listings with verified properties or a CRM feed.
10. Add final Privacy Policy URL/content.
11. Add final Terms URL/content.
12. Replace footer social `#` links with confirmed Facebook, X, YouTube and Instagram URLs.
13. Confirm production domain if different from `https://www.woodridgere.com.au`; update `metadataBase` and JSON-LD.
14. Connect `/api/enquiry` to Resend, SMTP or CRM.
15. Confirm whether optional business stats should be shown. Values are blank and therefore hidden by default.

## Project structure

```text
app/
  api/enquiry/route.ts
  globals.css
  layout.tsx
  page.tsx
components/
  layout/
    MobileMenu.tsx
    SiteFooter.tsx
    SiteHeader.tsx
    StickyMobileBar.tsx
    TopBar.tsx
  sections/
    AboutTrust.tsx
    Hero.tsx
    Listings.tsx
    OffersAppraisal.tsx
    Services.tsx
  ui/
    Button.tsx
    FormField.tsx
    ListingCard.tsx
    Reveal.tsx
    SectionHeading.tsx
    StatusBadge.tsx
    Tabs.tsx
content/
  site.ts
data/
  listings.ts
public/
  images/
    README.md
next.config.mjs
package.json
postcss.config.js
tailwind.config.ts
tsconfig.json
```
