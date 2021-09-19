// SPREAD operator = Unboxing ---------------------------
/*
The spread operator, written with three consecutive dots ( ... ), is new in ES6 and gives you the ability to expand, or spread, iterable objects into multiple elements.

 Instructions: Use the spread operator to combine the `fruits` and `vegetables` arrays into the `produce` array.
 */
const books = [
  "Don Quixote",
  "The Hobbit",
  "Alice in Wonderland",
  "Tale of Two Cities",
];
console.log(...books);

const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];

// old n looong
const produce1 = fruits.concat(vegetables);

// es6 n short
const produce2 = [...fruits, ...vegetables];
// console.log(produce2);


// REST parameter = Packing ---------------------------
// The rest parameter, also written with three consecutive dots ( ... ), allows you to represent an indefinite number of elements as an array. This can be helpful in a couple of different situations.

// You can think of the rest parameter like the opposite of the spread operator; if the spread operator is like unboxing all of the contents of a package, then the rest parameter is like taking all the contents and putting them back into the package.
const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;
// console.log(total, subtotal, tax, items);

// hard to understand = where did "arguments" come from?
function sum() {
  let total = 0;  
  for(const argument of arguments) {
    total += argument;
  }
  return total;
}

// easy with REST. ...nums = inf nums
function sum(...nums) {
  let total = 0;  
  for(const num of nums) {
    total += num;
  }
  return total;
}

// Directions: Use the rest parameter to create an average() function that calculates the average of an unlimited amount of numbers.

const average = (...nums) => {
  let total = 0;  
  for(const num of nums) {
    total += num;
  }
  if (nums == "") return 0;
  return total / nums.length;
}

// TIP: Make sure to test your code with different values. For example,

console.log(average(2, 6)) //should return 4
console.log(average(2, 3, 3, 5, 7, 10)); //should return 5
console.log(average(7, 1432, 12, 13, 100)); //should return 312.8
console.log(average()); //should return 0

