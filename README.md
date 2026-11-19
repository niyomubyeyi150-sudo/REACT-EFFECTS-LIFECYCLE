
# Week 7 – React Effects Practice

A React practice project exploring **side effects, controlled inputs, local storage, timers, and Effect cleanup** using React Hooks.

## Project Overview

This project demonstrates how React handles different types of operations through practical examples. It focuses on understanding when to use pure calculations, event handlers, and `useEffect` to synchronize React with external systems.

## Technologies Used

- React
- JavaScript (ES6+)
- Vite
- Tailwind CSS v4

## Project Features

### Part A: Identify Side Effects

Implemented six examples to understand the difference between pure calculations, event handlers, and Effects.

1. **Pure Calculation – Total Price:** Calculates the total price using product price and quantity.
2. **Event Handler – Button Click:** Responds to a button click and logs a message in the console.
3. **Effect – Title Mirror:** Updates the browser tab title whenever the username changes.
4. **Pure Calculation – Temperature Conversion:** Converts Celsius to Fahrenheit.
5. **Effect – Save Note:** Saves a note to the browser's local storage whenever it changes.
6. **Event Handler – Delete Note:** Clears the note when the delete button is clicked.

### Part B: Title Mirror

Created a controlled input that updates the browser tab title as the user types.

**Concepts practised:**
- `useState`
- Controlled inputs
- `onChange`
- `useEffect`
- Dependency arrays

### Part C: Saved Note

Implemented a note-saving feature using browser `localStorage`.

The application:
- Retrieves a previously saved note when the page loads.
- Saves changes automatically whenever the note is updated.
- Keeps the note available after refreshing the browser.

**Concepts practised:**
- `localStorage.getItem()`
- `localStorage.setItem()`
- State initialization
- Synchronizing React state with browser storage

### Part D: Live Clock

Created a live clock that displays the current time and updates every second.

The clock can be hidden and shown using a button. When the clock component is removed, its timer is stopped using an Effect cleanup function.

**Concepts practised:**
- `setInterval()`
- `clearInterval()`
- Conditional rendering
- Component mounting and unmounting
- Effect cleanup

### Part E: Testing and Explanation

Tested the application to verify that:

- The browser title follows username changes.
- Notes remain saved after refreshing the page.
- The live clock updates every second.
- Hiding the clock stops its timer.
- Showing the clock starts a new timer.

Also explored dependency arrays and the purpose of Effect cleanup.

## React Concepts Learned

| Concept | Purpose |
|---|---|
| `useState` | Stores and updates component data |
| `useEffect` | Synchronizes React with external systems |
| Dependency arrays | Control when Effects run again |
| Controlled inputs | Keep input values connected to React state |
| `localStorage` | Saves data in the browser |
| `setInterval` | Repeats an action after a specified time |
| `clearInterval` | Stops a repeating timer |
| Cleanup function | Cleans up an Effect when necessary |
| Conditional rendering | Shows or hides components based on state |

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/niyomubyeyi150-sudo/REACT-EFFECTS-LIFECYCLE.git
```

### 2. Navigate into the project

```bash
cd use-effect
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## Project Structure

```text
src/
├── App.jsx
├── main.jsx
└── index.css

index.html
package.json
vite.config.js
```

## Conclusion

This project provided practical experience with React Hooks, especially `useState` and `useEffect`. It helped demonstrate how React can interact with browser features, save information, manage timers, and clean up Effects when components are removed.

The main lesson is understanding **when to use an Effect, what it synchronizes with, and why cleanup is important.**
