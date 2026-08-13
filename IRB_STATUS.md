# Public Instrument Status

Last verified: 2026-08-13

## Current state

The three public role-specific instrument pages are read-only review copies. They display protocol wording for committee and IRB inspection, but participant data entry, browser recording, local saving, and file export are disabled.

The study remains proposal-stage and pre-IRB. A technically live page does not indicate approval to recruit participants or collect data.

## Controlling review files

The August 13 alignment pass used these protected Drive documents:

- `05A - Classroom Educator Interview and Card Sort - IRB ATTACHMENT`
- `05B - Administrator and District-System Leader Interview - IRB ATTACHMENT`
- `05C - Adult University Student Interview and Card Sort - IRB ATTACHMENT`
- `03 - Miner IRB Consent Forms - PROTECTED WORKING COPY`
- `06 - Data Management and Security Plan - IRB ATTACHMENT`
- `10 - Public Instrument Site Pre-IRB Audit - CURRENT`

## Scope controls

- Classroom-facing educators: interview plus the ten-card scenario sort; no browser-local audio.
- Building administrators and district/system leaders: shared interview protocol; no card sort and no browser-local audio.
- Adult university students: interview plus the same ten-card scenario sort; browser-local audio is limited to the optional closing response and requires confirmed written audio permission.
- Analytic dimension tags remain internal researcher metadata and are not shown or included in participant-facing export previews.
- The public pages do not submit responses to GitHub Pages or another external endpoint.

## Activation gate

Do not enable collection controls until all of the following are complete:

1. Written IRB approval is documented.
2. The approved 05A, 05B, and 05C attachments are compared with the deployed wording.
3. The approved consent and data-management language is compared with the deployed collection, audio, transfer, retention, and deletion behavior.
4. The activation commit is tested locally and then verified on the live GitHub Pages routes.
5. The status and version match are recorded here.
