# Brand Kit & Visual Style Guide

*Extracted and synthesized from reference library (`References/`) analysis and frame-by-frame visual audits (`Brand Kit/ref_frames/`).*

---

## 1. Video Specifications & Canvas

| Property | Value | Notes |
| :--- | :--- | :--- |
| **Aspect Ratio** | `9:16` Vertical | Native mobile format for YouTube Shorts, Instagram Reels, and TikTok |
| **Resolution** | `1080 x 1920` px (Master) / `720 x 1280` px (Preview/Draft) | Crisp rendering across mobile displays |
| **Frame Rate** | `30 fps` (or `60 fps` for smooth screen recording/mockup animations) | Standard timeline rate |
| **Target Duration** | `45s – 75s` | Optimized for maximum retention and complete story arc |

---

## 2. Signature Layout Architectures

### A. Split-Screen Layout (Primary Signature)
Used in ~70% of video runtime across top-performing tech explainers:
- **Top Half (`y: 0% – 50%`)**: 
  - Dynamic B-roll, UI mockup cards, terminal logs, code snippets, or high-res product photos.
  - Floated with rounded card corners (`border-radius: 16px`), subtle borders (`1px solid rgba(255,255,255,0.12)`), and soft drop shadows.
- **Center Seam (`y: 48% – 54%`)**:
  - Anchors the active subtitle pill or transitional badge. Seamlessly masks the transition boundary between B-roll and A-roll.
- **Bottom Half (`y: 50% – 100%`)**:
  - Talking-head presenter (A-roll), centered framing from chest up. Clean studio, desk, or modern architectural depth.

### B. Full-Bleed B-Roll & Screen Takeover
- Used during intricate technical demonstrations (terminal builds, architecture diagrams, code diffs).
- Uses dark backgrounds (`#000000` or `#0A0A0C`) with floating centered mockups.
- Presenter voiceover continues unbroken.

### C. Persistent Hook Banner (Lower Third)
- Fixed pill or rounded rectangular card placed over the bottom lower-third (`y: ~80% – 86%`).
- Style: Solid black badge (`rgba(0,0,0,0.85)`) with bold white text + contextual emoji (e.g. `Step by Step Tutorial On Vibe Coding Your TV 📺`).
- Keeps viewer informed of the overarching value proposition even if they scroll into the video midway.

---

## 3. Typography Hierarchy

| Role | Font Family | Weight / Style | Color & Treatment |
| :--- | :--- | :--- | :--- |
| **Hook Title / Impact** | `Syne`, `Anton`, `Impact`, `Montserrat Black` | 800–900 Extra Bold / Condensed / Uppercase | White `#FFFFFF` with occasional Yellow `#FACC15` keyword highlight |
| **Dynamic Subtitles** | `Inter`, `SF Pro Display`, `Roboto` | 700 Bold, Uppercase / Title Case | White `#FFFFFF` inside a dark rounded pill (`rgba(0,0,0,0.85)` background, `padding: 4px 12px`, `border-radius: 6px`) |
| **Key Word Emphasis** | `Inter`, `SF Pro Display` | 800 Extra Bold | Neon Yellow `#FACC15` or Lime Green `#22C55E` text |
| **Code & CLI Callouts** | `JetBrains Mono`, `Fira Code`, `SF Mono` | 500 Medium | Light Gray `#E2E8F0` on dark card (`#18181B`) |
| **Editorial Accents** | `Playfair Display`, `New York`, `Times` | Italic Serif | Off-white `#F8FAFC` for high-prestige references ("An American startup") |

---

## 4. Color Palette

```
#000000   Pure Black      (Primary background / canvas)
#0A0A0C   Onyx Dark       (Card background & window chrome)
#18181B   Zinc Surface    (Elevated code cards & terminal boxes)
#FFFFFF   Crisp White     (Primary text & captions)
#FACC15   Amber Yellow    (Caption word highlights & alert accents)
#38BDF8   Cyan Blue       (Tech callouts, links, agent highlights)
#22C55E   Terminal Green  (Success marks, build checkmarks, prompt outputs)
#EF4444   Alert Crimson   (Security bugs, error states, warnings)
```

---

## 5. Motion Graphics & Asset Styling

1. **macOS / Terminal Mockups**:
   - Dark translucent card with header bar containing 3 control dots: Red (`#EF4444`), Yellow (`#F59E0B`), Green (`#10B981`).
   - Clean prompt formatting: e.g. `claude -- ~/workflow`, green success tags `✓ Built in 41s`.
2. **2D Architecture Diagrams**:
   - Clean white or deep dark canvas with thin vector line-art, node diagrams, and high-contrast circular badges representing agents/nodes.
3. **Card Transitions**:
   - Snappy spring-based entrances (`scale: 0.95 -> 1.0`, `opacity: 0 -> 1` in 180ms–240ms).
   - Fast cut-ins; avoid slow fades.
4. **Pacing Rules**:
   - Visual event (cut, graphic pop, camera zoom, or B-roll switch) every **1.8 – 2.8 seconds**.
   - Zero dead air: trim all pauses over 250ms in A-roll dialogue.

---

## 6. Audio Design Standards

- **Voiceover / A-Roll Audio**:
  - Broadcast standard loudness: `-14 LUFS` integrated (`-1.0 dB` True Peak).
  - High clarity, subtle low-end roll-off (< 80Hz) and gentle presence boost (3kHz – 5kHz).
- **Background Music**:
  - Upbeat, low-distraction lofi or ambient tech synth.
  - Side-chain ducked under speech at `-20 dB` to `-24 dB` so speech cuts through effortlessly.
- **Sound Effects (SFX)**:
  - Snappy whoosh / UI pop on cards appearing.
  - Sub-bass boom on critical revelation / hook beat.
  - Soft mechanical key clicks for terminal typing animations.

