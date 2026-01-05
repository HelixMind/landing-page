<h1 align="center">✨ HelixMind — Accelerating biological advancements</h1>

<hr>

## ✨ Features

- ✨ **Framer Motion & GSAP animations**
- 💹 **Professional forex trading platform UI**
- 🎨 **Glassmorphism design with spotlight effects**
- 🔄 **Auto-rotating feature showcase**
- ∞ **Infinite marquee testimonials**
- 💳 **Interactive pricing cards with hover effects**
- 📱 **Fully responsive and mobile-friendly**
- ⚡ **Built with Vite for blazing-fast performance**
- 🎯 **Trading-focused components and layouts**

---

## 🧰 Tech Stack

- **React 19** – Latest React with modern hooks
- **Vite 7** – Next-generation frontend tooling
- **Tailwind CSS 4** – Utility-first styling framework
- **Framer Motion 12** – Production-ready animations
- **GSAP 3** – Professional animation platform
- **Lucide React** – Beautiful icon library
- **React Icons** – Popular icon collection

---

## 🗂️ Folder Structure

<pre>
HelixMind/
├── constants/
│   └── index.jsx             # App constants (nav links, features, pricing, testimonials)
├── public/
│   ├── fonts/                # Custom fonts (Clash Display, Poppins)
│   ├── *.png                 # Images and assets
│   └── command.svg           # Favicon
├── src/
│   ├── components/
│   │   ├── CardSpotlight.jsx # Interactive spotlight card effect
│   │   ├── Footer.jsx        # Footer with social links
│   │   ├── NavBar.jsx        # Responsive navigation bar
│   │   └── BadgeCard.jsx   # Pricing card component
│   ├── pages/
│   │   └── Home.jsx      # Main home page layout
│   ├── sections/
│   │   ├── CaSection.jsx     # Call-to-action section
│   │   ├── CoreFeatures.jsx # Interactive features showcase
│   │   ├── HeroSection.jsx   # Hero section with CTA
│   │   ├── LogoCarousel.jsx  # Animated partner logos
│   │   ├── OurAdvantage.jsx  # Pricing plans grid
│   │   └── TestimonialSection.jsx # Marquee testimonials
│   ├── App.jsx               # Main App component
│   ├── index.css             # Global styles & Tailwind config
│   └── main.jsx              # React entry point
├── .gitignore                # Git ignore rules
├── eslint.config.js          # ESLint configuration
├── index.html                # Root HTML file
├── package.json              # Dependencies & scripts
├── package-lock.json         # Lock file
├── vite.config.js            # Vite configuration
└── README.md                 # Project documentation
</pre>

---

## 📦 Installation

### Prerequisites

- Node.js (v20.19.0 or higher)
- npm or yarn package manager

### Setup

1. **Clone the repository:**
```bash
git clone https://github.com/HelixMind/landing-page.git
cd landing-page
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm run dev
```

4. **Open your browser:**
```
http://localhost:5173
```
---

## 🎨 Key Features Explained

### 🎭 Interactive Feature Showcase
The feature section uses Framer Motion for smooth transitions between trading features. Auto-rotates every 2.5 seconds with manual control on hover.

### ✨ Spotlight Cards
Pricing cards feature a dynamic spotlight effect that follows your mouse cursor, creating an immersive visual experience.

### ∞ Infinite Marquee
Testimonials scroll infinitely with CSS animations and pause-on-hover for better readability.

### 🪟 Glassmorphism Design
Modern glass-effect UI components with backdrop blur and subtle borders create depth and hierarchy.

### 🎨 Gradient Accents
Strategic use of indigo gradients highlights important CTAs and interactive elements.

---

## 🎯 Design Philosophy

HelixMind embraces a **modern dark theme** that:
- 🌙 Reduces eye strain for users working with financial data
- 📊 Provides excellent contrast for data visualization
- 💎 Creates a professional, premium feel
- 🎯 Enhances focus on key information and CTAs
- 🎨 Uses gradient accents to highlight important elements

---

## 📱 Responsive Breakpoints

- **Mobile**: < 768px *(Single column, hamburger menu)*
- **Tablet**: 768px - 1024px *(Two column grid)*
- **Desktop**: > 1024px *(Full three column grid)*
- **Full HD**: > 1920px *(Optimized spacing)*

---

## 🎨 Customization

### 🎨 Color Scheme
Update these classes to change the primary color:
- `from-indigo-400 to-indigo-600` (gradients)
- `text-indigo-300`, `text-indigo-400` (text)
- `bg-indigo-500` (backgrounds)
- `border-indigo-400` (borders)

### 📝 Content
All content is centralized in `constants/index.jsx`:
- Navigation links
- Feature descriptions
- Pricing tiers
- Testimonials
- Footer links

---