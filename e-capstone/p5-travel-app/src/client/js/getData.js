/* Function to GET data */
const getData = async (url = "", data = {}) => {
  try {
  console.log(">>> Running getData below >>>");
  console.log(JSON.stringify(data));
  console.log("post url: "+url);
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
  // console.log(newData);
  return newData;
  } catch (error) {
  const inputError = document.querySelector(".inputError");
    inputError.textContent = "Oops! Failed to fetch data!";
    setTimeout(() => {
      inputError.textContent = "";
    }, 10000);
    return error;
  }
};

export { getData };
