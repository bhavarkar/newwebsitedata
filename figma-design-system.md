# Data Agent Services - Figma Component Library Setup

This document serves as the developer handoff specification to easily map the *Data Agent Services* design tokens into a new or existing Figma library. Using a dark-first, premium glassmorphism approach.

---

## 🎨 1. Color Styles

Add these styles to your Figma Color Styles to build out the library palette.

### Backgrounds
- **Primary Base:** `#0A1628` (Layer 1 Base)
- **Secondary Base:** `#0D1F38`
- **Deep Base:** `#060E1A`

### Brand Accents
- **Brand Teal:** `#00C9B1`
- **Teal Glow:** `#00C9B1` (Opacity: 15%)
- **Teal Dim:** `#00C9B1` (Opacity: 8%)
- **Teal Border:** `#00C9B1` (Opacity: 20%)
- **Amber:** `#F59E0B`
- **WhatsApp Green:** `#25D366`

### Text & Elements
- **White / H1/H2:** `#FFFFFF`
- **Body Text:** `#FFFFFF` (Opacity: 60%)
- **Muted Text:** `#FFFFFF` (Opacity: 35%)
- **H3/H4 Text:** `#FFFFFF` (Opacity: 90%)
- **Glass Background:** `#FFFFFF` (Opacity: 4%)
- **Glass Border:** `#FFFFFF` (Opacity: 8%)

🚫 **Rules:** 
- NO purple anywhere in the design.
- NO white backgrounds.

---

## ✒️ 2. Typography Styles

Set these up in Figma under Text Styles.

| Style Name   | Font Family      | Weight | Size | Line Height | Case / Tracking | Color |
|-------------|-----------------|--------|------|-------------|----------------|-------|
| Display/H1  | Playfair Display | 800 | 72px | Auto (~110%)| None | `#FFFFFF` |
| H2          | Playfair Display | 700 | 48px | Auto (~120%)| None | `#FFFFFF` |
| H3          | DM Sans          | 700 | 28px | Auto | None | `#FFFFFF` 90% |
| H4          | DM Sans          | 600 | 22px | Auto | None | `#FFFFFF` 90% |
| Body L      | DM Sans          | 400 | 18px | Auto (~150%)| None | `#FFFFFF` 60% |
| Body M      | DM Sans          | 400 | 16px | Auto (~150%)| None | `#FFFFFF` 60% |
| Body S      | DM Sans          | 400 | 14px | Auto (~150%)| None | `#FFFFFF` 60% |
| Mono        | JetBrains Mono   | 400 | 13px | Auto | None | `#00C9B1` |
| Label       | DM Sans          | 700 | 11px | Auto | UPPERCASE / 12% (`0.12em`) | `#00C9B1` |

---

## 🌟 3. Gradient Text Effect

Create a Style or save a Fill behavior:
- **Type:** Linear Gradient
- **Angle:** 135°
- **Stops:** 
  - 0%: `#00C9B1`
  - 60%: `#FFFFFF`
- **Usage:** Apply to highlight items, the second line of the Hero H1, and section highlight words.

---

## 💠 4. Component Dictionary (Figma Components)

Create these as main components in your Figma file for consistent drag-and-drop usage.

### Glass Card
- **Fill:** Solid `#FFFFFF` at 4% opacity
- **Stroke:** `#FFFFFF` at 8% opacity, 1px width, Inside
- **Corner Radius:** `16px`
- **Effects (Backdrop Filter):** Blur `20px` (Note: ensure elements behind are visible to test the glass effect)
- **Hover State (Variant):**
  - Drop Shadow: `Y: 0`, `Blur: 30`, `Color: #00C9B1 at 12%`
  - Stroke: `#00C9B1` at 25%

### Glow Button (Primary)
- **Fill:** `#00C9B1`
- **Text:** `DM Sans`, Bold (700), `15px`, Color: `#0A1628`
- **Padding:** `14px` (T/B), `28px` (L/R)
- **Corner Radius:** `8px`
- **Effects (Drop Shadow):** `Y: 0`, `Blur: 24`, `Color: #00C9B1 at 30%`
- **Element:** Right arrow icon included after text
- **Hover State (Variant):** Drop shadow blur to `40`, shadow opacity `50%`, overlay Brightness.

### Ghost Button
- **Fill:** Transparent
- **Stroke:** `#FFFFFF` at 15% opacity, 1px
- **Text:** Color `#FFFFFF` at 70% opacity, `14px` to `16px` as needed.
- **Padding & Radius:** `14px 28px`, `8px`
- **Hover State (Variant):** Fill `#FFFFFF` at 6%, text color `#FFFFFF` at 100%.

### WhatsApp Button
- **Fill:** `#25D366`
- **Text:** `#FFFFFF`, Bold
- **Effects (Drop Shadow):** `Y: 0`, `Blur: 24`, `Color: #25D366 at 25%`
- **Padding:** Match Glow Button.
- **Element:** WhatsApp Logo/Icon inside before text.

### Tech Chip
- **Fill:** `#00C9B1` at 8%
- **Stroke:** `#00C9B1` at 20%, 1px
- **Text:** `JetBrains Mono`, `11px`, Color `#00C9B1`
- **Padding:** `4px` (T/B), `10px` (L/R)
- **Corner Radius:** `4px`

### Industry Badge
- **Fill:** `#00C9B1` at 10%
- **Stroke:** `#00C9B1` at 20%, 1px
- **Text:** `DM Sans`, Bold (700), `11px`, UPPERCASE, Color `#00C9B1`
- **Padding:** `4px` (T/B), `12px` (L/R)
- **Corner Radius:** `999px` (Pill)

### Ping Badge
- **Wrapper (Container):** Glass Background `#FFFFFF` at 4%, pill shape, horizontal auto-layout.
- **Element 1 (Dot):** `8x8px` Ellipse, Fill `#25D366` (Green). Include ping animation layer if creating prototype interactions.
- **Element 2 (Text):** `"LIVE IN 20+ BUSINESSES"`, Font: `JetBrains Mono`, `11px`, Color `#00C9B1`.

### Metric Card
- **Fill:** `#00C9B1` at 6%
- **Stroke Left:** `3px` solid `#00C9B1`
- **Corner Radius:** `0px` Top Left, `12px` Top Right, `12px` Bottom Right, `0px` Bottom Left.
- **Padding:** `20px` (T/B), `24px` (L/R)
- **Content:**
  - Standard Auto Layout (Vertical, `4px` spacing)
  - Number text: `Playfair Display`, `800`, `48px`, Color `#00C9B1`
  - Label text: `DM Sans`, `400`, `14px`, Color `#FFFFFF` at 50%

### Section Eyebrow
- **Text:** `JetBrains Mono`, `11px`, UPPERCASE, Letter-spacing `15%`, Color `#00C9B1`

### Divider
- **Shape:** Rectangle `Height: 1px`, `Width: auto (fill container)`
- **Fill:** Linear gradient, Angle `0°` (Horizontal)
  - 0%: `#00C9B1` at 0%
  - 50%: `#00C9B1` at 30%
  - 100%: `#00C9B1` at 0%

---

## 🌌 5. Background System

This composition should be created as a **Frame variant** or a separate Background Asset component to place beneath standard screens.

- **Layer 1 (Base):** Solid Fill `#0A1628`
- **Layer 2 (Grid lines):** 
  - Fill 1: Linear gradient horizontal, `1px` lines every `60px` with `#FFFFFF` at 2.5% 
  - Fill 2: Linear gradient vertical, `1px` lines every `60px` with `#FFFFFF` at 2.5%
- **Layer 3 (Orbs):**
  - **Orb 1:** Top-right, Ellipse 700x700px, Radial Gradient `rgba(0,201,177,0.12)` fading to transparent, Layer Blur (approx 100~150).
  - **Orb 2:** Bottom-left, Ellipse 500x500px, Radial Gradient `rgba(245,158,11,0.07)` fading to transparent, Layer Blur (approx 100~150).
- **Layer 4 (Vignette):** 
  - Frame overlay matching screen size.
  - Fill: Radial Gradient, Ellipse at center, 0% to 40% Transparent, 100% is `#0A1628`.
- **Layer 5 (Noise):** 
  - Image fill containing a noise texture, Set blend mode to Overlay or Normal, Opacity `3%`.
