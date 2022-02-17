function multiple(a, b) {
    return a * b;
}
const result = multiple(3, 5);
console.log(result)// output : 15

const raining = true;
if (raining) {
    console.log("Don't forget your umbrella!")
}
// 
const cold = false;
if (cold) {
    console.log("Make sure you pick out a scarf!")
} else {
    console.log("Short sleeves are fine.")
}
// 
const temperature = 12;

if (temperature < 0) {
    coneole.log("Make sure you pick out a scarf!")
} else if (temperature < 15) {
    console.log("Short sleeves wor't cut it!")
} else {
    console.log("Short sleeves are fine.")
}

console.log("Now you're ready to go outside!")
// 
const isCitizen = true;
const age = 26;
if (isCitizen && age > 18) {
    console.log("You are elegible to vote.")
}

if (temperature < -40 || temperature > 40) {
    console.log("Maybe going outside isn't such a great idea...")
}

if (!raining) {
    console.log("Leave your umbrella at home!")
}

// 
// Challenge_whichSchool
const whichSchool = function (age) {
    if (age > 18 && age < 100) {
        return "LHL"
    } else if (age >= 13 && age <= 18) {
        return "Secondary School"
    } else if (age < 13) {
        return "Elementary School"
    }
}
console.log(whichSchool(60))
//output : LHL
// 
const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
    console.log(chorus);
    repeat ++;
}
console.log("Until the sun comes up!")
// //
while (repeat < 10) {
    if (repeat === 5) {
        console.log("change key")
    }
    console.log(chorus);
    repeat ++;
}
console.log("Until the sun comes up!")
//  while if => for
const chorus = "Let's dance!";
for (let repeat = 0; repeat < 10; repeat ++) {
    console.log(chorus);
}
console.log("Until the sun comes up!")
// 
// Challenge_Loopy
for (let i = 100; i <= 200; i ++) {
    if (i % 12 === 0) {//i % 3 === 0 && i % 4 === 0
        console.log("LoopyLHL")
    } else if (i % 3 === 0) {
        console.log("LHL")
    } else if (i % 4 === 0) {
        console.log('Loopy')
    } else {
        console.log(i)
        }
} 
//
//  Looping over Arrays
// Traditional for loops
const amounts = [61.00, 52.5, 100, 5.1];
var total = 0;
for (let i = 0; i < amounts.length; i ++) {
    total + amounts[i];
}
console.log(`Order total is : $${total}`)
//
//  for..of loops
const amounts = [61.00, 52.5, 100, 5.1];
var total = 0;//    no const
for (let amount of amounts) {
    total += amount;
}
console.log(`Order total is : ${total}`);
//
//  Calling
const sayHello = function () {
    console.log("Hello, world")
}
sayHello();//   output : Hello, world

const sayHi = function(name) {
    console.log(`Hi, ${name}`)
}
sayHi('Mike')//   output : Hi, Mike
//
//  return & console.log
const console_return = function (name) {
    return `Hi, ${name}`;
}// console_return ruturn value `Hi, ${name}
const greeting = console_return('Mike')//   greeting value = console_return(name)
console.log(greeting)// output : Hi, Mike
//
//  isEven, isOdd
const isEven = function (num) {
    return num % 2 === 0;
}// isEven(num) = output : true || false
const isOdd = function (num) {
    return num % 2 === 1;
}// isOdd(num) = output : true || false
//
//  Odd Checker
const isOdd = function(num) {
    if (num % 2 === 0) {
        return `${num} is EVEN`
    } else if (num % 2 === 1) {
        return `${num} is ODD`
    }
}
isOdd(41); //  output : 41 is ODD
isOdd(42); //  output : 42 is EVEN
//
// Voting
// In order for a station to be deemed appropriate, it must have 
// a capacity of at least 20, and be a school or community centre.

const chooseStations = function (stations) {
const goodPlace = [];
for (const station of stations) {
  const numberOfPeople = station[1];
  if (numberOfPeople >= 20) {
    const place = station[2];
    if (place === 'school' || place === 'community centre') {
      // push the name of the result in a new array
      goodPlace.push(station[0]);//to keep track the result
    }
    }
  }
  return goodPlace;//to get the result of this function
}
const stations = [
    ['Big Bear Donair', 10, 'restaurant'],
    ['Bright Lights Elementary', 50, 'school'],
    ['Moose Mountain Community Centre', 45, 'community centre']
  ];

chooseStations(stations);
//
//  Perfect Shot
//  function named finalPosition, with moves
//  init position x = 0, y = 0
//  start function => move x, y positions
//  pointing last point and print the result
const finalPosition = function (moves) {//moves = input array
    var position = [0, 0];

    for (let move of moves) {
        if (move === 'E') {// if E, position x + 1
            position[0] ++; 
        } else if (move === 'W') {// if W, position x - 1
            position[0] --;
        } else if (move === 'N') {// if N, position y + 1
            position[1] ++;
        } else if (move === 'S') {// if S, position y - 1
            position[1] --;
        }
    }
    return position // 
}
const moves = ['W','W','E','E','N','N','N','N','N','W','S'];
finalPosition(moves)//  output : [-1, 4]

finalPosition = (moves) => {
    var position = [0, 0];

    for (let move of moves) {
        if (move === 'E') {// if E, position x + 1
            position[0] ++; 
        } else if (move === 'W') {// if W, position x - 1
            position[0] --;
        } else if (move === 'N') {// if N, position y + 1
            position[1] ++;
        } else if (move === 'S') {// if S, position y - 1
            position[1] --;
        }
    }
    return position
}
const moves = ['W','W','E','E','N','N','N','N','N','W','S'];
finalPosition(moves)//  output : [-1, 4]

//
//  Challenge Age calculator
const ageCalculator = (name, yearOfBirth, currentYear) => {
    let age = currentYear - yearOfBirth;
    return `${name} is ${age} years old.`;
}
console.log(ageCalculator('Mike', 1900, 2022))
// output : Mike is 122 years old
//
// Challenge how many hundreds
const howManyHundreds = (num) => {//    make function
 
    // divide number by 100
    let divide = num / 100;
    // remove remainder = integer
    let integer = Math.floor(divide)
    //return integer
    
    console.log(`${num} has ${integer} of hundreds`)
}
howManyHundreds(3471832947)// output : 3471832947 has 34718329 of hundreds
//
//Chanllenge Function Area Calculator

function calculateRectangleArea(length, width) {
  let rectangleArea = length * width;
  if (rectangleArea < 0) {
    return 'undefined';
  } else {
    return rectangleArea;
  }
}

function calculateTriangleArea(base, height) {
  let triangleArea = base * height / 2;
  if (triangleArea < 0) {
    return 'undefined';
  } else {
    return triangleArea;
  }
}

function calculateCircleArea(radius) {
  let circleArea = Math.PI * Math.pow(radius, 2);
  if (radius < 0) {
    return undefined;
  }  else {
    return circleArea;
  }
}
//
//Iterating over an Array with for
const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];
for (i = 0; i < packingList.length; i ++) {
  console.log(packingList[i]);
}
//
//  ingredients
const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i])
  i ++
}
// Write a for loop that prints out the contents of ingredients:
for (var i = 0; i < ingredients.length; i ++) {
  console.log(ingredients[i])
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
var i = ingredients.length;
while (i > 0) {
  console.log(ingredients[i])
  i --
}
for (var i = ingredients.length - 1; i >= 0; i --) {
  console.log(ingredients[i])
}
//
// Challenge Range
// function with 3 integer parameter(start, end, step)
// the function should return an array of numbers from start to end counting by step
const range = (start, end, step) => {
  var arr = [];
  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
    return arr;
  } else {
    for (i = start; i <= end; i += step) {
      arr.push(i);
    }
  }
  return arr;
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(3, 5, 0.1))
console.log(range(5, 1, 2))
//
// Challenge Lastindex
const lastIndexOf = (arr, value) => {//function named lastIndexOf with arr and value
  if (value) {
    return arr.lastIndexOf(value);
  } else {
    return -1;
  }
  
}
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1))
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2))
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3))
console.log(lastIndexOf([ 5, 5, 5 ], 5))
console.log(lastIndexOf([], 3))

