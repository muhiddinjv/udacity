require("dotenv").config();
const { default: axios } = require("axios");
const { GEO_URL, GEO_USER, WB_URL, WB_KEY, PIX_URL, PIX_KEY } = process.env;

const getApi = async (req, res) => {

  try {
    // const geoData = await axios.get(
    //   `${GEO_URL}=${req.body.input}&maxRows=1&username=${GEO_USER}`
    // );

    // if (geoData.data.geonames[0] == null) {
    //   res
    //     .status(404)
    //     .json({ locValidation: "Please, enter valid location!" });
    //   return;
    // }

    // const { name, countryName, lat, lng } = geoData.data.geonames[0];

    // const [weatherData, pixData1, pixData2] = await Promise.all([
    //   axios.get(`${WB_URL}&lat=${lat}&lon=${lng}&days=3&key=${WB_KEY}`),

    //   axios.get(
    //     `${PIX_URL}key=${PIX_KEY}&q=${name}&image_type=photo&orientation=horizontal&category=travel&order=popular&per_page=3&pretty=true`
    //   ),

    //   axios.get(
    //     `${PIX_URL}key=${PIX_KEY}&q=${countryName}&image_type=photo&orientation=horizontal&category=travel&order=popular&per_page=3&pretty=true`
    //   ),
    // ]);

    // const pixHits =
    //   pixData1.data.totalHits > 0
    //     ? pixData1.data.hits[0]
    //     : pixData2.data.hits[0];

    // const dest = name === countryName ? countryName : `${name}, ${countryName}`;

    // const allApis = {
    //   destination: dest,
    //   weather: weatherData.data.data,
    //   pic: pixHits,
    // };

    //     const allApis = await axios.get(
    //   `${GEO_URL}=${req.body.input}&maxRows=1&username=${GEO_USER}`
    // );
    const allApis = `${GEO_URL}=${req.body.input}&maxRows=1&username=${GEO_USER}`;
    
    const response = await axios.post(allApis);
    res.send(response.data);
    // return allApis;
  } catch (error) {
    console.log(error);
  }
};

module.exports = getApi;
