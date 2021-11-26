require("dotenv").config();
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

// a route that handles post request for input coming from the frontend
app.post("/addCity", getApi);
// app.post('/addCity', async (req, res) => {
// 	try {
// 		const cityInput = encodeURI(req.body.input);
// 		const data = await getApi(cityInput);
// 		res.send(data);
// 	} catch (err) {
// 		console.error(err);
// 	}
// });


app.get("/test", function (req, res) {
  res.json(mockAPIResponse);
});

// designates what port the app will listen to for incoming requests
app.listen(1010, function (error) {
  if (error) throw new Error(error);
  console.log("Example app listening on port 1010!");
});
