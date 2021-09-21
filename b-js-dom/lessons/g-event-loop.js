// The Call Stack - The JavaScript engine keeps a call stack = a running functions list. When a function is invoked, it is added to the list. When all of the code inside a function has been run, then the function is removed from the call stack. The cool part about a call stack is that a function doesn't have to complete before another function is added to the call stack.

// CALL STACK - QUESTION 1 OF 2
// How many items (frames) will be on the stack when the code reaches the "stop here" comment? 0, 1, 2, 3, or 4?

function quiz () {
  var y = 'yes';
  questions();
  fun();
}
function questions () {
  var y = 'no';
  return 7;
}
function are () {
  return 3;
}
function fun () {
  are();
  // stop here
}

quiz()

// CALL STACK - QUESTION 2 OF 2
// Put the function names in the correct order they would appear when the // stop here comment is reached. Remember to put the oldest/initial at the bottom of the stack. Assume there is no "<main>"/default frame.
function dolphins () {
  // stop here
  return 'llamas';
}
function rhinos () {
  var y = 'no';
  return penguins();
}
function penguins () {
  return camels();
}
function camels () {
  return dolphins();
}

rhinos()
// penguins, camles, dolphins

// Top of the stack >>
// 2nd item in the stack >>
// 3rd item in the stack >>
// bottom of the stack >> rhinos



// The JavaScript Event Loop ------------------
console.log('howdy'); // 1
document.addEventListener('click', // 2
  function numbers() {
    console.log('123');
});
console.log('ice cream is tasty'); // 3
// The code will run in this order:
// 'howdy' will be logged to the console
// 'ice cream is tasty' will be logged to the console
// The string '123' will only be logged if there's a click. If the page is never clicked, then this code might not ever run! But where is it? Where did the numbers function holding the console.log('123'); code go? In the Browser (Web API). Thats where!

// JS concurrency model uses two rules: If some JavaScript is running, let it run until it is finished ("run-to-completion"). If no JavaScript is running, run any pending event handlers (clicks).

// Since most JavaScript is run in response to an event, this is known as an event loop: Pick up the next event, run its handler, and repeat.

// THE EVENT LOOP has 3 parts:
// 1) the Call Stack
// 2) Web APIs/the browser
// 3) an Event Queue

// Not all of the code that we write is 100% JavaScript code. Some of the code is interacting with the Web APIs (also known as "browser APIs"). There are many more examples, but both .addEventListener() and setTimeout() are Web APIs.

console.log('howdy'); // 1
document.addEventListener('click', // 2
  function numbers() {
    console.log('123');
});
console.log('ice cream is tasty'); // 3

// First, the browser runs this block of code to completion -- that is, steps 1, 2, and 3. Step 2 passes an event handler (numbers) to the browser for future use: the browser will hold this function until there's a click event but click doesn't work if some js is running (callstack isn't empty).

// IMPORTANT: The key things to remember here are 1) current synchronous code runs to completion, and 2) events are processed when the browser isn't busy. Asynchronous code (such as loading an image) runs outside of this loop and sends an event when it is done.


// QUIZ QUESTION - What is the order that the iceCream function goes through if the <footer> is clicked?

const pageFooter = document.querySelector('#page-footer');
pageFooter.addEventListener('click', function iceCream () {
    const footerDetails = document.querySelector('#details');
    footerDetails.textContent = 'Everyone should eat ice cream!';
});

// the Callstack, the Queue, browser?
// First >> 
// Second >>
// Third >> 