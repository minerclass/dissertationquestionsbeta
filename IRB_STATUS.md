# Public Instrument Status

Last verified: 2026-08-23

## Current state

The three public role-specific instrument pages are read-only review copies. They display protocol wording for committee and IRB inspection, but participant data entry, browser recording, local saving, and file export are disabled.

The study remains proposal-stage and pre-IRB. A technically live page does not indicate approval to recruit participants or collect data.

## Controlling review files

The August 13 alignment pass used these protected Drive documents:

- `Miner Dissertation Proposal Chapters 1-3 - Revision Working Copy - July 24 -'26`
- `02 - Miner IRB Narrative - PROTECTED WORKING COPY`
- `05A - Classroom Educator Interview and Card Sort - IRB ATTACHMENT`
- `05B - Administrator and District-System Leader Interview - IRB ATTACHMENT`
- `05C - Adult University Student Interview and Card Sort - IRB ATTACHMENT`
- `03 - Miner IRB Consent Forms - PROTECTED WORKING COPY`
- `06 - Data Management and Security Plan - IRB ATTACHMENT`
- `10 - Public Instrument Site Pre-IRB Audit - CURRENT`

## Scope controls

- With written permission, live interview sessions may be recorded with audio and video through the separate approved recording process; participants may decline recording and still take part.
- Classroom-facing educators: interview plus the ten-card scenario sort; no browser-local recording.
- Building administrators and district/system leaders: shared interview protocol; no card sort and no browser-local recording.
- Adult university students: interview plus the same ten-card scenario sort; browser-local audio is limited to the optional closing response and requires confirmed written recording permission.
- The public pages do not capture video.
- Analytic dimension tags remain internal researcher metadata and are not shown or included in participant-facing export previews.
- The public pages do not submit responses to GitHub Pages or another external endpoint.

## Change log

### 2026-08-23 - Export labels and survey contact block

Two corrections were applied to participant-facing text. **No interview item wording
changed**, and the instrument question sets remain those of the current 05A, 05B, and 05C
IRB attachments.

- **Markdown export headers.** The classroom-facing educator and leader exports carried the
  study's analytic framework vocabulary in their titles, in a file a participant generates
  and can read. Renamed to neutral interview labels. The adult university student export
  was already neutral and is unchanged. Analytic dimension tags remain internal researcher
  metadata and are still excluded from every export payload, which was verified against the
  export builder rather than assumed.
- **Survey landing contact block.** The page carried placeholder text where researcher,
  chair, and Institutional Research Board contact information belongs. The block is now
  populated verbatim from `03 - Miner IRB Consent Forms - PROTECTED WORKING COPY`. The
  survey launch control remains disabled and the page still states that the survey opens
  after IRB approval.

These close findings 1 and 3 of `10 - Public Instrument Site Pre-IRB Audit - CURRENT`.
Findings 1 and 2 of that audit were otherwise resolved by the 2026-08-13 alignment pass.

**Cross-repository note.** Finding 4 of the same audit concerned the proposal companion at
`minerclass/pedagogical-friction`, which loaded Font Awesome from `cdnjs.cloudflare.com` and
disclosed visitor network metadata to a third party. That asset was vendored locally on
2026-08-23. No third-party asset host remains on either site. All four audit findings are
now closed.

The study remains proposal-stage and pre-IRB. Nothing in this entry authorizes recruitment
or data collection.

## Activation gate

Do not enable collection controls until all of the following are complete:

1. Written IRB approval is documented.
2. The approved 05A, 05B, and 05C attachments are compared with the deployed wording.
3. The approved consent and data-management language is compared with the deployed collection, audio/video recording, transfer, retention, and deletion behavior.
4. The activation commit is tested locally and then verified on the live GitHub Pages routes.
5. The status and version match are recorded here.
