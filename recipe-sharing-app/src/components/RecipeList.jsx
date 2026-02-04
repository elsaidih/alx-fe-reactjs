import useRecipeStore from "./recipeStore";

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) =>
    state.filteredRecipes()
  );

  return (
    <div>
      <h2>Recipes</h2>

      {filteredRecipes.length === 0 && (
        <p>No matching recipes found.</p>
      )}

      {filteredRecipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;