/* Function to GET data */
const getData = async (url = "", data = {}) => {
  
  const inputError = document.querySelector(".form__error");
  
  try {
    console.log(">>> Running getData below >>>");

    console.log(JSON.stringify(data));
    console.log("post url: " + url);

    console.log(">>> Running getData above >>>");

    const response = await fetch(url, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const newData = await response.json();
    console.log(newData);

    // if (newData.locValidation != null) {
    //   alert(newData.locValidation);
    //   console.log(`*** ${newData.locValidation} ***`);
    //   inputError.innerHTML = "";
    //   return;
    // }

    return newData;
  } catch (error) {

    inputError.textContent = "Oops! Failed to fetch data!";
    setTimeout(() => {
      inputError.textContent = "";
    }, 10000);

    return error;
  }
};

export { getData };
