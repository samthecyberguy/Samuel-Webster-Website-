# Contact Form Setup

This is a plain HTML/CSS/JavaScript site prepared for GitHub Pages.

## Current GitHub Pages Setup

The contact form uses a normal HTML `POST` action to submit directly to Web3Forms:

```text
https://api.web3forms.com/submit
```

The live GitHub Pages site does not submit the form with JavaScript `fetch`, which avoids browser CORS preflight issues.

The Web3Forms access key is stored in `index.html` as a hidden form field:

```html
<input type="hidden" name="access_key" value="55e2f08d-09cb-45c2-a583-499214f3248a">
```

The form also sends:

```html
<input type="hidden" name="from_name" value="Samuel Webster Portfolio">
<input type="hidden" name="redirect" value="https://samuelwebster.tech/thank-you.html">
<input type="checkbox" name="botcheck" style="display:none">
```

The visitor-facing Subject field remains named `subject`, so no hidden subject field was added. Adding a second `subject` field would conflict with the visitor's entered subject.

## Testing

To test locally, open `index.html` in a browser or serve the folder with a simple static server, fill out the contact form, and submit it. Web3Forms may require you to verify the destination email address before messages are delivered.

After deploying to GitHub Pages, test the live site by submitting the form from the public URL. A successful submission should redirect to `https://samuelwebster.tech/thank-you.html`. If Web3Forms returns an error, confirm that the access key is active in your Web3Forms account.

## Future Serverless API Setup

The sample serverless endpoint is still included for a future deployment on Vercel, Netlify, or another backend/serverless host:

```text
api/contact.js
```

GitHub Pages only serves static files, so `api/contact.js` will not run there by itself. Use Web3Forms for the live GitHub Pages site now, then later deploy the API endpoint on a host that supports serverless functions.
