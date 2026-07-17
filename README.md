# Rohan Kohalli — Full Stack Developer Portfolio

Source code for my personal portfolio website.

🔗 **[View Live Portfolio](https://rohankohalli.github.io/rohan-portfolio)**

---

## 🚀 Setup & Local Development

Follow these steps to configure and run the portfolio on your local system:

### 1. Installation
Install the project dependencies:
```bash
npm install
```

### 2. Environment Configuration
Form submissions are handled dynamically using Vite environment variables:
1. Copy the template environment file to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Open `.env` and replace the value with your Formspree ID:
   ```env
   VITE_FORMSPREE_ID=mnjygkzn
   ```

### 3. Run Development Server
Start the local development server:
```bash
npm run dev
```

### 4. Build for Production
Compile the optimized static distribution bundle:
```bash
npm run build
```
The compiled production assets will be output to the `dist/` directory.