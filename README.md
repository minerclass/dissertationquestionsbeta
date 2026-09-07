# Pedagogical Friction Interview Tool

Static GitHub Pages site for reviewing role-specific interview and card-sort instruments for:

**Pedagogical Friction in the Age of Generative AI: A Mixed Methods Proposal**

The root site is a neutral project entrance and role-selection page. Micah passed the Chapters 1-3 dissertation proposal defense on August 13, 2026. The study is now in post-defense interview-protocol revision and remains pre-IRB approval. Role-specific pages are navigable read-only review copies: wording is visible, but data entry, browser recording, local saving, and export are disabled.

The 05A-05C interview questions have received chair approval at the question level and are synchronized here for review. The separate working 05F card sort is synchronized for chair and IRB review but has not yet been approved. The study remains pre-IRB; these pages do not represent recruitment, participant data collection, or findings.

## Live Site

Expected GitHub Pages URL:

`https://minerclass.github.io/dissertationquestionsbeta/`

Role-specific participant URLs:

- University student: `https://minerclass.github.io/dissertationquestionsbeta/university/`
- K-12 classroom-facing educator: `https://minerclass.github.io/dissertationquestionsbeta/teacher.html`
- School and district leader: `https://minerclass.github.io/dissertationquestionsbeta/principal.html`

Researcher review URL:

- Researcher overview: `https://minerclass.github.io/dissertationquestionsbeta/researcher/`
- Dissertation sites dashboard: `https://minerclass.github.io/dissertationquestionsbeta/dissertation-sites/`
- Conference presentations hub: `https://minerclass.github.io/conference-presentations/`

Survey orientation URL:

- K-12 educator survey landing page: `https://minerclass.github.io/dissertationquestionsbeta/survey-landing/`

## What Changed

The front page has been rebuilt as a readable, dependency-free static project entrance instead of a combined interview instrument. The goal is to orient participants without shaping their responses before they enter a role-specific page.

The role-specific pages now include:

- A persistent `UNDER REVIEW — NOT COLLECTING RESPONSES` banner
- Consent, eligibility, and local-data notices aligned to the protected IRB packet
- Role-specific opening scripts reproduced verbatim from the Interview Opening of attachments 05A, 05B, and 05C, read after the separate written-consent procedure
- Chair-approved 05A-05C interview questions and role-specific probes
- Disabled response fields and export controls retained only as illustrations for wording and layout review; they are not the approved collection method
- Standardized follow-up probes rather than AI-generated individualized probing
- Analytic framework tags omitted from participant-facing screens and export previews
- Separate optional shared ten-card 05F sort for classroom-facing educators and adult university students, with the exact two placement dimensions and post-sort prompts
- No card sort in the school- and district-leader protocol
- No browser-local recording on any instrument page
- Live interview audio recording handled through a separate approved process
- Review-only navigation through every instrument section

## Privacy and IRB Notes

This static version does not use a server, database, account system, or third-party transcription service.

Current limits:

- The pages do not receive, retain, or transmit participant responses, consistent with the Public-Site Boundary in attachment 06.
- Collection controls remain disabled under the current protocol. Enabling them requires explicit protocol authorization and applicable chair/IRB review before implementation.
- Teacher and leader pages do not expose browser microphone or camera capture.
- The student page contains no browser-local recording code; written permission for a separately handled live audio recording remains documented in the review flow.
- None of the public pages captures audio or video; consented live-session audio recording uses the separate approved process.
- No server, database, account system, analytics service, or third-party transcription service is used by the role-specific pages.
- The activation checklist and scope boundaries are recorded in `IRB_STATUS.md`.

Do not use the app for formal recruitment or live dissertation data collection until the final protocol, consent language, data handling process, and IRB approval are in place.

## Files

- `index.html` - neutral project entrance and role-selection page
- `university/index.html` - university student version of the instrument
- `teacher.html` - teacher-only version of the instrument
- `principal.html` - shared school- and district-leader version of the institutional protocol
- `researcher/index.html` - researcher-facing overview and review links
- `dissertation-sites/index.html` - researcher-facing dashboard of public dissertation-related GitHub Pages sites
- `survey-landing/index.html` - static participant-facing orientation page for the K-12 educator survey
- `survey-landing/styles.css` - local styling for the survey landing page
- `survey-landing/README.md` - notes for updating survey links and deployment
- `survey-landing/printable-consent.pdf` - printable copy of the participant consent shown at the start of the survey
- `dashboard.html` - existing analysis dashboard artifact; intentionally not linked from participant-facing pages
- `.nojekyll` - keeps GitHub Pages from applying Jekyll processing

## Current Review Flow

1. A committee or IRB reviewer selects a role-specific page.
2. The reviewer navigates through the complete instrument wording.
3. Disabled controls illustrate question formats only. The approved protocol does not authorize participant response entry, browser recording, participant file upload, or participant-generated export from these pages.
4. The approved IRB attachments, consent forms, and data-management plan are compared with the deployed version.
5. These pages remain a read-only display. Enabling any collection capability would require explicit protocol authorization, not merely written approval or a change of the status banner.

## Methodological Design Notes

The app intentionally avoids fully dynamic AI-generated follow-up questions. Standardized follow-up probes preserve consistency across participants and are easier to defend in a mixed methods dissertation design.

Building-level administrators and district or system-level leaders complete the same institutional protocol. The role-identification prompt preserves the distinction between building and district/system perspectives. These pages produce no response exports.

The prompt data model retains internal analytic mappings to the Pedagogical Friction Framework, but those labels are not shown to participants or included in participant-facing export previews:

- noetic friction
- rhetorical friction
- existential friction
- infrastructural friction
- equity and access
- policy and governance
- authorship and accountability

## Deployment

This is a static site. To publish on GitHub Pages:

1. Push changes to `main`.
2. The `Deploy to GitHub Pages` workflow publishes the static tree through GitHub Actions.
3. Verify the exact live routes and IRB-status markers after the deployment completes.

## September 7 verification follow-up

The current review source is aligned to the September chair-review packet `irb-chair-review-full-form-aligned-final-2026-09-03`. The September 5 commit restored the openings, eligibility, and probes. The September 7 follow-up removes residual approval-only activation wording and reinforces read-only controls from initial page load. Collection remains disabled. Local and deployed verification are separate; see `IRB_STATUS.md`.
