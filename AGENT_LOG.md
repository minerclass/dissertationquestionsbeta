# Agent Log

Append-only record of automated and agent-assisted changes to this repository.

Purpose: this work happens from more than one machine, so local notes are not a
reliable history. Anything an agent should know about a past change belongs
here, in the repository, not in a local file.

## Conventions

- Newest entry first. Never rewrite or delete an existing entry; correct it with
  a new one that says what it supersedes.
- Record what was verified and how, not just what was edited. "Fixed" without a
  check is not a result.
- Record open items and known-failing things explicitly, so the next agent does
  not rediscover them or assume they are already handled.
- No participant data, transcripts, consent records, committee or faculty names,
  credentials, or tokens. See AGENTS.md where present.

---

## 2026-08-31 - Adopt the shared ecosystem design tokens

Links https://minerclass.github.io/tokens.css before the page styles and points this
page's ground, ink, and rules at the shared tokens while keeping its own accents. The
page's ground is unchanged: the root page stays light and the resource hub stays dark.

**Every reference carries a fallback** equal to the pre-adoption value, because a bare
`var(--mjm-bg)` is invalid at computed-value time if the token file fails to load, which
would break the page rather than leave it unchanged.

Two pages adopted, one per ground: the root study page takes the paper ground via `data-mjm-ground="light"`, and `dissertation-sites/` keeps the dark ground. This repo is the ecosystem's clearest demonstration that the token layer carries both.

**Verified in a real browser.** Token sheet loads; body renders light at the root and dark at dissertation-sites/ with a contrast ratio
of 14.54 and 16.02 respectively; tag balance clean; zero console errors.

---

## 2026-08-31 - Flag the superseded dissertation design in the archived qualifying paper

Found during a read-only audit of the Tier 2-4 repositories.

**Problem.** `qualifying-paper-final-review/index.html` states in two places that the
dissertation "will use a mixed-methods case study design". The defended Chapters 1-3
proposal is a qualitative-dominant convergent mixed methods study and contains no
case-study apparatus at all, so a reader arriving at this page could take a superseded
design statement as current. This was the only occurrence of case-study vocabulary
found anywhere across the 28 repositories audited.

**Deliberately not a rewrite.** This page is an archive of the qualifying paper as
submitted. The design genuinely did evolve between the qualifying paper and the
defended proposal, so silently editing the sentences would have falsified the record of
what was written at the time. The supersession is flagged instead.

**Changed.** `qualifying-paper-final-review/index.html` only.

- Added a dated `.archive-note` in the hero stating that the page is the paper as
  submitted, that the design has since been superseded, that the proposal governs where
  the two differ, and linking to the public dissertation-overview.
- Added a small inline `.superseded` marker immediately after each of the two affected
  sentences, so a reader deep-linking into the manuscript sees the flag in context and
  not only at the top of a 21,000-word page.
- Both markers carry the stamp "manuscript text unchanged".

**Verified.** Both original sentences are still present verbatim and unmodified,
confirmed by exact string count after patching. Two markers and one note render; tags
parse balanced; zero console errors. The note styles against the dark hero and the
markers against the light `.paper-section` surface, which is why they carry separate
treatments. Print styles strip both back to plain black text.

**Open, not addressed here.** The page is 21,593 words across 10 sections with **zero**
figures, diagrams, or images, and paragraphs run to roughly 103 characters per line at
1440px, well beyond a comfortable reading measure. Both are readability issues that can
be fixed additively without touching the manuscript text.

---

## 2026-07-24 - Current-proposal and cross-site alignment

Agent: OpenAI Codex, working from the revised Chapters 1-3 proposal and a
cross-site consistency review.

- Added adult university students to the future-study description while keeping
  their retrospective accounts in the supplementary evidence tier.
- Preserved the distinct nonparticipant comparison and its required bounded,
  prespecified agentic-artifact task.
- Clarified infrastructural friction as an active source of constraint and
  enablement rather than a neutral backdrop.
- Corrected the methodology and mixed-methods destinations in both the linear and visual constellation views.
- Added no participant data, findings, or collection features.
## 2026-07-22 - Weekly Pages review, accessibility and CI repair

Agent: Claude Opus 4.8 (Claude Code), working from a weekly review of the
`minerclass` GitHub Pages ecosystem against recent academic and professional
activity. Author present and approving changes.

### Ecosystem-wide finding: the accessibility gate was broken, not strict

The `Accessibility Checker` job in `.github/workflows/ci.yml` had been red since
2026-07-17 in every repository that runs it (`pedagogical-friction`,
`diss-proposal-defense`, `dissertationquestionsbeta`). The cause was not page
content. `@axe-core/cli` 4.12.1 bundles a ChromeDriver built for Chrome 151,
while the runner image had Chrome 150:

```
Error: session not created: This version of ChromeDriver only supports Chrome version 151
Current browser version is 150.0.7871.114
```

The browser session never started, so **no page was actually tested between
2026-07-17 and 2026-07-22**. The job reported failure for every file without
running a single check. Treat any result from that window as meaningless.

The workflow was repaired in all three repositories:

- ChromeDriver is now pinned at run time to the runner's installed Chrome major
  version, so image updates cannot silently break the job again.
- A tooling failure (no browser session) is now reported distinctly from a real
  accessibility violation, and fails with an explicit message. This is the
  specific confusion that hid the breakage for five days.
- The gate is scoped to `--tags wcag2a,wcag2aa,wcag21a,wcag21aa`. axe's advisory
  best-practice rules (`page-has-heading-one`, `landmark-one-main`, `region`,
  `landmark-complementary-is-top-level`) no longer block a push. They are still
  worth fixing; they are just not barriers.
- The job honours an optional `.a11yignore` file for generated bundles that
  cannot be corrected in-repo.

### Changes in this repository

Accessible names added where only placeholder text was present:

- `tertiary-algorithmicity-companion/index.html` - `#refsSearch`
- `qualifying-paper-final-review/index.html` - `#paperSearch`, `#referenceSearch`

Structure:

- `dissertation-sites/constellation.html`: the three linear-outline headings
  followed the page `<h1>` with no `<h2>` between them. Promoted `h3` to `h2`
  with `font-size` pinned so the rendered appearance is unchanged.
- `survey-landing/index.html`: notice panel `<aside>` to `<section>`, keeping
  its accessible name.
- `qualifying-paper-final-review/index.html`: `.reference-facets` `<aside>` to
  `<div>`. It had no accessible name and functions as a filter column.

Post-change: every page except `dashboard.html` reports zero axe violations
under the full default rule set.

### Resolved, same day: dashboard.html contrast fixed

Superseded by this section: the "Open item" below described `dashboard.html` as
unfixable here and listed it in `.a11yignore`. That was based on it being a
build artifact. It is not, in the sense that matters: **there is no source
project for it anywhere.** No `package.json`, `src/`, or Vite config exists in
this repository, in any of the 50 public `minerclass` repositories, or in either
local working tree (`Documents\New project`, `Desktop\Research`). The only other
copy on disk is another build of the same file.

The built file is therefore the artifact of record. Nothing regenerates it, so
editing it directly is durable rather than fragile, and it was fixed in place.

The failure was not a flat colour. The status line is white text at
`opacity: .5` over `#273d68`, which blends to `#939eb4` = **3.98:1** at 10px.
A `<style>` block added at the end of `<head>` raises it:

```css
.text-\[10px\].opacity-50 { opacity: .65; }
```

At `.65` the blend is `#b3bbca` = **5.57:1**, still visibly muted. The
two-class selector outranks Tailwind's single-class `.opacity-50`, so no
`!important` is needed, and it sits after the bundled stylesheet so source order
agrees. Verified in the browser before editing: computed opacity became `.65`
and a WCAG A/AA axe run on the live page returned zero violations.

`dashboard.html` has been removed from `.a11yignore` and is checked by CI again.
If a source project ever appears, move the rule into it and delete the block.

The advisory findings on this page (`landmark-one-main`, `page-has-heading-one`,
`region` x3) remain. They are not WCAG failures and are not gated, but they are
real structural gaps worth fixing if the dashboard is ever rebuilt.

### Superseded: original open item for dashboard.html

`dashboard.html` is a roughly 406KB Vite single-file build with the module
inlined. The DOM is produced at run time, so the markup cannot be corrected in
this repository. **There is no source project for it in this repo**; fixes
belong upstream, wherever it is built.

It was listed in `.a11yignore` so it did not block the gate. **Both claims above
were corrected the same day; see the resolved section immediately preceding.**
Findings as originally recorded:

| Rule | Severity | Detail |
|---|---|---|
| `color-contrast` | **Real WCAG AA failure** | "0 participants loaded" renders `#939eb4` on `#273d68` = **3.98:1** at 10px, below 4.5:1. Suggested source fix: `#a4b0c8` (**4.93:1**). |
| `landmark-one-main` | Advisory | No `<main>` landmark. |
| `page-has-heading-one` | Advisory | No `<h1>`; first heading is `<h2>`. |
| `region` (x3) | Advisory | Header, tab strip, and tab panel sit outside any landmark. |

(The `.a11yignore` entry was removed the same day once the contrast was fixed
in place.)

### Verification method

Because CI could not run axe, results were verified independently: axe-core
4.10.2 was loaded into each deployed page in a same-origin iframe and run
against the live document. After the changes below, 17 of 18 pages across
`pedagogical-friction`, `diss-proposal-defense`, and `dissertationquestionsbeta`
report zero violations under axe's full default rule set. The exception is
`dissertationquestionsbeta/dashboard.html`, recorded in that repository's log.

Two earlier claims made during this review were wrong and are corrected here so
they are not repeated:

- `interactive-resume-2026` was reported as missing the EDSAFE AI Vanguard
  Fellowship and all publications. It was not. The page renders its credentials
  and resources from `docs/app.js` at run time, and a fetch of the static HTML
  shell shows an almost empty page. **Check client-rendered pages in a browser,
  not by fetching HTML.** The same mistake produced a false "23 orphaned sites"
  reading of the root hub, whose project grid is also JS-rendered.
- The EdSurge article "How My School Used Common Sense and Collaboration to
  Confront AI" (2026-07-15) is by Pattie Morales and cites the author's term
  *unproductive success*. It is press coverage, not an authored publication, and
  must not be listed as one.

### Addendum, same day: third-party embeds excluded

With the repaired gate running for real, `media/index.html` failed on
`aria-prohibited-attr` with two occurrences at
`article:nth-child(3) > iframe .ndfHFb-c4YZDc-zTETae` and the sibling below it.

That class belongs to Google Drive's video player. The violation is inside the
embed, not in this repository. The local markup is correct: both iframes carry
`title`, `allow`, `loading="lazy"`, and `allowfullscreen`.

`axe --exclude "iframe[src*='drive.google.com']"` was tried first and **does not
work**; the findings still appeared. axe descends into embedded frames and
reports frame-crossing targets, which `--exclude` did not suppress. That attempt
was reverted rather than left in place as config that looks effective but is
not. A note recording the failed approach is in `.github/workflows/ci.yml` so it
is not retried.

`media/index.html` is therefore listed in `.a11yignore`. The consequence is that
this page's own markup is no longer machine-checked, so **re-check it by hand if
it changes**. As of this entry it is clean.

This is also why an earlier browser-based sweep reported this page clean.

This is also why an earlier browser-based sweep reported this page clean.
Nested cross-origin frames were not reachable from that harness, so axe never
saw the embed internals. The CI result is the more complete one.

### Cross-repository context

This change set spans five repositories: `pedagogical-friction`,
`diss-proposal-defense`, `dissertationquestionsbeta`, `conference-presentations`,
and `interactive-resume-2026`. Each carries its own `AGENT_LOG.md` entry for the
same date. Check the siblings before assuming a change was isolated.

## 2026-08-13 - Proposal defense milestone and instrument-revision gate

Agent: OpenAI Codex, recording the researcher's reported milestone and planned sequence.

- Updated the root instrument hub and the public dissertation dashboard to record
  that the Chapters 1-3 proposal defense was passed on August 13, 2026.
- Named the next sequence as interview-question revision, committee review, a
  planned three-educator conversational-flow rehearsal, and an IRB-materials update.
- Preserved the instrument safeguards: role pages remain read-only review copies,
  and the public site is not open for formal recruitment or main-study data collection.
- Reduced the phone-width dashboard title scale so the new Progress Dashboard
  heading remains fully visible instead of being clipped by the masthead.
- Made no changes to interview-question wording and made no claims of IRB approval,
  participant data, analysis, findings, or ABD status.
