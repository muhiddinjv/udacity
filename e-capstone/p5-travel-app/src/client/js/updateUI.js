import { checkDayDiff, currentDate, getMonthName, unixToLocalTime } from "./helpers";


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
          <img class="travels__image" src="${api.pic.webformatURL}" alt="${api.pic.alt}">
        <div class="travels__content">
          <div class="travels__header">
            <h3 class="travels__title">${api.travelTo}</h3>
            <p class="travels__dates">
              Your travel is in ${countdown} ${countdown > 1 ? 'days' : 'day'} & will last ${travelDays} days
            </p>
          </div>
          <ul class="travels__weather">
            ${api.weather.map(w=>getWeather(w))}
          </ul>
        </div>
        <div class="travels__edit">
          <button class="btn travels__todo">&#128221;</button>
          <button class="btn travels__past">Past</button>
          <button class="btn travels__future">Future</button>
          <button class="btn travels__delete">&#10060;</button>
        </div>
      </li>
    `;
    fragment.appendChild(travelCard);
    travelsList.appendChild(fragment);
  } catch (error) {
    console.log("error", error);
  }
};

const getWeather = (w) => {
   return `
    <li class="travels__weather-card">
      <h4 class="travels__weather-date">
        Forecast for ${getMonthName(w.valid_date)}
      </h4>
      <div class="travels__weather-content">
        <fieldset class="travels__weather-temp">
          <legend>Temp</legend>
          <div class="travels__weather-tempmeta">
            <div class="high">
              &#128200; <span class="big-font">${Math.round(w.high_temp)}°C</span>
            </div>
            <div class="low">
              &#128201; <span class="big-font">${Math.round(w.low_temp)}°C</span>
            </div>
          </div>
        </fieldset>
        <div class="travels__weather-icon">
          <img src="src/client/pics/${w.weather.icon}.png" alt="${w.weather.description}"/>
        </div>
        <fieldset class="travels__weather-sun">
          <legend>Sun</legend>
          <div class="travels__weather-sunmeta">
            <div class="rise">
              &#128316; <span class="big-font">${unixToLocalTime(w.sunrise_ts)}</span>
            </div>
            <div class="set">
              &#128317; <span class="big-font">${unixToLocalTime(w.sunset_ts)}</span>
            </div>
          </div>
        </fieldset>
      </div>

      <p class="travels__weather-desc">
        Description: ${w.weather.description}
      </p>
      <div class="travels__weather-chance">
        <span>Chance of</span> 
        <span class="rain">&#127783;</span> 
        <span class="big-font">${w.pop}%</span> 
        <span class="snow">&#127784;</span> 
        <span class="big-font">${w.snow}%</span> 
      </div>
    </li>
    `;
};

export { updateUI };
