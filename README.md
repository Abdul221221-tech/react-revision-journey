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

This project displays multiple Netflix series cards dynamically.

Features:

✅ Data stored inside a JSON file.

✅ Dynamic rendering using JSX.

✅ Reusable card component.

✅ Multiple cards generated using `.map()`.

✅ Unique keys for each card.

✅ Images, ratings, genres, descriptions, and links.

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
│   │   └── components.jsx
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