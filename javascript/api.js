
async function getJokes() {
    try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke')
        const jokes = await response.json();
        displayJokes(jokes);
    } catch (error) {
        console.error("Error fetching a joke: ", error);
    }
}