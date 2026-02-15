import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Recipe title is required.";
    }

    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required.";
    } else {
      const ingredientList = ingredients
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item !== "");

      if (ingredientList.length < 2) {
        newErrors.ingredients =
          "Please include at least two ingredients separated by commas.";
      }
    }

    if (!steps.trim()) {
      newErrors.steps = "Preparation steps are required.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const newRecipe = {
        title,
        ingredients: ingredients.split(",").map((item) => item.trim()),
        instructions: steps.split("\n").map((step) => step.trim()),
      };

      console.log("New Recipe Submitted:", newRecipe);

      setSuccess(true);
      setTitle("");
      setIngredients("");
      setSteps("");
      setErrors({});
    } else {
      setSuccess(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-6">
          Add New Recipe
        </h2>

        {success && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
            Recipe submitted successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Recipe Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none ${
                errors.title ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter recipe title"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">
                {errors.title}
              </p>
            )}
          </div>

          {/* Ingredients */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Ingredients (separate with commas)
            </label>
            <textarea
              rows="4"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none ${
                errors.ingredients ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="e.g. Flour, Sugar, Eggs"
            />
            {errors.ingredients && (
              <p className="text-red-500 text-sm mt-1">
                {errors.ingredients}
              </p>
            )}
          </div>

          {/* Preparation Steps */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Preparation Steps (one per line)
            </label>
            <textarea
              rows="5"
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none ${
                errors.steps ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Step 1: ...&#10;Step 2: ..."
            />
            {errors.steps && (
              <p className="text-red-500 text-sm mt-1">
                {errors.steps}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Submit Recipe
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddRecipeForm;