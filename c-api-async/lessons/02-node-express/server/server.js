/* Empty JS object to act as endpoint for all routes */
projectData = {};

/* Express to run server and routes */
const express = require('express');

/* Start up an instance of app */
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

/* Initialize the main project folder*/
app.use(express.static('../client'));

const port = 8000;
/* Spin up the server*/
const server = app.listen(port, listening);
function listening(){
  //  console.log(server);
    console.log(`running on localhost: ${port}`);
  };


// fake api
const fakeData = {
  animal: 'lion',
  fact: 'lions are fun'
}

// GET route
app.get('/fakeAnimalData', (req, res)=>{
  res.send(fakeData);
})

const animalData = [];

app.get('/all', (req, res)=>{
  res.send(animalData);
  // console.log(animalData);
});

// POST route
app.post('/addAnimal', (req, res) => {
  newEntry = {
    animal: req.body.name,
    fact: req.body.timezone,
    fav: req.body.fav,
  }
  // const newEntry = {animal, fact, fav} = req.body;
  animalData.push(newEntry);
    res.send(animalData);
    console.log(animalData);
});