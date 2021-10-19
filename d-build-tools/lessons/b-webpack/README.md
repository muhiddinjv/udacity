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

# Notes on Webpack
`WEBPACK` is a static module bundler for modern JS apps. It takes all the assets, styles, images, scripts and `“bundles”` or combines them into fewer files that are much easier to manage. For example, multiple .js files become one .js file - that’s because the two files were combined into one large .js file.

## Features
- components - entry point, output, loaders, plugins and modes
  - 2 modes - development `(src)` input & production `(dist)` output

### Entry point
This is a starting place for webpack to begin to build its dependency tree. Webpack takes the contents of the `index.js` file, creates a `dist` (distribution = production) output folder with a compressed (minified) `main.js` file inside and puts the contents of `index.js` into the `main.js` file.
```
module.exports = {
    entry: './src/client/index.js'
}
```

### Output
The output of `webpack` is the `dist` (output) folder which sits next to the `src` (source = development) input folder. It is where webpack drops or “outputs” the neat bundles of assets it creates from the individual files we point it to.
- Write your code in the files in the `src` folder b/c its output goes into the `dist` folder
- Do NOT update the `dist` folder b/c you will lose it when the `src` folder is updated

### Loader
The problem is the `index.js` file in the `src` folder has no connection to the files in the `js` folder. This is where Babel-loader can help you b/c it does 2 things well:
- it connects index.js to multiple js files thru `import {functionName} from './src/file.js'`
- it converts `ES6` code into good old `Vanilla JS` which is support by every browser in the world.
```
module: {
    rules: [{
        test: '/\.js$/',
        exclude: /node_modules/,
        loader: "babel-loader"
        }
    ]
}
```
Remember! You cannot `import` something without using `export {functionName}` in the file you want to import it from!