import fetchJokes from "./api.js";
import { displayJokes, displayError } from "./ui.js";

// Listen for the form submission to fetch jokes
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
