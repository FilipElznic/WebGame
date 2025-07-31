# WebGame

> A retro-inspired web game built with React, Vite, and Tailwind CSS. Features XP progression, protected stages, mini-games, and a unique retro UI.

---

## 🚀 Features

- **XP Progression & Levels**: Earn XP, level up, and unlock new stages
- **Protected Routes**: XP-based access and authentication
- **Mini-games**: Play interactive games (Snake, Jumping, Chest, etc.)
- **Retro & Futuristic UI**: Pixel borders, scan lines, neon effects, floating symbols
- **Design**: Works only on desktop
- **Custom Navigation**: Navbar, footer, popups, feedback forms
- **Firebase Integration**: Auth, XP, and user data stored in Firestore
- **User Data & Progress**: Save progress, feedback, and more

## 🛠️ Tech Stack

- [React](https://reactjs.org/) (18+) - UI library
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

## 🎮 Main Pages & Components

- **Home, About, Contact, Privacy, Help**: Core navigation
- **GamePage, GameStartPage, Stage1-6Page**: Main game stages
- **Mini-games**: Chest, JumpingGame, LetsPlayGame, Shipwrecked, etc.
- **Testify**: Manage and track AI tests
- **FeedbackPage**: Submit feedback, see themed backgrounds

## 🎨 Styling

Tailwind CSS is used for all styling. Utility classes are applied directly in JSX.

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
