// setTimeout() with Delay of 0 - An interesting aspect to setTimeout() is that we can pass it a delay of 0 milliseconds.

setTimeout(function sayHi() {
  console.log('Howdy');
}, 0);  // ← 0 milliseconds!

// You might think that since it has a delay of 0 milliseconds, that the sayHi function would run immediately. However, it still goes through the JavaScript Event Loop. So the function is handed off to the browser where the browser starts a timer for 0 milliseconds. Since the timer ends immediately, the sayHi function will move to the Queue, and then to the Call Stack once the Call Stack has finished executing any currently-running tasks.

// So why is this helpful? Well, this technique can help us to convert potentially long-running code to one that's broken up to allow for the browser to handle user interactions!