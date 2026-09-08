# Public Instrument Status

Last local verification: 2026-09-07; deployed revision remains subject to verification after publication.

## Current state

The three public role-specific instrument pages are read-only review copies. They display protocol wording for committee and IRB inspection, but participant data entry, browser recording, local saving, and file export are disabled.

The study remains proposal-stage and pre-IRB. A technically live page does not indicate approval to recruit participants or collect data.

## Controlling review files

The September 5 correction pass used the attachments in the controlling packet
`irb-chair-review-full-form-aligned-final-2026-09-03`:

- `05A - Classroom-Facing Educator Interview Protocol - QUESTIONS CHAIR-APPROVED`
- `05B - School and System Leader Interview Protocol - QUESTIONS CHAIR-APPROVED`
- `05C - Adult University Student Interview Protocol - QUESTIONS CHAIR-APPROVED`
- `05F - Scenario Card Sort for 05A and 05C - CURRENT CHAIR REVIEW`
- `02 - IRB Narrative - CURRENT CHAIR REVIEW`
- `03 - Consent Forms - CURRENT CHAIR REVIEW`
- `04 - Recruitment Materials - CURRENT CHAIR REVIEW`
- `05D - K-12 Educator Survey - CURRENT CHAIR REVIEW`
- `06 - Data Management and Security Plan - CURRENT CHAIR REVIEW`
- `00 - Chair Review Readiness and Outstanding Confirmations`
- `10 - Public Instrument Site Pre-IRB Audit - CURRENT`

Chair approval applies to the 05A-05C interview questions. The separate working 05F card sort remains subject to chair and IRB review.

## Scope controls

- With written permission, live interview sessions may be audio-recorded through the separate approved recording process; participants may decline recording and still take part.
- Classroom-facing educators: interview plus the separate optional shared ten-card 05F scenario sort; no browser-local recording.
- Building administrators and district/system leaders: shared interview protocol; no card sort and no browser-local recording.
- Adult university students: interview plus the separate optional shared ten-card 05F scenario sort; no browser-local recording.
- The public pages do not capture video.
- Analytic dimension tags remain internal researcher metadata and are not shown or included in participant-facing export previews.
- The public pages do not submit responses to GitHub Pages or another external endpoint.

## Change log

### 2026-09-07 - Recruitment page added in closed state

A `recruitment/` page reproduces Attachment 04 Sections A, C, and D verbatim, serving as the link
destination for channels whose character limits cannot carry the full invitation text. Attachment 04
Section A ends with "reply to this message," which works on a listserv but not on a public posting
where there is no message to reply to.

- The page collects nothing: no form, no input, no database, no cookies, no analytics, no tracking.
- All three eligibility exclusions appear in every audience section rather than once at the bottom,
  and each section states that participation is voluntary and uncompensated.
- The researcher, dissertation chair, and both National Louis University Institutional Research
  Board chairs are listed, matching the contacts on the survey landing page and in the consent
  documents.
- Recruitment controls are disabled, the hero panel reads "Not yet open", and every audience section
  states that recruitment is not yet open.
- The page adopts the shared token layer the way its siblings do, with
  `data-mjm-ground="light"` on the root element and `tokens.css` linked before the page stylesheet.
  `recruitment/styles.css` is a copy of the survey-landing stylesheet so the page renders standalone
  when printed to PDF as a protocol attachment.

**Not approval.** The study remains pre-IRB and no recruitment has been authorized. The page exists
in a closed state so the Institutional Research Board can inspect the actual participant-facing
wording during review. Activating it requires documented written approval.

### 2026-09-05 - Instrument parity corrections against the September chair-review packet

Corrections implemented from `github-instrument-parity-audit-2026-09-05.md`, against the
controlling packet `irb-chair-review-full-form-aligned-final-2026-09-03`.

- **Opening scripts.** The role-specific Interview Opening text of 05A, 05B, and 05C is reproduced
  verbatim on the three role pages, read after the separate written-consent procedure. The
  university opening carries its prohibition on opening, showing, quoting, or sharing coursework,
  feedback, prompt histories, screenshots, account records, or other artifacts.
- **Collection and export wording.** Instructions describing response data remaining local until
  export, entering notes or a reviewed transcript after approval, and downloading a structured
  response file were replaced with read-only reviewer language. The former "Review and Export"
  step is now "Instrument Summary", and retained controls are labelled disabled illustrations.
  Enabling them would require explicit protocol authorization, not merely approval status.
- **Survey landing eligibility.** The role list now reproduces the six current 05D Question 2
  choices. The unbounded "student support professionals" and "other K-12 practitioners" invitations
  were removed. The page states the age requirement, the three eligible role families, all three
  exclusions, the 10-to-12-minute estimate, and "Please complete this survey only once."
- **Teacher 05A-Q2 probes.** The five optional probes are restored as separate sentences.

**No collection behavior changed.** `COLLECTION_ENABLED` remains false on all three role pages,
entry, saving, recording, and export remain disabled, and the survey launch control remains closed.
No question, required follow-up, role branch, or card scenario was added or removed.

**Not approval.** Chair approval applies to the 05A-05C question sets. 05F remains a working
component subject to chair and IRB review. The study remains pre-IRB.

### 2026-09-02 - Public card sort synchronized to working attachment 05F

The classroom-facing educator and adult university-student pages now reproduce the same ten scenarios from working attachment 05F. Both pages display the attachment's two placement dimensions and response options: preservation of the learner's thinking, effort, and judgment; and the response the participant would be most likely to take. The administration and post-sort prompts also match 05F. Superseded `legitimacy` wording and export-field labels were removed, and session-length estimates were synchronized across 05A-05C.

The school/system-leader 05B page still contains no card sort. The root and researcher-review pages now state that 05E survey validation does not include 05F and that the public role pages are reviewer-only. The public pages remain read-only: collection, browser recording, persistence, and export are disabled. On phone-width layouts, the review banner no longer sticks over card content. This synchronization supports chair and IRB review; it does not indicate approval of 05F or authorize participant activity.

### 2026-08-28 - Survey platform reference updated to Microsoft Forms

**Historical entry.** Statements below about the IRB documents describing Google Forms are
superseded: attachments 02, 03, 04, 05D, and 06 in the September packet name Microsoft Forms.

The survey instrument was migrated from a Google Form to a Microsoft Form hosted on the
researcher's National Louis University institutional account. Three participant-facing references
on the survey landing page named the old platform and were corrected.

- `survey-landing/index.html`, three occurrences: "Google Form" and "Google Forms" replaced with
  "Microsoft Form" and "Microsoft Forms".

**No collection behavior changed.** The survey link remains inactive, the launch control remains
disabled, and this site still collects no responses. Google Drive references elsewhere in the
repository relate to embedded video and are unaffected.

**Prepared September 3, 2026.** Revised attachments 02, 03, 04, 05D, and 06 name Microsoft
Forms. Their anonymity language requires the final institutional Microsoft Forms configuration to
be verified and documented before activation. These revised files are prepared locally; replacement
of the shared packet is pending. This revision links printable consent from the survey landing page;
the deployed link and shared packet must be checked after publication and upload.

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

## Public-page scope and future changes

These pages remain read-only under Attachment 06. Written IRB approval of the current study does not authorize browser response collection, recording, uploads, saving, or participant-generated exports.

Any proposal to add those capabilities requires explicit protocol authorization, chair review, and an IRB-approved amendment when applicable, before implementation. Approved changes must then be compared against the consent and data-management materials, tested locally, and verified on the deployed routes. Do not activate the retained illustrative controls by changing only the approval banner or collection flag.

The separate Microsoft Forms survey can open only after written IRB approval and documented verification of consent, settings, branching, and response export. Website verification does not close the survey's controlled export-test requirement.

### 2026-09-07 - Follow-up verification and read-only safeguards

The September 5 correction commit was present in the fresh remote checkout. This follow-up removes residual approval-only activation statements in the three page banners and README. Static response controls are disabled before script initialization; response synchronization and save, clear, and export handlers also return immediately while collection is disabled. Follow-up labels distinguish optional probes from the two required follow-ups.

The September 3 prepared-packet and earlier export descriptions above are historical records, not the current collection process. This website task does not independently verify shared Drive packet contents or Microsoft Forms behavior.

The linked printable survey consent is now extracted from pages 7-8 of current Attachment 03. It removes the obsolete interview-interest pathway and includes the current required-routing and metadata wording. The survey landing page's padded sections now fit their container on phone screens.

Local verification: the three openings, 32 main prompt entries and their follow-ups, both ten-card sets, and six survey role choices match the controlling attachments. All review steps were navigated, including keyboard navigation; response and export controls remained disabled. The four local routes were inspected at desktop and phone widths. The printable consent's two pages were compared with Attachment 03 and visually inspected. No participant response was submitted.

Publication and deployed verification of this follow-up remain pending. No IRB approval is claimed.
