/* Global Variables */
const textInput = document.querySelector("input[type=submit]");
const offline = document.getElementById("offline");
const inputError = document.querySelector(".inputError");
const api = "ad8a4d7750ce20473c84cde66d6c7ab4";

let retryEveryMs = 3000;
let retries = 11;

/* Function to GET Web API Data*/
async function getAnalysis() {
  try {
    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${textInput.value}&appid=${api}&units=metric`
    );
    const data = await res.json();
    if (data.cod == "404") {
      inputError.innerText = "Please enter a valid city name!";
    }
    // console.log(data);
    offline.innerText = "";
    return data;
  } catch (error) {
    console.log("error", error);
    setTimeout(() => {
      retries--;
      offline.innerText = "Reconnecting to the Internet..." + retries;
      // Retrying failed promise...
      if (retries < 1) {
        return (offline.innerText =
          "Reconnection failed. Please refresh the page!");
      }
      Client.handleSubmit();
    }, retryEveryMs);
  }
}

export { getAnalysis }
