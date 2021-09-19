// DESTRUCTURE ARRAY -------------
const point = [10, 25, -34];

//Looong
const x = point[0];
const y = point[1];
const z = point[2];

// short: comma = ignore (y=25)
const [x, , z] = point; 
console.log(x, z);


// DESTRUCTURE OBJECT ------------
const gemstone = {
  type: 'quartz',
  color: 'rose',
  carat: 21.29
};

//Looong
const type = gemstone.type;
const color = gemstone.color;
const carat = gemstone.carat;

// short
const {type, color, carat} = gemstone
console.log(type, color, carat);


// Object literal -------------
let type = 'quartz';
let color = 'rose';
let carat = 21.29;

//looong
const gemstone = {
  type: type,
  color: color,
  carat: carat,
  calculateWorth: function() {
  // will calculate worth of gemstone based on type, color, and carat
  }
};

//short if properties name = variables name
const gemstone = {type, color, carat, calculateWorth() { }};
console.log(gemstone);
// Prints: Object {type: "quartz", color: "rose", carat: 21.29}