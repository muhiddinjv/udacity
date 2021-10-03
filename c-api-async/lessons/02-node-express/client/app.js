const postData = async ( url = '', data = {})=>{
  console.log(data);
    const response = await fetch(url, {
    method: 'POST', // GET, POST, PUT, DELETE, etc
    credentials: 'same-origin',// include "same-origin", omit
    headers: {
        'Content-Type': 'application/json',
    },
   // Body data type must match "Content-Type" header        
    body: JSON.stringify(data), 
  });

    try {
      const newData = await response.json();
      console.log(newData);
      return newData;
    }catch(error) {
      //appropriately handle the error
    console.log("error", error);
    }
}

postData('/addMovie', {movie: ' the matrix', score:5});
postData('/addMovie', {movie: ' avatar', score:4});