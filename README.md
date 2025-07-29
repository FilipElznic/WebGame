# WebGame - React + Vite + Tailwind CSS

A retro-inspired web game built with React, Vite, and Tailwind CSS. The game features XP progression, protected stages, interactive mini-games, and a unique retro UI.

## 🚀 Features

- **React 18** - Latest React with functional components and hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **JavaScript** - Modern ES6+ syntax
- **Hot Module Replacement (HMR)** - Instant updates during development
- **Firebase Authentication & XP** - User login, XP logic, and progression
- **Protected Routes** - XP-based stage access and authentication
- **Retro UI** - Pixel borders, scan lines, floating symbols
- **Responsive Design** - Desktop and mobile support
- **Mini-games** - Interactive games (e.g., Snake)
- **Custom Navigation & Feedback** - Navbar, footer, like buttons, etc.

## 🛠️ Tech Stack

- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Firebase](https://firebase.google.com/) - Auth & XP logic
- [React Router](https://reactrouter.com/) - Routing
- [ESLint](https://eslint.org/) - Code linting

## 📦 Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## 🏃‍♂️ Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Build

Build for production:

```bash
npm run build
```

## 🧹 Linting

Run ESLint:

```bash
npm run lint
```

## 📁 Project Structure

```
WebGame/
├── public/          # Static assets (images, icons)
├── src/             # Source code
│   ├── assets/      # Images, icons, etc.
│   ├── Components/  # Reusable React components
│   ├── pages/       # Page components (routes)
│   ├── firebase/    # Firebase config and auth
│   ├── App.jsx      # Main App component
│   ├── main.jsx     # Entry point
│   └── index.css    # Global styles
├── index.html       # HTML template
├── package.json     # Dependencies and scripts
├── tailwind.config.js  # Tailwind configuration
├── postcss.config.js   # PostCSS configuration
├── vite.config.js      # Vite configuration
└── vercel.json         # Vercel SPA routing config
```

## 🎨 Styling

This project uses Tailwind CSS for styling. All styles are applied using utility classes directly in the JSX components.

### Example Usage

```jsx
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click me
</button>
```

## 🌐 Deployment

This project is ready for deployment on [Vercel](https://web-game-ruby.vercel.app/). The included `vercel.json` ensures correct SPA routing for all client-side routes.

<div align="center">
  <a href="https://shipwrecked.hackclub.com/?t=ghrm" target="_blank">
    <img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/739361f1d440b17fc9e2f74e49fc185d86cbec14_badge.png" 
         alt="This project is part of Shipwrecked, the world's first hackathon on an island!" 
         style="width: 35%;">
  </a>
</div>

Made with ❤️ by Filip Elznic
