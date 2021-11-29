import { checkDayDiff, currentDate, getMonthName } from "./helpers";

const updateUI = async (api) => {
  console.log(api);

  let startDate = document.querySelector("#start").value;
  let endDate = document.querySelector("#end").value;

  // Variables for day difference
  let countdown = checkDayDiff(currentDate(), startDate);
  let travelDays = checkDayDiff(startDate, endDate);

  try {
    const travelsList = document.querySelector(".travels__results");
    const fragment = document.createDocumentFragment();
    const travelCard = document.createElement("ul");
    travelCard.setAttribute("class", "travels__list");
    // let travel = api;
    travelCard.innerHTML = `

        <li class="travels__card" id="">
          <div class="travels__image">
            <img src="${api.pic.previewURL}" alt="${api.pic.alt}">
          </div>
          <div class="travels__content">
            <h3 class="travels__header">
              ${api.travelTo}
            </h3>
            <div class="travels__meta">
              <span class="travels__length">Length: ${travelDays} days</span>
              <span class="travels__countdown">Left: ${countdown} ${countdown > 1 ? 'days' : 'day'}</span>
              <span class="travels__countdown">Start: ${getMonthName(startDate)} day(s)</span>
              <span class="travels__countdown">Finish: ${getMonthName(endDate)} day(s)</span>
            </div>
            <ul class="travels__weather">
              ${api.weather.map(w=>getWeather(w))}
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
    //${api.weather.map(item=>{getWeather(item)})}
    fragment.appendChild(travelCard);
    travelsList.appendChild(fragment);
  } catch (error) {
    console.log("error", error);
  }
};

const getWeather = (w) => {
  return `
    <li class="travels__weather">
      <span class="travels__weather-date">${getMonthName(w.valid_date)}</span>
      <div class="travels__weather-icon">
        <img src="src/client/pics/${w.weather.icon}.png" alt="${w.weather.description}">
      </div>
      <div class="travels__weather-meta">
        <span class="travels__weather-temp">
          ${Math.round(w.high_temp)}° / ${Math.round(w.low_temp)}°
        </span>
        <div class="travels__weather-pop">
          <i class="umbrella icon"></i>
          <span class="travels__weather-high">${w.pop}%</span>
          <span class="travels__weather-desc">Desc: ${w.weather.description}</span>
        </div>
      </div>
    </li>
  `;
};

export { updateUI };
