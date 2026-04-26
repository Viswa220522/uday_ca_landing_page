# Kothaluru & Associates - Landing Page Prototype

A high-end, cinematic landing page prototype for "Kothaluru & Associates," a Chartered Accountant firm. This project features a sophisticated Navy Blue design system with real-time customization capabilities.

## 🚀 How to Run
Since this is a self-contained prototype with no build steps:
1. Clone the repository.
2. Open `index.html` directly in any modern web browser.
3. Use the **Tweaks Panel** (bottom right) to experiment with layout density and visual script presence in real-time.

## 🛠 Tech Stack
- **Core**: HTML5, Vanilla CSS3, Vanilla JavaScript.
- **Components**: React 18 (loaded via CDN for the experimental tweaks panel).
- **Transpilation**: Babel Standalone (for JSX support in the tweaks panel).
- **Design Tokens**: Extensive use of CSS Custom Properties (variables) for theming and spacing.
- **Animations**: CSS Keyframes and `IntersectionObserver` for scroll-driven reveals.

## 🏗 Architecture
The project follows a **prototype-first architecture**, prioritizing visual fidelity and professional identity:

- **Professional Identity**: A standardized Navy Blue and Ice Blue palette designed for trust and prestige. Legacy themes have been consolidated into this singular high-end aesthetic.
- **Live Customization**: The `tweaks-panel.jsx` component allows real-time adjustment of:
  - **Density**: Switches between 'spacious' and 'compact' layouts.
  - **Script Presence**: Controls the visibility of secondary technical elements and cinematic serif accents.
- **Visual Interactions**: 
  - Magnetic button pull on CTAs.
  - Cursor-tracking radial glows.
  - Letter-split hover effects in the hero section.
  - Background opacity transitions on scroll.

## 📂 Project Structure
- `index.html`: The main entry point containing the landing page structure and core logic.
- `tweaks-panel.jsx`: React component for the live customization interface.
- `assets/`: Logos and reference imagery.
- `CLAUDE.md`: Implementation guide and technical specifications.
