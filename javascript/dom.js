document.getElementById('jokeCategoryForm').addEventListener('submit', async function(event) {
    event.preventDefault();
  
    // Get the selected category from the radio buttons
    const category = document.querySelector('input[name="category"]:checked').value;
  
    // Fetch jokes based on the selected category
    let apiUrl = '';
  
    if (category === 'random') {
      apiUrl = 'https://official-joke-api.appspot.com/random_ten';  // For random jokes
    } else {
      apiUrl = `https://official-joke-api.appspot.com/jokes/${category}/ten`;  // For specific categories
    }
  
    try {
      const response = await fetch(apiUrl);
      const jokes = await response.json();
  
      // Display jokes in the jokesContainer div
      displayJokes(jokes);
    } catch (error) {
      console.error('Error fetching jokes:', error);
      document.getElementById('jokesContainer').innerHTML = `<p>Error loading jokes. Please try again.</p>`;
    }
  });
  
  // Function to display jokes in the UI
  function displayJokes(jokes) {
    const jokesContainer = document.getElementById('jokesContainer');
    jokesContainer.innerHTML = '';  // Clear any existing jokes
  
    jokes.forEach(joke => {
      const jokeElement = document.createElement('div');
      jokeElement.classList.add('joke');
      jokeElement.innerHTML = `
        <p><strong>${joke.setup}</strong></p>
        <p>${joke.punchline}</p>
      `;
      jokesContainer.appendChild(jokeElement);
    });
  }
  