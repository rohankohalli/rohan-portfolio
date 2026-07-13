# Rohan Kohalli / Developer Portfolio

A premium, highly interactive web portfolio inspired by **Swiss Typographic Print / Editorial Design** (reminiscent of professional design studio catalogs). 

Built using **React + Vite** and custom **Vanilla CSS** resets, this codebase rejects typical "AI-ish/SaaS clone" aesthetics in favor of a clean, structured print layout with dynamic cursor spotlights, millimeter-paper grids, and blueprint details popovers.

---

## 🎨 Core Design Features

- **Warm Alabaster Canvas**: Alabaster light mode (`#fdfbf7`) and obsidian slate dark mode (`#08080a`) with curated bronze-gold accents (`#a16207`).
- **Interactive Grid Spotlight**: Global mouse listeners feed coordinates into CSS variables to render a moving cursor spotlight glow directly over the millimeter-paper grid lines.
- **Framed Profile Illustration**: grayscaled profile photo framed inside a double-dashed drafting sheet layout, shifting back to full color on cursor hover.
- **Popover Details Modal**: Clicking project index rows displays an overlay card styled like a technical README document, containing overview descriptions, key features, and specifications (prepared for HTML5 video loop demos).
- **Blueprint Capability Cards**: Skill sets organized as technical blueprint cards that set local offsets on mousemove to power card-level hover lights.

---

## 🛠️ Technology Stack

- **Framework**: React (Vite)
- **Styling**: Vanilla CSS (no CSS-in-JS or Tailwind weight, for maximum paint and layout performance)
- **Forms**: Serverless form action POST handler via [Formspree](https://formspree.io/)
- **Typography**:
  - Headings: *Instrument Serif* (Google Fonts)
  - Body: *Inter* (Google Fonts)
  - Details/Code: *JetBrains Mono* (Google Fonts)

---

## 🚀 Local Development Setup

Follow these commands to configure the workspace on your system:

### 1. Installation
Install project dependencies:
```bash
npm install
```

### 2. Environment Configuration
Form submissions are driven dynamically using Vite environment variables. 
1. Copy the example file to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Open `.env` and replace the default placeholder with your Formspree ID:
   ```env
   VITE_FORMSPREE_ID=mnjygkzn
   ```

### 3. Run Dev Server
Start the local server:
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your browser.

### 4. Build Production Bundle
Compile the optimized production build:
```bash
npm run build
```
Vite will compile the static distribution files into the `dist/` directory (HTML size: ~0.64kB, JS bundle: ~225kB, CSS: ~14.2kB).

---

## 📦 Directory Structure

```
Portfolio/
├── src/
│   ├── assets/              # Profile images, logos, and SVGs
│   ├── components/
│   │   ├── Header.jsx       # Simplified header with branding and navigation
│   │   ├── Hero.jsx         # Grayscale profile photo and key metrics
│   │   ├── About.jsx        # Editorial typography abstract
│   │   ├── Projects.jsx     # Project index table and popover details modal
│   │   ├── Capabilities.jsx # Blueprint-style skill cards grid
│   │   └── Contact.jsx      # Clean print form with focused underlines
│   ├── App.jsx              # Global mouse listener and state wrappers
│   ├── index.css            # Gradients, spotlights, offsets, and styles
│   └── main.jsx
├── public/                  # PDF resumes and static assets
├── .env.example             # Template for Formspree ID
├── index.html
└── package.json
```
