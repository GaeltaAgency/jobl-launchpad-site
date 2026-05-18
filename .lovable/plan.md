# JOBL Website Plan (for AWS SES approval)

A simple, polished multi-page marketing site presenting JOBL as a real, live SaaS product. Designed to satisfy AWS SES reviewers (clear product description, contact details, privacy policy, transactional email use case).

## Pages (separate TanStack routes)

1. **/** — Home / landing
   - Hero: JOBL logo + tagline "All-in-one workforce & project management for construction and subcontracting"
   - Short product summary, primary CTA (Contact us), secondary (Learn more)
   - Feature highlights grid (marketplace, CRM, invoicing, timesheets, contracts, certifications, accommodation, payments)
   - Industries served, short "how it works" section, footer

2. **/about** — About JOBL
   - Mission: digitalize and automate subcontracting end-to-end
   - What the platform does, who it serves (companies, subcontractors, freelancers)
   - Company contact block (Filip Nádaždy, email, phone)

3. **/features** — Features overview
   - Detailed list of modules with short descriptions and icons

4. **/contact** — Contact
   - Email: info@jobl.eu, Phone: +421 940 629 978, Contact person: Filip Nádaždy
   - Simple contact form (frontend only — mailto or static; no backend in this scope)

5. **/privacy** — Privacy Policy
   - GDPR-aligned policy covering data collected, purposes, lawful basis, retention, user rights, contact, cookies
   - Explicit section on **transactional email**: account verification, OTP/login codes, password resets, job notifications, billing notifications, security alerts — sent only to users who register or interact with the platform; bounce/complaint handling via AWS SES + SNS; suppression list
   - Unsubscribe note: transactional emails are required for service operation; marketing emails (if any) include opt-out

6. **/terms** — Terms of Service (concise)
   - Acceptable use, account, liability disclaimer, governing law, contact

7. **/email-policy** — Email & Anti-spam policy (helps SES reviewer)
   - Only sends to registered/interacting users
   - Types of emails sent (transactional list above)
   - Bounce/complaint handling + suppression
   - Contact for abuse: info@jobl.eu

Shared **Header** (logo + nav: Home, Features, About, Contact) and **Footer** (links to Privacy, Terms, Email Policy, contact info) via `__root.tsx`.

## Design direction

- Brand: gradient purple→blue from supplied logo (`#7B2FF7 → #5E3BEE → #2FB8FF`)
- Clean, modern SaaS look: white background, deep purple primary, generous spacing, rounded cards, subtle shadows, gradient accents on hero/CTAs
- Typography: modern geometric sans (Inter or similar via system stack)
- Use shadcn `Button`, `Card`, `Input`, `Textarea`, `Label`
- All colors via semantic tokens in `src/styles.css` (oklch)

## Assets

- Copy `jobl_horizontal.svg` and `jobl_icon.svg` from uploads to `src/assets/`
- Use horizontal logo in header, icon for favicon (`public/favicon.svg`)
- No stock photos needed; gradient + iconography (lucide-react) is enough

## SEO / head

- Per-route `head()` with unique title, description, og:title, og:description, og:url, canonical (leaf only)
- Root: viewport, charset, og:site_name "JOBL", default Organization JSON-LD with contact info

## Out of scope (explicitly)

- No backend, no Lovable Cloud, no auth, no DB
- Contact form is non-functional (or uses `mailto:`); SES wiring itself is handled in the actual JOBL product, not this marketing site
- No blog, no pricing page

## Technical notes

- TanStack Start file-based routes in `src/routes/` (`index.tsx`, `about.tsx`, `features.tsx`, `contact.tsx`, `privacy.tsx`, `terms.tsx`, `email-policy.tsx`)
- `__root.tsx` renders `<Header />`, `<Outlet />`, `<Footer />` inside the existing providers
- Replace placeholder in `src/routes/index.tsx`
- Update brand tokens in `src/styles.css`