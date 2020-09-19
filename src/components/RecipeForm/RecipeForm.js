import React, { Fragment, useEffect, useState } from "react";
import "./RecipeForm.css";
import EditRecipe from "../EditRecipe/EditRecipe";

const ShowRecipe = () => {
  const [recipe, setRecipe] = useState([]);

  //delete todo function

  const removeRecipe = async (id) => {
    try {
      fetch(`http://localhost:8000/recipe/${id}`, {
        method: "DELETE",
      });

      setRecipe(recipe.filter((recipe) => recipe.recipe_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const grabRecipe = async () => {
    try {
      const response = await fetch("http://localhost:8000/recipe");
      const jsonData = await response.json();

      setRecipe(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    grabRecipe();
  }, []);

  console.log(recipe);

  return (
    <Fragment>
      <div>
        <ul>
          <li>Description</li>
          <li>Edit</li>
          <li>Delete</li>
        </ul>
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
