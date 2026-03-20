# Virtual Interviewer — Qualitative Research Platform

A self-contained web tool for semi-structured qualitative interviews, card-sort member checking, and thematic coding scaffolding.

Built for dissertation research on **Tertiary Algorithmicity & Pedagogical Friction** (Extending Walter Ong's Media Ecology to Generative AI in Education).

## Features

- **7-question semi-structured interview protocol** with configurable follow-ups
- **Dual mode:** Researcher-led (full protocol + coding hints) or Participant self-guided (6 core questions, no theoretical priming)
- **Card sort** with 8 friction statements (Agree / Not Sure / Disagree) + optional rationale
- **Speech-to-text** input (where browser supports Web Speech API)
- **Export** to JSON (structured data) or Markdown (readable transcript)
- **No authentication required** — runs entirely in the browser

## Deployment

This is a single HTML file. Deploy anywhere that serves static files:

- **GitHub Pages:** Enable Pages on this repo, set source to root
- **Netlify:** Drag the `index.html` file to netlify.com/drop
- **Direct use:** Download `index.html` and open in any modern browser

## For Participants

1. Open the link provided by the researcher
2. Click "New Interview Session"
3. Enter your identifier and select "Participant Self-Guided"
4. Answer 6 questions (type or use microphone)
5. Complete the card sort
6. Download your data file and email it to the researcher

## Data Privacy

All data stays in the participant's browser. Nothing is sent to any server. Participants export their own data and choose when/how to share it with the researcher.

## License

Research use only. © 2025-2026
