# Rohan Kohalli — Full Stack Developer Portfolio

Welcome to the source code of my personal portfolio. Built with React + Vite and custom Vanilla CSS, this codebase rejects generic SaaS/AI website templates in favor of a unique **Minimalist Industrial Tech & Hardware Datasheet** aesthetic (inspired by Teenage Engineering's tactile design language).

🔗 **[View Live Portfolio](https://rohankohalli.github.io/rohan-portfolio)**

---

## 🎨 Design & Architecture Highlights

- **Tactile Hardware Grids**: Structured with thin, solid 1px chassis grid lines and panel outlines resembling a physical rack-mount chassis or modular synthesizer.
- **Standout Cyber-Minimal Palette**: 
  - **Light Mode**: Cool concrete/light gray background (`#f1f3f5`) with dark charcoal text.
  - **Dark Mode**: Deep carbon-obsidian slate (`#121318`) with steel-blue dividers.
  - **Accent**: High-visibility industrial signal orange (`#ff5722`) for pulsing LEDs, bracket highlights, and indicator dots.
- **Precision Typography**: Features **Space Grotesk** (highly geometric, sharp-angled neo-grotesque) for headings, combined with **JetBrains Mono** for technical parameter listings and labels.
- **Interactive LCD Control Terminal**: Renders a clean mock command shell dashboard displaying live compile status, port details, and active system logs.
- **Specimen Portrait Badge**: Frames the developer profile photo inside an asymmetric "Specimen Catalog" badge in the About section.
- **IDE Code Editor Popovers**: Clicking project rows opens an overlay details panel styled like an IDE editor pane, letting visitors switch files (`README.md`, `SPECS.json`, `FEATURES.txt`) next to a loop video monitor.
- **Synthesizer Skill Slots**: Tech capabilities styled as modular rack blocks with square LED highlights that glow orange on hover.

---

## 📂 Project Structure

```text
rohan-portfolio/
├── src/
│   ├── assets/              # Profile images, brand logos, and SVGs
│   ├── components/
│   │   ├── Header.jsx       # Branding logo cell & bracketed nav items
│   │   ├── Hero.jsx         # Typography intro & interactive LCD dashboard
│   │   ├── About.jsx        # Editorial details & Specimen portrait badge
│   │   ├── Projects.jsx     # Technical projects table & IDE popovers
│   │   ├── Capabilities.jsx # Hardware synthesizer module capability cards
│   │   └── Contact.jsx      # Clean form with expanding underlines & square panels
│   ├── App.jsx              # Global mouse listener & container wrappers
│   ├── index.css            # Concrete/obsidian variables, grids & typography
│   └── main.jsx             # React entry point
├── public/                  # PDF resumes, CVs, and static assets
├── .env.example             # Template for Formspree endpoint config
├── index.html               # Main layout frame
└── package.json             # Workspace dependencies
```

---

## 🚀 Local Development Setup

### 1. Installation
Install project dependencies:
```bash
npm install
```

### 2. Environment Configuration
Form submissions are driven using Vite environment variables. 
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
Open [http://localhost:5173/rohan-portfolio/](http://localhost:5173/rohan-portfolio/) in your browser.

### 4. Build Production Bundle
Compile the optimized production bundle:
```bash
npm run build
```
The built static files will be output to the `dist/` directory.