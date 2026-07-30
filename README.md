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
  - [✅ CSS Modules](#-css-modules)
  - [✅ Tailwind CSS in React](#-tailwind-css-in-react)
  - [✅ Styled Components](#-styled-components)
  - [✅ Event Handling in React](#-event-handling-in-react)
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
- CSS Modules practice with scoped styles
- Tailwind CSS setup in a React + Vite project with utility classes
- React event handling examples such as `onClick`, event object usage, and passing arguments to handlers
- Styled Components practice with conditional styling

### New today (2026-07-30)

- Added a CSS Modules practice component and stylesheet:
  - `src/component/css_module_practice.jsx` (exports `Profile1`)
  - `src/component/practice.module.css` (scoped CSS for `Profile1`)
- Added Tailwind CSS support for React with utility-based styling:
  - `src/tail.jsx` (demo component using Tailwind classes)
  - `src/index.css` (contains Tailwind directives and global styles)
  - `tailwind.config.js` (configured content paths for the project)
- Added React event handling examples:
  - `src/evnthndl.jsx` (contains `onClick` demos with event object access and custom handler functions)
- Added Styled Components examples and practice component:
  - `src/component/st.jsx` (exports `Practice` and `Afu` using `styled-components`)
- `App.jsx` updated to import and render the new practice components (`Profile1`, `Practice`, `Afu`).
- Confirmed `styled-components` and `tailwindcss` are declared in `package.json` dependencies/devDependencies.

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

## ✅ CSS Modules

Learned:

- How to write scoped CSS using CSS Modules
- Importing styles from `.module.css` files
- Applying dynamic class names using template literals
- Avoiding global CSS collisions

Example:

```jsx
import styles from './practice.module.css';

function Profile1() {
  return <h1 className={styles.heading}>Hello</h1>;
}
```

---

## ✅ Tailwind CSS in React

Learned:

- How to set up Tailwind CSS in a React + Vite project
- Using Tailwind utility classes such as `text-3xl`, `font-bold`, `underline`, and `text-red-500`
- Applying multiple utility classes together to quickly style components
- Keeping the UI clean and responsive using utility-first CSS

Example:

```jsx
export default function Tail() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  );
}
```

---

## ✅ Styled Components

Learned:

- How to define components with styled-components
- Writing CSS inside JavaScript template literals
- Passing props to change styles dynamically
- Using styled component objects for reusable styles

Example:

```jsx
import styled from 'styled-components';

const NewButton = styled.button`
  background-color: ${(props) => (props.age > 18 ? 'green' : 'blue')};
`;
```

---

## ✅ Event Handling in React

Learned:

- How to use `onClick` to respond to user interactions
- How the event object works in React handlers
- How to access properties like `event.target` and `event.type`
- How to pass arguments to event handlers using arrow functions

Example:

```jsx
export function Evnthand() {
  function handleButton(event) {
    alert("Button Clicked");
    console.log(event.target);
  }

  return <button onClick={handleButton}>Click Me</button>;
}
```

Another example with a custom argument:

```jsx
export function Eventhandle3() {
  return (
    <button onClick={() => handleUser("Going")}>Greet User</button>
  );
}
```

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

✅ CSS Modules practice with scoped styles.

✅ Tailwind CSS utility classes used in React components.

✅ React event handling examples with `onClick` and event object access.

✅ Styled Components practice with dynamic props.

---

# 📂 Folder Structure

```bash
netflixmovies/
│
├── .git
├── .gitignore
├── README.md
├── dist
├── eslint.config.js
├── index.html
├── node_modules
├── package-lock.json
├── package.json
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── Api/
│   │   └── Seriesdata.json
│   ├── assets/
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
│   ├── App.jsx
│   ├── App.css
│   ├── event.css
│   ├── evnthndl.jsx
│   ├── index.css
│   ├── main.jsx
│   └── tail.jsx
├── tailwind.config.js
└── vite.config.js
```

---

# 🛠️ Tech Stack

- React.js
- JavaScript (ES6+)
- JSX
- CSS
- CSS Modules
- Tailwind CSS
- styled-components
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