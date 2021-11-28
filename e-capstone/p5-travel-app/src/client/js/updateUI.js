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

    api.map((travel) => {
      travelCard.innerHTML = `

        <li class="travel__card" id="">
          <div class="travel__image">
            <img src="${travel.pic.url}" alt="${travel.pic.alt}">
          </div>
          <div class="travel__content">
            <h3 class="travel__header">
              ${travel.destination}
            </h3>
            <div class="travel__meta">
              <span class="travel__length">Length: ${travelDays} days</span>
              <span class="travel__countdown">Left: ${countdown} day(s)</span>
            </div>
            <ul class="travel__weather">
              ${travel.weather}
            </ul>
          </div>
          <div class="travel__edit">
            <div class="btn travel__todo">pen icon</div>
            <button class="btn travel__past">past</button>
            <button class="btn travel__future">future</button>
            <div class="btn travel__delete">can icon</div>
          </div>
        </li>

    `});

    // travelCard.setAttribute("class", "travelCard");
    fragment.appendChild(travelCard);
    travelsList.appendChild(fragment);
  } catch (error) {
    console.log("error", error);
  }
};

export { updateUI };
