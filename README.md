# 🎬 Netflix Movies Card App

A React.js practice project built during my revision journey to strengthen my understanding of JSX, components, conditional rendering, loops, imports/exports, and dynamic UI creation using JSON data.

---

## 📑 Table of Contents

- [🚀 Project Overview](#-project-overview)
- [📚 Concepts Covered](#-concepts-covered)
  - [✅ JSX Basics](#-jsx-basics)
  - [✅ Components](#-components)
  - [✅ Fragments](#-fragments)
  - [✅ Conditional Rendering](#-conditional-rendering)
  - [✅ Import & Export](#-import--export)
  - [✅ Looping in JSX](#-looping-in-jsx)
  - [✅ Props and Component Communication](#-props-and-component-communication)
  - [✅ Reusable List Components](#-reusable-list-components)
  - [✅ Understanding Keys](#-understanding-keys)
  - [🎬 Mini Project: Netflix Cards](#-mini-project-netflix-cards)
- [📂 Folder Structure](#-folder-structure)
- [🛠️ Tech Stack](#️-tech-stack)
- [🎯 Why I Built This](#-why-i-built-this)
- [🚀 Getting Started](#-getting-started)
- [📈 Learning Journey](#-learning-journey)
- [🙌 Acknowledgment](#-acknowledgment)

---

# 🚀 Project Overview

This repository is not just a Netflix card project.

It is part of my React.js revision journey, where I am revisiting concepts from scratch, practicing consistently, and trying to understand how React works internally instead of simply completing tutorials.

The project now includes:

- a reusable card list rendered from JSON data
- individual component props and child component communication
- a reusable list item component for Netflix series cards
- import/export fixes for default and named exports

The main goal of this project is to build a strong foundation by learning concepts deeply and applying them through small projects.

---

# 📚 Concepts Covered

## ✅ JSX Basics

Learned:

- JSX syntax and rules
- Single parent element rule
- Closing tags
- `className` instead of `class`
- `htmlFor` instead of `for`
- JavaScript expressions inside JSX
- How JSX works behind the scenes using Babel

---

## ✅ Components

Learned:

- What components are
- Why components make code reusable
- Creating multiple cards from a single component
- Component naming conventions
- Why React component names start with a capital letter

### Problem

Creating multiple cards manually leads to code duplication.

### Solution

Create one reusable component and render it multiple times.

---

## ✅ Fragments

Learned:

- Empty fragment syntax:

```jsx
<>
</>
```

- Using:

```jsx
<React.Fragment>
</React.Fragment>
```

### Why Fragments?

Fragments allow us to return multiple elements without creating unnecessary HTML elements.

### Important Point

We cannot pass a `key` prop inside:

```jsx
<>
</>
```

For that, we need:

```jsx
<React.Fragment key={id}>
```

---

## ✅ Conditional Rendering

Learned different ways to render UI conditionally:

- `&&` operator
- Ternary operator (`? :`)
- Variables
- Functions

Example:

```jsx
{
  isLoggedIn && <h1>Welcome</h1>;
}
```

### Important Observation

React does not render:

- `false`
- `null`
- `undefined`
- `true`

But it does render:

- `0`
- Strings

---

## ✅ Import & Export

Learned:

### Named Export

```jsx
export function Card() {}
```

Import:

```jsx
import { Card } from "./Card";
```

---

### Default Export

```jsx
export default Card;
```

Import:

```jsx
import Card from "./Card";
```

---

### Mixed Export

Using named and default exports together.

---

## ✅ Looping in JSX

Learned how to use the `map()` function to render UI dynamically.

Example:

```jsx
{
  apidata.map((movie) => {
    return <Card />;
  });
}
```

### Problem

Writing the same card again and again.

### Solution

Use `.map()` to generate multiple cards from data.

---

## ✅ Props and Component Communication

Learned how to pass data from parent to child components using props.

Example:

```jsx
<Car name="Mustang" brand="XUV" year="2027" />
```

Inside the child component:

```jsx
function Car(props) {
  return <h1>{props.name}</h1>;
}
```

### Important Point

Props are read-only. A child component should not modify the values it receives from its parent.

---

## ✅ Reusable List Components

Learned how to create a separate component for each list item so the same structure can be reused.

Example:

```jsx
<ListSeries key={curr.id} apidatas={curr} />
```

Inside the child list component:

```jsx
function ListSeries(props) {
  return <li>{props.apidatas.name}</li>;
}
```

### Why this helps

- keeps the main component cleaner
- makes list item rendering reusable
- separates layout from data mapping logic

---

## ✅ Understanding Keys

Example:

```jsx
<li key={movie.id}></li>
```

### Why do we use `key`?

React uses keys to:

- Identify each element uniquely
- Improve rendering performance
- Track changes efficiently
- Avoid unnecessary re-renders

Without keys, React may update the UI inefficiently.

---

# 🎬 Mini Project: Netflix Cards

This project displays multiple Netflix series cards dynamically and also includes a reusable car demo component with props.

Features:

✅ Data stored inside a JSON file.

✅ Dynamic rendering using JSX.

✅ Reusable card components.

✅ Reusable list item component.

✅ Props passed from parent to child components.

✅ Multiple cards generated using `.map()`.

✅ Unique keys for each card.

✅ Images, ratings, genres, descriptions, and links.

✅ Fixed import/export bugs between components.

---

# 🔁 Recent Changes (What I updated)

I analyzed the whole project and applied a clean, consistent CSS redesign plus several component improvements. Below is a concise changelog in the same style as this README so it's easy to review on GitHub.

## ✅ Summary of changes

- Cleaned and simplified global styling (src/index.css): consistent CSS variables, spacing system, typography, and responsive rules.
- Rewrote app-level styles (src/App.css) for a clear card grid, accessible buttons, and consistent card hover states.
- Created/updated component styles to follow the same system and improve readability:
  - src/component/profilecard.css (clean profile card layout)
  - src/component/profil.css (profile section wrapper)
  - src/component/car.css (simple car card layout)
  - src/component/carinfo.css (car section wrapper)
- Updated React components to use the new CSS classes and structure (App.jsx, profil.jsx, car.jsx, carinfo.jsx, profilecard.jsx).
- Removed heavy gradients, complex pseudo-element effects and unnecessary animations to improve text visibility and performance.
- Improved accessibility and contrast (white text on dark backgrounds, readable font sizes, proper line heights).
- Ensured responsiveness across three breakpoints: Desktop (1024px+), Tablet (640–1024px), Mobile (<640px).
- Reduced CSS bundle size (approx. 13.1 KB → 10.06 KB). Build tested and succeeded.

## 📂 Files added/modified (high level)

- Modified: src/index.css, src/App.css
- Modified: src/App.jsx, src/component/profil.jsx, src/component/car.jsx, src/component/profilecard.jsx, src/component/carinfo.jsx
- Added: src/component/profilecard.css, src/component/profil.css, src/component/car.css, src/component/carinfo.css

## 🔧 How to verify locally

1. Install dependencies if you haven't already:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Or build for production to confirm file sizes:

```bash
npm run build
```

The build completes without errors; CSS bundle and build artifacts are produced in `dist/`.

## 📝 Additional notes

- The visual/style changes are intentionally simple and focused on readability, maintainability, and accessibility. If you'd like the previous, fancier gradient effects re-applied, they can be layered back selectively.
- All CSS uses variables in :root for easy theming. Change `--primary-red` or spacing variables to adjust the look globally.

---

# 📂 Folder Structure

```bash
netflixmovies/
│
├── public/
│
├── src/
│   ├── Api/
│   │   └── Seriesdata.json
│   │
│   ├── component/
│   │   ├── car.css
│   │   ├── car.jsx
│   │   ├── carinfo.css
│   │   ├── carinfo.jsx
│   │   ├── components.jsx
│   │   ├── css_module_practice.jsx
│   │   ├── list.jsx
│   │   ├── practice.module.css
│   │   ├── profil.css
│   │   ├── profil.jsx
│   │   ├── profilecard.css
│   │   ├── profilecard.jsx
│   │   └── st.jsx
│   │
│   ├── assets/
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```

---

# 🛠️ Tech Stack

- React.js
- JavaScript (ES6+)
- JSX
- CSS
- JSON
- Vite

---

# 🎯 Why I Built This

This project is part of my revision journey.

Instead of learning only to complete tutorials, I am focusing on:

- Understanding concepts deeply
- Revising old topics
- Filling knowledge gaps
- Building projects
- Writing reusable code
- Practicing consistently

Because real learning comes from building and practicing.

---

# 🚀 Getting Started

Clone the repository:

```bash
git clone <your-repository-link>
```

Move into the project:

```bash
cd netflixmovies
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

# 📈 Learning Journey

This repository will continue to grow as I revise more React concepts and build more projects.

My goal is simple:

> Learn deeply, build consistently, and improve every day. 🚀

---

# 🙌 Acknowledgment

A special thanks to **Thapa Technical** for the amazing React.js tutorials and practical explanations that helped me during my learning journey.

---

⭐ If you found this project helpful, feel free to star the repository.