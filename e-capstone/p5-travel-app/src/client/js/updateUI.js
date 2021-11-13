const updateUI = (json) => {
  console.log(">>> Running updateUI below >>>");
  try {
    const results = document.getElementById("results");
    results.innerHTML = `
      <div><b>Sentence:</b> <i>${json.sentence_list[2].text}</i></div>
      <div><b>Agreement:</b> <i>${json.agreement}</i></div>
      <div><b>Subjectivity:</b> <i>${json.subjectivity}</i></div>
      <div><b>Irony:</b> <i>${json.irony}</i></div>
      <div><b>Confidence:</b> <i>${json.confidence}</i></div>
      <div><b>Score:</b> <i>${json.score_tag}</i></div>
      `;
    console.log(results);
    console.log(">>> Running updateUI above >>>");
  } catch (error) {
    console.log("updateUI Error: ", error);
  }
};

export { updateUI };
