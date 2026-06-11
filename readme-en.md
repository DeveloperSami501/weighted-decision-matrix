# 📊 Weighted Decision Matrix (PWA)

A pragmatic, local-first Progressive Web App designed to help users make logical, data-driven choices by evaluating different options against weighted criteria. Perfect for career planning, tech-stack decisions, and everyday workflows. 🏎️💨

---

## ✨ Features

- **🧠 Weighted Scoring Engine:** Dynamically calculates matrix scores based on user-defined criteria weights.
- **💾 Local-First Persistence:** Automatically reads and writes user inputs using the browser's `localStorage` via JSON parsing. Data stays on your device.
- **📱 Progressive Web App (PWA):** Fully installable on Android, iOS, and Desktop with offline fallback capabilities via custom Service Worker logic.
- **🌓 Theme Architecture:** Native light and dark mode switching to match system preferences seamlessly.
- **📁 Multi-Board Engine:** Allows creating, renaming, and switching between completely independent decision matrices.

---

## 🛠️ Built With & Tools Used

This project relies purely on modern, vanilla web tools to ensure absolute speed, security, and no heavy framework dependencies:

- **🌐 Frontend Core:** Semantic HTML5, modern CSS3 (featuring custom layout properties), and Vanilla JavaScript (ES6+).
- **📦 Icons Engine:** Powered by the [@tabler/icons-webfont](https://tabler.io/icons) library for clean, vector-based interface actions.
- **☁️ Deployment & Hosting:** [Netlify](https://www.netlify.com/) for instant edge-network delivery and automated continuous deployments.
- **📲 PWA Mechanics:** Native web App Manifest (`manifest.json`) paired with an aggressive-updating Service Worker (`sw.js`) to bypass aggressive mobile browser caching.

---

## 🤖 AI Models Collaboration Credits

This software was engineered utilizing an advanced **Human-AI Hybrid Workflow**, leveraging top-tier large language models for architectural design, rapid debugging, and optimization:

1. **♊ Google Gemini:** Provided senior-level architectural advice, system state analysis, debugging for persistent caching roadblocks, and deployment validation workflows.
2. ** Anthropic Claude:** Assisted in writing baseline UI modules, data structure normalization, and core logic components.

---

## 🚀 Quick Start & Development

### Running Locally

Since this is a standard vanilla client-side application, you don't need a heavy build environment (`npm run dev` is not required):

1. Clone or download this repository.
2. Open `index.html` directly in your browser, or run a simple local server (like the VS Code _Live Server_ extension) to fully test the PWA Service Worker features locally.

### Deploying Changes

Simply drop your updated root folder directly into the **Netlify Drop** dashboard, or connect your GitHub repository for automatic deployment tracking.

_Note: The deployed Service Worker features self-updating loops (`self.skipWaiting()`), allowing your mobile users to see live code updates automatically on their next background application reload._
