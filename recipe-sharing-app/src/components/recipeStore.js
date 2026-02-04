import { create } from "zustand";

const useRecipeStore = create((set, get) => ({
  // Recipes array
  recipes: [],

  // Search term state
  searchTerm: "",
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Actions
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  setRecipes: (recipes) => set({ recipes }),

  // Computed filtered recipes
  filteredRecipes: () => {
    const { recipes, searchTerm } = get();
    return recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  },
}));

export default useRecipeStore;