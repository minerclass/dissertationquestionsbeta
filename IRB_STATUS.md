# Public Instrument Status

Last verified: 2026-09-02

## Current state

The three public role-specific instrument pages are read-only review copies. They display protocol wording for committee and IRB inspection, but participant data entry, browser recording, local saving, and file export are disabled.

The study remains proposal-stage and pre-IRB. A technically live page does not indicate approval to recruit participants or collect data.

## Controlling review files

The September 2 alignment pass used these current chair-review documents:

- `05A - Classroom-Facing Educator Interview Protocol - QUESTIONS CHAIR-APPROVED`
- `05B - School and System Leader Interview Protocol - QUESTIONS CHAIR-APPROVED`
- `05C - Adult University Student Interview Protocol - QUESTIONS CHAIR-APPROVED`
- `05F - Scenario Card Sort for 05A and 05C - CURRENT CHAIR REVIEW`
- `02 - IRB Narrative - CURRENT CHAIR REVIEW`
- `03 - Consent Forms - CURRENT CHAIR REVIEW`
- `06 - Data Management and Security Plan - CURRENT CHAIR REVIEW`
- `00 - Chair Review Readiness and Outstanding Confirmations`
- `10 - Public Instrument Site Pre-IRB Audit - CURRENT`

Chair approval applies to the 05A-05C interview questions. The separate working 05F card sort remains subject to chair and IRB review.

## Scope controls

- With written permission, live interview sessions may be recorded with audio and video through the separate approved recording process; participants may decline recording and still take part.
- Classroom-facing educators: interview plus the separate optional shared ten-card 05F scenario sort; no browser-local recording.
- Building administrators and district/system leaders: shared interview protocol; no card sort and no browser-local recording.
- Adult university students: interview plus the separate optional shared ten-card 05F scenario sort; browser-local audio remains disabled in the current review state.
- The public pages do not capture video.
- Analytic dimension tags remain internal researcher metadata and are not shown or included in participant-facing export previews.
- The public pages do not submit responses to GitHub Pages or another external endpoint.

## Change log

### 2026-09-02 - Public card sort synchronized to working attachment 05F

The classroom-facing educator and adult university-student pages now reproduce the same ten scenarios from working attachment 05F. Both pages display the attachment's two placement dimensions and response options: preservation of the learner's thinking, effort, and judgment; and the response the participant would be most likely to take. The administration and post-sort prompts also match 05F. Superseded `legitimacy` wording and export-field labels were removed, and session-length estimates were synchronized across 05A-05C.

The school/system-leader 05B page still contains no card sort. The root and researcher-review pages now state that 05E survey validation does not include 05F and that the public role pages are reviewer-only. The public pages remain read-only: collection, browser recording, persistence, and export are disabled. On phone-width layouts, the review banner no longer sticks over card content. This synchronization supports chair and IRB review; it does not indicate approval of 05F or authorize participant activity.

### 2026-08-28 - Survey platform reference updated to Microsoft Forms

The survey instrument was migrated from a Google Form to a Microsoft Form hosted on the
researcher's National Louis University institutional account. Three participant-facing references
on the survey landing page named the old platform and were corrected.

- `survey-landing/index.html`, three occurrences: "Google Form" and "Google Forms" replaced with
  "Microsoft Form" and "Microsoft Forms".

**No collection behavior changed.** The survey link remains inactive, the launch control remains
disabled, and this site still collects no responses. Google Drive references elsewhere in the
repository relate to embedded video and are unaffected.

**Not yet reconciled.** The IRB narrative, consent forms, recruitment materials, the `05D`
attachment, and proposal Appendix G still describe a Google Form. Those are protected documents and
are covered separately in `Miner_Platform_Update_Changelist_2026-08-28.md`. The anonymity language in
those documents was written for Google Forms settings and requires re-verification against the
Microsoft Forms configuration before submission.

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
