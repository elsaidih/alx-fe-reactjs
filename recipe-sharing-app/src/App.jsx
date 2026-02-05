import { Routes, Route } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";

function App() {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddRecipeForm />
              <RecipeList />
            </>
          }
        />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
      </Routes>
    </div>
  );
}

export default App;