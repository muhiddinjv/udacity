const { GEONAMES_USER } = process.env;

const testing = async () => {
    const city = document.getElementById('city').value;
    const res = await fetch(`http://api.geonames.org/searchJSON?formatted=true&q=${city}&maxRows=1&lang=en&username=muhiddin`) // to get this link, google "how to get latitude and longtitude of a country on geonames"
    const data = await res.json();
    console.log(data.geonames[0].countryName);
    console.log(data.geonames[0].lat);
    console.log(data.geonames[0].lng);
    // res.send(response.data);
}

export { testing }