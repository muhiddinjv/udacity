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
    let url = document.getElementById("name").value; //https://muhiddinjvv.web.app/blog.html
    // check what text was put into the form field
    if (Client.checkUrl(url)) {
      Client.postData("http://localhost:3000/addUrl", { url }).then((d)=>{
        console.log(">>> handling submit below...");
        let json = {
          agreement: d.agreement,
          score_tag: d.score_tag,
        }
        console.log(json);
        console.log(">>> handling submit above...");
        Client.updateUI(json); 
      });
      inputError.textContent = "";
    } else {
      // display error message if input is empty
      inputError.textContent =
        "Input field cannot be empty. Please, enter URL.";
      return;
    }
  } catch (error) {
    console.log("API Failure: " + error);
    setTimeout(() => {
      retries--;
      inputError.innerText = "Trying to reconnect..." + retries;
      // Retrying failed promise...
      if (retries < 1) {
        return (inputError.innerText =
          "Connection failed. Please refresh the page!");
      }
      handleSubmit();
    }, retryEveryMs);
  }
};

export { handleSubmit };
