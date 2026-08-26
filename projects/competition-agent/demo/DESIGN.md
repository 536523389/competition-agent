# Competition Agent Demo Design

## 1. Visual Theme & Atmosphere

The demo is a competition war room: research paper discipline meets an active mission-control console. The interface should feel evidence-led, decisive, and in motion rather than like a generic AI chat product.

Keywords: editorial, analytical, kinetic, accountable, warm paper, dark instrument panel.

## 2. Color Palette & Roles

```css
:root {
  --paper: #f1ede3;
  --paper-rgb: 241, 237, 227;
  --ink: #132228;
  --ink-rgb: 19, 34, 40;
  --panel: #10262a;
  --panel-rgb: 16, 38, 42;
  --panel-soft: #1a3538;
  --panel-soft-rgb: 26, 53, 56;
  --signal: #f26a2e;
  --signal-rgb: 242, 106, 46;
  --lime: #c8dc78;
  --lime-rgb: 200, 220, 120;
  --muted: #6b7977;
  --muted-rgb: 107, 121, 119;
  --line: #c9c3b6;
  --line-rgb: 201, 195, 182;
  --white: #fffdf7;
  --white-rgb: 255, 253, 247;
  --danger: #c84831;
  --danger-rgb: 200, 72, 49;
}
```

`--signal` marks active execution and primary actions. `--lime` marks passed checks. Red is reserved for explicit risk, never decoration.

## 3. Typography Rules

```css
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;600;700;800;900&family=Noto+Serif+SC:wght@600;700;900&family=Space+Mono:wght@400;700&display=swap");
```

- Display: `Noto Serif SC`, serif; 900 weight; fluid 46-112px.
- UI and Chinese body: `Noto Sans SC`, sans-serif; 400-800 weight; 16px minimum.
- Data and status: `Space Mono`, `Noto Sans SC`, monospace.
- Body line height is at least 1.75 and letter spacing is 0.02em.
- Do not use Inter, Roboto, Arial, or system fonts as display faces.

## 4. Component Stylings

- Buttons: rectangular with clipped top-right corner, 46px minimum height. Hover lifts 2px; active returns to baseline; focus uses a 3px signal outline; disabled uses 45% opacity and no transform.
- Cards: 1px ink/line border, restrained 8-18px radius, no generic floating pill cards. Hover exposes an orange corner marker.
- Status tags: uppercase mono labels with a circular state lamp. Active pulses; passed is lime; waiting is muted.
- Tabs: plain text on a bottom rule. Hover changes rule color; active adds a 3px signal bar; keyboard focus is clearly visible.
- Links: ink with signal underline. Hover increases underline thickness; focus uses signal outline.
- Modal: paper surface over a dark translucent scrim; close control has 44px target; escape and backdrop close are supported.

## 5. Layout Principles

- Maximum content width: 1440px.
- Main grid: 5/7 split for narrative and execution console.
- Spacing scale: 6, 10, 16, 24, 36, 56, 88, 128px.
- Sections alternate between open editorial space and dense instrument panels.
- Large numbers deliberately cross card boundaries to create rhythm.

## 6. Depth & Elevation

- Paper cards: `0 18px 60px rgba(var(--ink-rgb), .08)`.
- Active console: `0 28px 90px rgba(var(--ink-rgb), .24)`.
- No glassmorphism over scrolling content. Backdrop blur is limited to the sticky navigation.

## 7. Animation & Interaction

Interaction tier: L2.

- Hero title uses staggered clipped line reveal.
- Body labels use a short type-in animation during the run.
- Sections reveal with opacity and translate, driven by IntersectionObserver.
- The timeline progresses as a state machine with play, pause, replay, and direct step selection.
- Artifact cards use pointer-tracked spotlight with requestAnimationFrame throttling.
- Background uses a static paper grain plus slowly moving CSS grid lines.
- Navigation condenses after scrolling.
- `prefers-reduced-motion` disables all transforms, pulses, and automatic scrolling.

## 8. Do's and Don'ts

- Do foreground real project evidence and measured limitations.
- Do make current Agent state obvious within one glance.
- Do keep the six-step loop visible throughout the run.
- Do use asymmetric editorial layouts and purposeful whitespace.
- Do provide keyboard-operable controls and visible focus states.
- Don't use purple-pink gradients.
- Don't use emoji as icons.
- Don't fabricate scores, users, judges, or awards.
- Don't hide uncertainty behind decorative charts.
- Don't use oversized rounded cards or excessive pills.
- Don't auto-scroll with `scrollIntoView`.
- Don't let motion block reading or interaction.

## 9. Responsive Behavior

- Desktop (>= 1100px): 5/7 hero split, sticky stage rail, multi-column evidence grid.
- Tablet (720-1099px): stacked hero, horizontal stage rail, two-column evidence grid.
- Mobile (<= 719px): single column, compact controls, horizontally scrollable stage rail, 44px minimum touch targets.
- No horizontal page overflow at 360px. Charts use `object-fit: contain`; long filenames wrap anywhere.
- Hover-only effects are disabled on touch devices.

