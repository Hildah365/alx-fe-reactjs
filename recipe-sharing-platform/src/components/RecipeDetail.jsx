import { useParams, Link } from "react-router-dom";
import recipesData from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();

  const recipe = recipesData.find(
    (recipe) => recipe.id === parseInt(id)
  );

  if (!recipe) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold">Recipe not found</h2>
        <Link to="/" className="text-blue-500 underline">
          Go back
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        
        {/* Image */}
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />

        <div className="p-6">
          {/* Title */}
          <h1 className="text-3xl font-bold mb-4">
            {recipe.title}
          </h1>

          {/* Ingredients */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              Ingredients
            </h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {recipe.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Cooking Instructions
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>

          {/* Back Button */}
          <Link
            to="/"
            className="inline-block mt-6 text-blue-500 hover:underline"
          >
            ← Back to Recipes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
