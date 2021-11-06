/* Function to POST data */
const getData = async (url = "", data = {}) => {
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

  try {
    return await response.json();
  } catch (error) {
    alert('Oops! Failed to get data!');
    return error;
  }
};

export { getData };
