const { default: axios } = require("axios");

const { API_KEY, ANALYSIS_API } = process.env;
// const { GEONAMES_USER } = process.env;

const getApi = async (req, res) => {
    const apiUrl = `${ANALYSIS_API}?key=${API_KEY}&url=${req.body.url}&lang=en`;
    // http://api.geonames.org/searchJSON?formatted=true&q=${req.body.url}&maxRows=1&lang=es&username=${GEONAMES_USER}
    // const apiUrl = `http://api.geonames.org/searchJSON?formatted=true&q=${req.body.url}&maxRows=1&lang=en&username=${GEONAMES_USER}`
    const response = await axios.post(apiUrl);
    res.send(response.data);
}

module.exports = getApi