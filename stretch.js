// Wrap the code you've written in a function called loopyLighthouse
// (range, multiples, words) that you call with 3 parameters.

// range should be an array of 2 numbers representing the start and end values
//  for the loop.
// multiples should be an array of 2 numbers representing the multiples you want
//  to replace with words.
// words should be an array of 2 strings representing the words that will 
// replace the multiples.

const loopyLighthouse = (range, multiples, words) => {
    
    for (i = range[0]; i <= range[1]; i ++) {
        if (i % (multiples[0] * multiples[1]) === 0) {
            console.log(words[0] + words[1])
        } else if (i % multiples[0] === 0) {
            console.log(words[0])
        } else if (i % multiples[1] === 0) {
            console.log(words[1])
        } else {
            console.log(i)
        }
    }
}
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

/*
function loopyLighthouse(range, multiples, words) {//  function
    for (var i = range[0]; i <= range[1]; i ++) {//  for loops with i and range
      var output = "";//    variable output
      output += multiplerCheck(i, multiples[0], words[0]);//    
      output += multiplerCheck(i, multiples[1], words[1]);
      console.log(output === "" ? i : output);
    }
  }
  // multipled check
  function multiplerCheck(value, multiplier, word) {
    if (value % multiplier === 0) {
      return word;
    } else {
      return "";
    }
  }
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
*/
//
// Challenge Concatenate arrays
// call concat(arr1, arr2) -> output : arr1 + arr2 in an array
// function with arr1 and arr2
// two arrs in a new arr
const concat = (arr1, arr2) => {
    var newArr = arr1.concat(arr2);
    //  merge Array
    newArr.sort();
    return newArr;
}
console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]));
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]));
console.log(concat([], [ 9, 7, 2 ]));
console.log(concat([ 5, 10 ], []));//output : [10, 5] because number 1 is first
//
//  objects and functions_javascripting program
//
//  Challenge smartGarbage
const smartGarbage = (trash, bins) => {
  if (trash === 'waste') {
    bins.waste ++;
  } else if (trash === 'recycling') {
    bins.recycling ++;
  } else if (trash === 'compost') {
    bins.compost ++;
  }
}
smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });

const smartGarbage = (trash, bins) => {
//
//  challenge carPassing
// function carPassing with cars, speed
  const carPassing = (cars, speed) => {
    // passed list with Date.now() and speed
    let passed = {
      time : Date.now(),
      speed : speed
    }
    // push the result from passed
    cars.push(passed);
    // list update with return
    return cars
  }
}
const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]
// const speed = 38 //  fixed speed
carPassing(cars, 38) 

//
// Challenge JudgeVegetables
//  function judgeVegetable with veggies and metric


const judgeVegetable = (vegetables, metric) => {
  return(vegetables.reduce((bestVege , vege) => vege[metric] > bestVege[metric] ? vege : bestVege).submitter )
}  


const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

judgeVegetable(vegetables, metric)