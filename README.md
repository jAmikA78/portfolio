# Ahmed Ibrahim — Portfolio Website

A modern, responsive personal portfolio website built with vanilla HTML, CSS, and JavaScript — deployed on Firebase.

![Platform](https://img.shields.io/badge/platform-Web-blue)
![Status](https://img.shields.io/badge/status-Live-success)

**Live Site:** [https://ahmed-ibrahim-portfolio.web.app](https://ahmed-ibrahim-portfolio.web.app)

---

## Table of Contents

- [About](#about)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Sections](#sections)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [License](#license)

---

## About

This portfolio showcases the work, experience, and skills of **Ahmed Ibrahim Abd El-Ghany**, a Software Engineer and Mobile Developer. It is designed to be clean, animated, and fully responsive, providing visitors with an immersive single-page experience.

---

## Tech Stack

| Tool / Service | Purpose |
|----------------|---------|
| **HTML5** | Semantic markup |
| **CSS3** | Styling, gradients, animations, responsive layout |
| **JavaScript (ES6)** | DOM interactions, dynamic content rendering, carousel logic |
| **Google Fonts** | Inter typeface |
| **Font Awesome 6** | Icons |
| **Firebase Hosting** | Deployment & hosting |
| **EmailJS** | Contact form email delivery |

---

## Features

- **Single-page scrolling layout** with smooth anchor navigation
- **Fully responsive** — works on mobile, tablet, and desktop
- **Animated sections** using AOS (Animate On Scroll)
- **Dynamic content** — Projects, Skills, and Testimonials are loaded from JSON data files
- **Contact form** with real-time validation and email delivery via EmailJS
- **Mobile hamburger menu** toggle
- **Dark-themed hero & project sections** with gradient backgrounds
- **Sticky navigation** with background change on scroll
- **Scroll carousel** for Skills and Projects with left/right navigation buttons
- **Testimonial carousel** with dots, prev/next controls, and auto-rotation
- **Scroll indicator** in the hero section

---

## Sections

1. **Navigation** — Fixed navbar with smooth scroll links and a "Hire Me" CTA
2. **Hero** — Intro greeting, name, title, CTA buttons, profile image, and service cards
3. **About Me** — Story, education timeline, experience, and volunteering history
4. **Skills & Expertise** — Horizontally scrollable skill cards with chips
5. **Featured Projects** — Filterable project cards with images, tech tags, and links
6. **Testimonials** — Carousel with quotes, author info, and achievement cards
7. **Contact** — Contact info, social links, and a message form
8. **Footer** — Quick links, social icons, and availability status

---

## Getting Started

To run this project locally:

### Prerequisites

- A modern web browser
- (Optional) [Firebase CLI](https://firebase.google.com/docs/cli) for deployment

### Installation

```bash
# Clone the repository
git clone https://github.com/jAmikA78/portfolio.git
cd portfolio
```

### Run Locally

Open `index.html` in your browser, or use a local HTTP server:

```bash
# Python 3
python3 -m http.server 8080

# Node.js (npx)
npx serve .
```

Then visit `http://localhost:8080`.

---

## Project Structure

```
portfolio/
├── index.html          # Main HTML (all sections)
├── css/
│   └── style.css       # Global styles, layout, animations
├── js/
│   └── main.js         # Dynamic rendering, carousels, form logic
├── data/
│   ├── projects.json   # Project data
│   ├── skills.json     # Skills data
│   └── testimonials.json # Testimonial data
├── assets/
│   ├── personal-image.jpeg
│   └── default-image.png
├── firebase.json       # Firebase Hosting config
├── .firebaserc         # Firebase project alias
└── .gitignore
```

---

## Deployment

The site is deployed using **Firebase Hosting**. To deploy your own copy:

```bash
# Install Firebase CLI (if not already installed)
npm install -g firebase-tools

# Login
firebase login

# Deploy
firebase deploy
```

---

## License

This project is open source. Feel free to fork or use it as a template for your own portfolio.

---

Built by **Ahmed Ibrahim** — [GitHub](https://github.com/jAmikA78) · [LinkedIn](https://www.linkedin.com/in/-ahmed-ibrahim-abd-elghany) · [WhatsApp](https://wa.me/201127818389)