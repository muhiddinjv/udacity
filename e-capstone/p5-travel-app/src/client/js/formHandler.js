const { checkUrl } = require("./checkUrl");
const { getData } = require("./getData");
const { updateUI } = require("./updateUI");

const submitBtn = document.querySelector('#submit');
submitBtn.addEventListener('click', handleSubmit);

/* Function called by event listener */
const handleSubmit = async (e) => {
  alert('handle submit is working')
  e.preventDefault();//https://mukhiddinaka.web.app/blog.html
  const inputError = document.querySelector(".inputError");
  let url = document.getElementById("city").value;

  if (checkUrl(url)) { // check what text was put into the form field
    const json = await getData("http://localhost:1010/addUrl", { url });

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
