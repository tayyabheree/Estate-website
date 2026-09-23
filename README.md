# WoodRidge Real Estate

A self-contained one-page presentation site for **WoodRidge Real Estate Pty Ltd**, built with Next.js, TypeScript and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

For a production build:

```bash
npm run build
npm start
```

## Content

General site copy, contact details, service descriptions and offer messaging live in:

```text
/content/site.ts
```

The current property spotlight lives in:

```text
/data/listings.ts
```

The listing adapter remains intentionally small so a Rex, Agentbox, VaultRE or other property feed can replace it later without changing the page design.

## Images

All visual assets used by the website are already stored locally in:

```text
/public/images
```

The live design uses:

- `hero.jpg`
- `service-sales.jpg`
- `service-leasing.jpg`
- `service-newhomes.jpg`
- `service-invest.jpg`
- `appraisal-bg.jpg`

There are no required portrait, logo or listing-photo assets. The WoodRidge wordmark is rendered typographically so the presentation is complete without an external logo file.

## Appraisal form

The appraisal form validates in the browser and prepares a pre-addressed email enquiry to WoodRidge using the visitor's email application. This keeps the presentation fully functional without external mail-service credentials.

## SEO and accessibility

The site includes metadata, Open Graph data, `RealEstateAgent` JSON-LD, semantic landmarks, one H1, visible focus states, a skip link, reduced-motion support and a focus-trapped mobile menu.

## Main structure

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
    Reveal.tsx
    SectionHeading.tsx
content/
  site.ts
data/
  listings.ts
public/
  images/
    README.md
```
