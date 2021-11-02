let projectData = {};
const axios = require("axios");
require("dotenv").config();
var path = require("path");
var cors = require("cors");
const express = require("express");

const mockAPIResponse = require("./mockAPI.js");
var bodyParser = require("body-parser");
// const { send } = require("process");

const { API_KEY, ANALYSIS_API} = process.env;

const app = express();
app.use(cors());
// to use json
app.use(bodyParser.json());
// to use url encoded values
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static("dist"));

// console.log(JSON.stringify(mockAPIResponse))

app.get("/", function (req, res) {
  // res.sendFile("dist/index.html"); //original
  res.sendFile(path.resolve('src/client/views/index.html'));
});

app.get('/all', (req, res)=>{
  res.send(projectData);
});

// a route that handling post request for new URL that coming from the frontend
app.post("/addUrl", async (req, res)=>{
  try {
    await axios.get(`${ANALYSIS_API}?key=${API_KEY}&url=${req.body.url}&lang=en`).then(d=>{
      projectData = {
        agreement,
        subjectivity,
        score_tag,
      } = d.data
      // console.log(d.data.score_tag);
      // console.log(d.data.agreement);
      console.log(projectData);
      res.send(d.data);
    })
  } catch (error) {
    console.log(error.message);
  }
});
/* TODO:
    1. GET the url from the request body
    2. Build the URL it should be something like `${BASE_API_URL}?key=${MEAN_CLOUD_API_KEY}&url=${req.body.url}&lang=en`
    3. Fetch Data from API
    4. Send it to the client
    5. REMOVE THIS TODO AFTER DOING IT 😎😎
    server sends only specified data to the client with below codes
     const sample = {
       text: '',
       score_tag : '',
       agreement : '',
       subjectivity : '',
       confidence : '',
       irony : ''
     }
*/

app.get("/test", function (req, res) {
  res.json(mockAPIResponse);
});

// designates what port the app will listen to for incoming requests
app.listen(3000, function (error) {
  if (error) throw new Error(error)
  console.log("Example app listening on port 3000!");
});
