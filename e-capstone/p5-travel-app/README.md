# Trip Planner

## Project Description
This web app allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites by using Semantic Analysis <a href="https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/doc">API from Meaning Cloud</a>. Users can get pertinent information about the article, like whether the content is subjective (opinion) or objective (fact-based).

## Project Features
1) if input value is invalid, a helpful error message is displayed
2) if its valid, an API call is done and the result is displayed in UI
3) it works offline with the help of service-worker set up in webpack
4) it uses the "dotenv" environment variable to hide private API keys
5) it has unit-testing done in "Jest" to test the behavior of functions
6) it has separate development and production configurations for Webpack
7) it has the developer environment set up with the Webpack dev server
8) it minifies javascript and style files in the production environment
9) it uses AI-driven Semantic Text Analysis SDKs from [Meaning Cloud](https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/doc) 

## Technologies and Languages Used
- Backend-Server:
  - ExpressJS(NodeJS)
  - Async/Await
- UI (Front-end):
  - Vanilla Javascript
  - Sass
  - HTML
- Tools:
  - Webpack
  - Git version Control System
  - Github
  - Github Pages, Live <a href="https://mukhiddinaka.web.app">Here</a>
- Testing:
  - Jest

## Run project
### Run it in Development Mode
1) download dependencies >> `npm install`
2) fix dependency errors >> `npm audit fix`
3) install postcss >> `npm i -D postcss`
4) run development mode >> `npm run dev`
5) start back-end server >> `npm start`

### Run it in Production Mode
1) generate the dist files >> `npm run prod`
2) start server at port 1000 >> `npm start`

## Configs Files
- Webpack
  - Dev Configs: `webpack.config.dev.js`
    - not optimized build
    - source map
  - Production `webpack.config.prod.js`
    - optimized build
    - auto generated HTML from template
- Dependency
  - `package.json`

## Testing
Testing is done with Jest. To run test, use the command `npm test`. To see a full coverage of all the tests, add { "test": "jest --coverage", } to package.json and run `npm test` to run test and generate a new folder called "coverage". Then, run "Open with Live Server" on index.html in "coverage > Icov-report" in VScode.


# Project Requirements

## Minimum project must:

- [ ] input a desired trip location & (departure) date from the user

- [ ] output weather & image of the location using info obtained from external APIs
  
- [ ] Have a countdown to see how soon the trip is & store the data

- [ ] Be set up with Webpack, Express, Node, and Sass, & Service Workers

- [ ] Have separate dev and prod configurations for Webpack

- [ ] Have the developer environment set up with the Webpack dev server

- [ ] Make request to 3 external APIs: weatherbit, pixabay, 

- [ ] Minify js and Sass styles in the production environment

- [ ] Response from the API must be added to the view for a user to see 

- [x] Be able to show content offline

---

## Extended project must:

- [ ] Add end date and display length of trip

- [ ] Pull in an image for the country from Pixabay API when the entered location brings up no results (good for obscure localities)

- [ ] Integrate the REST Countries API to pull in data for the country being visited 

- [ ] Use Local Storage to save the data so that when they close, then revisit the page, their info is still there

- [ ] Instead of just pulling a single day forecast, pull the forecast for multiple days

- [ ] Incorporate icons into forecast

---

- [ ] Allow user to Print their trip and/or export to PDF

- [ ] Allow user to add multiple destinations on the same trip

  - [ ] Pull in weather for additional locations

- [ ] Allow the user to remove the trip

- [ ] Allow the user to add hotel and/or flight data

- [ ] Allow the user to add a todo list and/or packing list for their trip.

- [ ] Allow the user to add additional trips (this may take some heavy reworking, but is worth the challenge)

  - [ ] Automatically sort additional trips by countdown

  - [ ] Move expired trips to bottom/have their style change so it’s clear it’s expired

