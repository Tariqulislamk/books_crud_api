const express = require('express');
const cors = require('cors');

const settings = require('./config/settings');
const BooksRoute = require('./Books/Route');

const app = express();

app.use(cors()); // Enable All CORS Requests
// Middleware setup
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies
app.use(express.json()); // Middleware to parse JSON bodies

// API Endpoint
app.use('/book', BooksRoute);

// Build and run the server
app.listen(settings.webPort, () => {
    console.log(`Server running at ${settings.hostAddress}`);
});
