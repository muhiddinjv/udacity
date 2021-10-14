/* Global Variables */
const inputCity = document.getElementById("inputCity");
const generate = document.getElementById("generate");
const error = document.getElementById("error");

let retryEveryMs = 3000;
let retries = 6;

// Create a new date instance dynamically with JS
let d = new Date();
console.log(d);
let date = `${d.getMonth()}.${d.getDate()}.${d.getFullYear()}`;

// Personal API Key for OpenWeatherMap API
const api = "ad8a4d7750ce20473c84cde66d6c7ab4";
//d0889ce843a11270e6749177a5118aec -- my 2nd api

// Event listener to add function to existing HTML DOM element
generate.addEventListener("click", performAction);

/* Function called by event listener */
function performAction() {
  const fav = document.getElementById("feelings").value;

  getWeather()
    //new syntax
    .then(function (data) {
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
const getWeather = async () => {
  // const res = await fetch(url);
  try {
    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&appid=${api}&units=metric`
    );
    const data = await res.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log("error", error);
    setTimeout(() => {
      retries--;
      error.innerText = "Retrying promise..." + retries;
      // Retrying failed promise...
      if (retries == 0) {
        return (error.innerText = "Max retries exceeded!");
      }
      getWeather();
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

    const entryHolder = document.getElementById("entryHolder");
    const fragment = document.createDocumentFragment();
    const parent = document.createElement("div");

    allData.map((d) => {
      parent.innerHTML = `
      <div class="city">${d.city}</div>
      <div class="temp">${d.temp}</div>
      <div class="date">${d.date}</div>
      <div class="fav">Feelings: ${d.fav}</div>
      `;
    });

    // for (let i = 0; i < allData.length; i++) {
    //   parent.innerHTML = `
    //     <div id="city">${allData[i].city}</div>
    //     <div id="temp">${allData[i].temp}</div>
    //     <div id="date">${allData[i].date}</div>
    //     <div id="fav">${allData[i].fav}</div>
    //   `; // lightbulb :))

    // const city = document.createElement("div");
    // city.setAttribute("id", "city");
    // city.innerHTML = allData[i].city;
    // fragment.appendChild(city);

    // const temp = document.createElement("div");
    // temp.setAttribute("id", "temp");
    // temp.innerHTML = allData[i].temp;
    // fragment.appendChild(temp);

    // const date = document.createElement("div");
    // date.setAttribute("id", "date");
    // date.innerHTML = allData[i].date;
    // fragment.appendChild(date);

    // const fav = document.createElement("div");
    // fav.setAttribute("id", "fav");
    // fav.innerHTML = allData[i].fav;
    // fragment.appendChild(fav);
    // }

    parent.setAttribute('class', 'parent');
    fragment.appendChild(parent);
    entryHolder.appendChild(fragment);
  } catch (error) {
    console.log("error", error);
  }
};
