import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required";
    if (!steps.trim()) newErrors.steps = "Steps are required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log({
        title,
        ingredients,
        steps,
      });

      setTitle("");
      setIngredients("");
      setSteps("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md md:max-w-2xl bg-white p-6 md:p-10 rounded-xl shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Add New Recipe
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          <div>
            <label className="block mb-1 font-medium">Recipe Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 md:py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Ingredients (comma separated)
            </label>
            <textarea
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 md:py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="4"
            />
            {errors.ingredients && (
              <p className="text-red-500 text-sm mt-1">
                {errors.ingredients}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Preparation Steps
            </label>
            <textarea
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 md:py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="5"
            />
            {errors.steps && (
              <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 md:py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Recipe
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddRecipeForm;