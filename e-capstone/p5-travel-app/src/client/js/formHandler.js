// const { getData } = require("./getData");
// const { updateUI } = require("./updateUI");
const { default: axios } = require("axios");
let d = new Date();
let today = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
console.log(today);

 // grey out past days so that the user cannot select them
 document.getElementById("start").setAttribute("min", today);
 document.getElementById("end").setAttribute("min", today);

/* Function called by event listener */
const handleSubmit = async (e) => {
  e.preventDefault();

  const city = document.querySelector("#city").value;
  const inputError = document.querySelector(".form__error");

  const start = document.querySelector("#start").value;
  const end = document.querySelector("#end").value;

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

  console.log("formhandler: " + city);

  // try {
  if (!city == "" && !start == "" && !end == "") {
    console.log(">>> Running formHandler below >>>");

    // Make a Post request
    const json = await axios.post("http://localhost:1010/apis", { city });
    // const json = getData("http://localhost:1010/apis", {input})

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
  // } catch (error) {
  //   console.log(error);
  // }
};

export { handleSubmit };
