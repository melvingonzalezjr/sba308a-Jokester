# Jokester App

Welcome to the Jokester App! This application allows users to fetch jokes from an API, create new jokes, and display them in a user-friendly interface. The app is built using JavaScript, HTML, and CSS.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)


## Features

- Fetch random jokes from a public API.
- Add new jokes through a simple form.
- Display user-created jokes dynamically.
- User-friendly interface for easy navigation.

## Technologies Used

- **HTML**: For the structure of the web application.
- **CSS**: For styling the application.
- **JavaScript**: For functionality and interactivity.
- **[The Official Jokes API](https://github.com/15Dkatz/official_joke_api/)**: For fetching jokes.
- **json server**: For creating a local mimic version of Official Jokes API. 

## Usage

- To fetch a random joke, click the "Get a Joke" button.

- OR Select a *Category* and *Quantity* before clicking "Get Jokes" button.

- To add a new joke, select a category, fill in the "Setup" and "Punchline" fields, and click "Add Joke."

*Note: The Official Jokes API does not allow for jokes to be added to the directory. So instead, we mimic the API with the jokeDB.json file, which contains all of the jokes, and add new jokes to here through the user interface. In order to do so, be sure to run:*

    json-server --watch jokeDB.json --port 5000

*Have this json-server running while interacting with the web app*


