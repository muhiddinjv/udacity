/* Function to GET Project Data */
async function updateUI() {
  const request = await fetch("/all");
  try {
    const allData = await request.json();

    const entryHolder = document.getElementById("entryHolder");
    const fragment = document.createDocumentFragment();
    const entryRow = document.createElement("div");

    allData.map((d) => {
      entryRow.innerHTML = `
        <div class="city">${d.city}</div>
        <div class="temp">
        ${d.temp > 0 ? "+" : ""}${Math.round(d.temp)}
        </div>
        <div class="date">${d.date}</div>
        <div class="content"><div>Feelings: <i>${d.feelings}</i></div></div>
        `;
    });

    entryRow.setAttribute("class", "entryRow");
    fragment.appendChild(entryRow);
    entryHolder.appendChild(fragment);
  } catch (error) {
    console.log("error", error);
  }
}

export { updateUI }