import { useState, useEffect } from "react";

/**
 * Custom hook that tracks the browser window's current width and height.
 * Re-renders the consuming component whenever the window is resized.
 *
 * @returns {{ width: number, height: number }}
 */
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

    // Listen for resize events
    window.addEventListener("resize", handleResize);

    // Clean up the listener when the component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
