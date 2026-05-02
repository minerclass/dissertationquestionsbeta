# K-12 Educator Survey Landing Page

This folder contains a static, IRB-conscious landing page for the dissertation survey **Pedagogical Friction in the Age of Generative AI**.

The page is for participant orientation only. It does not collect survey responses, store data, use cookies, load analytics, or connect to a backend. Official responses should be collected in the linked Google Form or Microsoft Form after consent language has been finalized and approved.

## Files

- `index.html` - participant-facing landing page and survey pathway links
- `styles.css` - local responsive styling
- `README.md` - maintenance notes

## Updating Survey Links

Open `index.html` and find this comment block:

```html
<!-- Replace the placeholder survey URLs below after the final survey and IRB consent language are approved. -->
<!-- CLASSROOM_SURVEY_URL = "#" -->
<!-- BUILDING_ADMIN_SURVEY_URL = "#" -->
<!-- DISTRICT_SYSTEM_SURVEY_URL = "#" -->
```

Then replace the `href="#"` value in each pathway button with the final Google Forms or Microsoft Forms URL:

- `Go to Classroom-Facing Survey`
- `Go to School-Level Leadership Survey`
- `Go to District/System Survey`

Keep the links as external survey links. Do not add form fields, response collection, analytics, cookies, or tracking scripts to this page.

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
4. Open the live URL and confirm the page, privacy notice, role pathway buttons, and FAQ display correctly.
