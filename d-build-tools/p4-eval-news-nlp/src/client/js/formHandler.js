const { checkUrl } = require("./checkUrl");
const { getData } = require("./getData");
const { updateUI } = require("./updateUI");

/* Function called by event listener */
const handleSubmit = async (e) => {
  e.preventDefault(); //https://muhiddinjvv.web.app/blog.html
  const inputError = document.querySelector(".inputError");
  let url = document.getElementById("name").value;

  if (checkUrl(url)) {// check what text was put into the form field
    const json = await getData("http://localhost:1000/addUrl", { url });

    console.log(">>> Running formHandler below >>>");
    console.log(json);
    updateUI(json);
    console.log(">>> Running formHandler above >>>");

    

  } else {
    // display error message if input is invalid
    inputError.textContent = "Please, enter a valid article link!";
    setTimeout(() => {
      inputError.textContent = "";
    }, 10000);
    return;
  }
};

export { handleSubmit };
