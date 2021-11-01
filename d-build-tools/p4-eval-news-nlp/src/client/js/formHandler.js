const inputError = document.querySelector(".inputError");
let retryEveryMs = 3000;
let retries = 11;

const validateUrl = (url) => {
  if (url == "" || !url) {
    return false; //return false if it's empty
  } else {
    return true; //return true if it is not empty
  }
};

/* Function called by event listener */
const handleSubmit = (e) => {
  e.preventDefault();
  try {
    let url = document.getElementById("name").value; //https://davidwalsh.name/impostor-syndrome
    // check what text was put into the form field
    if (Client.checkUrl(url)) {
      Client.postData("http://localhost:3000/addUrl", { url }).then((res) => {
        // const json = res.json();
        console.log(res);
        // Client.updateUI(data);
      });
      inputError.textContent = "";
    } else {
      // display error message if city name input is empty
      inputError.textContent =
        "Input field cannot be empty! Please, enter URL!";
      return;
    }
  } catch (error) {
    console.log("API Failure: " + error);
    setTimeout(() => {
      retries--;
      inputError.innerText = "Reconnecting to the Internet..." + retries;
      // Retrying failed promise...
      if (retries < 1) {
        return (inputError.innerText =
          "Reconnection failed. Please refresh the page!");
      }
      handleSubmit();
    }, retryEveryMs);
  }
};

export { handleSubmit };
