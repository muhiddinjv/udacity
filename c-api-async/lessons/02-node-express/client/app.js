// let baseURL = 'http://api.animalinfo.org/data/?animal=';
// let apiKey = '&appid=9f15e45060';

document.getElementById('generate').addEventListener('click', performAction);
const city =  document.getElementById('animal');

// Personal API Key for OpenWeatherMap API
const api = "ad8a4d7750ce20473c84cde66d6c7ab4";
//d0889ce843a11270e6749177a5118aec -- my 2nd api

// Event listener to add function to existing HTML DOM element
// generate.addEventListener("click", getWeather);



// async function fetchData(city) {
//   const response = await fetch(
//     `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`
//   );
//   const newData = await response.json();
//   return newData;
// }

function performAction() {
  const fav =  document.getElementById('favorite').value;
  
  getAnimal()
  //new syntax
  .then(function(data){
    // Add data
    // console.log(data);
    postData('/addAnimal', {animal: data.name, fact: data.timezone, fav: fav} );
    // we can do this because of async!
    updateUI()
  })
};

const getAnimal = async () => {
  // const request = await fetch(url+api+animal);
  const res = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${api}&units=metric`
      );
  // const res = await fetchData(city);
  // const res = await fetch(url);
  try{
    const data = await res.json();
    console.log(data);
    return data;
  }catch(error){
    console.log("error", error);
  }

}

// Async POST
const postData = async ( url = '', data = {})=>{
  console.log(data);
    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
    });
  
    try {
      const newData = await response.json();
      console.log(newData);
      return newData;
    }catch(error) {
    console.log("error", error);
    }
  };

const updateUI = async () => {
  const request = await fetch('/all');
  try{
    const allData = await request.json();
    document.getElementById('animalName').innerHTML = allData[0].name;
    document.getElementById('animalFact').innerHTML = allData[0].timezone;
    document.getElementById('animalFav').innerHTML = allData[0].fav;

  }catch(error){
    console.log("error", error);
  }
}
