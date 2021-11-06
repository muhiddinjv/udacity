const { checkUrl } = require("./checkUrl");
const { getData } = require("./getData");
const { updateUI } = require("./updateUI");

/* Function called by event listener */
const handleSubmit = async (e) => {
  e.preventDefault(); //https://muhiddinjvv.web.app/blog.html
  const inputError = document.querySelector(".inputError");
  let url = document.getElementById("name").value;
  // check what text was put into the form field
  if (checkUrl(url)) {
    const json = await getData("http://localhost:3000/addUrl", { url });

    console.log(">>> Running formHandler below >>>");
    console.log(json);
    updateUI(json);
    console.log(">>> Running formHandler above >>>");

    inputError.textContent = "";
  } else {
    // display error message if input is invalid
    inputError.textContent = "Please, enter a valid link!";
    setTimeout(() => {
      inputError.textContent = "";
    }, 3000);
    return;
  }
};

export { handleSubmit };
