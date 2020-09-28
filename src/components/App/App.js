import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "../Recipe/Recipe";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Appdesc from "../Appdesc/Appdesc";
import AppForm from "../AppForm/AppForm";
import RecipeForm from "../RecipeForm/RecipeForm";
import InputRecipe from "../InputRecipe/InputRecipe";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

library.add(faUtensils);

// API info & State

const App = () => {
  const APP_ID = "7e817b93";
  const APP_KEY = "dd1f3f5c93f40c501dd29392c73cbd2d";

  const [recipes, setRecipes] = useState([]);
  const [recipes1, updateRecipe] = useState([]);
  const [query, setQuery] = useState("banana");
  const [recipe, setRecipe] = useState([]);
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

  useEffect(() => {
    alert("load recipes");
    grabRecipe();
  }, []);
  useEffect(() => {
    alert("change recipes");
    grabRecipe();
  }, [recipes1]);

  //API Call
  const grabRecipe = async () => {
    alert("grabRecipe");
    try {
      const response = await fetch("http://localhost:8000/recipe");
      const jsonData = await response.json();

      setRecipe(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setRecipes(data.hits));
  }, [query, setRecipes]);

  // Render recipe results

  return (
    <div className="App">
      <NavBar />
      <Appdesc />
      <p className="formHead">Please enter an ingredient:</p>
      <AppForm onSearch={setQuery} />
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            url={recipe.recipe.url}
          />
        ))}
      </div>
      <div>
        <InputRecipe updateRecipe={updateRecipe} />
        <RecipeForm recipe={recipe} removeRecipe={removeRecipe} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
