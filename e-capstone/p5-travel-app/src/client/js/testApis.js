// const { getData } = require("./getData");
// const axios = require("axios");

// export const testApis = async () =>{
//     const input = document.querySelector("#city").value;

//     const fetched = await fetch ('http://localhost:3030/addCity', {
//         method: 'POST',
//         credentials: 'same-origin',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({input}) // Convert the input data of destination and remarks into a string for server
//     })
//     const json = await fetched.json();

//         // Add data
//         postData("/addWeather", {
//           city: data.name,
//           date: date,
//           temp: data.main.temp,
//           feelings: feelings,
//         });
//     console.log(json);


//     // .then (res => {
//     //     return res.json()
//     // }).then(data=>console.log(data))
// }

const postdat = async (url = "", data = {}) => {
    // console.log(data);
    const response = await fetch(url, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  
    try {
      const newData = await response.json();
      console.log(newData);
      return newData;
    } catch (error) {
      console.log("error", error);
    }
  };

  export const postData = () => {
    const input = document.querySelector("#city").value;
    postdat("http://localhost:2020/addCity", {input})
  }