export const currentDate = () =>{
    let d = new Date(); // get current year-month-date below
    let today = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    return today;
}