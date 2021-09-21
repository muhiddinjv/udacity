// setTimeout() with Delay of 0 - An interesting aspect to setTimeout() is that we can pass it a delay of 0 milliseconds.

setTimeout(function sayHi() {
  console.log('Howdy');
}, 0);  // ← 0 milliseconds!

// You might think that since it has a delay of 0 milliseconds, that the sayHi function would run immediately. However, it still goes through the JavaScript Event Loop. So the function is handed off to the browser where the browser starts a timer for 0 milliseconds. Since the timer ends immediately, the sayHi function will move to the Queue, and then to the Call Stack once the Call Stack has finished executing any currently-running tasks.

// So why is this helpful? Well, this technique can help us to convert potentially long-running code to one that's broken up to allow for the browser to handle user interactions!
let count = 1

function generateParagraphs() {
    const fragment = document.createDocumentFragment();

    for (let i = 1; i <= 500; i++) {
        const newElement = document.createElement('p');
        newElement.textContent = 'This is paragraph number ' + count;
        count = count + 1;

        fragment.appendChild(newElement);
    }

    document.body.appendChild(fragment);

    // if (count < 20000) {
    //     setTimeout(generateParagraphs, 0);
    // }
}
generateParagraphs();
// This code starts off by setting a count variable to 1. This will keep track of the number of paragraphs that have been added. The generateParagraphs() function will add 500 paragraphs to the page each time it's invoked. The interesting thing is that there's a setTimeout() call at the end of the generateParagraphs() function. If there are less than twenty thousand elements, then the setTimeout() will be used to call the generateParagraphs() function.

// If you try running this code on a page, you can still interact with the page while the code is running. It doesn't lock up or freeze the page. And it doesn't lock up or freeze because of the setTimeout() calls.
