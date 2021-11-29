const currentDate = () => {
  let d = new Date(); 
  let today = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
  return today; // today = current year-month-date 
};

const in1year = () => {
  let one = new Date(); // get current year-month-date below
  let oneYear = `${one.getFullYear() + 1}-${
    one.getMonth() + 1
  }-${one.getDate()}`;
  return oneYear;
};

// Number of Days Between Two Dates
const checkDayDiff = (date1, date2) => {
  // Get Argument's Time
  let date1Time = new Date(date1).getTime();
  let date2Time = new Date(date2).getTime();

  // Total Milliseconds in A Day
  const dayInMs = 24 * 60 * 60 * 1000;

  // Return Day Difference Between Two Dates
  return parseInt((date2Time - date1Time) / dayInMs);
};

const unixToLocalTime = (num) => {
  let unix_timestamp = num;
  
  // Create a new JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  var date = new Date(unix_timestamp * 1000);

  // Hours part from the timestamp
  var hours = date.getHours();

  // Minutes part from the timestamp
  var minutes = "0" + date.getMinutes();

  // Seconds part from the timestamp
  // var seconds = "0" + date.getSeconds();

  // Will display time in 10:30:23 format
  // var formattedTime = `${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`;
  var formattedTime = `${hours}:${minutes.substr(-2)}`;

  return formattedTime;
};

const getMonthName = (dateSplit) => {
  dateSplit = dateSplit.split('-');
  let monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const date = new Date(dateSplit[0], dateSplit[1], dateSplit[2]); // 2020-06-21 //num > 1 ? 'trips' : 'trip'
  return `${monthShortNames[date.getMonth() == 0 ? date.getMonth()+11 : date.getMonth()-1]} ${dateSplit[2]}`; 
}

const addScrollToTravels=()=> {
  const submit = document.querySelector('submit');
  submit.addEventListener('click', e => {
    e.preventDefault();
    const id = submit.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
  });
}

export { currentDate, in1year, checkDayDiff, unixToLocalTime, getMonthName };
