# 💸 Programas de Referidos - Premium Landing Page

A modern, fast, and multi-language landing page built with **Astro 5** and **Tailwind CSS**. This project showcases various referral programs (Investment, NeoBanks, Crypto) with real-time search functionality and a premium user experience.

---

## ✨ Features

- **🚀 Ultra-fast Performance**: Built with Astro for static site generation.
- **🌍 Multi-language (i18n)**: Supports 7 languages:
  - 🇪🇸 Spanish (Default)
  - 🇺🇸 English
  - 🇮🇹 Italian
  - 🇳🇱 Dutch
  - 🇩🇪 German
  - 🇫🇷 French
  - 🇵🇹 Portuguese
- **🔍 Real-time Search**: Filter referral codes instantly by name, category, or description.
- **📱 Premium Design**: Responsive layout with dark-mode hero section, glassmorphism effects, and smooth animations.
- **📋 Easy Copy**: One-click copy for referral codes with visual feedback.
- **📈 SEO Optimized**: Translated meta titles and descriptions for each language, sitemap integration, and semantic HTML.

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Icons**: [Lucide Icons](https://lucide.dev/) (SVG)
- **Deployment**: GitHub Pages

## 📂 Project Structure

```text
/
├── src/
│   ├── assets/         # Optimized images and logos
│   ├── components/     # Reusable UI components (Hero, Card, etc.)
│   ├── data/           # Referral data (referrals.ts)
│   ├── i18n/           # Internationalization config and dictionaries
│   ├── layouts/        # Base HTML layouts
│   └── pages/          # Astro pages and dynamic language routes
├── public/             # Static assets (robots.txt, favicon)
├── astro.config.mjs    # Astro/Vite configuration
└── package.json        # Dependencies and scripts
```

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/juamber/programas-referidos.git
   cd programas-referidos
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## ➕ How to add a new Referral Program

Edit `src/data/referrals.ts` and add a new object to the `referrals` array. Make sure to provide translations for the `description`, `bonus`, and `requirements` fields:

```typescript
{
    name: 'New Platform',
    category: 'NeoBancos',
    link: 'https://...',
    bonus: {
        es: 'Bonificación en español',
        en: 'Bonus in English',
        // ... other languages
    },
    // ... rest of fields
}
```

## 📄 License

This project is personal and created for educational/referral purposes. Feel free to use it as inspiration!

---
Made with 🤍 by [Juan](https://github.com/juamber)
