import { addJoke, fetchJokes } from "./api.js";
import { displayJokes, displayError, displayNewJoke } from "./dom.js";

/*
FOR A SINGLE RANDOM QUOTE USING INITIAL BUTTON
*/
document.getElementById("getJokeBtn").addEventListener("click", async () => {
  try {
    const jokes = await fetchJokes("random", "one");

    const jokesContainer = document.getElementById("jokesContainer");
    jokesContainer.innerHTML = '';

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

      const jokesContainer = document.getElementById("jokesContainer");
      jokesContainer.innerHTML = '';

      // Display jokes or error
      displayJokes(jokes);
    } catch (error) {
      displayError();
    }
  });

/*
IF USER ADDS A JOKE. We are mimicking the API with a local version
*/
document
  .getElementById("addJokeForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    //The type is within a div. So querySelect for the checked option
    const type = document.querySelector('input[name="category"]:checked').value;
    const setup = document.getElementById("setupInput").value;
    const punchline = document.getElementById("punchlineInput").value;

    const newJoke = {
      type,
      setup,
      punchline,
    };

    //test
    console.log("New Joke Data: ", newJoke);
    displayNewJoke(newJoke);

    try {
      const addedJoke = await addJoke(newJoke);
      console.log("Added joke:", addedJoke);

    } catch (error) {
      console.error("Error adding joke:", error); 
      displayError();
    }
  });


