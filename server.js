// Import the express library
const express = require('express');

// Import the routes module from the './routes' file
const routes = require('./routes');

// Import the sequelize connection from the './config/connection' file
const sequelize = require('./config/connection');

// Create an instance of the express application
const app = express();

// Set the PORT variable to the value of process.env.PORT or 3001
const PORT = process.env.PORT || 3001;

// Parse incoming JSON data
app.use(express.json());

// Parse URL-encoded data with the extended option set to true
app.use(express.urlencoded({ extended: true }));

// Use the routes module for handling routes
app.use(routes);

// Sync the sequelize models to the database and start the server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port !`);
  });
}).catch((err) => {
  console.log("Unable to connect to database: ", err);
});
