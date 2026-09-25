# Deutsch in 30 Tagen

A self-study German A1 course as a single interactive web page: 30 chapters, one per day, each planned to fit 30 minutes.

- **Live page:** https://claude.ai/artifact/JApiNe9jVhy4qqwuYo5XSz (private link, needs a Claude sign-in)
- **Run locally:** `node serve.js`, then open http://localhost:8765

## What is in a chapter

Each day has a warm-up (3 min), a dialogue with playback (5 min), about 20 words of vocabulary with a self-test mode (7 min), one or two grammar points (7 min), exercises with hidden answers (6 min) and a speaking or writing task (2 min), followed by a tip about life in Germany and an "I can now" checklist. Days 7, 14, 21 and 30 are review days with mini tests; days 28 and 29 practise the Goethe-Zertifikat A1 format, including listening tasks.

Playback uses the browser's built-in German voice (Web Speech API). Microsoft Edge on Windows has the most natural one. Progress (days marked as done) is stored in the browser's localStorage.

## Files

| File | Contents |
|---|---|
| `index.html` | Styles, the rendering engine, the start page and the appendix pages |
| `data/week1.js` … `data/week4.js` | The 30 lessons, seven or eight per file |
| `data/appendix.js` | Verb list with participles, survival phrases |
| `serve.js` | Tiny static server for local viewing |
| `.claude/launch.json` | Lets the Claude desktop app preview the page |

`index.html` is written as page content only, without `<!doctype>`, `<html>`, `<head>` or `<body>`, because the artifact host wraps it in its own skeleton at publish time. `serve.js` adds the same wrapper for local viewing, so open the page through the server rather than by double-clicking the file.

## Lesson data format

Each lesson is one object pushed onto `window.LESSONS`:

```js
{
  day: 9,
  title: "Mein Tag",                 // German title on the yellow plate
  en: "Daily routine …",             // English subtitle
  mins: {warmup:3, dialogue:5, vocab:7, grammar:7, practice:6, speak:2},  // optional overrides
  labels: {grammar: ["Wiederholung", "Review"]},                          // optional section renames
  goals: ["…"],
  warmup: { intro: "…", items: [["prompt", "answer"]] },
  dialogue: { title: "…", scene: "…", lines: [["Speaker", "German", "English"]], note: "…" },
  vocab: [["der Tisch", "die Tische", "table"], ["heißen", "to be called"]],   // [German, plural, English] or [German, English]
  grammar: [{ h: "heading", body: "<p>HTML</p>" }],
  practice: [{ h: "A. …", note: "…", items: [["question", "answer", "optional remark"]] }],
  listen: [{ text: "German text to play", q: "question", a: "answer" }],       // optional
  speak: "<p>HTML</p>",
  cando: ["…"],
  tip: { h: "heading", body: "<p>HTML</p>" }
}
```

Strings marked HTML may contain markup; the others are escaped when rendered.
