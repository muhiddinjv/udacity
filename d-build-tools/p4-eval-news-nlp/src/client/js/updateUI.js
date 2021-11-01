/* Function to GET Project Data */
const updateUI = ({data}) => {
  console.log(data);
  try {
    // const allData = await request.json();
    const results = document.getElementById("results");
    const fragment = document.createDocumentFragment();
    const output = document.createElement("div");

    data.map((d) => {
      console.log(d);
      output.innerHTML = `
        <div>${d.agreement}</div>
        <div>${d.subjectivity}</div>
        <div>${d.confidence}</div>
        <div>${d.irony}</div>
        <div>${d.score_tag}</div>
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
