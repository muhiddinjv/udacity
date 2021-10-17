/* Global Variables */
const zip = document.getElementById("zip");
const generate = document.getElementById("generate");
const inputError = document.getElementById("inputError");
const temperature = document.getElementById("temp");

const baseURL = "http://api.openweathermap.org/data/2.5/weather?q=";
const apiKey = "&appid=ad8a4d7750ce20473c84cde66d6c7ab4";
const units = "&units=metric";

let retryEveryMs = 3000;
let retries = 11;

// Create a new date instance dynamically with JS
let d = new Date();
console.log(d);
// let newDate = `${d.getMonth()}.${d.getDate()}.${d.getFullYear()}`;
let newDate = d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear();

// Personal API Key for OpenWeatherMap API
// const api = "ad8a4d7750ce20473c84cde66d6c7ab4";
//d0889ce843a11270e6749177a5118aec -- my 2nd api

//function to check user input for city name
function validateZip(zip) {
  if (zip == "" || !zip) {
    return false; //return false if it's empty
  } else {
    return true; //return true if it is not empty
  }
}

// Event listener to add function to existing HTML DOM element
generate.addEventListener("click", performAction);

/* Function called by event listener */
function performAction() {
  let feelings = document.getElementById("feelings").value;
  let shortUrl = baseURL + zip.value + apiKey + units;
  if (!validateZip(zip.value)) {
    // display error message if city name input is empty
    inputError.textContent = "zip code cannot be empty, enter it!";
    return;
  } else {
    inputError.textContent = "";
    if (!feelings) {
      //if feelings is empty fill it with this text
      feelings = "no feelings entered";
    }
    getWeather(shortUrl)
      //new syntax
      .then(function (data) {
        // Add data
        postData("/addWeather", {
          date: newDate,
          temp: data.main.temp,
          feelings: feelings,
        });
        // we can do this because of async!
        updateUI();
      });
  }
}

/* Function to GET Web API Data*/
const getWeather = async (shortUrl) => {
  try {
    const res = await fetch(shortUrl);
    const data = await res.json();
    if (data.cod == "404") {
      inputError.innerText = "Please enter a valid zip code!";
    }
    console.log(data);
    temperature.innerText = "";
    return data;
  } catch (error) {
    console.log("error", error);
    setTimeout(() => {
      retries--;
      temperature.innerText = "Reconnecting..." + retries;
      // Retrying failed promise...
      if (retries < 1) {
        return (temperature.innerText =
          "Refresh the page!");
      }
      performAction();
    }, retryEveryMs);
  }
};

/* Function to POST data */
const postData = async (url = "", data = {}) => {
  // console.log(data);
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

/* Function to GET Project Data */
const updateUI = async () => {
  const request = await fetch("/all");
  try {
    const allData = await request.json();
    console.log(allData);
    document.getElementById("date").innerHTML = newDate;
    temperature.innerHTML = `${allData.temp > 0 ? "+" : ""}${Math.round(
      allData.temp
    )}`;
    document.getElementById("feelingOutput").innerHTML = allData.feelings;
  } catch (error) {
    console.log("error", error);
  }
};