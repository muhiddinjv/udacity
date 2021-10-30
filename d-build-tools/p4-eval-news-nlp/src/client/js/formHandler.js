const API_KEY = "ec0af99cc85e00dff7b20c2fca28a66b";
const ANALYSIS_API = "https://api.meaningcloud.com/sentiment-2.1";

function validateCity(cityName) {
  if (cityName == "" || !cityName) {
    return false; //return false if it's empty
  } else {
    return true; //return true if it is not empty
  }
}

function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value; //https://davidwalsh.name/impostor-syndrome

  // TESTING --------------------------------
  console.log("api: " + API_KEY);
  const formdata = new FormData();
  formdata.append("key", API_KEY);
  formdata.append("txt", formText);
  formdata.append("lang", "en"); // 2-letter code, like en es fr ...

  const requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  const response = fetch(ANALYSIS_API, requestOptions)
    .then((response) => ({
      body: response.json(),
    }))
    .then(({ body }) => console.log(body))
    .catch((error) => console.log("error", error));
  // TESTING ----------------------------------------

  // Client.checkForName(formText)

  // console.log("::: Form Submitted :::")
  // fetch('http://localhost:8080/test')
  // .then(res => {
  //     return res.json()
  // })
  // .then(function(data) {
  //     document.getElementById('results').innerHTML = data.message
  // })
}

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
      Client.getAnalysis()
        //new syntax
        .then(function (data) {
          // Add data
          postData("/addAnalysis", {
            city: data.name,
            date: date,
            temp: data.main.temp,
            feelings: feelings,
          });
          // we can do this because of async!
          Client.updateUI();
        });
    }
  }

export { handleSubmit };
