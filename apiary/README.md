# Apiary Automations

This plain HTML page reuses `../styles.css`, `../script.js`, the SW navigation,
existing cards and buttons, form styles, and portfolio footer. No build step or
additional dependencies are needed.

## Publish on GitHub Pages

Upload the following, preserving their paths:

- `index.html` (updated homepage navigation)
- `styles.css`
- `apiary/index.html`
- `assets/apiary-automations-logo.png`

The existing `script.js`, `assets/favicon.svg`, and `thank-you.html` must remain
in the repository. GitHub Pages serves the directory index at
`https://samuelwebster.tech/apiary/`. Relative asset and homepage links also work
when deployed under a repository subdirectory.

## Inquiry form

The form uses the existing Web3Forms access key and a native HTML POST. Browser
validation requires name, business name, email, and a message; the website is
optional. The `botcheck` field provides the provider's spam protection. The
subject and sender label identify an Apiary free-review request. Successful
submissions use the existing production thank-you page.

No new provider settings are required if the existing key remains active and
allows the production domain. After deployment, submit one inquiry yourself to
verify email delivery and the redirect. Previewing from a local file does not
test hosted routing or guarantee provider acceptance. No test emails were sent
during implementation.

## Verification

The repository has no package manifest, lint task, type checker, or production
build. Check the page at desktop, tablet, and mobile widths, including the menu,
CTA anchors, service grid, workflow steps, and form. The new grids follow the
existing 980px and 760px breakpoints. Local links and asset paths can be checked
without submitting the form.
