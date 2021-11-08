# Evaluate a News Article with NLP

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
