import axios from "axios";
import { currentDate, in1year, unixToLocalTime } from "./helpers";
import { updateUI } from "./updateUI";

const start = document.getElementById("start");
const end = document.getElementById("end");

(() => {
  // disable past days in calendar so that user cannot select them
  start.setAttribute("min", currentDate());
  end.setAttribute("min", currentDate());

  // set calendar days to current and 10 days from now
  start.setAttribute("value", currentDate());
  end.setAttribute("value", in1year());
})();

/* Function called by event listener */
const handleSubmit = async (e) => {
  e.preventDefault();

  const cityInput = document.querySelector("#city").value;
  let inputError = document.querySelector(".form__error");
  let startDate = start.value; let endDate = end.value;

  // cityInput, start and end date input validation
  if (!cityInput == "" && !startDate == "" && !endDate == "") {
    console.log(">>> Running formHandler below >>>");

    // Make a Post request
    const api = await axios.post("http://localhost:1010/apis", { cityInput });

    console.log("sunrise: " + unixToLocalTime(api.data.weather[0].sunrise_ts));
    console.log("sunset: " + unixToLocalTime(api.data.weather[0].sunset_ts));
    console.log(api);
    console.log("destionation: " + api.data.travelTo);

    if (api.status == "404") {
      inputError.textContent =
        "No results found! Please, enter a valid city name!";
      setTimeout(() => {
        inputError.textContent = "";
      }, 5000);
      return;
    } else {
      // updateUI(api);
    }

    console.log(">>> Running formHandler above >>>");
  } else {
    inputError.textContent = "Please, enter city name, start & end dates!";
    setTimeout(() => {
      inputError.textContent = "";
    }, 5000);
    return;
  }
};

export { handleSubmit };
