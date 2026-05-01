# Pedagogical Friction Interview Tool

Static GitHub Pages tool for collecting structured and reflective responses for:

**Pedagogical Friction in the Age of Generative AI: A Mixed Methods Proposal**

The app is designed as a hybrid intake, selected-response, reflective interview, card-sort, and export workflow. It supports the proposed dissertation study while keeping participant data local to the browser until the participant or researcher downloads an export.

## Live Site

Expected GitHub Pages URL:

`https://minerclass.github.io/dissertationquestionsbeta/`

## What Changed

The front page has been rebuilt as a readable, dependency-free static app instead of a generated bundled HTML artifact.

The app now includes:

- Consent and local-data notice screen
- Role selection for university students, K-12 teachers, building administrators, and district leaders
- Short shared definitions for productive friction, exclusionary friction, authorship, and AI assistance
- Role-specific selected-response and short-answer items
- Typed or browser-local recorded reflection prompts
- Standardized follow-up probes rather than AI-generated individualized probing
- Framework tags behind each prompt, including noetic, rhetorical, existential, infrastructural, equity, policy, and authorship
- Card-sort activity with productive friction and AI-use legitimacy placements
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

- `index.html` - main local-first interview and card-sort tool
- `teacher.html` - teacher-only version of the instrument
- `principal.html` - principal and school-leader version of the instrument
- `dashboard.html` - existing analysis dashboard artifact
- `.nojekyll` - keeps GitHub Pages from applying Jekyll processing

## Suggested Research Flow

1. Participant reviews consent language.
2. Researcher or participant selects role.
3. Participant completes quick response items.
4. Participant types or records reflection responses.
5. Participant answers standardized follow-up probes.
6. Participant completes card sort.
7. Participant reviews export preview.
8. Participant downloads JSON or Markdown.
9. Export is transferred through the approved research workflow.

## Methodological Design Notes

The app intentionally avoids fully dynamic AI-generated follow-up questions. Standardized follow-up probes preserve consistency across participants and are easier to defend in a mixed methods dissertation design.

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
