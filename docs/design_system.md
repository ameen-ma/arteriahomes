# Arteria - Design System

## Brand Identity
- **Name:** Arteria Home Interiors
- **Tagline:** Spaces That Tell Your Story
- **Market:** Kerala, India — luxury residential and commercial interiors
- **Tone:** Sophisticated, warm, confident — never pretentious

## Color Palette

### Primary Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | #1a1a2e | Dark backgrounds, headings, nav |
| `accent` | #c9a96e | CTAs, highlights, gold/brass elements |
| `accent-light` | #dfc89e | Hover states, light accent |

### Neutral Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `background` | #fafaf8 | Page background (warm white) |
| `foreground` | #1a1a1a | Body text |
| `muted` | #6b7280 | Secondary text, labels |
| `border` | #e5e5e5 | Borders, dividers |

### Semantic Colors
| Token | Usage |
|-------|-------|
| `destructive` | Error states |
| `success` | Form success messages |

## Typography

### Font Families
| Role | Font | Variable |
|------|------|----------|
| Body | Inter | `--font-inter` |
| Headings | Playfair Display | `--font-playfair` |
| UI | Geist (via ShadCN) | `--font-sans` |

### Font Scale
| Element | Mobile | Desktop |
|---------|--------|---------|
| H1 | 2.25rem (36px) | 4.5rem (72px) |
| H2 | 1.875rem (30px) | 3rem (48px) |
| H3 | 1.25rem (20px) | 1.5rem (24px) |
| Body | 0.875rem (14px) | 1rem (16px) |
| Small | 0.75rem (12px) | 0.875rem (14px) |

## Spacing System
- **Section padding:** `py-16 md:py-24 lg:py-32`
- **Container:** `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Card padding:** `p-6 md:p-8`
- **Grid gaps:** `gap-4 md:gap-6 lg:gap-8`
- **Element spacing:** `space-y-4` or `gap-4`

## Border Radius
| Element | Value |
|---------|-------|
| Cards | `rounded-2xl` (16px) |
| Buttons/Inputs | `rounded-full` (buttons), `rounded-lg` (inputs) |
| Images | `rounded-2xl` |

## Shadows
| Level | Class | Usage |
|-------|-------|-------|
| Subtle | `shadow-sm` | Cards at rest |
| Medium | `shadow-lg` | Cards on hover |
| Heavy | `shadow-xl` | Modals, overlays |

## Component Patterns

### Cards
```
rounded-2xl border border-border bg-white p-6 md:p-8
hover:border-accent/30 hover:shadow-lg transition-all
```

### Primary Button
```
rounded-full bg-accent px-8 py-3 text-sm font-medium text-white
hover:bg-accent-light transition-colors
```

### Secondary Button
```
rounded-full border border-white/30 px-8 py-3 text-sm font-medium
hover:bg-white/10 transition-colors
```

### Section Header
```
text-center mb-12 md:mb-16
Label: text-accent text-sm tracking-widest uppercase
Title: font-serif text-3xl sm:text-4xl md:text-5xl font-bold
```

## Breakpoints
| Name | Value | Target |
|------|-------|--------|
| base | 375px+ | Mobile phones |
| `sm` | 640px+ | Large phones |
| `md` | 768px+ | Tablets |
| `lg` | 1024px+ | Desktops |
| `xl` | 1280px+ | Wide screens |

## Animation Guidelines (Framer Motion)
- **Scroll reveal:** `whileInView` with `viewport={{ once: true }}`
- **Duration:** 0.6s default
- **Stagger:** 0.1s between sibling elements
- **Easing:** default (ease-out)
- **Hover:** subtle scale (1.02) on cards only

## Accessibility
- Color contrast: minimum 4.5:1 for text
- Touch targets: minimum 44x44px
- Focus states: visible ring on interactive elements
- Alt text: required on all images
- Heading hierarchy: h1 → h2 → h3 (no skipping)
