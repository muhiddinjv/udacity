# Webpack Test App

## How to Use Webpack in "only" 30 steps :)
1. new file > src/index.js>console.log("hello world") 
2. npm init -y >>> creates package.json
3. npm i lodash (most depended js library)
4. public > index.html > script=index.js
5. index.js > import { camelCase } from 'lodash'
6. console.log(camelCase('hello world'))
7. see browser > devtools > SyntaxError
   - browser doesn't know where to find import
   - thats why we need module bundlers (webpack)
8. npm install --save-dev webpack webpack-cli
9. package.json > scripts > "build":"webpack"
10. terminal > npm run build >>> dist + main.js
11. index.html > change index.js to main.js
12. see browser > devtools > SyntaxError gone!
    - congrats! You bundled your first module!
- ----------------------config.js---------------------------
13. webpack.config.js to customize webpack behavior
14. config > const path = require('path'); module.exports = { entry: './src/index.js', }
15. module.exports > output: {filename: 'bundle.js'}, path: path.resolve(__dirname,'dist'),
16. npm run build >>> dist with bundle.js
17. src > style.scss > $text:orange; $bg:black; body {background:$bg; color:$text;};
18. index.js > import './style.scss'
19. npm run build >>> error - need loader = processes files that arent js
20. npm i --save-dev css-loader style-loader sass-loader
21. config > module: { rules: [ {test:'/\.scss$/'}, use: ['style-loader','css-loader','sass-loader'] ] }
22. npm run build >>> dist > main.js > background color
- ----------------------bundle analyzer---------------------------
23. npm i --save-dev webpack-bundle-analyzer
24. config > const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
25. config > module > plugins:[new BundleAnalyzerPlugin()]
26. npm run build >>> main.js node_modules lodash in browser
27. npm i --save-dev webpack-dev-server for auto reload on change
28. config > module > devServer: {contentBase: path.join(__dirname,'public'), port:9000}
29. package.json > scripts > "dev":"webpack server"
30. npm run dev >>> server on localhost:9000 to watch src & recompile when file saved