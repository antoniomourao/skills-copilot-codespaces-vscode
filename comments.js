// Create web server
// Create a server with Express.js
// Import the express module
const express = require('express');
// Create a new Express application
const app = express();
// Set the port to 3000
const port = 3000;
// Create a route for GET requests to /comments
app.get('/comments', (req, res) => {
  res.send('This is a GET request to /comments');
});
// Create a route for POST requests to /comments
app.post('/comments', (req, res) => {
  res.send('This is a POST request to /comments');
});
// Create a route for PUT requests to /comments
app.put('/comments', (req, res) => {
  res.send('This is a PUT request to /comments');
});
// Create a route for DELETE requests to /comments
app.delete('/comments', (req, res) => {
  res.send('This is a DELETE request to /comments');
});
// Start the server on port 3000
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
// Start the server by running node comments.js in the terminal
// Send a GET request to /comments
// Send a POST request to /comments
// Send a PUT request to /comments
// Send a DELETE request to /comments
// Send a GET request to /comments
// Send a POST request to /comments
// Send a PUT request to /comments
// Send a DELETE request to /comments
// Send a GET request to /comments
// Send a POST request to /comments
// Send a PUT request to /comments
// Send a DELETE request to /comments
// Send a GET request to /comments
// Send a POST request to /comments
// Send a PUT request to /comments
// Send a DELETE request to /comments
// Send a GET request to /comments
// Send a POST request to /comments
// Send a PUT request to /comments
// Send a DELETE request to /comments
// Send a GET request to /comments
// Send a POST request to /comments
// Send a PUT request to /comments
// Send a DELETE request to /comments
// Send a GET request to /comments
// Send a POST request to /comments
// Send a PUT request to /comments
// Send a DELETE request to /comments
// Send a GET request to /