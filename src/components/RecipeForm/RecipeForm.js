import React, { Fragment } from "react";
import "./RecipeForm.css";
import EditRecipe from "../EditRecipe/EditRecipe";

const ShowRecipe = ({ recipe, removeRecipe }) => {
  //delete recipe function

  console.log(recipe);

  return (
    <Fragment>
      <div className="form">
        <div className="list">
          <p>Description Edit Delete</p>
        </div>
        <div>
          {recipe.map((recipe) => (
            <p key={recipe.recipe_id}>
              <p>{recipe.description}</p>
              <div>
                <EditRecipe recipe={recipe} />
              </div>
              <div>
                <button
                  type="submit"
                  onClick={() => removeRecipe(recipe.recipe_id)}
                >
                  Delete
                </button>
              </div>
            </p>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default ShowRecipe;
