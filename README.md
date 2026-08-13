# 🎬 React Revision Journey — Netflix Movies App

A hands-on React.js revision project where I practice and document every concept I learn — from JSX basics all the way to React State (`useState`). This is not just a Netflix card app; it's a living codebase that grows with every concept I master.

---

## 📑 Table of Contents

- [🚀 Project Overview](#-project-overview)
- [📚 Concepts Covered](#-concepts-covered)
  - [✅ JSX Basics](#-jsx-basics)
  - [✅ Components](#-components)
  - [✅ Fragments](#-fragments)
  - [✅ Import & Export (Named vs Default)](#-import--export-named-vs-default)
  - [✅ Conditional Rendering](#-conditional-rendering)
  - [✅ Looping in JSX (.map())](#-looping-in-jsx-map)
  - [✅ Keys in React](#-keys-in-react)
  - [✅ Props & Component Communication](#-props--component-communication)
  - [✅ children Prop](#-children-prop)
  - [✅ Passing Functions as Props (Event Props)](#-passing-functions-as-props-event-props)
  - [✅ Props Destructuring](#-props-destructuring)
  - [✅ Conditional Styling](#-conditional-styling)
  - [✅ CSS Modules](#-css-modules)
  - [✅ Tailwind CSS in React](#-tailwind-css-in-react)
  - [✅ Styled Components](#-styled-components)
  - [✅ Event Handling in React](#-event-handling-in-react)
  - [✅ Event Bubbling, Capturing & stopPropagation](#-event-bubbling-capturing--stoppropagation)
  - [✅ React State — useState Hook](#-react-state--usestate-hook)
  - [✅ Multiple State Variables](#-multiple-state-variables)
  - [✅ Reusable List Components](#-reusable-list-components)
  - [🎬 Mini Project: Netflix Series Cards](#-mini-project-netflix-series-cards)
- [📂 Folder Structure](#-folder-structure)
- [🛠️ Tech Stack](#️-tech-stack)
- [🎯 Why I Built This](#-why-i-built-this)
- [🚀 Getting Started](#-getting-started)
- [📈 Learning Journey](#-learning-journey)
- [🙌 Acknowledgment](#-acknowledgment)

---

## 🚀 Project Overview

This repository is my React.js revision playground.

Instead of just watching tutorials, I build things from scratch, break them, fix them, and document everything I learn. Every component in this project represents a concept I have practiced with real code.

**The project includes:**

- ✅ Netflix series cards rendered dynamically from JSON data
- ✅ Reusable card and list components using props
- ✅ CSS Modules practice with scoped styles and dynamic class names
- ✅ Tailwind CSS setup and utility class usage in Vite + React
- ✅ Styled Components with both template literal and object syntax
- ✅ Event handling: `onClick`, `onMouseOver`, event object, passing arguments
- ✅ Event propagation: Bubbling, Capturing, and `stopPropagation`
- ✅ Passing functions as props between parent and child components
- ✅ `children` prop for flexible layout components
- ✅ React State (`useState`) with Increase / Decrease / Reset counter
- ✅ Multiple independent state variables in a single component
- ✅ Export/Import bug fixes (named vs default export)
- ✅ Conditional rendering using `&&`, ternary operator, variables, functions
- ✅ Conditional styling using inline styles and dynamic class names

---

## 📚 Concepts Covered

---

### ✅ JSX Basics

**File:** `src/main.jsx`, all component files

Learned:

- JSX syntax and rules
- Single parent element rule
- Self-closing tags must be closed (`<img />`)
- `className` instead of `class`
- `htmlFor` instead of `for`
- JavaScript expressions inside `{}` in JSX
- How JSX is compiled by Babel into `React.createElement()` behind the scenes

---

### ✅ Components

**Files:** `src/component/car.jsx`, `src/component/carinfo.jsx`, `src/component/profilecard.jsx`, `src/component/profil.jsx`

Learned:

- What components are and why they make code reusable
- Creating multiple UI blocks from a single component
- Component naming must start with a capital letter
- Difference between component files and utility files

**Problem:** Writing the same card HTML again and again.

**Solution:** Create one component and render it multiple times with different props.

---

### ✅ Fragments

**Used in:** `src/component/st.jsx`, `src/component/event_props.jsx`, `src/component/react_props.jsx`

Learned:

- Empty fragment shorthand `<> </>`
- Full `<React.Fragment> </React.Fragment>` syntax
- Why fragments avoid unnecessary DOM nodes

```jsx
<>
  <h1>Title</h1>
  <p>Description</p>
</>
```

> **Important:** You cannot pass a `key` prop to `<> </>`. Use `<React.Fragment key={id}>` when you need keys inside fragments.

---

### ✅ Import & Export (Named vs Default)

**Files:** All component files

Learned the two types of exports and how to use them correctly:

#### Named Export

```jsx
// Exporting
export function Card() {}

// Importing
import { Card } from "./Card";
```

#### Default Export

```jsx
// Exporting
export default function Car() {}

// Importing
import Car from "./car";
```

#### Mixed Export

A file can have one default export and multiple named exports at the same time.

> **Bug Fixed:** `Counter` in `react_state.jsx` was `export default` but imported as `{Counter}` (named). This caused a white screen crash. Fixed by changing to `export function Counter()`.

---

### ✅ Conditional Rendering

**Files:** `src/component/list.jsx`, `src/component/profil.jsx`

Learned different ways to conditionally show UI:

| Method | Example |
|--------|---------|
| `&&` operator | `{isLoggedIn && <h1>Welcome</h1>}` |
| Ternary `? :` | `{age > 18 ? <Adult /> : <Child />}` |
| Variable | `let element = condition ? <A/> : <B/>` |
| Function | `function getUI() { return <X/>; }` |

> **Important:** React does NOT render `false`, `null`, `undefined`, or `true`. But it DOES render `0` and strings.

---

### ✅ Looping in JSX (.map())

**Files:** `src/component/components.jsx`, `src/component/list.jsx`

Learned how to render lists dynamically using `.map()`:

```jsx
apidata.map((movie) => {
  return <ListSeries key={movie.id} apidatas={movie} />;
});
```

**Problem:** Hardcoding every card manually.

**Solution:** Use `.map()` to generate cards from a data array.

---

### ✅ Keys in React

**File:** `src/component/components.jsx`, `src/component/list.jsx`

Learned why React needs `key` on list items:

```jsx
<ListSeries key={apidatas.id} apidatas={apidatas} />
```

- Keys help React identify which item changed, was added, or removed
- Keys improve re-rendering performance
- Keys must be unique among siblings
- Avoid using array index as key when list order can change

---

### ✅ Props & Component Communication

**Files:** `src/component/car.jsx`, `src/component/carinfo.jsx`, `src/component/profilecard.jsx`

Learned how to pass data from parent to child components:

```jsx
// Parent
<Car name="Mustang GT500" brand="Ford" year="2027" />

// Child
export default function Car(props) {
  return <h1>{props.name}</h1>;
}
```

> **Important:** Props are read-only. A child component must never modify the props it receives from its parent.

---

### ✅ children Prop

**Files:** `src/component/profil.jsx`, `src/component/profilecard.jsx`

Learned how to pass JSX content between opening and closing tags of a component:

```jsx
// Parent — passing children
<Profilecard name1="Abdul" age="21">
  <p>🎮 Hobbies: Gaming</p>
  <button>Contact</button>
</Profilecard>

// Child — consuming children
export function Profilecard(props) {
  return (
    <div>
      <h1>{props.name1}</h1>
      {props.children}  {/* renders the passed content */}
    </div>
  );
}
```

---

### ✅ Passing Functions as Props (Event Props)

**Files:** `src/component/react_props.jsx`, `src/component/event_props.jsx`

Learned how to pass event handler functions from parent to child through props:

```jsx
// Parent
const clickmouse = () => alert("click event");

<Mybutton text="Click Me" clickp={clickmouse} mousep={mousehover} />

// Child
export function Mybutton(props) {
  return <button onClick={props.clickp}>{props.text}</button>;
}
```

This pattern allows child components to trigger parent-defined logic — key to component communication.

---

### ✅ Props Destructuring

**File:** `src/component/list.jsx`

Learned how to destructure props for cleaner, more readable code:

```jsx
// Instead of props.apidatas.name, props.apidatas.rating...
export function ListSeries(props) {
  const { name, id, img_url, rating, description, cast, genre, watch_url } = props.apidatas;

  return <h1>{name}</h1>;
}
```

---

### ✅ Conditional Styling

**Files:** `src/component/list.jsx`, `src/component/css_module_practice.jsx`

#### Inline Conditional Style

```jsx
<a
  href={watch_url}
  style={{ backgroundColor: rating > 8.5 ? "blue" : "green" }}
>
  Link
</a>
```

#### Dynamic Class Names

```jsx
<p className={`ratingstyle ${rating > 8.5 ? "superhit" : "kalahit"}`}>
  {rating}
</p>
```

Learned:

- Applying inline styles conditionally using ternary
- Combining a base class with a conditional class using template literals
- Using a shared base class (`ratingstyle`) alongside conditional classes

---

### ✅ CSS Modules

**Files:** `src/component/css_module_practice.jsx`, `src/component/practice.module.css`

Learned how to write scoped, collision-free CSS using CSS Modules:

```jsx
import Style from "./practice.module.css";

export function Profile1() {
  let age = 19;
  return (
    <div>
      <h1 className={Style.heading}>CSS Modules Practice</h1>
      <p className={Style["card-conatiner"]}>Bracket notation for hyphenated classes</p>

      {/* Dynamic conditional class with CSS Modules */}
      <p className={`${Style.common} ${age > 18 ? Style.green : Style.blue}`}>
        Conditional class via template literal
      </p>
    </div>
  );
}
```

Learned:

- Importing CSS Modules with `import Style from "./file.module.css"`
- Dot notation: `Style.heading`
- Bracket notation for hyphenated names: `Style["card-container"]`
- Combining template literals with CSS Module classes for conditional styling
- CSS Modules generate unique class names automatically — no global conflicts

---

### ✅ Tailwind CSS in React

**Files:** `src/tail.jsx`, `tailwind.config.js`, `src/index.css`

Learned how to set up and use Tailwind CSS in a React + Vite project:

```jsx
export default function Tail() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <span className="text-3xl font-bold underline text-red-500 bg-orange-300">
        Hello
      </span>
    </>
  );
}
```

Setup steps:

1. Installed `tailwindcss` as a dev dependency
2. Added Tailwind directives to `src/index.css`:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
3. Configured `tailwind.config.js` with content paths

---

### ✅ Styled Components

**File:** `src/component/st.jsx`

Learned two syntax styles for `styled-components`:

#### Template Literal Syntax

```jsx
import styled from "styled-components";

const NewButton = styled.button`
  background-color: ${(props) => (props.age > 18 ? "green" : "blue")};
  padding: 10px 20px;
  border-radius: 5px;
`;

export function Practice() {
  const age = 19;
  return <NewButton age={age}>Hello {age}</NewButton>;
}
```

#### Object Syntax

```jsx
const Button = styled.button((props) => ({
  backgroundColor: props.primary ? "green" : "red",
  color: "white",
  padding: "10px 20px",
}));

export function Afu() {
  return (
    <>
      <Button primary>Save</Button>
      <Button>Delete</Button>
    </>
  );
}
```

Learned:

- Writing CSS inside JavaScript using template literals
- Object syntax as an alternative to template literals
- Passing props to control dynamic styles
- `props.primary` is `true` when the attribute is present, `undefined` (falsy) when absent

---

### ✅ Event Handling in React

**File:** `src/evnthndl.jsx`

Learned how to handle user events in React:

```jsx
// Named handler function
export function Evnthand() {
  function handleButton(event) {
    alert("Button Clicked");
    console.log(event);          // SyntheticEvent
    console.log(event.target);   // The clicked element
    console.log(event.type);     // "click"
  }
  return <button onClick={handleButton}>Click Me</button>;
}

// Inline arrow function
export function Eventhandle2() {
  return <button onClick={() => alert("Hello!")}>Alert</button>;
}

// Passing arguments to handlers
function handleUser(name) {
  console.log(`Hello ${name}`);
}

export function Eventhandle3() {
  return <button onClick={() => handleUser("Going")}>Greet</button>;
}
```

> **Important:** Never write `onClick={handleButton()}` with parentheses directly — this calls the function immediately on render, not on click.

---

### ✅ Event Bubbling, Capturing & stopPropagation

**Files:** `src/component/event_prop.jsx`, `src/component/event_prop.css`

Learned the three phases of event propagation in React:

#### 1. Event Bubbling (default)

Events fire from the innermost element (child) up to the outermost (grandparent).

```jsx
export function EventPropagation1() {
  return (
    <div onClick={() => console.log("Grandparent")}>
      <div onClick={() => console.log("Parent")}>
        <button onClick={() => console.log("Child")}>Click Me</button>
      </div>
    </div>
  );
}
// Click order: Child → Parent → Grandparent
```

#### 2. Event Capturing

Events fire from the outermost element (grandparent) down to the innermost (child) using `onClickCapture`.

```jsx
export function EventPropagation2() {
  return (
    <div onClickCapture={() => console.log("Grandparent")}>
      <div onClickCapture={() => console.log("Parent")}>
        <button onClickCapture={() => console.log("Child")}>Click Me</button>
      </div>
    </div>
  );
}
// Click order: Grandparent → Parent → Child
```

#### 3. stopPropagation

Stops the event from propagating further up (or down) the tree.

```jsx
export function EventPropagation3() {
  const Child2 = (event) => {
    console.log("Child");
    event.stopPropagation(); // stops bubbling — Parent and Grandparent won't fire
  };
  // ...
}
```

---

### ✅ React State — useState Hook

**File:** `src/component/react_state.jsx`

Learned how to add dynamic, reactive data to a component using `useState`:

```jsx
import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>➕ Increase</button>
      <button onClick={() => setCount(count - 1)}>➖ Decrease</button>
      <button onClick={() => setCount(0)}>🔄 Reset</button>
    </div>
  );
}
```

Learned:

- `useState(initialValue)` returns `[currentState, setterFunction]`
- Calling `setState` triggers a re-render of the component
- State is local — each component instance has its own state
- State is preserved across re-renders (unlike regular variables)

---

### ✅ Multiple State Variables

**File:** `src/component/react_state.jsx` — `NameCounter` component

Learned that a single component can have multiple independent state variables:

```jsx
export function NameCounter() {
  const [name, setName] = useState("Abdul");
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(100);

  return (
    <div>
      <h2>{name}</h2>
      <button onClick={() => setName("Abdul Waheed")}>Change Name</button>

      <h2>{count}</h2>
      <button onClick={() => setCount(count - 1)}>Decrease</button>

      <h2>{count1}</h2>
      <button onClick={() => setCount1(0)}>Reset</button>
    </div>
  );
}
```

Each `useState` call is independent — updating one does not affect the others.

---

### ✅ Derived State

**File:** `src/component/react_state_challeneg.jsx`

Learned that some states can be calculated from existing states without needing their own `useState` call:

```jsx
export function Challenge1() {
  const [userData, setUserData] = useState(user);
  
  // Derived state — automatically updates when userData changes
  const userCount = userData.length;  

  function calculateAverageAge(data) {
    if (data.length === 0) return 0;
    const totalAge = data.reduce((sum, user) => sum + user.age, 0);
    return totalAge / data.length;
  }
  
  const averageAge = calculateAverageAge(userData); 

  return (
    <div>
      <p>Total Users: {userCount}</p>
      <p>Average Age: {averageAge}</p>
    </div>
  );
}
```

---

### ✅ Lifting State Up

**File:** `src/component/lifting.jsx`

Learned how to share state between sibling components by moving the state up to their closest common ancestor (parent):

```jsx
export function LiftingState() {
  // State is lifted up to the parent component
  const [inputValue, setInputValue] = useState("");  

  return (
    <>
      <InputComponent inpvalue={inputValue} setInputValue={setInputValue} />
      <DisplayComponent valuetoshow={inputValue} />
    </>
  );
}
```

This ensures that the child components are kept in sync and rely on the parent for the single source of truth.

---

### ✅ Toggle Switch (State Practice)

**Files:** `src/component/toggle.jsx`, `src/component/toggle.css`

Learned how to toggle boolean state and apply dynamic CSS classes/inline styles based on the state:

```jsx
export function Toggle() {
  const [isOn, setIsOn] = useState(false);

  const HandleToggle = () => setIsOn(!isOn);

  return (
    <div style={{ background: isOn ? 'green' : 'gray' }} onClick={HandleToggle}>
      <span className={isOn ? 'on' : 'off'}>{isOn ? 'ON' : 'OFF'}</span>
    </div>
  );
}
```

---

### ✅ Reusable List Components

**Files:** `src/component/list.jsx`, `src/component/components.jsx`

Learned how to split list rendering into a dedicated child component for cleaner code:

```jsx
// Parent — maps over data and delegates rendering to child
export function Diffcard() {
  return (
    <ul>
      {apidata.map((apidatas) => (
        <ListSeries key={apidatas.id} apidatas={apidatas} />
      ))}
    </ul>
  );
}

// Child — handles rendering of a single item
export function ListSeries(props) {
  const { name, img_url, rating, description, genre, cast, watch_url } = props.apidatas;
  return (
    <li>
      <img src={img_url} alt={name} height="200" width="300" />
      <h1>{name}</h1>
      <p>{description}</p>
    </li>
  );
}
```

Benefits:

- Keeps the parent component clean
- Makes list item structure reusable
- Separates layout logic from data mapping

---

## 🎬 Mini Project: Netflix Series Cards

A dynamic card list powered by JSON data from `src/Api/Seriesdata.json`.

| Feature | Status |
|---------|--------|
| Data stored in a JSON file | ✅ |
| Dynamic rendering with `.map()` | ✅ |
| Reusable card component | ✅ |
| Reusable `ListSeries` item component | ✅ |
| Props passed parent → child | ✅ |
| Unique `key` for every card | ✅ |
| Images, ratings, genres, descriptions, links | ✅ |
| Conditional link color based on rating | ✅ |
| Conditional rating class (`superhit` / `kalahit`) | ✅ |
| CSS Modules scoped styling | ✅ |
| Tailwind CSS utility classes | ✅ |
| Styled Components dynamic props | ✅ |
| Event handling: `onClick`, `onMouseOver`, event object | ✅ |
| Event Bubbling, Capturing, stopPropagation | ✅ |
| Functions passed as props | ✅ |
| `children` prop usage | ✅ |
| React State (`useState`) with counter | ✅ |
| Multiple state variables | ✅ |
| Export/Import bug fixed | ✅ |

---

## 📂 Folder Structure

```
react-revision-journey/
│
├── .git/                          # Git version control
├── .gitignore                     # Files ignored by Git
├── README.md                      # Project documentation (this file)
├── eslint.config.js               # ESLint configuration
├── index.html                     # HTML entry point
├── package.json                   # Project metadata & dependencies
├── package-lock.json              # Locked dependency versions
├── tailwind.config.js             # Tailwind CSS configuration
├── vite.config.js                 # Vite bundler configuration
│
├── public/                        # Static public assets
│   ├── favicon.svg
│   └── icons.svg
│
└── src/                           # React source code
    │
    ├── Api/                       # Mock JSON data (simulates API)
    │   └── Seriesdata.json        # Netflix series data array
    │
    ├── assets/                    # Static assets (images, icons)
    │
    ├── component/                 # All reusable React components
    │   │
    │   ├── car.jsx                # Car component (default export, props demo)
    │   ├── car.css                # Styles for Car component
    │   │
    │   ├── carinfo.jsx            # Parent that renders Car with props
    │   ├── carinfo.css            # Styles for Carinfo section
    │   │
    │   ├── components.jsx         # Diffcard — maps Seriesdata.json → ListSeries
    │   │
    │   ├── list.jsx               # ListSeries — single Netflix card (props destructuring, conditional styling)
    │   │
    │   ├── profil.jsx             # Profile — parent using children prop
    │   ├── profil.css             # Styles for Profile
    │   │
    │   ├── profilecard.jsx        # Profilecard — consumes children prop
    │   ├── profilecard.css        # Styles for Profilecard
    │   │
    │   ├── css_module_practice.jsx # Profile1 — CSS Modules & dynamic classes
    │   ├── practice.module.css    # Scoped CSS Module file
    │   │
    │   ├── st.jsx                 # Practice + Afu — Styled Components (2 syntaxes)
    │   │
    │   ├── react_props.jsx        # EventProps — passes handler functions as props
    │   ├── event_props.jsx        # Mybutton — receives onClick/onMouseOver as props
    │   │
    │   ├── event_prop.jsx         # EventPropagation1/2/3 — Bubbling, Capturing, stopPropagation
    │   ├── event_prop.css         # Styles for event propagation demos
    │   │
    │   ├── react_state.jsx        # Counter + NameCounter — useState hook practice
    │   ├── Counter.css            # Styles for counter component
    │   │
    │   ├── react_state_challeneg.jsx # Challenge1 — derived state and array state
    │   │
    │   ├── lifting.jsx            # LiftingState — lifting state up practice
    │   ├── lifting.css            # Styles for lifting state components
    │   │
    │   ├── toggle.jsx             # Toggle — simple toggle switch with state
    │   └── toggle.css             # Styles for toggle switch
    │
    ├── App.jsx                    # Root component — assembles all components
    ├── App.css                    # Global app styles
    │
    ├── evnthndl.jsx               # Evnthand/Eventhandle2/3 — event handling basics
    ├── event.css                  # Styles for event handler demos
    │
    ├── tail.jsx                   # Tail — Tailwind CSS demo component
    │
    ├── index.css                  # Global CSS + Tailwind directives
    └── main.jsx                   # React entry point (ReactDOM.createRoot)
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | UI library |
| **JavaScript ES6+** | Logic, arrow functions, destructuring |
| **JSX** | HTML-like syntax in JavaScript |
| **Vite** | Fast development build tool |
| **CSS** | Component and global styles |
| **CSS Modules** | Scoped styles with `.module.css` |
| **Tailwind CSS v3** | Utility-first styling |
| **styled-components v6** | CSS-in-JS with dynamic props |
| **JSON** | Mock data for Netflix series |
| **ESLint** | Code quality and linting |

---

## 🎯 Why I Built This

This project is my personal revision journal for React.

My focus is not to complete tutorials — it is to:

- 🧠 Understand concepts deeply, not just copy code
- 🔁 Revise and revisit older concepts regularly
- 🐛 Break things, fix them, and understand why they break
- 🏗️ Build reusable, organized components
- 📖 Document every concept I learn so I can reference it later
- 💪 Practice consistently every day

> Real learning comes from building, breaking, and rebuilding.

---

## 🚀 Getting Started

**Clone the repository:**

```bash
git clone <your-repository-link>
```

**Navigate into the project:**

```bash
cd react-revision-journey
```

**Install dependencies:**

```bash
npm install
```

**Start the development server:**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📈 Learning Journey

This repository grows with every concept I practice.

**Completed so far:**

- [x] JSX Basics
- [x] Components
- [x] Fragments
- [x] Import & Export (Named, Default, Mixed)
- [x] Conditional Rendering
- [x] Looping with `.map()`
- [x] Keys
- [x] Props & Component Communication
- [x] `children` Prop
- [x] Passing Functions as Props
- [x] Props Destructuring
- [x] Conditional Styling (inline + class names)
- [x] CSS Modules
- [x] Tailwind CSS in React
- [x] Styled Components (template literal + object syntax)
- [x] Event Handling (`onClick`, `onMouseOver`, event object)
- [x] Event Bubbling, Capturing, `stopPropagation`
- [x] React State — `useState` Hook
- [x] Multiple State Variables
- [x] Derived State
- [x] Lifting State Up
- [x] Toggle Switch (State Practice)

**Coming next:**

- [ ] `useEffect` Hook
- [ ] Forms in React (controlled components)
- [ ] React Router (navigation between pages)
- [ ] Context API (global state)
- [ ] Custom Hooks
- [ ] API Calls with `fetch` / `axios`

> My goal is simple: Learn deeply, build consistently, and improve every day. 🚀

---

## 🙌 Acknowledgment

A special thanks to **Thapa Technical** for the amazing React.js tutorials and practical explanations that guided my learning journey.

---

⭐ If you found this project helpful or inspiring, feel free to star the repository!