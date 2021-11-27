// const { getData } = require("./getData");
const { sendData } = require("./sendData");
// const { updateUI } = require("./updateUI");
const { default: axios } = require("axios");
// let d = new Date(); console.log(d);
// let date = `${d.getMonth()}.${d.getDate()}.${d.getFullYear()}`;
// function validateCity(input) {
//   if (input == "" || !input) {
//     return false; //return false if it's empty
//   } else {
//     return true; //return true if it is not empty
//   }
// }

/* Function called by event listener */
const handleSubmit = async (e) => {
  e.preventDefault();

  const input = document.querySelector("#city").value;
  const inputError = document.querySelector(".form__error");
  const start = document.querySelector("#start").value;
  const end = document.querySelector("#end").value;

  console.log("formhandler: " + input);

  // try {
    if (!input == "") {
      console.log(">>> Running formHandler below >>>");

       // Fetch APIs
      // const response = await fetch("http://localhost:1010/apis", {
      //   method: "POST",
      //   credentials: "same-origin",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ input }),
      // });

      // const json = await response.json();
      const json = await axios.post("http://localhost:1010/apis", {input})
      // const json = sendData("http://localhost:1010/apis", {input})

      console.log(json);

      // if (json.totalResultsCount == "0") {
      //   inputError.textContent = "No results found! Please, enter a valid city name!";
      //   setTimeout(() => {
      //     inputError.textContent = "";
      //   }, 5000);
      //   return;
      // } 
        // console.log(json);
        console.log(">>> Running formHandler above >>>");
      // }
    } else {
      inputError.textContent = "City name cannot be empty. Please enter it!";
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
