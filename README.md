# Pedagogical Friction Interview Tool

Static GitHub Pages tool for collecting structured and reflective responses for:

**Pedagogical Friction in the Age of Generative AI: A Mixed Methods Proposal**

The root site is designed as a neutral project entrance and role-selection page. Role-specific pages provide the intake, selected-response, reflective interview, card-sort, and export workflows. The structure supports the proposed dissertation study while keeping participant data local to the browser until the participant or researcher downloads an export.

## Live Site

Expected GitHub Pages URL:

`https://minerclass.github.io/dissertationquestionsbeta/`

Role-specific participant URLs:

- University student: `https://minerclass.github.io/dissertationquestionsbeta/university/`
- K-12 teacher: `https://minerclass.github.io/dissertationquestionsbeta/teacher.html`
- School and district leader: `https://minerclass.github.io/dissertationquestionsbeta/principal.html`

Researcher review URL:

- Researcher overview: `https://minerclass.github.io/dissertationquestionsbeta/researcher/`
- Dissertation sites dashboard: `https://minerclass.github.io/dissertationquestionsbeta/dissertation-sites/`
- Conference presentations hub: `https://minerclass.github.io/conference-presentations/`

Survey orientation URL:

- K-12 educator survey landing page: `https://minerclass.github.io/dissertationquestionsbeta/survey-landing/`

## What Changed

The front page has been rebuilt as a readable, dependency-free static project entrance instead of a combined interview instrument. The goal is to orient participants without shaping their responses before they enter a role-specific page.

The role-specific apps now include:

- Consent and local-data notice screens
- Standard opening scripts and role-specific closing questions aligned to the IRB packet
- Role-specific selected-response and short-answer items
- Typed or browser-local recorded reflection prompts
- Standardized follow-up probes rather than AI-generated individualized probing
- Researcher-only framework tags retained in structured exports but hidden from participant-facing screens
- Shared teacher and university-student card-sort activity aligned to the IRB packet
- No card sort in the school- and district-leader protocol
- Review screen
- JSON and Markdown export
- Local draft saving through browser localStorage

## Privacy and IRB Notes

This static version does not use a server, database, account system, or third-party transcription service.

Important limits:

- Responses stay in the participant's browser until exported.
- Audio recording uses the browser's local `MediaRecorder` API when supported.
- Audio is not automatically transcribed.
- Audio is kept as a current-session browser download, not saved into the long-term local draft.
- Participants or researchers should type, paste, or revise transcript notes before export.
- JSON and Markdown exports include an audio manifest, but audio files should be downloaded separately when recordings are used.
- Exported files must be transferred using an IRB-approved process.
- The consent form should explain recording, export, retention, deletion, and secure transfer procedures.

Do not use the app for live dissertation data collection until the final protocol, consent language, data handling process, and IRB approval are in place.

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

## Suggested Research Flow

1. Participant reviews consent language.
2. Researcher or participant selects role.
3. Participant completes quick response items.
4. Participant types or records reflection responses.
5. Participant answers standardized follow-up probes.
6. Teacher and university-student participants complete the shared card sort.
7. Participant reviews export preview.
8. Participant downloads JSON or Markdown.
9. Export is transferred through the approved research workflow.

## Methodological Design Notes

The app intentionally avoids fully dynamic AI-generated follow-up questions. Standardized follow-up probes preserve consistency across participants and are easier to defend in a mixed methods dissertation design.

Building-level administrators and district or system-level leaders complete the same institutional protocol. The leadership role and exported role-group fields preserve their separation for within-case analysis.

The prompt data model is aligned to the Pedagogical Friction Framework from the start so exported responses are easier to code across:

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
2. In repository settings, enable GitHub Pages.
3. Use `Deploy from a branch`.
4. Select `main` and `/ root`.
