import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import recipesData from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Simulate fetching data by ID
    const foundRecipe = recipesData.find(
      (r) => r.id === parseInt(id)
    );

    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Recipe Not Found</h2>
        <Link
          to="/"
          className="text-blue-500 hover:underline mt-4 inline-block"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Back Button */}
      <Link
        to="/"
        className="text-blue-500 hover:underline mb-6 inline-block"
      >
        ← Back to Recipes
      </Link>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-72 object-cover"
        />

        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">
            {recipe.title}
          </h1>

          <p className="text-gray-600 mb-6">
            {recipe.description}
          </p>

          {/* Ingredients */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-3 border-b pb-2">
              Ingredients
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div>
            <h2 className="text-2xl font-semibold mb-3 border-b pb-2">
              Instructions
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;