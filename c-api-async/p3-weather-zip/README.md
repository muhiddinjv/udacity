# Weather-Journal App Project

## Overview
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 

## Features

### CSS
- No media query has been used to make the page responsive
- Custom vertical scrollbar has been added for better UX
- Entry rows have been reversed to display last entry at the top 
- Background image is responsive in all screen sizes

### JavaScript
- App uses openweathermap API to fetch data from the website
- Request & response is handled thru server written in express.js
- Temperature numbers are rounded down for better UI
- Entry list is built dynamically in JS with data from user and API
- Cors & body-parser middlewares have been used to manipulate data
- Four different error handlers on button click have been implemented
  - add default message to dynamic entry list if textarea is empty
  - display message if app is offline and try to reconnect for 10s
  - display message if city input is empty on button click
  - display message if city name is invalid
   

## Extras
If interested, `tests.js` could have been used as a template for writing and running some basic tests.
