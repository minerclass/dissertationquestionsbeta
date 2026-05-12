# K-12 Educator Survey Landing Page

This folder contains a static, IRB-conscious landing page for the dissertation survey **Pedagogical Friction in the Age of Generative AI**.

The page is for participant orientation only. It does not collect survey responses, store data, use cookies, load analytics, or connect to a backend. Official responses should be collected in the linked Google Form or Microsoft Form after consent language has been finalized and approved.

## Files

- `index.html` - participant-facing landing page with the official survey link
- `styles.css` - local responsive styling
- `README.md` - maintenance notes

## Updating the Survey Link

Open `index.html` and find this comment block:

```html
<!-- Official survey URL: https://forms.gle/uhV4Q32TXcidmHMg6 -->
```

Then update the `href` value in the `Open the Official Survey` button if the official Google Form changes.

Keep the link as an external survey link. Do not add form fields, response collection, analytics, cookies, or tracking scripts to this page.

## Updating IRB and Contact Placeholders

Before sharing the page publicly for participant recruitment, replace:

- `ADD_CONTACT_EMAIL`
- `ADD_IRB_LANGUAGE_AFTER_APPROVAL`

Formal consent language should remain in the official survey form before participants begin.

## Local Preview

This page is plain HTML and CSS. It can be opened directly in a browser:

`survey-landing/index.html`

No build step is required.

## GitHub Pages Deployment

If this repository is deployed from the repository root on GitHub Pages, the landing page will be available at:

`https://minerclass.github.io/dissertationquestionsbeta/survey-landing/`

To deploy:

1. Commit and push the `survey-landing/` folder.
2. Confirm GitHub Pages is enabled for the repository.
3. Use `Deploy from a branch`, branch `main`, folder `/ root`.
4. Open the live URL and confirm the page, privacy notice, official survey button, and FAQ display correctly.
