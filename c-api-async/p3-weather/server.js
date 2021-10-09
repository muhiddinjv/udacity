// Setup empty JS object to act as endpoint for all routes
projectData = {};
console.log("hi");

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
app.use(express.static("website"));

// Setup Server
const port = 5000;

const server = app.listen(port, () => {
  console.log(server);
  console.log(`running on localhost: ${port}`);
});

// Express to run server and routes

// Callback to debug

// Initialize all route with a callback function

// Callback function to complete GET '/all'

// Post Route
app.post('/add', callBack);

function callBack(req,res){
  res.send('POST received');
};
