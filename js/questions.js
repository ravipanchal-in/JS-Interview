//! 01:  write code that will remove all numbers and special character from sentence, word or paragraph

const strzzz = "df4jr@pt1_nd4 Gs@*3%kd9^";

console.log(strzzz.replace(/[^a-zA-Z ]/g, "")); // dfjrptnd Gskd

//* another way : The idea is simple if a symbol is equal in uppercase and lowercase it is a special character. The only exception is made for whitespace.

function removeSpecials(strzzz) {
  var lower = strzzz.toLowerCase();
  var upper = strzzz.toUpperCase();

  var res = "";
  for (var i = 0; i < lower.length; ++i) {
    if (lower[i] != upper[i] || lower[i].trim() === "") res += strzzz[i];
  }
  return res;
}

console.log(removeSpecials(strzzz)); // dfjrptnd Gskd

///////////////////////////////////////////////////

//! 02:  sum of Array element

const numsArray = [1, 2, 3, 4];

function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log(findSum(numsArray)); // 10

//* using reduce

const sumz = numsArray.reduce((sum, curr) => {
  sum = sum + curr;
  return sum;
}, 0);

console.log(sumz); // 10

///////////////////////////////////////////////////

//!  max element in Array

const arr = [1, 2, 3, 4];

function findMAx(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findMAx(arr)); // 4

//* using reduce

const maxz = arr.reduce((max, curr) => {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);

console.log(maxz); // 4

///////////////////////////////////////////////////

//! Find the user whoes age is greater then 30

const users = [
  { userName: "Krishna", age: 32 },
  { userName: "Ram", age: 28 },
  { userName: "Ravi", age: 47 },
];

const output1 = users
  .filter((item) => {
    if (item.age > 30) {
      return item.userName;
    }
  })
  .map((item) => {
    return item.userName;
  });

console.log(output1); // ['Krishna', 'Ravi']

//* using reduce
const output2 = users.reduce((acc, curr) => {
  if (curr.age > 30) {
    acc.push(curr.userName);
  }
  return acc;
}, []);

console.log(output2); // ['Krishna', 'Ravi']

///////////////////////////////////////////////////

//! desired output : {12: 3, 15: 2, 18: 1}

const numbersArr = [15, 15, 18, 12, 12, 12];

const Objt = {};

numbersArr.forEach((item) => {
  if (item in Objt) {
    Objt[item]++;
  } else {
    Objt[item] = 1;
  }
});

console.log(Objt);

//* using reduce

const output3 = numbersArr.reduce((acc, curr) => {
  if (acc[curr]) {
    acc[curr] = ++acc[curr];
  } else {
    acc[curr] = 1;
  }
  return acc;
}, {});

console.log(output3); // {12: 3, 15: 2, 18: 1}

///////////////////////////////////////////////////

//! get all employees whose name start with alphabetical "a" letter and should also contain "sh" letter in between of name or "sh" can come in the end of name

const usersList = [
  { name: "sandip", salary: 15000 },
  { name: "akash", salary: 16000 },
  { name: "avinash", salary: 18000 },
];

const passedUsers = usersList
  .filter((item) => {
    if (item.name.startsWith("a") && item.name.includes("sh")) {
      return item.name;
    }
  })
  .map((item) => {
    return item.name;
  });

console.log(passedUsers);

///////////////////////////////////////////////////

//!  write a generic function that can convert any multidimensional array into single dimension array. expected result: [1,2, true, 4,8, "sdsj", 5,0, {a: 5}]

const multiDimensionalArray = [1, 2, true, [4, 8, "sdsj", [5, 0, { a: 5 }]]];

const singleDimansionalArray = multiDimensionalArray.flat(2);

console.log(singleDimansionalArray); // [1, 2, true, 4, 8, 'sdsj', 5, 0, {a: 5}]

//* another way

function flatten(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    let currentElement = array[i];
    if (Array.isArray(currentElement)) {
      let flatteredArray = flatten(currentElement);
      result.push(...flatteredArray);
    } else {
      result.push(currentElement);
    }
  }
  return result;
}

flatten(multiDimensionalArray);

///////////////////////////////////////////////////

//! The variable that contains the unique values

const string = "Geeksforgeeks";

function findUnique(str) {
  let unique = "";

  for (let i = 0; i < str.length; i++) {
    // Checking if the unique contains the character
    if (unique.includes(str[i]) === false) {
      // If the character not present in unique
      // Concatenate the character with unique
      unique += str[i];
    }
  }
  return unique;
}

console.log(findUnique(string));

// or

function unique_char(str1) {
  var str = str1;
  var uniql = "";
  for (var x = 0; x < str.length; x++) {
    if (uniql.indexOf(str.charAt(x)) == -1) {
      uniql += str[x];
    }
  }
  return uniql;
}
console.log(unique_char("aaabbbcc"));

// or

var str = "aaabbbccc";
var nn = Array.prototype.map
  .call(str, (obj, i) => {
    if (str.indexOf(obj, i + 1) == -1) {
      return obj;
    }
  })
  .join("");

console.log(nn);

//////////////////////////////////////////////////

//! for in and for of loop

const arr4 = [1, 2, 3, 4, 5];

for (const iterator of arr4) {
  console.log(iterator); // 1 2 3 4 5
}

const obj = { name: "Ram", age: 28 };

for (const key in obj) {
  console.log(key); // name age
  console.log(obj[key]); // Ram 28
}
////////////////////////////////////////////////////////////////

//! How To find unique elements in array

const arrNumbers = [1, 2, 8, 2, 9, 8];

//* method 1st

const unique1 = [...new Set(arrNumbers)];

console.log(unique1);

////////////////////////////////////////////////////////////////

//* method 2nd

const unique2 = arrNumbers.filter((item, index, arr) => {
  return arr.indexOf(item) === index;
});

console.log(unique2);

////////////////////////////////////////////////////////////////

//! How To find duplicate elements in array

const arrNumbers2 = [1, 2, 8, 2, 9, 8];

const duplicates = arrNumbers2.filter((item, index, arr) => {
  return arr.indexOf(item) !== index;
});

console.log(duplicates);

//*  duplicates elements in an Array with their occurence

const hashMap = {};

arrNumbers2.forEach((item) => {
  if (item in hashMap) {
    hashMap[item]++;
  } else {
    hashMap[item] = 1;
  }
});

console.log(hashMap);

////////////////////////////////////////////////////////////////

//! replace space with underscore

const stringz = "Techical Round Interview";

function spacetoUnderscore(str) {
  splitedStr = str.split("");

  return splitedStr
    .map((character) => {
      if (character == " ") {
        return "_" + character.slice(1);
      } else {
        return character;
      }
    })
    .join("");
}

console.log(spacetoUnderscore(stringz));

////////////////////////////////////////////////////////////////

//! camel case to snake case

function toSnakeCase(str) {
  splitedStr = str.split("");

  return splitedStr
    .map((character) => {
      if (character == character.toUpperCase()) {
        return "_" + character.toLowerCase();
      } else {
        return character;
      }
    })
    .join("");
}

console.log(toSnakeCase("javaScript"));

//! second largest element in the array

const testArr = [5, 1, 4, 3, 8];

//* method 1st
const secondLargest1 = testArr.sort((a, b) => b - a)[1];

console.log(secondLargest1);

//* method 2nd

let largest = -1;
let secondLargest = -1;

for (let i = 0; i < testArr.length; i++) {
  if (testArr[i] > largest) {
    secondLargest = largest;
    largest = testArr[i];
  } else if (testArr[i] > secondLargest) {
    secondLargest = testArr[i];
  }
}

console.log("largest : ", largest, "secondLargest : ", secondLargest); // 8  5

//////////////////////////////////////////////////////////

//! Write a program return resolve if value is less than 5 using Promise

function fun(a) {
  let myPromise = new Promise((myResolve, myReject) => {
    let x = 0;
    // The producing code (this may take some time)
    if (a < 7) {
      myResolve(`number is given ${a}`);
    } else {
      myReject("Error");
    }
  });
  myPromise.then((result) => {
    console.log(result);
  });
}
fun(5);

//////////////////////////////////////////////////////////

//! Write a program to multiply two number without using multiply Sign in Javascript

function multiplay(a, b) {
  let answer = a;
  for (let i = 0; i < b - 1; i++) {
    answer += a;
  }
  return answer;
}
console.log(multiplay(5, 3));

//////////////////////////////////////////////////////////
