import React, { useState } from "react";

function AddRecipeForm() {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });

  const [errors, setErrors] = useState({});

  // ✅ Validation Function
  const validate = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Recipe title is required";
    }

    if (!formData.ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required";
    } else {
      const ingredientsList = formData.ingredients
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item.length > 0);

      if (ingredientsList.length < 2) {
        newErrors.ingredients =
          "Please enter at least two ingredients separated by commas";
      }
    }

    if (!formData.steps.trim()) {
      newErrors.steps = "Preparation steps are required";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    console.log("Recipe submitted:", formData);

    // Reset form
    setFormData({
      title: "",
      ingredients: "",
      steps: "",
    });
  };

  return (
    <div className="max-w-md md:max-w-2xl mx-auto p-4 md:p-8">
      <div className="bg-white shadow-lg rounded-2xl p-6 md:p-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Add New Recipe
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          {/* Recipe Title */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Recipe Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter recipe title"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
          </div>

          {/* Ingredients */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Ingredients (comma separated)
            </label>
            <textarea
              name="ingredients"
              rows="3"
              value={formData.ingredients}
              onChange={handleChange}
              placeholder="e.g. Flour, Sugar, Eggs"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
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
              Preparation Steps
            </label>
            <textarea
              name="steps"
              rows="4"
              value={formData.steps}
              onChange={handleChange}
              placeholder="Describe the preparation steps"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.steps && (
              <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200"
          >
            Submit Recipe
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddRecipeForm;