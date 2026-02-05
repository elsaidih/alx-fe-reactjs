// src/components/recipeStore.js
import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],

  // Add a new recipe
  addRecipe: (recipe) =>
    set((state) => ({ recipes: [...state.recipes, recipe] })),

  // Update an existing recipe by ID
  updateRecipe: (id, updated) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === id ? { ...r, ...updated } : r
      ),
    })),

  // Delete a recipe by ID
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),
}));

export default useRecipeStore;