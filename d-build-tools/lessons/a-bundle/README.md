# Webpack Test App

## How to Use Webpack
1. new file > src/index.js
2. index.js > console.log("hello world") 
3. npm init -y >>> creates package.json
4. npm i lodash (most depended js library)
5. public > index.html > script=index.js
6. index.js > import { camelCase } from 'lodash'
7. console.log(camelCase('hello world'))
8. see browser > devtools > SyntaxError
   - browser doesn't know where to find import
   - thats why we need module bundlers (webpack)
9. npm install --save-dev webpack webpack-cli
10. package.json > scripts > build:webpack
11. terminal > npm run build >>> dist + main.js
12. index.html > change index.js to main.js
13. see browser > devtools > SyntaxError gone!
    - congrats! You bundled your first module!
14. webpack.config.js to customize webpack behavior
15. config > module.exports = { entry: './src/index.js', }