# Webpack Express Example App

The goal of this repo is be an example of a basic but functional app built on Express and Webpack.

If you are just starting this process, start from branch 0-initial-setup. Otherwise, switch to the appropriate numbered branches of this repo as needed. The branches are:
- [0-initial-setup](https://github.com/udacity/fend-webpack-content/tree/0-initial-setup)
- [1-install-webpack](https://github.com/udacity/fend-webpack-content/tree/1-install-webpack)
- [2-add-webpack-entry](https://github.com/udacity/fend-webpack-content/tree/2-add-webpack-entry)
- [3-webpack-output-and-loaders](https://github.com/udacity/fend-webpack-content/tree/3-webpack-output-and-loaders)
- [4-webpack-plugins](https://github.com/udacity/fend-webpack-content/tree/4-webpack-plugins)
- [5-webpack-mode](https://github.com/udacity/fend-webpack-content/tree/5-webpack-mode)
- [6-webpack-for-convenience](https://github.com/udacity/fend-webpack-content/tree/6-webpack-for-convenience)

Each branch in this project is a step along the path to creating a fully functional webpack setup. In each branch, there will be a documentation file that lists out the steps taken in that branch (each step is also roughly a git commit if you look at the history) which you can use as a checklist when setting up your own projects. 

## What we will cover

We will cover:

- Webpack entry point
- Webpack output and dist folder
- Webpack Loaders
- Webpack Plugins
- Webpack Mode
- Tools for convenient Webpack development

## Get Up and Running

Fork this repo, then clone the branch of your choice from your forked repo down to your computer:

```
git clone -- git@github.com:[your-user-name]/webpack-express.git --
```

`cd` into your new folder and run:
- ```npm install```
- ```npm start``` to start the app
- this app runs on localhost:8080, but you can of course edit that in server.js

**Note:** Webpack needs to be at version 4 in order for this repo to work as expected. Webpack is automatically included at the correct version in the `package.json` provided here.

# My Notes on Webpack
`WEBPACK` is a static module bundler for modern JS apps. It takes all the assets, styles, images, scripts and `“bundles”` or combines them into fewer files that are much easier to manage. For example, multiple .js files become one .js file - that’s because the two files are combined into one large .js file.

## Components
- five major components - entry point, output, loaders, plugins and modes
  - 2 modes - development `(src)` input & production `(dist)` output

## Entry point
This is a starting place for webpack to begin to build its dependency tree. Webpack takes the contents of the `index.js` file, creates a `dist` (distribution = production) output folder with a compressed (minified) `main.js` file inside and puts the contents of `index.js` into the `main.js` file.
```
module.exports = {
    entry: './src/client/index.js'
}
```

## Output
The output of `webpack` is the `dist` (output) folder which sits next to the `src` (source = development) input folder. It is where webpack drops or “outputs” the neat bundles of assets it creates from the individual files we point it to.
- Write your code in the files in the `src` folder b/c its output goes into the `dist` folder
- Do NOT update the `dist` folder b/c you will lose it when the `src` folder is updated

## Loader
Out of the box, webpack only understands Vanilla JavaScript and JSON files. Loaders allow webpack to process other types of files and convert them into valid modules that can be used by your application. In our case, the problem is the `index.js` file in the `src` folder has no connection to the files in the `js` folder. This is where Babel (converter) can help you b/c it does the followings well:
- it connects index.js to multiple js files thru `import {functionName} from './src/file.js'`
- it converts `ES6` code into good old `Vanilla JS` which is support by every browser in the world.

Look below to learn how you can add loader to webpack.config.js file
```
module: {
    rules: [{
        test: "/.js$/", (look for files that end in .js)
        exclude: /node_modules/, (dont look in node_mod)
        loader: "babel-loader", (run babel on js files)
        }
    ]
}
```
Remember! You cannot `import` something without using `export {functionName}` in the file you want to import it from!
```
inside nameChecker & formHandler files in js folder:
    export { checkForName }
    export { handleSubmit }

inside index.js file in src folder:
    import { checkForName } from './js/nameChecker'
    import { handleSubmit } from './js/formHandler'
```

## Plugins
They do actions that isnt just turning one type of file into another like Babel. Plugins can do all sorts of things, from automatically adding asset references to an html file (HTML-webpack plugin) to allowing for hot module replacement - which is used in React’s Create React App to create an auto updating development server.
- HTML-webpack automatically adds reference to our dist folder so there is no need for `index.html > <script src="../../js/index.js">`

This plugin will create an html file and allow us to create dynamic references to our bundled files.

    PROBLEM: Cannot read property "tap" of undefined (webpack -v = plugin -v)
    SOLUTION: npm i html-webpack-plugin@4.4.0 --save-dev

## Mode
If you "npm run build" without setting "mode", you will get the following error:

    WARNING in configuration
    The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.    

No matter how awesome a development tool (e.g. we can’t run sass on a server) is, in the end our code will be judged by how well it runs on a server, and oftentimes what is best for the server is the opposite of what is convenient for developers. So how do we handle both of these environments? By utilizing build tools, we can make code that is convenient for our dev team, without sacrificing speed on the server.

One of the awesome features of webpack, is that it lets us apply configurations to our code based on the environment we are running. We can create a development environment (MODE in webpack) and run totally different loaders and plugins than we do for production mode.

- build tools allow devs to use the tools that are more convenient for them
- build tools simultaneously allow devs to optimize code for the server

TypeError: Class constructor ServeCommand cannot be invoked without 'new'
- solution: npm i -D webpack

### Production
- CSS Minifiers - Minified files are actually harder to debug and the time difference is not as important in development. Absolutely necessary for prod though
- JS Uglifier - a minifying tool, which you don’t need in development, just production!

### Development
- Linters - help find syntax errors and set rules that keep us honest about clean code and syntax consistency
- Source maps - are expensive to make, making them less ideal for production, but great for finding our errors while working with bundled assets in development.