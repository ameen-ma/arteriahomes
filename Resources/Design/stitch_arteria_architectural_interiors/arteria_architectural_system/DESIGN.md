---
name: Arteria Architectural System
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1b1c1c'
  on-surface-variant: '#3c4a46'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0ef'
  outline: '#6b7a76'
  outline-variant: '#bacac5'
  surface-tint: '#006b5e'
  primary: '#006b5e'
  on-primary: '#ffffff'
  primary-container: '#00c7b1'
  on-primary-container: '#004d44'
  inverse-primary: '#3addc6'
  secondary: '#006a69'
  on-secondary: '#ffffff'
  secondary-container: '#90f0ee'
  on-secondary-container: '#006e6d'
  tertiary: '#994717'
  on-tertiary: '#ffffff'
  tertiary-container: '#ff9660'
  on-tertiary-container: '#752e00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#61fae2'
  primary-fixed-dim: '#3addc6'
  on-primary-fixed: '#00201b'
  on-primary-fixed-variant: '#005047'
  secondary-fixed: '#93f2f1'
  secondary-fixed-dim: '#76d6d4'
  on-secondary-fixed: '#002020'
  on-secondary-fixed-variant: '#00504f'
  tertiary-fixed: '#ffdbcb'
  tertiary-fixed-dim: '#ffb693'
  on-tertiary-fixed: '#341000'
  on-tertiary-fixed-variant: '#7a3000'
  background: '#fcf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e5e2e1'
  stone-base: '#EAE7DF'
  pure-white: '#FFFFFF'
  charcoal-dark: '#1A1A1A'
typography:
  display-xl:
    fontFamily: ebGaramond
    fontSize: 80px
    fontWeight: '500'
    lineHeight: 88px
    letterSpacing: -0.02em
  display-xl-mobile:
    fontFamily: ebGaramond
    fontSize: 48px
    fontWeight: '500'
    lineHeight: 52px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: ebGaramond
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 56px
  headline-lg-mobile:
    fontFamily: ebGaramond
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  headline-md:
    fontFamily: ebGaramond
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  body-lg:
    fontFamily: hankenGrotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: hankenGrotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: hankenGrotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
  stats-num:
    fontFamily: hankenGrotesk
    fontSize: 24px
    fontWeight: '300'
    lineHeight: 32px
spacing:
  grid-margin: 64px
  grid-gutter: 24px
  section-padding: 120px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system is anchored in the concept of **Architectural Precision**. It targets a high-end clientele seeking bespoke interior solutions, where "craft" is not just a buzzword but a technical requirement. The brand personality is authoritative yet understated—think of it as the digital equivalent of a high-quality linen paper or a perfectly mitered joint.

The visual style is **Minimalist / Editorial**. It utilizes generous whitespace (negative space) to frame high-resolution architectural photography, treating the UI as a gallery rather than a utility. The interface remains quiet, allowing the textures of stone, wood, and light in the photography to provide the primary visual interest. Grid alignment is absolute, evoking a sense of structural integrity and professional rigor.

## Colors

The palette is a sophisticated interplay between organic "Stone" neutrals and technical "Teal" accents. 

- **Primary & Secondary:** The teal tones (#00C7B1 and #00807F) serve as functional accents—used for calls to action, active states, and structural highlights. They provide a high-contrast pop against the neutral base.
- **Neutral Base:** `#EAE7DF` (Stone) is the primary background color for editorial sections, providing a warmer, more premium feel than pure white. 
- **Typography & Structure:** `#222222` is used for all primary text and heavy structural borders, ensuring maximum legibility and a grounded, "ink-on-paper" aesthetic.

Use **Stone-Base** for large surface areas and **Pure White** only for specific card elements or to create "light-leaks" in the layout.

## Typography

This design system employs a high-contrast typographic pairing to signal both heritage and modernity.

- **Headlines (EB Garamond):** Used for all major titles and storytelling elements. The serif choice brings an intellectual, "archival" quality to the firm’s portfolio.
- **Body & Interface (Hanken Grotesk):** A sharp, geometric sans-serif used for all functional text, descriptions, and UI controls. It provides a technical counterpoint to the organic serif.
- **Special Case:** The `label-caps` style is essential for navigational tags and metadata (e.g., project dates, dimensions), using wide letter-spacing to mimic architectural blueprints.

## Layout & Spacing

The system follows a **Fixed 12-Column Grid** for desktop, transitioning to a **4-Column Grid** for mobile. 

- **The Power of the Void:** Large-scale sections must maintain a `section-padding` of 120px to ensure the content "breathes."
- **Asymmetric Balance:** Imagery should frequently span 7 or 8 columns, leaving the remaining columns for white space or metadata, creating an editorial, non-symmetrical look.
- **Precision Gutters:** Gutters are kept tight (24px) to emphasize the grid's structural "seams." 

On mobile, margins compress to 20px, and section padding reduces to 64px to maintain impact without excessive scrolling.

## Elevation & Depth

To maintain the architectural aesthetic, this design system avoids traditional drop shadows. Depth is achieved through **Tonal Layering** and **High-Contrast Outlines**.

- **Surfaces:** Use `#EAE7DF` (Stone) for the background and `#FFFFFF` (Pure White) for elevated components like modals or specific feature cards.
- **Borders:** Instead of shadows, use 1px solid lines in `#222222` (Charcoal) with a 10-20% opacity to define boundaries.
- **Interaction Depth:** When an element is engaged, use a solid color fill (Teal) rather than a shadow to indicate state change, keeping the UI "flat" but tactile.

## Shapes

The shape language is strictly **Sharp (0px)**. 

In architecture, precision is communicated through clean lines and perfect 90-degree angles. All buttons, image containers, input fields, and cards must have square corners. This reinforces the feeling of structural drafting and technical excellence. The only exceptions are circular icons or specific organic brand marks.

## Components

- **Buttons:** Primary buttons are solid `#222222` with `#FFFFFF` text. Secondary buttons are 1px outlines. All buttons use the `label-caps` typography style and have 0px border-radius.
- **Input Fields:** Minimalist design—bottom-border only (`#222222`, 1px). Labels use the `label-caps` style positioned above the field.
- **Cards:** No shadows. Cards are defined by a light `#222222` border (10% opacity) or a subtle change in background color from Stone to White.
- **Project Lists:** Use a "Rule Line" approach—each list item is separated by a 1px wide horizontal line, evoking the feel of an index or a ledger.
- **Architectural Specs (Chips):** Small, sharp-cornered tags with a `#EAE7DF` background and `#222222` text, used to denote materials or project locations.
- **Image Containers:** Always include a subtle 1px inner stroke if the image has a very light background to maintain the "grid" boundary.