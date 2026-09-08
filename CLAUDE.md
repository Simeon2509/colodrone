# ColoDrone

Drone photography marketing site for the Denver real estate market (colodrone.com).

## Stack
Next.js 14.2.3, React 18.3.1, TypeScript. Deployed on Vercel via push to `main` on GitHub (`Simeon2509/colodrone`).

## Commands
- `npm run dev` — local dev server
- `npm run build` — production build; run this before pushing

## Contact form
Uses EmailJS (service `service_rwnxrgo`, public key `lg5qtatFPjG13S6I5` — free tier, 2-template limit, already at max):
- `template_enc9gbw` — booking form
- `template_r2sdyda` — contact form

Both templates send to `{{to_email}}` twice per submission: once to the client, once to `colodroneshop@gmail.com` (the business notification address — keep this consistent across `ContactForm.tsx`, `BookingClient.tsx`, `Footer.tsx`, `page.tsx`, and `layout.tsx`'s structured data; these drifted out of sync once already).

## Known gaps
- Service pages reference gallery images under `/images/` that don't exist yet.
- Blog post detail pages may be incomplete.

## Hosting & DNS
Deployed on Simeon's personal Vercel account. Domain DNS is on Simeon's personal Porkbun account (porkbun.com).

## Workflow
Once a change is built and verified (`npm run build`), commit and push without stopping to ask for confirmation.

## Sibling sites
This is one of four marketing sites Simeon runs the same way: denverwebcrew.com, sillygoosepottery.com, and piratetaylorsmarine.com. They share the general Next.js/Vercel/Porkbun setup, but **each site's contact-form backend is different** (this one uses EmailJS; others use Resend or Formspree — check that site's own `CLAUDE.md`, don't assume). Pirate Taylor's Marine is also on fully separate GitHub/Vercel/Porkbun accounts, not Simeon's personal ones.
