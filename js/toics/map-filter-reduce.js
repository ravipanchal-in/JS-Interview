const arr = [5, 1, 2, 3, 6];

const users = [
  { firstName: "Ram", lastName: "Ji", age: 18 },
  { firstName: "Krishna", lastName: "Ji", age: 35 },
  { firstName: "Ganesh", lastName: "Ji", age: 18 },
  { firstName: "Shankar", lastName: "Ji", age: 60 },
  { firstName: "Gurudev", lastName: "Ji", age: 18 },
];

//! map
const double = arr.map((item) => item * 2);
console.log("double", double);

const binary = arr.map((item) => item.toString(2));
console.log("binary", binary);

//! filter
const greaterThenX = arr.filter((item) => item > 2);
console.log("greaterThenX", greaterThenX);

//////////////////////////////////////////////////

const evenArr = arr.filter((item) => item % 2 == 0);
console.log("evenArr", evenArr);

//////////////////////////////////////////////////

const oddArr = arr.filter((item) => item % 2);
console.log("oddArr", oddArr);

//////////////////////////////////////////////////
// expected result => ['Ram', 'Ganesh', 'Gurudev']
const usersAboveAge30 = users
  .filter((item) => {
    return item.age < 30;
  })
  .map((item) => {
    return item.firstName;
  });

console.log("usersAboveAge30", usersAboveAge30);

//! reduce

function arrSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(arrSum(arr));

//* with Reduce
const arrSumWithReduce = arr.reduce((acc, curr) => {
  acc = acc + curr;
  return acc;
}, 0);

//////////////////////////////////////////////////

console.log("arrSumWithReduce", arrSumWithReduce);

function arrMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log("arrMax", arrMax(arr));

//* with Reduce
const arrMaxWithReduce = arr.reduce((acc, curr) => {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}, 0);

console.log("arrMaxWithReduce", arrMaxWithReduce);

//////////////////////////////////////////////////

// expected result => {18: 3, 35: 1, 60: 1}

const output = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log("output", output);

//////////////////////////////////////////////////

// expected result =>  ["Ram", "Ganesh", "Gurudev"];

const usersAboveAge30WithReduce = users.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);

console.log("usersAboveAge30WithReduce", usersAboveAge30WithReduce);

///////////////////////////////////////////////////

const q = 45;
console.log("aaaa", q);
