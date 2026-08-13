# E-learning Production × AI — Team Sharing

An interactive one-page presentation comparing our E-learning production process **before vs after** applying AI — built for an internal Learning & Development team share.

**Live site:** _(GitHub Pages URL appears here once deployed)_

---

## How to add your own images / GIFs / videos / audio

You do **not** need to edit any code. Just drop your files into `assets/media/` using the **exact base names** below. The page auto-detects the file type (`.png`, `.jpg`, `.gif`, `.mp4`, `.webm`, `.mp3`, `.wav`) and loads it. After you commit/upload, GitHub Pages redeploys in ~1 minute.

### Media filename checklist (`assets/media/`)

| Stage | Slot | Before file (base name) | After file (base name) |
|---|---|---|---|
| Content Design | Idea & translation | `contentdesign-before` | `contentdesign-after` |
| Illustration | ① Narrator | `narrator-before` | `narrator-after` |
| Illustration | ② Voice-over | `voiceover-before` | `voiceover-after` |
| Illustration | ③ Visuals | `visual-before` | `visual-after` |
| Digital Dev | ① Digitalization | `digitization-before` | `digitization-after` |
| Digital Dev | ② Subtitles & cloning | `subtitle-before` | `subtitle-after` |

> Add whatever extension you have. Example: `narrator-after.gif`, `voiceover-after.mp3`, `subtitle-before.png`, `visual-after.mp4`.
> (Preparation has no before/after media — it is unchanged by design.)

### Tool logos (optional — `assets/logos/`)

Colored-initial placeholders show automatically. To use official logos, drop a **PNG (transparent background)** named exactly:

`gemini.png` · `chatgpt.png` · `heygen.png` · `elevenlabs.png` · `runwayml.png` · `capcut.png` · `canva.png` · `talentlms.png` · `googletranslate.png` · `illustrator.png` · `premiere.png` · `aftereffects.png` · `storyline.png`

---

## Files

```
index.html                 Overview / hub page (hero + stat + step grid)
preparation.html           Stage 01
content-design.html        Stage 02
illustration.html          Stage 03 (narrator / voice-over / visuals)
digital-development.html   Stage 04
wrap-up.html               Skills shift + Kaizen lessons
styles.css                 Shared styling for all pages
site.js                    Shared logic (toggles, counter, media loader, logo swap)
assets/fonts/              Brand fonts (ITC Century + Atlas Grotesk)
assets/logos/              Pizza 4P's logo + tool logos
assets/media/              Your before/after images / GIFs / videos / audio
```

## Features

- **Multi-page** — a hub plus one page per stage and a wrap-up page
- **Persistent navigator** — jump to any stage (or Overview / Wrap-up) from any page; Prev/Next at the bottom of each page
- **EN / VIE** language toggle (remembers your choice across pages)
- **Before / After** toggle on every stage card
- Animated 114 → 74 day counter, reveal-on-scroll, Pizza 4P's brand fonts & colors

## Run locally

```bash
npx http-server -p 5178 -c-1
```
Then open <http://localhost:5178>.
