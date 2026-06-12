import { Link } from "react-router";
import { recipes } from "./gallery";

export function meta() {
  return [
    { title: "Recipe Gallery" },
    { name: "description", content: "Welcome to the Recipe Gallery!" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col">

      {/* ── Hero ── */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-32 overflow-hidden">
        {/* blurred background image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&q=80')",
            filter: "brightness(0.35) blur(2px)",
          }}
        />

        {/* content sits above the overlay */}
        <div className="relative z-10 max-w-2xl">
          <span className="inline-block mb-4 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-sm font-medium tracking-wide uppercase">
            Fresh &amp; Delicious
          </span>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight">
            Cook Something <span className="text-orange-400">Amazing</span> Today
          </h1>
          <p className="mt-5 text-lg text-gray-300 leading-relaxed">
            Browse our growing collection of hand-picked recipes — from quick weeknight dinners
            to weekend showstoppers.
          </p>
          <Link
            to="/gallery"
            className="inline-block mt-8 px-8 py-3 rounded-full bg-orange-500 hover:bg-orange-400 text-white font-semibold text-base transition-colors duration-200 shadow-lg"
          >
            Browse All Recipes →
          </Link>
        </div>
      </section>

      {/* ── Featured recipes strip ── */}
      <section className="px-6 py-16 max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Featured Recipes</h2>
          <Link
            to="/gallery"
            className="text-sm text-orange-500 hover:underline font-medium"
          >
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.slice(0, 3).map((recipe) => (
            <Link
              key={recipe.id}
              to={`/recipe/${recipe.id}`}
              className="group block rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-900"
            >
              <div className="overflow-hidden h-48">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-orange-500 transition-colors duration-200">
                  {recipe.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {recipe.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="mt-auto py-6 text-center text-sm text-gray-400 dark:text-gray-600 border-t border-gray-200 dark:border-gray-800">
        © {new Date().getFullYear()} Recipe Gallery · Built with React Router
      </footer>

    </div>
  );
}
