# SaaS Technical Support Services

Static GitHub Pages page at `https://samuelwebster.tech/saas-support/`.
For a local preview, open `saas-support/index.html` directly. No build, package
installation, framework, or additional backend is required.

## Upload to GitHub

Preserve these exact paths:

- `index.html` (homepage navigation, service card, and updated Tier 2 history)
- `apiary/index.html` (additional navigation link)
- `saas-support/index.html`
- `saas-support/styles.css`
- `saas-support/script.js`
- `saas-support/thank-you.html`

The existing root `styles.css`, `script.js`, favicon, and headshot must remain in
place. They were reused without edits. You do not need to upload `work/`,
`outputs/`, this README, or the intentionally broken local contact-form demo.

The directory index provides `/saas-support/` on GitHub Pages. Explicit
`index.html` navigation links also work when opening the site as local files.
There was no sitemap or package/build configuration to update.

## Inquiry behavior

The page reuses the existing native Web3Forms HTML POST and public form access
key. No fetch handler, private email credential, or new form provider was added.
The key's existing destination inbox is reused. The hidden sender label and
subject identify SaaS support inquiries.

Browser validation requires a full name, valid email, company name, and message.
The website and support-volume fields are optional. Pricing buttons select
Pilot or Ongoing Support; visitors can change that choice. A hidden `botcheck`
checkbox retains provider spam protection.

Web3Forms handles provider validation errors on its response page. A successful
submission redirects to `https://samuelwebster.tech/saas-support/thank-you.html`.
This native flow preserves the existing approach that avoids fetch/CORS issues.
A connection failure displays the browser's network error rather than a false
success message. The form never clears or announces success before navigation.

After GitHub Pages deployment, send a real inquiry to confirm that the existing
provider key is active, accepts the production domain, delivers to
`samthecyberguy@protonmail.com`, and redirects correctly. No provider setting
change is expected. Live delivery cannot be established by a mocked local test.

## Verification

Local links, assets, and anchors were checked across the homepage, Apiary, and
new service and thank-you pages. Automated browser checks cover 1440, 1280,
1024, 768, 390, and 320px widths; image loading; horizontal overflow; the mobile
menu; expandable FAQs; pricing selections; required fields; email validation;
and the form's native POST with a simulated success redirect. The POST was
intercepted, so no email was sent. Desktop and mobile screenshots are in
`outputs/saas-support-1440.png` and `outputs/saas-support-390.png`.

The regression script in `work/qa-saas-support.cjs` uses the locally bundled
Playwright runtime and Chrome. Its runtime paths are machine-specific and are
not website dependencies. There is no repository lint or production build task.
