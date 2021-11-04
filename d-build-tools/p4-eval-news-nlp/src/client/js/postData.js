/* Function to POST data */
const postData = async (url = "", data = {}) => {
  console.log(">>> Running postData below >>>");
  console.log(JSON.stringify(data));
  console.log("post url: "+url);
  console.log(">>> Running postData above >>>");

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
    console.log("error", error);
  }
};

export { postData };
