// Import the express modulec
const express = require('express');

// Create an instance of an Express application
// initializes the Express application.
const app = express();

// Define a route handler for GET requests to the root URL ('/')
// When a GET request is made to '/', respond with a JSON object { hi: 'there' }
app.get('/', (req, res) => {
    res.send({ hi: 'there'});
});

// Set the port number to the value of the environment variable PORT if it exists;
// otherwise, default to 5000
// This makes the application more flexible, allowing it to run on different ports
// depending on the environment (e.g., different ports for development and production)
const PORT = process.env.PORT || 5000;

// Start the server and have it listen on port 5000
// When the server is running, it will log a message to the console
// app.listen(PORT);

// Export the Express app as a module for Vercel to handle
module.exports = app;