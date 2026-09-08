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
