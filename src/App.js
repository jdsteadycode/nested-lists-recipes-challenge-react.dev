// grab modules
import { recipes } from "./data.js";
import { Fragment } from "react";

// () -> RecipeList
export default function RecipeList() {
  // check log**
  console.log(recipes);
  return (
    <div>
      <h1>Recipes</h1>
      {/* each recipe */}
      {recipes.map(function (recipe, index, recipes) {
        return (
          <Fragment id={recipe.id}>
            <h1>{recipe.name}</h1>
            <ul>
              {/* show ingredients if there* */}
              {recipe.ingredients ? (
                recipe.ingredients.map(function (ingredientName, index) {
                  return <li key={recipe.id}>{ingredientName}</li>;
                })
              ) : (
                <li style={{ color: "crimson" }}>No recipe found</li>
              )}
            </ul>
          </Fragment>
        );
      })}
    </div>
  );
}
