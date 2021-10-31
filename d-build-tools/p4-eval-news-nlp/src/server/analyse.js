const projectData = {};
require("dotenv").config();
const { API_KEY, API_ANALYSIS} = process.env;

// POST route
const analyse = async (req, res) => {
  projectData = { city, date, temp, feelings } = req.body;
  res.send(projectData);
  // console.log(projectData);
}

module.exports = {analyse}
