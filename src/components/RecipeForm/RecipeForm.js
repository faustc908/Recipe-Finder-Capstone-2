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
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {recipe.map((recipe) => (
            <tr key={recipe.recipe_id}>
              <td>{recipe.description}</td>
              <td>
                <EditRecipe recipe={recipe} />
              </td>
              <td>
                <button
                  type="submit"
                  onClick={() => removeRecipe(recipe.recipe_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ShowRecipe;
