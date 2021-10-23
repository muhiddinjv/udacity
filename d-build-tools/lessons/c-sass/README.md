# Webpack Express With Sass Example App

The goal of this repo is be an example of a basic but functional app built on Express and Webpack.

If you want to follow along, start from branch 0-initial-setup. Each branch in this project is a step along the path to creating a fully functional webpack setup. In each branch, there will be a documentation file that lists out the steps taken in that branch (each step is also roughly a git commit if you look at the history) which you can use as a checklist when setting up your own projects. 

## What we will cover

We will cover:

- Transpiling Sass to CSS using Webpack
- Fixing Javascript event errors
- Building a better production config for Webpack
- Adding Service Workers to our app using Webpack

## Get Up and Running

Fork this repo, then clone the branch of your choice from your forked repo down to your computer:

```
git clone -- git@github.com:[your-user-name]/webpack-express.git --
```

`cd` into your new folder and run:
- ```npm install```
- ```npm run build-dev``` to start the webpack dev server
- ```npm run build-prod``` to generate a dist folder for prod
- ```npm start``` to run the Express server on port 8081

# Sass Lesson Notes

## Basics
When a developer writes a .scss file, there is a problem. Browsers don’t know what Sass is (CSS extension language || preprocessor), they don’t run Sass, they run CSS. Sass transpiles to CSS - or in more common english - Sass can be directly translated to CSS. Anything you write in Sass can be written in 100% pure CSS, they are equivalent to each other, but the Sass syntax is going to be much shorter and easier to write than the CSS.

Popular Benefits of Sass
- Terser, shorter syntax than css (like sass nesting) 
- Extra syntax options (like the sass ampersand = &) 
- More flexibility (sass variables, mixins, and includes)

We strongly recommend you to give it some time to read through the preprocessing, variables, nesting, modules, inheritance, and operators, from [this link](https://sass-lang.com/guide).

1. Nesting
2. Variables
3. Ampersand

## (nav>ul>li) Nesting
    nav {
        ul {
            margin: 0;
            padding: 0;
            list-style: none;
        }

        li { display: inline-block; }

        a {
            display: block;
            padding: 6px 12px;
            text-decoration: none;
        }
    }

## ($fontstack) Variable
Another great sass feature is actually one that’s available in vanilla css as well, but the intentional use of variables in stylesheets, especially when [theming](https://css-tricks.com/css-custom-properties-theming/), can make for far more flexible and understandable styles.

    $font-stack: Helvetica, sans-serif;
    $primary-color: #333;

    body {
        font: 100% $font-stack;
        color: $primary-color;
    }

In CSS becomes:

    body {
        font: 100% Helvetica, sans-serif;
        color: #333;
    }

Perhaps that doesn’t look impressive, but what it means most certainly is. Imagine, you’ve built a website with hard coded values for font all throughout. The client comes to two days before launch, after the last pass of QA, and tells you that everything looks good but they want to change the font (as happens from time to time). You might cringe, because it will take you an hour to go through every single reference to font in the whole app, replace it with the new one and change sizes proportionally. Or, you might sigh a sigh of relief because you used a sass variable, and now all of those 170 references to font are all using the same single variable, you change that one value in your code, and can go to bed early that night instead of staying up and working.

css properties that are most valuable as css variables:
- line height & padding in paragraphs & sections
- fonts, icons, transitions, warning colors
- primary & secondary theme colors
```
$theme-secondary: #000000;
$font-main: fantasy;
$theme-spacing: 25px;
```

Which sass concept we covered would you use most to style all states of a tooltip on our site? ampersand!

## (&:hover) Ampersand
    button.cta{
        border-radius:3px;
        background:teal;
        color:white;

        &:hover{
            background:aqua;
        }

        &:visited{
            background:fuschia;
        }
    }

## ['css','sass'] Chaining Loaders
Loaders become much more powerful when chained together:
```
{
    test: /\.scss$/,
    use: [ 'style-loader', 'css-loader', 'sass-loader' ]
}
```
Tricky Part is chained loaders run in order from "right to left". So, in the code example above, our code goes thru "sass > css > style" loaders before it goes into bundle.css in the "dist" folder.


# Final Touches
IIFE = Immediately Invoked Function Expression AKA a Self-Executing Anonymous Function runs as soon as it is defined.

    (function () {
        statements  
    })();

## Benefits
### Avoid polluting the global scope 
Because our application could include many functions and global variables from different source files, it's important to limit the number of global variables. If we have some initiation code that we don't need to use again, we could use the IIFE pattern. As we will not reuse the code again, using IIFE in this case is better than using a function declaration or a function expression.


    (function () {
        // some initiation code
        let firstVariable;
        let secondVariable;
    })();
    // firstVariable and secondVariable will be discarded after the function is executed.

### The Module pattern
We would also use IIFE to create private and public variables and methods. 

### Benefits in Short
- they keep variables out of global scope
- they run right after being defined, so you don't have to name them
- when you use them, you don't have to worry about your vars overlapping with vars 3rd party code