require("dotenv").config();
const axios = require("axios");
var path = require("path");
var cors = require("cors");
const express = require("express");

const mockAPIResponse = require("./mockAPI.js");
const getApi = require("./getApi.js");
var bodyParser = require("body-parser");

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
  res.sendFile(path.resolve("dist/index.html"));
  // res.sendFile('src/client/views/index.html');
});

// a route that handles post request for new URL that coming from the frontend
app.post("/addUrl", getApi);

app.get("/test", function (req, res) {
  res.json(mockAPIResponse);
});

// designates what port the app will listen to for incoming requests
app.listen(1000, function (error) {
  if (error) throw new Error(error);
  console.log("Example app listening on port 1000!");
});
