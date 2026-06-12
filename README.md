# Syncing State with LocalStorage using a Custom Hook

## Overview

This project demonstrates how to build a custom React hook called `useLocalStorage` that works exactly like `useState`, but automatically backs up its value to the browser's `localStorage` every time it changes. The hook is used here to implement a persistent dark/light mode toggle.
https://youtu.be/WS0JM40xiKA
## What Was Done

### 1. Created the `useLocalStorage` Hook

**File:** `app/hooks/useLocalStorage.js`

This custom hook:

- Accepts a `key` (the localStorage key) and an `initialValue` (the fallback default)
- On first render, checks localStorage for an existing value under that key
- If a stored value exists, it uses that; otherwise it uses the `initialValue`
- Every time the value changes, a `useEffect` writes the updated value back to localStorage
- Returns `[value, setValue]` — the same API as `useState`

### 2. Integrated Dark/Light Mode in `root.tsx`

- Imported and called `useLocalStorage("theme", "light")` to manage the theme state
- Created a `toggleTheme` function that flips between `"light"` and `"dark"`
- Wrapped the app content in a div that conditionally applies a `dark` class
- Added Tailwind `dark:` utility classes for background and text color transitions
- Passed `theme` and `toggleTheme` as props to the Navbar

### 3. Updated the Navbar

**File:** `app/components/Navbar.jsx`

- Added a toggle button that displays "Dark" or "Light" depending on the current theme
- The button calls `toggleTheme` on click
- Includes an `aria-label` for accessibility

### 4. Configured Tailwind for Class-Based Dark Mode

**File:** `app/app.css`

- Added `@custom-variant dark (&:where(.dark, .dark *))` so that Tailwind's `dark:` utilities are controlled by the presence of a `.dark` class on a parent element, rather than the OS-level media query

## How It Works

```
User clicks toggle
       |
       v
setTheme("dark")  <-- useLocalStorage setter
       |
       v
React re-renders  +  useEffect fires
       |                    |
       v                    v
UI updates with      localStorage.setItem("theme", "dark")
dark: classes
       
--- On next page load ---

useState initializer runs
       |
       v
localStorage.getItem("theme") --> "dark"
       |
       v
App renders in dark mode immediately
```

The user's preference survives page refreshes, tab closures, and browser restarts because localStorage persists until manually cleared.

## Usage

```jsx
import { useLocalStorage } from "./hooks/useLocalStorage";

// Works just like useState, but persists to localStorage
const [theme, setTheme] = useLocalStorage("theme", "light");
```

You can reuse `useLocalStorage` for any value you want to persist — user preferences, form drafts, shopping carts, etc.
