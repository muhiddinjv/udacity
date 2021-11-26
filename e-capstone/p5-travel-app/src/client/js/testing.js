// const { GEONAMES_USER } = process.env;

// const testing = async () => {
//     const city = document.getElementById('city').value;
//     const res = await fetch(`http://api.geonames.org/searchJSON?formatted=true&q=${city}&maxRows=1&lang=en&username=muhiddin`) // to get this link, google "how to get latitude and longtitude of a country on geonames"
//     const data = await res.json();
//     console.log(data.geonames[0].countryName);
//     console.log(data.geonames[0].lat);
//     console.log(data.geonames[0].lng);
//     // res.send(response.data);
// }

// require("dotenv").config();
const { default: axios } = require("axios");
// const { GEO_URL, GEO_USER, WB_URL, WB_KEY, PIX_URL, PIX_KEY } = process.env;

const testing = async () => {
  const city = document.getElementById("city").value;

  const GEO_URL = "http://api.geonames.org/searchJSON?q";
  const GEO_USER = "muhiddin";

  const WB_URL = "https://api.weatherbit.io/v2.0/forecast/daily?";
  const WB_KEY = "c427ab4f94224d4d9b07819f4c963fa6";

  const PIX_URL = "https://pixabay.com/api/?";
  const PIX_KEY = "24261829-38fdb98f99ae8aae45a85b721";

  try {
    const geoData = await axios.get(
      `${GEO_URL}=${city}&maxRows=1&username=${GEO_USER}`
    );

    if (geoData.data.geonames[0] == null) {
      // res.status(404).json({locValidation: 'Invalid location name, please re-enter.'});
      // return;
      document.querySelector(".form__error").innerHTML =
        "ENTER VALID LOCATION NAME NIGGA!";
    }

    const { name, countryName, lat, lng } = geoData.data.geonames[0];

    const [wbData, pixData1, pixData2] = await Promise.all([
      axios.get(`${WB_URL}&lat=${lat}&lon=${lng}&days=3&key=${WB_KEY}`),
      axios.get(
        `${PIX_URL}key=${PIX_KEY}&q=${name}&image_type=photo&orientation=horizontal&category=travel&order=popular&per_page=3&pretty=true`
      ),
      axios.get(
        `${PIX_URL}key=${PIX_KEY}&q=${countryName}&image_type=photo&orientation=horizontal&category=travel&order=popular&per_page=3&pretty=true`
      ),
    ]);

    const pixHits =
			pixData1.data.totalHits > 0
				? pixData1.data.hits[0]
				: pixData2.data.hits[0];

    const dest = name === countryName ? countryName : `${name}, ${countryName}`;

		const allApis = {
			destination: dest,
			weather: wbData.data.data,
			pic: pixHits,
		};

    console.log(name, countryName, lat, lng);
    console.log(allApis);

  } catch (error) {
    console.log(error);
  }
};

export { testing };
