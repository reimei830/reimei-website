# 3D Interactive Redesign - Design Document

**Date**: 2026-02-28
**Status**: Approved

## Overview

Reimei Tech website redesign: transform from a light-themed traditional B2B site into a dark, 3D-interactive experience that showcases the company's robotics and PLC expertise.

## Design Decisions

### Style Direction
- **3D Interactive** - Apple product page inspired immersive experience
- **Dark base** with neon blue accents
- **React Three Fiber** for 3D robot model rendering
- **Performance**: Rich effects prioritized, with WebGL fallbacks

### Color Palette (Dark Theme)

| Token | Value | Usage |
|-------|-------|-------|
| bg-primary | `#0a0a0f` | Main background |
| bg-secondary | `#111827` | Card/section backgrounds |
| bg-card | `rgba(17, 24, 39, 0.6)` | Glassmorphism cards |
| accent-primary | `#00a7e1` | Neon blue accent (existing reimei-light-blue) |
| accent-secondary | `#3b82f6` | Secondary blue |
| text-primary | `#f1f5f9` | Main text |
| text-secondary | `#94a3b8` | Subdued text |
| glow | `rgba(0, 167, 225, 0.3)` | Box shadow / text glow |

### Typography
- Font: Inter (kept from current design)
- Headings: weight 800, letter-spacing for presence
- Body: weight 400, adequate line-height for readability on dark bg

## Section Designs

### Header
- Transparent → scroll: `rgba(10, 10, 15, 0.8)` + `backdrop-blur-xl`
- White/light gray logo and nav links
- CTA button: outline with blue glow
- Mobile: dark panel slide-down

### Hero (Primary Impact Section)
- **Layout**: Two-column (text left, 3D model right)
- **Background**: Dark + floating particle effect
- **Left**: Headline + subheading + two CTA buttons with glow
- **Right**: React Three Fiber 3D robot arm model
  - Auto-rotation when idle
  - Mouse drag to rotate (OrbitControls)
  - Environment map for realistic metallic lighting
  - Fallback: static robot image for non-WebGL browsers
- **3D Model**: Free glTF robot arm model

### Services
- Dark background with card UI
- Cards: 3D tilt on hover + blue glow border (CSS perspective + transforms)
- Icons: glowing icon style
- Maker logos: grayscale → color on hover

### Achievements
- Enhanced dark theme (already dark in current design)
- CountUp numbers with blue glow text-shadow
- Client logos: horizontal scroll marquee animation
- Grid cards: glassmorphism (translucent + blur)

### Company
- Dark background + modern card UI for info table
- Recruitment CTA: gradient background block

### Footer
- Dark background (unified with overall theme)
- Link hover: blue accent color

## Technical Stack Additions

| Package | Version | Purpose |
|---------|---------|---------|
| `@react-three/fiber` | latest | React bindings for Three.js |
| `@react-three/drei` | latest | Helpers (OrbitControls, Environment, etc.) |
| `three` | latest | 3D rendering engine |

## Implementation Phases

1. **Phase 1**: Dark theme conversion (global colors, Tailwind config, globals.css)
2. **Phase 2**: Hero section 3D robot model (R3F setup, model loading, particles)
3. **Phase 3**: Services card 3D tilt + glow effects
4. **Phase 4**: Achievements marquee + glassmorphism
5. **Phase 5**: Header / Company / Footer polish

## Fallback Strategy
- WebGL detection at runtime
- Non-WebGL devices: static images + CSS animations
- Lazy loading for Three.js bundle (dynamic import)
- Reduced motion: respect `prefers-reduced-motion` media query
