/* Global Variables */
const inputCity = document.getElementById("inputCity");
const generate = document.getElementById("generate");
let retryEveryMs = 3000;
let retries = 6;

// Create a new date instance dynamically with JS
let d = new Date();
let date = `${d.getMonth()}.${d.getDate()}.${d.getFullYear()}`;
console.log(date);

// Personal API Key for OpenWeatherMap API
const api = "ad8a4d7750ce20473c84cde66d6c7ab4";
//d0889ce843a11270e6749177a5118aec -- my 2nd api

// Event listener to add function to existing HTML DOM element
generate.addEventListener("click", performAction);

/* Function called by event listener */
function performAction() {
  const fav = document.getElementById("feelings").value;

  getAnimal()
    //new syntax
    .then(function(data) {
      // Add data
      postData("/addWeather", {
        city: data.name,
        date: date,
        temp: data.main.temp,
        fav: fav,
      });
      // we can do this because of async!
      updateUI();
    });
}

/* Function to GET Web API Data*/
const getAnimal = async () => {
  const res = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&appid=${api}&units=metric`
  );
  // const res = await fetch(url);
  try {
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    // console.log(error);
    setTimeout(() => {
      retries--;
      content.innerText = "Retrying promise..." + retries;
      // Retrying failed promise...
      if (retries == 0) {
        return (content.innerText = "Max retries exceeded!");
      }
      getAnimal();
    }, retryEveryMs);
  }
};

/* Function to POST data */
const postData = async (url = "", data = {}) => {
  console.log(data);
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
    document.getElementById("city").innerHTML = allData[0].city;
    document.getElementById("date").innerHTML = allData[0].date;
    document.getElementById("temp").innerHTML = allData[0].temp;
    document.getElementById("content").innerHTML = allData[0].fav;
  } catch (error) {
    console.log("error", error);
  }
};
