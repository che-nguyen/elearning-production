# Project Brief — E-learning Production × AI (Team Sharing site)

> Handoff document. If you are a new Claude session or a new teammate, **read this first**, then skim `README.md` and the HTML pages. It captures every decision already locked and what is still open.

## What this is
An interactive **presentation website** for an internal **Pizza 4P's Learning & Development** team-sharing session. It compares the E-learning production process **Before vs After applying AI**, for a 15-minute course. Live at **https://cnnguyen29.github.io/elearning-production/** (GitHub Pages, public).

## Audience & goal
- **Audience:** other HR / L&D members in a big team — treated as **AI newbies** (may never have heard of HeyGen, ElevenLabs, CapCut, SCORM…).
- **Goal:** a practical **capability how-to share** — "here's what we actually did, so you can picture doing it too." Not a cost pitch. The 114→74 day number is *proof it works*, not the thesis.
- **Newbie rules:** always name the **task first, tool second**; every tool logo carries a plain-language one-liner (e.g. HeyGen → "AI video avatar").

## The story (structure)
Process-first, one page per stage, with a **Before↔After toggle** inside each card.

1. **Preparation** — *No change* (unchanged by design; planning is still human work).
2. **Content Design** — *Faster*. Before: ideas from SMEs + brainstorm, translation via Google Translate (quality/context/terms not guaranteed). After: prompt **Gemini + ChatGPT** for ideas, finalize with SME; translate with **Gemini**.
3. **Illustration Preparation** — *Major time saved*. Three sub-tasks:
   - **Narrator:** Before = hand-drawn in Illustrator + animated in Premiere (needs expertise + high-spec machine). After = **HeyGen** AI avatar.
   - **Voice-over:** Before = external MC recording (inconsistent). After = **ElevenLabs + HeyGen** voice, consistent across languages when dubbing.
   - **Visuals:** Before = in-store shoot + re-shoot if it fails. After = still shoot, but re-edit with **RunwayML + ChatGPT** instead of re-shooting.
4. **Digital Development** — *Major time saved*. Subtitles: Before = manual sentence-by-sentence, each new language starts over. After = **CapCut Pro** auto-subtitles + **TalentLMS** AI clone to other languages.
5. **Wrap-up** — two beats: **(1) Skills shift** — same SCORM output, but expertise shifts from *video editing + design + motion graphic* → *video editing + prompting*. **(2) Lessons:** Try & error · Daily practice / trends · Always Kaizen (**Learn – Unlearn – Relearn**).

Spotlight tools (get extra emphasis): **HeyGen, ElevenLabs, RunwayML**.

## Design decisions locked
- **Multi-page** site: hub (`index.html`) + one page per stage + `wrap-up.html`. Shared `styles.css` + `site.js`.
- **Persistent navigator** on every page (top rail `1·2·3·4·★`), highlights current page, plus Prev/Next paging.
- **Language:** EN default with an **EN/VIE toggle** (choice persists across pages via localStorage). Tech terms (HeyGen, SCORM, voice-over, prompting…) stay **English in both** languages.
- **Brand = Pizza 4P's:** warm, rounded corners, soft shadows. Fonts bundled: **ITC Century** (serif headings) + **Atlas Grotesk** (sans body). Brand colors: navy `#242f52`, cream `#e6dfcf`, orange `#f75b37` (=After/action), green `#8dd88d` (=time saved), brick `#842e14` (=Before). Reference: https://pizza4ps.com/vn/career_findjobs
  - Note: an earlier "flat / sharp / no-gradient" direction was **dropped** in favor of matching the warm Pizza 4P's website.
- **Before/After coding:** Before = muted brick + greyed tools; After = orange/green + live tools.
- **Time impact per stage** is qualitative (No change / Faster / Major time saved) — we only have the **totals** (114 vs 74 days, −40, 100% in-house); Preparation is truly unchanged. Do not invent a per-stage day breakdown.

## How the media & logos work (no code needed)
- Drop files into `assets/media/` using exact **base names**; `site.js` auto-detects the extension (`.png/.jpg/.gif/.mp4/.webm/.mp3/.wav`) and renders image/video/audio. See the checklist in `README.md`.
  - Base names: `contentdesign-`, `narrator-`, `voiceover-`, `visual-`, `subtitle-` — each with `before` / `after`.
- Tool logos: colored-initial placeholders show automatically. Drop official PNGs into `assets/logos/` named `heygen.png`, `elevenlabs.png`, `runwayml.png`, `gemini.png`, `chatgpt.png`, `capcut.png`, `talentlms.png`, `googletranslate.png`, `illustrator.png`, `premiere.png` to replace them.

## STILL OPEN — to do next
1. **Wording review** — the user wanted to review all on-screen copy (EN + VIE) after the full build. Not yet done.
2. **Media uploads** — user to add real screenshots / GIFs / MP4 / MP3 into `assets/media/` (placeholders live until then).
3. **Official tool logos** — optional; user may drop PNGs into `assets/logos/`.

## Deploy / verify workflow
- Repo owner is **cnnguyen29**. Edit files → `git add -A && git commit -m "…" && git push`. GitHub Pages auto-redeploys in ~1 min; URL stays the same.
- To preview locally: `npx http-server -p 5178 -c-1` then open the printed URL.
- `.claude/launch.json` is only a local preview helper — safe to ignore.
