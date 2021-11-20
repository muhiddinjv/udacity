/* Global Variables */
const cityName = document.getElementById("city");
const generate = document.getElementById("submit");
const offline = document.getElementById("offline");
const inputError = document.querySelector(".inputError");

let retryEveryMs = 3000;
let retries = 11;

// Create a new date instance dynamically with JS
let d = new Date(); console.log(d);
let date = `${d.getMonth()}.${d.getDate()}.${d.getFullYear()}`;

// Personal API Key for OpenWeatherMap API
const api = "ad8a4d7750ce20473c84cde66d6c7ab4";
//d0889ce843a11270e6749177a5118aec -- my 2nd api

//function to check user input for city name
function validateCity(cityName) {
  if (cityName == "" || !cityName) {
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
  if (!validateCity(cityName.value)) {
    // display error message if city name input is empty
    inputError.textContent = "City name cannot be empty, please enter it!";
    return;
  } else {
    inputError.textContent = "";
    if (!feelings) {
      //if feelings is empty fill it with this text
      feelings = "too lazy to enter feelings";
    }
    getWeather()
      //new syntax
      .then(function (data) {
        // Add data
        postData("/addWeather", {
          city: data.name,
          date: date,
          temp: data.main.temp,
          feelings: feelings,
        });
        // we can do this because of async!
        updateUI();
      });
  }
}

/* Function to GET Web API Data*/
const getWeather = async () => {
  // const res = await fetch(url);
  try {
    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${api}&units=metric`
    );
    const data = await res.json();
    if (data.cod == "404") {
      inputError.innerText = "Please enter a valid city name!";
    }
    // console.log(data);
    offline.innerText = "";
    return data;
  } catch (error) {
    console.log("error", error);
    setTimeout(() => {
      retries--;
      offline.innerText = "Reconnecting to the Internet..." + retries;
      // Retrying failed promise...
      if (retries < 1) {
        return (offline.innerText = "Reconnection failed. Please refresh the page!");
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

    const entryHolder = document.getElementById("results");
    const fragment = document.createDocumentFragment();
    const entryRow = document.createElement("div");

    allData.map((d) => {
      entryRow.innerHTML = `
      <div class="city">${d.city}</div>
      <div class="temp">
      ${d.temp > 0 ? "+" : ""}${Math.round(d.temp)}
      </div>
      <div class="date">${d.date}</div>
      <div class="content"><div>Feelings: <i>${d.feelings}</i></div></div>
      `;
    });

    entryRow.setAttribute("class", "entryRow");
    fragment.appendChild(entryRow);
    entryHolder.appendChild(fragment);
  } catch (error) {
    console.log("error", error);
  }
};
