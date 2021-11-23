/* Global Variables */

// Create a new date instance dynamically with JS
// let d = new Date(); console.log(d);
// let date = `${d.getMonth()}.${d.getDate()}.${d.getFullYear()}`;

/* Function called by event listener */
function performAction(e) {
  e.preventDefault();

  const inputError = document.querySelector(".inputError");
  const cityName = document.getElementById("city").value;
  let date = document.getElementById("date").value;


  // alert("perform action showing date: " + date);

  // let feelings = document.getElementById("feelings").value;

  //function to check user input for city name
  function validateCity(cityName) {
    if (cityName == "" || !cityName) {
      return false; //return false if it's empty
    } else {
      return true; //return true if it is not empty
    }
  }

  if (!validateCity(cityName)) {
    // display error message if city name input is empty
    inputError.textContent = "City name cannot be empty, please enter it!";
    return;
  } else {
    inputError.textContent = "";
    // if (!feelings) {
    //   // if feelings is empty fill it with this text
    //   feelings = "too lazy to enter feelings";
    // }
    getWeather()
      //new syntax
      .then((dat) => {
        // Add data
        postData("/addWeather", {
          country: dat.geonames[0].countryName,
          date: date,
          lat: dat.geonames[0].lat,
          lng: dat.geonames[0].lng,
        });
        // we can do this because of async!
        updateUI();
      });
  }
}

/* Function to GET Web API Data*/
const getWeather = async () => {
  const inputError = document.querySelector(".inputError");
  const cityName = document.getElementById("city").value;
  const offline = document.getElementById("offline");

  // `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api}&units=metric`

  try {
    const res = await fetch(
      `http://api.geonames.org/searchJSON?formatted=true&q=${cityName}&maxRows=1&lang=en&username=muhiddin`
    );
    const data = await res.json();
    console.log(data);
    if (data.cod == "404") {
      inputError.innerText = "Please enter a valid city name!";
    }
    // console.log(data);
    offline.innerText = "";
    return data;
  } catch (error) {
    let retries = 11;
    console.log("error", error);
    setTimeout(() => {
      retries--;
      offline.innerText = "Reconnecting to the Internet..." + retries;
      // Retrying failed promise...
      if (retries < 1) {
        return (offline.innerText =
          "Reconnection failed. Please refresh the page!");
      }
      performAction();
    }, 3000);
  }
};

/* Function to POST data */
const postData = async (url = "", data = {}) => {
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
    // console.log(newData);
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
      <div class="city">${d.country}</div>
      <div class="temp">
      ${d.date}
      </div>
      <div class="date">${d.lat}</div>
      <div class="content"><div>Feelings: <i>${d.lng}</i></div></div>
      `;
    });

    entryRow.setAttribute("class", "entryRow");
    fragment.appendChild(entryRow);
    entryHolder.appendChild(fragment);
  } catch (error) {
    console.log("error", error);
  }
};

export { performAction };
