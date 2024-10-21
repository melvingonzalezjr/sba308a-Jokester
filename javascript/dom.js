// Function to display jokes
export function displayJokes(jokes) {
    const jokesContainer = document.getElementById('jokesContainer');
    jokesContainer.innerHTML = '';  // refreshed output from previous jokes
    
    /*
    For each element of jokes array:
        - we create a div element called jokeElement
        - add a joke object to jokeElement div element
        - innerHTML is the joke.setup aka the beginning question/riddle of a joke
        - punchline is the actual humorous final part of joke
    */
    jokes.forEach(joke => {
      const jokeElement = document.createElement('div');
      jokeElement.classList.add('joke');
      jokeElement.innerHTML = `
        <p><strong>${joke.setup}</strong></p>
        <p>${joke.punchline}</p>
      `;
      jokesContainer.appendChild(jokeElement); //remember you gotta finish with appending the child to the DOM element you're editing
    });
  }
  
  // Function to display an error message
  export function displayError() {
    const jokesContainer = document.getElementById('jokesContainer');
    jokesContainer.innerHTML = '<p>Error loading jokes. Please try again.</p>';
  }
  
  