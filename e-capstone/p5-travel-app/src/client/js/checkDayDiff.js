// Number of Days Between Two Dates
export const checkDayDiff = (date1, date2) => {
  // Get Argument's Time
  let date1Time = new Date(date1).getTime();
  let date2Time = new Date(date2).getTime();

  // Total Milliseconds in A Day
  const dayInMs = 24 * 60 * 60 * 1000;

  // Return Day Difference Between Two Dates
  return parseInt((date2Time - date1Time) / dayInMs);
};
