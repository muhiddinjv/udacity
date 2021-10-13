/* Global Variables */
const city = document.querySelector("#city");
const generate = document.querySelector("#generate");
const content = document.querySelector("#content");
let retryEveryMs = 3000;
let retries = 6;

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = `${d.getMonth()}.${d.getDate()}.${d.getFullYear()}`;
console.log(newDate);

// Personal API Key for OpenWeatherMap API
const api = "ad8a4d7750ce20473c84cde66d6c7ab4";
//d0889ce843a11270e6749177a5118aec -- my 2nd api

// Event listener to add function to existing HTML DOM element
generate.addEventListener("click", getWeather);



async function fetchData(city) {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`
  );
  const newData = await response.json();
  return newData;
}

/* Function called by event listener */
async function getWeather() {

  let result = [];
  try {
    console.log("fetching weather data....");
    const inputValue = await fetchData(city.value);
    result.push([
      {
        city: inputValue.name,
        weather: `${inputValue.main.temp > 0 ? "+" : ""}${Math.round(
          inputValue.main.temp
        )}`,
      },
    ]);
    console.log("fetching async complete!");
    // return build(result);
  } catch (error) {
    // console.log(error);
    setTimeout(() => {
      retries--;
      content.innerText = "Retrying promise..." + retries;
      // Retrying failed promise...
      if (retries == 0) {
        return (content.innerText = "Max retries exceeded!");
      }
      getWeather();
    }, retryEveryMs);
    // console.log(result);
  }
}

/* Function to GET Web API Data*/

/* Function to POST data */

/* Function to GET Project Data */




// const build = (result) => {
//   console.log("building async...");

//   const city1 = document.querySelector('.city1');
//   const city2 = document.querySelector('.city2');
//   const city3 = document.querySelector('.city3');

//   let c = result[0];
//   let cc = result[1];
//   let ccc = result[2];

//   city1.innerHTML = `${c[0].city}: ${c[0].weather}`;
//   city2.innerHTML = `${c[1].city}: ${c[1].weather}`;
//   city3.innerHTML = `${c[2].city}: ${c[2].weather}`;

//   tash2.innerHTML = `${cc[0].city}: ${cc[0].weather}`;
//   racing2.innerHTML = `${ccc[0].city}: ${ccc[0].weather}`;

//   console.log("building async complete!");
// };
