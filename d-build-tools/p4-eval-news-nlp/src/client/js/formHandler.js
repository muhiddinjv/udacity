const API_KEY = 'ec0af99cc85e00dff7b20c2fca28a66b';
const ANALYSIS_API = 'https://api.meaningcloud.com/sentiment-2.1';

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value //https://davidwalsh.name/impostor-syndrome

    // TESTING --------------------------------
    console.log("api: " + API_KEY);
    const formdata = new FormData();
    formdata.append("key", API_KEY);
    formdata.append("txt", formText);
    formdata.append("lang", "en");  // 2-letter code, like en es fr ...

    const requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
    };

    const response = fetch(ANALYSIS_API, requestOptions)
    .then(response => ({
        body: response.json()
    }))
    .then(({ body }) => console.log(body))
    .catch(error => console.log('error', error));
    // TESTING ----------------------------------------


    // Client.checkForName(formText)

    // console.log("::: Form Submitted :::")
    // fetch('http://localhost:8081/test')
    // .then(res => {
    //     return res.json()
    // })
    // .then(function(data) {
    //     document.getElementById('results').innerHTML = data.message
    // })
}

export { handleSubmit }
