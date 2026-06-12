import { Link } from "react-router";

// Shared recipe data — imported by recipe.$id.jsx as well
export const recipes = [
  {
    id: "1",
    title: "Spaghetti Carbonara",
    description: "A classic Italian pasta dish with crispy pancetta, eggs, and Pecorino Romano.",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&q=80",
  },
  {
    id: "2",
    title: "Chicken Tikka Masala",
    description: "Tender chicken in a rich, creamy tomato-based spiced curry sauce.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80",
  },
  {
    id: "3",
    title: "Avocado Toast",
    description: "Creamy smashed avocado on toasted sourdough with a kick of chili flakes.",
    image: "/avocado-toast.jpg",
  },
  {
    id: "4",
    title: "Beef Tacos",
    description: "Juicy seasoned ground beef in crispy shells loaded with fresh toppings.",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80",
  },
  {
    id: "5",
    title: "Margherita Pizza",
    description: "Classic Neapolitan pizza with fresh mozzarella, tomato, and basil.",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80",
  },
  {
    id: "6",
    title: "Caesar Salad",
    description: "Crisp romaine lettuce, parmesan, croutons, and a tangy Caesar dressing.",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&q=80",
  },
];

export function meta() {
  return [
    { title: "Recipe Gallery" },
    { name: "description", content: "Browse our collection of recipes." },
  ];
}

export default function Gallery() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 px-6 py-10">
      {/* Page header */}
      <div className="max-w-7xl mx-auto mb-10">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
          Recipe Gallery
        </h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400 text-lg">
          {recipes.length} recipes to explore
        </p>
      </div>

      {/* Grid — fills the screen width, scrolls vertically */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            to={`/recipe/${recipe.id}`}
            className="group block rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-900"
          >
            {/* Thumbnail image */}
            <div className="overflow-hidden h-56">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Card body */}
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-orange-500 transition-colors duration-200">
                {recipe.title}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                {recipe.description}
              </p>
              <span className="inline-block mt-4 text-sm font-medium text-orange-500 group-hover:underline">
                View Recipe →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
