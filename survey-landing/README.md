# K-12 Educator Survey Landing Page

This folder contains a static, IRB-conscious landing page for the dissertation survey **Pedagogical Friction in the Age of Generative AI**.

The page is for participant orientation only. It does not collect survey responses, store data, use cookies, load analytics, or connect to a backend. Official responses should be collected in the approved survey platform after consent language has been finalized and approved.

## Files

- `index.html` - participant-facing landing page. The survey button stays disabled until the approved form is live.
- `styles.css` - local responsive styling
- `README.md` - maintenance notes

## Activating the Survey Link

Exempt approval is recorded (ER01884). Keep the survey URL out of the public HTML until the approved Microsoft Form is live and its anonymity settings are documented. Then replace the disabled survey notice with that link. Do not add form fields, response collection, analytics, cookies, or tracking scripts to this page. Do not link the earlier 27-question form.

## Updating IRB and Contact Information

The page now states exempt approval and the researcher contacts. Formal consent language remains in the official survey form. `printable-consent.pdf` reproduces the approved survey consent from the submitted attachment 03 (replaced 2026-10-07).

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
