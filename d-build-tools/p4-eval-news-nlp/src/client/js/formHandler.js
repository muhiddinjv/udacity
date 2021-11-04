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
  try {//https://muhiddinjvv.web.app/blog.html
    let url = document.getElementById("name").value; 
    // check what text was put into the form field
    if (Client.checkUrl(url)) {
      Client.postData("http://localhost:3000/addUrl", { url }).then((res)=>{
        console.log(">>> Running formHandler below >>>");
        console.log(res);
        let json = {
          sentence_list: res.sentence_list[4].text,
          agreement: res.agreement,
          subjectivity: res.subjectivity,
          irony: res.irony,
          confidence: res.confidence,
          score_tag: res.score_tag,
        }
        console.log(">>> Running formHandler above >>>");
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
