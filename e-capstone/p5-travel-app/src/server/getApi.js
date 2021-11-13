const { default: axios } = require("axios");

const { API_KEY, ANALYSIS_API } = process.env;

const getApi = async (req, res) => {
    const apiUrl = `${ANALYSIS_API}?key=${API_KEY}&url=${req.body.url}&lang=en`;
    const response = await axios.post(apiUrl);
    res.send(response.data);
}

module.exports = getApi