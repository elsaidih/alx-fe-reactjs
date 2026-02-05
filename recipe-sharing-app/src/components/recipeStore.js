// src/components/recipeStore.js
import { create } from "zustand";

const useRecipeStore = create(set => ({
  recipes: [],
  
  addRecipe: (recipe) => set(state => ({ recipes: [...state.recipes, recipe] })),
  
  updateRecipe: (id, updated) =>
    set(state => ({
      recipes: state.recipes.map(r => r.id === id ? { ...r, ...updated } : r)
    })),
  
  deleteRecipe: (id) =>
    set(state => ({ recipes: state.recipes.filter(r => r.id !== id) }))
}));

export default useRecipeStore;