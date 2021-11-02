/* Function to GET Project Data */
const updateUI = async (json) => {
  console.log("updateUI is running below");
  console.log(json);
  // const request = await fetch("/all");
  // console.log(request);
  try {
    // const json = await request.json();
    const results = document.getElementById("results");
    results.innerHTML = `
        <div>${json.agreement}</div>
        <div>${json.subjectivity}</div>
        <div>${json.confidence}</div>
        <div>${json.irony}</div>
        <div>${json.score_tag}</div>
        `;
    console.log("updateUI is running above");
  } catch (error) {
    console.log("error", error);
  }
};

export { updateUI };
