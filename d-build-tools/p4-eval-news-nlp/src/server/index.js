var path = require("path");
var cors = require("cors");
const express = require("express");

const mockAPIResponse = require("./mockAPI.js");
const { analyse } = require("./analyse.js");
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
  // res.sendFile("dist/index.html"); //original
  res.sendFile(path.resolve('dist/index.html'));
});

app.get("/test", function (req, res) {
  res.json(mockAPIResponse);
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function (error) {
  if (error) throw new Error(error)
  console.log("Example app listening on port 8081!");
});

// POST route
app.post("/addAnalysis", analyse);
