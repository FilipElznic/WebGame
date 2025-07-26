# WebGame - React + Vite + Tailwind CSS

A modern web application built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **React 18** - Latest React with functional components and hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **JavaScript** - Modern ES6+ syntax
- **Hot Module Replacement (HMR)** - Instant updates during development

## 🛠️ Tech Stack

- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
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
webgame/
├── public/          # Static assets
├── src/            # Source code
│   ├── assets/     # Images, icons, etc.
│   ├── App.jsx     # Main App component
│   ├── main.jsx    # Entry point
│   └── index.css   # Global styles with Tailwind directives
├── index.html      # HTML template
├── package.json    # Dependencies and scripts
├── tailwind.config.js  # Tailwind configuration
├── postcss.config.js   # PostCSS configuration
└── vite.config.js  # Vite configuration
```

## 🎨 Styling

This project uses Tailwind CSS for styling. All styles are applied using utility classes directly in the JSX components.

### Example Usage

```jsx
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click me
</button>
```
