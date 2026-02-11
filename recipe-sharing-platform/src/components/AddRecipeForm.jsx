import { useState } from "react";
import AddRecipeForm from "./AddRecipeForm";
import data from "../data.json"; // your existing recipes

const AddRecipePage = () => {
  const [recipes, setRecipes] = useState(data);

  const handleAddRecipe = (newRecipe) => {
    setRecipes([newRecipe, ...recipes]); // add new recipe to the list
  };

  return (
    <div className="p-6">
      {/* This is your form */}
      <AddRecipeForm onAdd={handleAddRecipe} />

      {/* This shows the recipes below the form */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="border p-4 rounded shadow">
            <h3 className="text-lg font-bold">{recipe.title}</h3>
            <p>{recipe.ingredients.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddRecipePage;
