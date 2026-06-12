import { useState, useEffect } from "react";

/**
 * useLocalStorage - A custom hook that works like useState,
 * but automatically syncs the value to localStorage.
 *
 * @param {string} key - The localStorage key to store the value under
 * @param {*} initialValue - The default value if nothing is found in localStorage
 * @returns {[any, Function]} - A stateful value and a setter function (just like useState)
 */
export function useLocalStorage(key, initialValue) {
  // Initialize state: check localStorage first, fall back to initialValue
  const [value, setValue] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue !== null ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      console.error("Error reading from localStorage:", error);
      return initialValue;
    }
  });

  // Every time `value` changes, save it to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error writing to localStorage:", error);
    }
  }, [key, value]);

  return [value, setValue];
}
