import { checkDayDiff, currentDate } from "./helpers";

const updateUI = async (api) => {
  let startDate = document.querySelector("#start").value;
  let endDate = document.querySelector("#end").value;

  // Variables for day difference
  let countdown = checkDayDiff(currentDate(), startDate);
  let travelDays = checkDayDiff(startDate, endDate);

  try {
    const travelsList = document.querySelector(".travels__list");
    const fragment = document.createDocumentFragment();
    const travelCard = document.createElement("ul");
    // let travel = api;
    travelCard.innerHTML = `

        <li class="travels__card" id="">
          <div class="travels__image">
            <img src="${api.data.pic.previewURL}" alt="${api.data.pic.alt}">
          </div>
          <div class="travels__content">
            <h3 class="travels__header">
              ${api.data.travelTo}
            </h3>
            <div class="travels__meta">
              <span class="travels__length">Length: ${travelDays} days</span>
              <span class="travels__countdown">Left: ${countdown} day(s)</span>
            </div>
            <ul class="travels__weather">
              <li>High: ${api.data.weather[0].high_temp}</li>
              <li>Low: ${api.data.weather[0].low_temp}</li>
            </ul>
          </div>
          <div class="travels__edit">
            <div class="btn travels__todo">pen icon</div>
            <button class="btn travels__past">past</button>
            <button class="btn travels__future">future</button>
            <div class="btn travels__delete">can icon</div>
          </div>
        </li>

    `;

    // travelsCard.setAttribute("class", "travelsCard");
    fragment.appendChild(travelCard);
    travelsList.appendChild(fragment);
  } catch (error) {
    console.log("error", error);
  }
};

export { updateUI };
