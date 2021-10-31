const API_KEY = "ec0af99cc85e00dff7b20c2fca28a66b";
const ANALYSIS_API = "https://api.meaningcloud.com/sentiment-2.1";

const validateUrl = formText => {
  if (formText == "" || !formText) {
    return false; //return false if it's empty
  } else {
    return true; //return true if it is not empty
  }
}

/* Function called by event listener */
const handleSubmit = event => {
  event.preventDefault();

  const inputError = document.querySelector(".inputError");
  
  // check what text was put into the form field
  let formText = document.getElementById("name").value; //https://davidwalsh.name/impostor-syndrome
  
  if (!validateUrl(formText)) {
    // display error message if city name input is empty
    inputError.textContent = "Input field cannot be empty, please enter a link";
    return;
  } else {
    inputError.textContent = "";
    // TESTING --------------------------------
    const formdata = new FormData();
    formdata.append("key", API_KEY);
    formdata.append("txt", formText);
    formdata.append("lang", "en"); // 2-letter code, like en es fr ...

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(ANALYSIS_API, requestOptions)
      .then((response) => ({
        body: response.json(),
      }))
      .then(({ body }) => console.log(body))
      .catch((error) => console.log("error", error));
    // TESTING ----------------------------------------

    // Client.getAnalysis()
    //   //new syntax
    //   .then(data => {
    //     // Add data
    //     Client.postData("/addAnalysis", {
    //       body: data.body
    //     });
    //     // we can do this because of async!
    //     Client.updateUI(data);
    //   });

    // Client.checkForName(formText)

    // console.log("::: Form Submitted :::")
    // fetch('http://localhost:8081/test')
    // .then(res => {
    //     return res.json()
    // })
    // .then(function(data) {
    //     document.getElementById('results').innerHTML = data.message
    // })
  }
}


export { handleSubmit };
