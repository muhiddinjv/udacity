import axios from 'axios';
import { checkDayDiff } from './checkDayDiff';
import { currentDate } from './currentDate';

(()=>{
  // disable past days in calendar so that user cannot select them
  document.getElementById("start").setAttribute("min", currentDate());
  document.getElementById("end").setAttribute("min", currentDate());
})()

/* Function called by event listener */
const handleSubmit = async (e) => {
  e.preventDefault();

  const cityInput = document.querySelector("#city").value;
  const inputError = document.querySelector(".form__error");
  const startDate = document.querySelector("#start").value;
  const endDate = document.querySelector("#end").value;

  // Day Difference Vars
  let countdown = checkDayDiff(currentDate(), startDate);
  let travelDays = checkDayDiff(startDate, endDate);

  console.log(`
  Travel is in ${countdown} day(s) 
  Travel will startDate on ${startDate} and take ${travelDays} days to complete
  `);

  // checking the provided date within a week or not. if not it take as a future.
  // const unixDate = getDates(new Date(date).getTime(), 1000);
  // const today = getDates(new Date().getTime(), 1000);
  // const daysAhead = getDates(unixDate - today, 86400);
  // const isFuture = daysAhead > 7;
  // if (location && date) {
  //   const data = {
  //     location: location,
  //     date: unixDate,
  //     isFuture: isFuture,
  //     daysAhead: daysAhead,
  //   };
  // }

  console.log("formhandler: " + cityInput);

  // cityInput, start and end date input validation
  if (!cityInput == "" && !startDate == "" && !endDate == "") {
    console.log(">>> Running formHandler below >>>");

    // Make a Post request
    const json = await axios.post("http://localhost:1010/apis", { cityInput });

    console.log(json);

    if (json.status == "404") {
      inputError.textContent =
        "No results found! Please, enter a valid city name!";
      setTimeout(() => {
        inputError.textContent = "";
      }, 5000);
      return;
    }
    // console.log(json);
    console.log(">>> Running formHandler above >>>");
    // }
  } else {
    inputError.textContent = "Please, enter city name, start & end dates!";
    setTimeout(() => {
      inputError.textContent = "";
    }, 5000);
    return;
  }
};

export { handleSubmit };
