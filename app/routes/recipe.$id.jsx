import { useParams, Link } from "react-router";
import { recipes } from "./gallery";

export function meta({ params }) {
  const recipe = recipes.find((r) => r.id === params.id);
  return [
    { title: recipe ? recipe.title : "Recipe Not Found" },
    { name: "description", content: recipe ? recipe.description : "" },
  ];
}

export default function RecipeDetail() {
  // Get the dynamic :id segment from the URL
  const { id } = useParams();

  // Find the matching recipe from the shared data array
  const recipe = recipes.find((r) => r.id === id);

  // Handle unknown IDs gracefully
  if (!recipe) {
    return (
      <main style={{ fontFamily: "Inter, sans-serif", padding: "2rem" }}>
        <h1>Recipe Not Found</h1>
        <p>No recipe exists with id "{id}".</p>
        <Link to="/gallery" style={{ color: "#e07b39" }}>
          ← Back to Gallery
        </Link>
      </main>
    );
  }

  return (
    <main
      style={{
        fontFamily: "Inter, sans-serif",
        maxWidth: "680px",
        margin: "0 auto",
        padding: "2rem",
      }}
    >
      {/* Back navigation */}
      <Link
        to="/gallery"
        style={{ color: "#e07b39", textDecoration: "none", fontWeight: "bold" }}
      >
        ← Back to Gallery
      </Link>

      {/* Recipe image */}
      <img
        src={recipe.image}
        alt={recipe.title}
        style={{
          width: "100%",
          height: "320px",
          objectFit: "cover",
          borderRadius: "10px",
          marginTop: "1.25rem",
        }}
      />

      {/* Recipe title */}
      <h1 style={{ marginTop: "1.25rem", marginBottom: "0.5rem" }}>{recipe.title}</h1>
      <p style={{ color: "#555", marginBottom: "2rem" }}>{recipe.description}</p>

      {/* Cooking Instructions placeholder */}
      <section>
        <h2>Cooking Instructions</h2>
        <p style={{ color: "#888", fontStyle: "italic" }}>
          Cooking instructions coming soon. Check back later!
        </p>
      </section>
    </main>
  );
}
