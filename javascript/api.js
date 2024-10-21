// Function to fetch jokes based on the selected category and quantity
export async function fetchJokes(category, quantity) {
  let apiUrl = "";

  if (quantity === "one") {
    // Fetch a single joke from the category
    apiUrl = `https://official-joke-api.appspot.com/jokes/${category}/random`;
  } else {
    // Fetch 10 jokes. If 5, we will slice out the first 5.
    apiUrl = `https://official-joke-api.appspot.com/jokes/${category}/ten`;
  }

  /*
    Official Jokes API does not allow for selection of category and specific number() other than the endroutes of ${category}/random for 1 joke or ${category}/ten for 10 jokes. So to get 5 jokes, we must slice 5 jokes from ${category}/ten
    */
  try {
    const response = await fetch(apiUrl);
    const jokes = await response.json();

    if (quantity === "five") {
      // Return only the first 5 jokes
      return jokes.slice(0, 5);
    } else if (quantity === "one") {
      // Return only one joke if quantity is "one"
      return [jokes]; // Wrap single joke in an array
    }

    return jokes; // Return all 10 jokes when quantity = 'ten'
  } catch (error) {
    console.error("Error fetching jokes:", error);
    throw error;
  }
}
