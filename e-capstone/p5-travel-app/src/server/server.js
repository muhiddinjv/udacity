// Setup empty JS object to act as endpoint for all routes
const projectData = []; //empty array to hold the received data

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Dependencies & Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static("dist"));

// Setup Server
const port = 2020;

// Express to run server, routes & callback to debug
const server = app.listen(port, () => {
  console.log(`running on localhost: ${port}`);
});

// Initialize all route with a callback function to GET '/all'
app.get('/all', (req, res)=>{
  res.send(projectData);
});

// POST route
app.post('/addWeather', (req, res) => {
  const newEntry = {city, date, temp, feelings} = req.body;
  projectData.push(newEntry);
  res.send(projectData);
  console.log(projectData);
});