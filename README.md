# Pedagogical Friction Interview Tool

Static GitHub Pages site for reviewing role-specific interview and card-sort instruments for:

**Pedagogical Friction in the Age of Generative AI: A Mixed Methods Proposal**

The root site is a neutral project entrance and role-selection page. Micah passed the Chapters 1-3 dissertation proposal defense on August 13, 2026. The study is now in post-defense interview-protocol revision and remains pre-IRB approval. Role-specific pages are navigable read-only review copies: wording is visible, but data entry, browser recording, local saving, and export are disabled.

The planned sequence is interview-question revision, committee review, a three-educator rehearsal to assess conversational flow, and an update to the IRB materials. The rehearsal is not represented here as main-study recruitment, participant data collection, or findings.

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
- Standard opening scripts and role-specific prompts aligned to attachments 05A, 05B, and 05C
- Role-specific selected-response and short-answer items
- Disabled response fields retained for wording and layout review
- Standardized follow-up probes rather than AI-generated individualized probing
- Analytic framework tags omitted from participant-facing screens and export previews
- Shared teacher and university-student card-sort activity aligned to the IRB packet
- No card sort in the school- and district-leader protocol
- No browser-local recording on the teacher or leader page
- Live interview recording with audio and video handled through a separate approved process
- University-student browser audio limited to the optional closing response and gated by written recording permission; the page does not capture video
- Review-only navigation through every instrument section

## Privacy and IRB Notes

This static version does not use a server, database, account system, or third-party transcription service.

Current limits:

- The pages do not receive or transmit participant responses.
- Collection controls are disabled until written IRB approval and a version-match check.
- Teacher and leader pages do not expose browser microphone or camera capture.
- The student page contains one browser-local recorder for the optional closing response, but it is disabled in the current review state.
- None of the public pages captures video; consented live-session audio-and-video recording uses the separate approved process.
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
- `dashboard.html` - existing analysis dashboard artifact; intentionally not linked from participant-facing pages
- `.nojekyll` - keeps GitHub Pages from applying Jekyll processing

## Current Review Flow

1. A committee or IRB reviewer selects a role-specific page.
2. The reviewer navigates through the complete instrument wording.
3. Disabled controls demonstrate the proposed response formats without storing data.
4. The approved IRB attachments, consent forms, and data-management plan are compared with the deployed version.
5. Collection is enabled only in a later, documented activation commit after written approval.

## Methodological Design Notes

The app intentionally avoids fully dynamic AI-generated follow-up questions. Standardized follow-up probes preserve consistency across participants and are easier to defend in a mixed methods dissertation design.

Building-level administrators and district or system-level leaders complete the same institutional protocol. The leadership role and exported role-group fields preserve their separation for analysis across role groups.

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
