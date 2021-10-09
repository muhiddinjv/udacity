// let baseURL = 'http://api.animalinfo.org/data/?animal=';
// let apiKey = '&appid=9f15e45060';

// document.getElementById('generate').addEventListener('click', performAction);

// function performAction(e){
//   const newAnimal =  document.getElementById('animal').value;
//   const favFact =  document.getElementById('favorite').value;

//   getAnimal('/animalData',)
//   // New Syntax!
//   .then(function(data){
//     // Add data
//     console.log(data);
//     postData('/addAnimal', {animal:data.animal, fact: data.fact, fav:favFact} );
//   })
//   .then(
//     updateUI()
//   )
// }

// const updateUI = async () => {
//   const request = await fetch('/all');
//   try{
//     const allData = await request.json();
//     document.getElementById('animalName').innerHTML = allData[0].animal;
//     document.getElementById('animalFact').innerHTML = allData[0].facts;
//     document.getElementById('animalFav').innerHTML = allData[0].fav;

//   }catch(error){
//     console.log("error", error);
//   }
// }


// Async POST
const postData = async ( url = '', data = {})=>{

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
    return newData;
  }catch(error) {
  console.log("error", error);
  }
};

// Async GET
const retrieveData = async (url='') =>{ 
const request = await fetch(url);
try {
// Transform into JSON
const allData = await request.json()
}
catch(error) {
  console.log("error", error);
  // appropriately handle the error
}
};


// In this exercise, you will bring it all together by chaining async requests.
// 1) In the file getPost.js, write a function that chains together the two async functions you have previously written, so that you make a POST request to the /animal route, and then retrieve the data with a GET request to the /all path.

// You should pass in a data object of your favorite animal as the second argument for the POST request.

// Call your function as the last line of code in the file named getPost.js
// TODO-Chain your async functions to post an animal then GET the resulting data
function postGet(){
  postData('/animal', {fav:'lion'})
    .then(function(data){
      retrieveData('/all')
    })
}

// TODO-Call the chained function
postGet()
