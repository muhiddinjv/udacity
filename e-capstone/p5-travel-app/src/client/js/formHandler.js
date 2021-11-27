// const { getData } = require("./getData");
// const { updateUI } = require("./updateUI");
const { default: axios } = require("axios");
// let d = new Date(); console.log(d);
// let date = `${d.getMonth()}.${d.getDate()}.${d.getFullYear()}`;

/* Function called by event listener */
const handleSubmit = async (e) => {
  e.preventDefault();

  const city = document.querySelector("#city").value;
  const inputError = document.querySelector(".form__error");
  const start = document.querySelector("#start").value;
  const end = document.querySelector("#end").value;

  console.log("formhandler: " + city);
  
  // try {
    if (!city == "" && !start == "" && !end == "") {
      console.log(">>> Running formHandler below >>>");
      console.log(start.length, end.length);

       // Fetch APIs
      const json = await axios.post("http://localhost:1010/apis", {city})
      // const json = getData("http://localhost:1010/apis", {input})

      console.log(json);

      if (json.status == "404") {
        inputError.textContent = "No results found! Please, enter a valid city name!";
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
