import React, { Fragment, useState } from "react";

const EditRecipe = ({ recipe }) => {
  const [description, setDescription] = useState(recipe.description);

  //edit description function const response = await//

  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      fetch(`http://localhost:8000/recipe/${recipe.recipe_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button type="button" data-target={`#id${recipe.recipe_id}`}>
        Edit
      </button>

      <div
        id={`id${recipe.recipe_id}`}
        onClick={() => setDescription(recipe.description)}
      >
        <div>
          <div>
            <h4>Edit Recipe</h4>
            <button
              type="button"
              onClick={() => setDescription(recipe.description)}
            >
              &times;
            </button>
          </div>
          <div>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <button type="button" onClick={(e) => updateDescription(e)}>
              Edit
            </button>
            <button
              type="button"
              onClick={() => setDescription(recipe.description)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditRecipe;
