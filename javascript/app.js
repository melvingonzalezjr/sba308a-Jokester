import {addJoke, fetchJokes} from "./api.js";
import { displayJokes, displayError } from "./dom.js";

/*
FOR A SINGLE RANDOM QUOTE USING INITAL BUTTON
*/
document.getElementById("getJokeBtn").addEventListener("click", async () => {
    try {
        const jokes = await fetchJokes("random", "one");

        displayJokes(jokes);
    } catch (error) {
        displayError();
    }

});
/*
FOR 1, 5, OR 10 JOKES IN DIFFERENT CATEGORIES USING FORM
*/
document
  .getElementById("jokeCategoryForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    // Get the user-selected category and quantity
    const category = document.querySelector(
      'input[name="category"]:checked'
    ).value;
    const quantity = document.querySelector(
      'input[name="quantity"]:checked'
    ).value;

    try {
      // Fetch jokes from the API with the selected category and quantity
      const jokes = await fetchJokes(category, quantity);

      // Display jokes or error
      displayJokes(jokes);
    } catch (error) {
      displayError();
    }
  });

/*
IF USER ADDS A JOKE. We are mimicing the API with a local version
*/  
document.getElementById("addJokeForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    
    //The type is within a div. So querySelect for the checked option
    const type = document.querySelector('input[name="category"]:checked').value;
    const setup = document.getElementById("setupInput").value;
    const punchline = document.getElementById("punchlineInput").value;
  
    const newJoke = {
      type,  
      setup,
      punchline
    };
  
    try {
      const addedJoke = await addJoke(newJoke);
      console.log("Joke added:", addedJoke);
    } catch (error) {
      console.error("Error adding joke:", error);
    }
  });
  