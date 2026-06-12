# Recipe Router App — Custom Hook: `useWindowSize`

## Overview

This project demonstrates how to package reusable logic into a **custom React hook**. Instead of writing window-resize tracking code inside every component that needs it, we created a single `useWindowSize` hook that any component can import.

## The Problem

Imagine you're building a streaming website. You want:

- A compact mobile layout when users watch on their phones
- A full-sized layout when they're on a laptop

To make layout decisions, you need to know the browser's current width. Writing that tracking logic directly in every component leads to a lot of duplicate code.

## The Solution: `useWindowSize`

Located at `app/hooks/useWindowSize.js`, this custom hook encapsulates all the window-tracking logic in one place.

### How It Works

```jsx
import { useState, useEffect } from "react";

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
```

### Breakdown

1. **`useState`** — Stores the current `{ width, height }` of the browser window. Initialized with the window's dimensions at the time the component mounts.

2. **`useEffect`** — Runs once on mount (empty dependency array `[]`). It attaches a `resize` event listener to the window so that every time the user resizes their browser, the state updates.

3. **Cleanup function** — The `return` inside `useEffect` removes the event listener when the component unmounts, preventing memory leaks.

4. **Return value** — The hook returns the `windowSize` object so any consuming component can read `.width` and `.height`.

### Usage Example

```jsx
import { useWindowSize } from "~/hooks/useWindowSize";

export default function VideoPlayer() {
  const { width, height } = useWindowSize();

  if (width < 768) {
    return <MobilePlayer />;
  }

  return <DesktopPlayer />;
}
```

Any component that imports the hook gets reactive access to the viewport dimensions — no duplicated resize logic required.

## Running the App

```bash
npm install
npm run dev
```

The dev server will start at `http://localhost:5173` (or the next available port).

## Tech Stack

- React 19
- React Router 7
- Tailwind CSS 4
- Vite 8
