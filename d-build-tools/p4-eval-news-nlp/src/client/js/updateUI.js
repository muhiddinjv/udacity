/* Function to GET Project Data */
const updateUI = ({ data }) => {
  // const request = await fetch("/all");
  try {
    // const allData = await request.json();
    const results = document.getElementById("results");
    const fragment = document.createDocumentFragment();
    const output = document.createElement("div");

    data.map((d) => {
      output.innerHTML = `
        <div class="agree">${d.agreement}</div>
        <div class="subj">${d.subjectivity}</div>
        <div class="confid">${d.confidence}</div>
        <div class="irony">${d.irony}</div>
        <div class="score">${d.score_tag}</div>
        `;
    });

    output.setAttribute("class", "output");
    fragment.appendChild(output);
    results.appendChild(fragment);
  } catch (error) {
    console.log("error", error);
  }
};

export { updateUI };
