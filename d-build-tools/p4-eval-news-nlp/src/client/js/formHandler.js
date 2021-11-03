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
      Client.postData("http://localhost:3000/addUrl", { url }).then((res)=>{
        console.log(">>> formHandler is running below >>>");
        console.log(res);
        let json = {
          agreement: res.agreement,
          confidence: res.confidence,
          irony: res.irony,
          subjectivity: res.subjectivity,
          score_tag: res.score_tag,
          sentence_list: res.sentence_list[4].text,
        }
        console.log(">>> formHandler is running above >>>");
        Client.updateUI(json); 
      });
      inputError.textContent = "";
    } else {
      // display error message if input is empty
      // setTimeout(() => {
        inputError.textContent =
        "Empty input or invalid URL";
      return;
      // }, retryEveryMs);
    }
  } catch (error) {
    console.log("API Failure: " + error);
    setTimeout(() => {
      retries--;
      inputError.innerText = "Trying to reconnect..." + retries;
      // Retrying failed promise...
      if (retries < 1) {
        return (inputError.innerText =
          "Connection failed. Refresh the page!");
      }
      handleSubmit();
    }, retryEveryMs);
  }
};

export { handleSubmit };
