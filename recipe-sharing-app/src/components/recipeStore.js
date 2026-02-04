import { create } from "zustand";

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: "",

  // Add a recipe
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // Update a recipe by ID
  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      ),
    })),

  // Delete a recipe by ID
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  // Search term actions
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Filtered recipes based on search term
  filteredRecipes: () => {
    const { recipes, searchTerm } = get();
    return recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  },
}));

export default useRecipeStore;