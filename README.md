# ✦ Sharukash T — Personal Data Engineering & Analytics Portfolio

[![Live Site](https://img.shields.io/badge/Live_Site-portfolio--sharukasht.netlify.app-85D600?style=for-the-badge&logo=netlify&logoColor=161616)](https://portfolio-sharukasht.netlify.app/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A modern, high-performance personal portfolio website built for **Sharukash T** (Aspiring Data Engineer & Analyst). The application features a dual-view architecture — delivering an immersive 3D/WebGL interactive experience on Desktop, and a seamless 100% continuous single-page smooth scrolling experience on Mobile devices.

🔗 **Live Website**: [https://portfolio-sharukasht.netlify.app/](https://portfolio-sharukasht.netlify.app/)  
📁 **GitHub Repository**: [https://github.com/jegan-12/client-1](https://github.com/jegan-12/client-1)

---

## ✨ Key Features

### 🖥️ Desktop Experience (`>= 1024px`)
- **3D Perspective Wireframe Canvas**: Interactive WebGL perspective grid canvas (`InteractiveCanvas.jsx`) reacting to mouse movement.
- **Floating Glassmorphism Navbar**: Glass pill navigation bar with backdrop blur and smooth route transitions (`CurtainTransition.jsx`).
- **3D Circular Project Gallery**: Interactive WebGL 3D circular carousel (`CircularGallery.jsx`) powered by `OGL`.
- **Draggable Interactive Stickers**: Custom popcorn stickers (`DraggableStickers.jsx`) with drag boundaries and physics animations.
- **Marquee Ticker Ribbons**: Animated green ticker ribbons highlighting key engineering skills.

### 📱 Mobile Experience (`< 1024px`)
- **100% Continuous Single-Page Scroll**: Smooth scrolling navigation across `#home`, `#about`, `#projects`, and `#contact` sections.
- **React Bits GSAP Staggered Menu**: Transparent 3-line hamburger menu button (`StaggeredMenu.jsx`) scrolling naturally with page content.
- **Performance Optimized**: GPU-heavy 3D canvas calls are automatically disabled on mobile devices to preserve battery life and performance.
- **Touch-Swipe Showcase Gallery**: Responsive 2D card carousel for reviewing data engineering projects.
- **Direct Resume Download**: Quick-access PDF resume download links built into mobile navigation.

### 📬 Functional EmailJS Contact System
- **Real-Time Delivery**: Direct message routing to `sharukasht@gmail.com`.
- **Instant Auto-Reply**: Automatic branded receipt email sent back to the sender's inbox (`{{user_email}}`).

---

## 🛠️ Technology Stack

| Category | Technology / Library |
| :--- | :--- |
| **Framework & Build** | React 18, Vite 6 |
| **Styling & Design** | TailwindCSS 3, Vanilla CSS, Glassmorphism |
| **Animations & 3D** | Framer Motion, GSAP, OGL (WebGL) |
| **Icons & Fonts** | Lucide React, Google Fonts (Oswald, Bricolage, Jakarta) |
| **Form Backend** | EmailJS (`@emailjs/browser`) |
| **Hosting & Deployment** | Netlify CDN (`netlify.toml`, `public/_redirects`) |

---

## 📁 Project Structure

```text
client-1/
├── public/
│   ├── avatar.png                 # Portrait cutout image
│   ├── frames/                    # Frame-by-frame canvas sequence (001-045)
│   ├── sharukash_resume.pdf       # Client resume PDF
│   └── _redirects                 # Netlify routing redirects fallback
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── StaggeredMenu.jsx # React Bits GSAP mobile menu
│   │   │   ├── StaggeredMenu.css # Mobile menu styles & highlight pills
│   │   │   └── CircularGallery.jsx # WebGL 3D carousel
│   │   ├── GlassNavbar.jsx        # Desktop & Mobile Navbar container
│   │   ├── Footer.jsx             # Website footer with clickable social buttons
│   │   ├── InteractiveCanvas.jsx  # Wireframe grid canvas background
│   │   ├── DraggableStickers.jsx  # Interactive stickers system
│   │   └── WorkExperienceDrawer.jsx # Timeline experience modal
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── ProjectsPage.jsx
│   │   └── ContactPage.jsx
│   ├── App.jsx                    # Core routing & mobile container
│   └── main.jsx
├── .env.example                   # Environment variable template
├── netlify.toml                   # Netlify build & redirect rules
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (`v18.0.0` or higher)
- npm or pnpm

## 🌐 Deployment

This project is pre-configured for **Netlify**:
- `netlify.toml` handles the build command (`npm run build`), output directory (`dist`), and SPA 200 rewrite rules for client-side routing.

---
