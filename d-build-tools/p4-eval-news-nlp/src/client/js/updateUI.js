/* Function to GET Project Data */
const updateUI = (json) => {
  console.log(">>> Running updateUI below >>>");
  console.log(json);
  try {
    const results = document.getElementById("results");
    results.innerHTML = `
      <div><b>Sentence:</b> <i>${json.sentence_list}</i></div>
      <div><b>Agreement:</b> <i>${json.agreement}</i></div>
      <div><b>Subjectivity:</b> <i>${json.subjectivity}</i></div>
      <div><b>Irony:</b> <i>${json.irony}</i></div>
      <div><b>Confidence:</b> <i>${json.confidence}</i></div>
      <div><b>Score:</b> <i>${json.score_tag}</i></div>
      `;
    console.log(">>> Running updateUI above >>>");
  } catch (error) {
    console.log("error", error);
  }
};

export { updateUI };
