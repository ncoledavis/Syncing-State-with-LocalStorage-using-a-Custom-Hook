import { NavLink } from "react-router";

export default function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="sticky top-0 z-50 flex items-center gap-6 px-6 py-4 bg-gray-900 dark:bg-gray-800 shadow-lg">
      {/* Brand */}
      <span className="text-orange-400 font-bold text-lg mr-auto tracking-tight">
        Recipe Gallery
      </span>

      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `text-sm font-medium pb-0.5 border-b-2 transition-colors duration-200 ${
            isActive
              ? "text-orange-400 border-orange-400"
              : "text-gray-300 border-transparent hover:text-white hover:border-gray-500"
          }`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/gallery"
        className={({ isActive }) =>
          `text-sm font-medium pb-0.5 border-b-2 transition-colors duration-200 ${
            isActive
              ? "text-orange-400 border-orange-400"
              : "text-gray-300 border-transparent hover:text-white hover:border-gray-500"
          }`
        }
      >
        Gallery
      </NavLink>

      {/* Dark/Light Mode Toggle Button */}
      <button
        onClick={toggleTheme}
        className="ml-4 px-3 py-1.5 rounded-md text-sm font-medium bg-gray-700 hover:bg-gray-600 text-gray-200 transition-colors duration-200"
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        {theme === "light" ? "Dark" : "Light"}
      </button>
    </nav>
  );
}
