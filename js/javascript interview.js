 
let obj = {
  "infoDetails_1": {
    "personalDetails1": {
      "name": "jony",
      "class": "1"
    },
    "personalDetails2": {
      "name": "jane",
      "class": "4"
    }
  },
  "infoDetails_2": {
    "personalDetails3": {
      "name": "Justin",
      "class": "5"
    },
    "personalDetails4": {
      "name": "James",
      "class": "6"
    }
  }
}


Object.keys(obj)
  .forEach(k =>
    Object.keys(obj[k])
      .forEach(j =>
        console.log(obj[k][j].name)
      )
  )
 
const firstLevelKeys = Object.keys(obj);
firstLevelKeys.forEach(fkey => {
  const secondLevelKeys = Object.keys(obj[fkey]);
  secondLevelKeys.forEach(skey => {
    const objt = obj[fkey][skey];
    console.log(objt.name)
  })
})

or

const fstLvlKeys = Object.keys(obj);
fstLvlKeys.forEach(k1 => {
  const scndLvlKey = Object.keys(obj[k1])
  scndLvlKey.forEach(k2 => {
    obj[k1][k2]
    console.log(obj[k1][k2].name)
  })
})
 

// ****************************************** //














































// ----------------------------------------------------
 

function toSnakeCase(str) {

  splitedStr = str.split('');

  return (splitedStr.map((character) => {
    if (character == character.toUpperCase()) {
      return '_' + character.toLowerCase()
    } else {
      return character
    }
  }).join('')
  )
}


console.log(toSnakeCase('javaScript'));




// ----------------------------------------------------




 


 
 
 
 
 


//print the element which has came secondmost time in array

let arrNew = ['aaa', 'bbb', 'ccc', 'bbb', 'aaa', 'aaa'];

const secondMost = arrNew.reduce(function (allStr, name) {
  if (name in allStr) {
    allStr[name]++;
  } else {
    allStr[name] = 1;
  }
  return allStr;
}, {});

const secondMost1 = Object.values(secondMost).sort();
let reslt = "";
for (let name in secondMost) {
  if (secondMost[name] === secondMost1[secondMost1.length - 2]) {
    reslt = name;
  }
}
console.log(reslt);









// find unique elements in the array

const data = ['spray', 'limit', 'elite', 'elite', 'exuberant', 'destruction', 'present'];


if (data.length > 0) {
  var result = [];

  data.forEach(function (elem) {
    if (result.indexOf(elem) === -1) {
      result.push(elem);
    }
  });

  //        return result;
}
console.log(result);







// print the values which has come more than once in the array

let a = [2, 1, 4, 3, 5, 4, 3, 2, 5, 5, 3];
function count_duplicate(a) {
  let res = [];
  let a_sort = a.sort();
  for (let i = 0; i < a_sort.length; i++) {
    if (a_sort[i + 1] == a_sort[i]) {
      res.push(a_sort[i]);
    }
  }
  return [... new Set(res)];
}
let ans = count_duplicate(a);
console.log(ans);









//number of vowels---

const vowel = ['a', 'e', 'i', 'o', 'u'];
function countVowel(str) {
  let c = 0;
  for (let letter of str.toLowerCase()) {
    if (vowel.includes(letter)) {
      c++;
    }
  }
  return c;
}
let str = prompt('Enter string');

console.log(countVowel(str));






//factorial of num

function fact(n) {
  let a = 1;
  if (n == 0 || n == 1) { return a; }
  else {
    for (let i = n; i >= 1; i--) {
      a = a * i;
    }
    return a;
  }

}
let n = parseInt(prompt("enter number"));
a = fact(n);
console.log(a);









//fibonnaci
const nu = parseInt(prompt("Enter Number"));
let n1 = 0, n2 = 1, next;

for (let i = 1; i <= nu; i++) {
  console.log(n1);
  next = n1 + n2;
  n1 = n2;
  n2 = next;

}

----------------------------------------
  let x = ["a", "b", "c"];
let y = [1, 2, 3];
let i = 0;
let obj = {};

for (i = 0; i < x.length; i++) {

  let tmp = { [x[i]]: y[i] };
  obj = { ...obj, ...tmp };

}
console.log(obj);







// ----------- palindrome-- -

function pal(str) {
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return 'Not Pal'
    }
  } return 'Pal'
}
let val = prompt("");

const value = pal(val);
console.log(value);







// Insert element at a position in array without using splice method

const arr = [1, 4, 5, 6];
function InsertAtIndex(arr, a, pos) {
  for (let i = arr.length; i > 0; i--) {
    if (i > pos) {
      arr[i] = arr[i - 1];
    }
    else if (i == pos) {
      arr[i] = a;
    }
    else {
      break;
    }
  }
  return arr;
}

const res = InsertAtIndex(arr, 2, 1);
console.log(res);





1) arr1 = [
  { Id: 1, employer: "infosys" },
  { Id: 2, employer: "accenture" },
  { Id: 3, employer: "saxo" }
];
arr2 = [
  { empId: 1, employer: "infosys" },
  { empId: 2, employer: "saxo" },
  { empId: 3, employer: "accenture" }
];

//summary = {infosys:1, accenture:2, saxo:2}
-----------------
const arrnew = [...arr1, ...arr2];
var jsonObject = arrnew.map(item => {
  return [JSON.stringify(item), item];
});
var mapparrry = new Map(jsonObject);
var finalArr = [...mapparrry.values()];

const res = finalArr.reduce(function (acc, current) {
  if (current.employer in acc) {
    acc[current.employer]++;
  } else {
    acc[current.employer] = 1;
  }
  return acc;
}, {})
console.log(res);

2) float concept in CSS

3) Call, Apply and Bind examples
------
const obj = {
  x: 10,
  getVal: function () { return this.x; }
}

console.log(obj.getVal.call(obj));
console.log(obj.getVal.apply(obj));
console.log(obj.getVal.bind(obj)());
------

  4) prototype Inheritance in JS
------
  function Car(name, color, model) {
    this.name = name;
    this.color = color;
    this.model = model;
  }

Car.prototype.engine = 'engg';

function BMWCar() {
  Car.call(this);
}
const BMWobj = new BMWCar();
console.log(BMWobj);









// ---------------------------------------



// Write a program to find element occurence in
// array

const arr = [1, 1, 2, 3, 1, 4]
const count = {};
for (const element of arr) {
  if (count[element]) {
    count[element] += 1;
  } else {
    count[element] = 1;
  }
}
console.log(count);




// Write a program to remove duplicate item
// from array


const arr = [1, 2, 3, 4, 1, 2];
const b = [];
for (let i = 0; i < arr.length; i++) {

  if (b.indexOf(arr[i]) == -1) {
    b.push(arr[i])
  }
}
console.log("removed array value"
  , b)
const arr = [1, 2, 3, 4, 1, 2];
const b = [];
arr.filter((dup) => {
  if (b.indexOf(arr[dup]) == -1) {
    b.push(arr[dup])
  }
})
console.log("removed array value"
  , b)





  // What will be output of that code
  Const firstname = fun();
Let name = ‘vivek’
Function fun(){
  Return`my is ${name} malviya`
}
console.log(firstname);





// Write a program for following output
// ○ console.log("output with normal
// function"
// ,mul(2)(4)(6))


function mul(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}
console.log("output with normal function", mul(2)(4)(6));



//   Write a program for following output
// using arrow function

const call = (a) => {
  return (b) => {
    return (c) => {
      return a * b * c;
    };
  };
};
console.log("output with arrow function", mul(2)(4)(6));


//   Write a program return resolve if value is
// less than 5 using Promise


function fun(a) {
  let myPromise = new Promise((myResolve,
    myReject) => {
    let x = 0;
    // The producing code (this may take some time)
    if (a < 7) {
      myResolve(`number is given ${a}`);
    } else {
      myReject("Error");
    }
  });
  myPromise.then((result) => {
    console.log(result)
  })
}
fun(5);




// Write a program to multiply two number without
// using multiply Sign in Javascript

function multiplay(a, b) {
  let answer = a;
  for (let i = 0; i < b - 1; i++) {
    answer += a;
  }
  return answer;
}
console.log(multiplay(5, 3));






// Write a program sorting in javascript

const arr = [3, 2, 5, 4, 1, 0]
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] < arr[j]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log("Elements of array sorted in
  ascending order: ");
  for (let i = 0; i < arr.length; i++) {
  console.log("Elements of array sorted
    in ascending order"
    , arr[i]);
}




// What will be output ?
var num = 4;
function outer() {
  var num = 2;
  function inner() {
    num++;
    var num = 3;
    console.log("num", num);
  }
  inner();
}
outer();
function sayHi() {
  return (() => 0)();
}





// What's the console output of?
const a = {};
const b = { key: 'b' };
const c = { key: 'c' };
a[b] = 123;
a[c] = 456;
console.log(a[c]);




// Write a program to make polyfill for map
// method in javascript

Array.prototype.mymap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i]));
  }
  return temp;
};
const arr = [2, 3, 4, 5];
const result = arr.mymap((num) => {
  return num * 5;
});
console.log("result", result);





// Write a program to make polyfill for filter
// method in javascript

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(cb(this[i]));
  }
  return temp;
};
const arr = [2, 3, 4, 5];
console.log("arr", arr);

const data = arr.filter((num) => {
  return num > 2;
});
console.log("resultnumber", data);





// ● Write a program to make polyfill for
// reduce method in javascript

Array.prototype.myReducer = function (cb, initialValue) {
  var accumulator = initialValue;
  for (i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(this[i], i, this) : this[i];
  }
  return accumulator;
};
const arr = [2, 3, 4, 5];

const sumOfArray = arr.myReducer((accu, curr, index, arr) => {
  return (accu += curr);
}, 0);
console.log("polyfil", sumOfArray);































