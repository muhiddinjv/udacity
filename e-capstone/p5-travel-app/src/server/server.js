require('dotenv').config();
const express = require('express');
const cors = require('cors');
const getApis = require('./getApis');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(express.static('dist'));

// Create travel data
app.post('/apis', async (req, res) => {
	try {
		const cityName = encodeURI(req.body.input);
		const data = await getApis(cityName);
		res.send({data});
	} catch (err) {
		console.error(err);
	}
});

// designates what port the app will listen to for incoming requests
app.listen(1010, function (error) {
  if (error) throw new Error(error);
  console.log("Example app listening on port 1010!");
});

module.exports = app;