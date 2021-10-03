// Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middleware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('../client'));

const port = 5000;
const server = app.listen(port, ()=>{console.log(`Running on localhost: ${port}`)});

// Spin up the server
// app.get("/",(req, res)=>{res.send('hello hi')})


// MOVIE EXAMPLE
// Here is how you could setup a basic POST route in the server side code.
// First, Create an array to hold data:
const data = [];
//Then, create post() with a url path and a callback function:
app.post('/addMovie', addMovie );

function addMovie (req, res){
  // In the callback function, add the data received from request.body. This is the key piece of information we are interested in from that long stretch of data we saw previously that the request (req) argument returns.
  data.push(req.body);
  console.log(data);
};