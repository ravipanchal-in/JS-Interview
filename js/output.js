/01/; ///////////////////////////////////////////////

let a = [],
  b = [];
console.log(a == b); // false
console.log(a === b); // false

//* Jab hum 2 array ko compare karte he to unki memory location ka comparison hota hai. and because dono array ki memory location different hai isliye output "false" hoga;

/02/; ///////////////////////////////////////////////

let c = [],
  d = c;

console.log(c == d); // true
console.log(c === d); // true

//* "c" and "d" dono ka memory location same hai because "c" ko ji "d" me assign kiya hai. isliye dono ka output "true" hoga.

/03/; /////////////////////////////////////////////////

let e = [20];
let f = [20];

console.log(e[0] == f[0]); // true
console.log(e[0] === f[0]); // true

//* "e" & "f" ke elements ka comparison ho rha hai, jo ki dono same hai isliye dono ka output true hoga.

/04/; /////////////////////////////////////////////////

let g = [1, 2, 3, 4];
let h = { name: "ravi" };

console.log(...g); // 1 2 3 4

//*

/05/; /////////////////////////////////////////////////

console.log(typeof NaN); // number

///////////////////////////////////////////////////

let i = 10 - -10;
console.log(i); //20

//* because "minus minus", plus ho jata hai.

/06/; /////////////////////////////////////////////////

const set = new Set([1, 2, 1, 3, 4]);

console.log(set); // {1,2,3,4}

//* It will return object of uinque elements/properties

/07/; /////////////////////////////////////////////////

let dltObj1 = { name: "Ravi" };

console.log(delete dltObj1.name); // true

//* object me se "name" property delete ho jaegi and wo true return krega.

/08/; /////////////////////////////////////////////////

let dltObj2 = { name: "Ravi" };

console.log(delete dltObj2); // false

//* we can't delete the Object, we can only delete properties.

/09/; /////////////////////////////////////////////////

let dltObj3 = { name: "Ravi" };
delete dltObj3.name;

console.log(dltObj3); // {}

//* property will get deleted, and an empty object will return.

/10/; /////////////////////////////////////////////////

const frnds1 = ["Ram", "Shyam", "Ganesh"];
const [x] = frnds1;

console.log(x); // Ram

//* because of "Array Destructuring" it will assign "Ram" to "x"

/11/; /////////////////////////////////////////////////

const frnds2 = ["Ram", "Shyam", "Ganesh"]; //? how to get the second element
const [, y] = frnds2;

console.log(y); // Shyam

//* by putting "Comma ," before "y" we can have the second value; because we are reserving space for the first element by passing nothing and seperating it with "comma ," .

/12/; /////////////////////////////////////////////////

const nameObj = { f_name: "Krishna", l_name: "Ji" }; //? how to get f_name without using "dot ." operator
const { f_name } = nameObj;

console.log(f_name); // Krishna

//* with using of "Object Destructuring" we can access the "fname" property.

/13/; /////////////////////////////////////////////////

let dtlData1 = { name: "Ravi", skill: "Developer" };
let dtlData2 = { brother: "Om", salary: 127000 }; //? how to merge "dtlData1" with "dtlData2"

let newDtlObj = { ...dtlData1, ...dtlData2 };

console.log(newDtlObj); //{name: 'Ravi', skill: 'Developer', brother: 'Om', salary: 127000}

/14/; /////////////////////////////////////////////////

let dtlData3 = { name: "Ravi", age: 28, skill: "Developer" };
let dtlData4 = { city: "Boda" };

let newDtlObject = { dtlData3, ...dtlData4 };

console.log(newDtlObject); //{dtlData3: {name: "Ravi", age: 28, skill: "Developer"},  city: 'Boda'}

/15/; /////////////////////////////////////////////////

const city = "Indore";

// console.log(city()); //"Uncaught TypeError": city is not a function

/16/; /////////////////////////////////////////////////

const output1 = false || {} || null;

console.log(output1); // {}

//* because "or operator" will find the first positive/true value and return. "empty Object {} is a true value"!

/17/; /////////////////////////////////////////////////

const output2 = false || null || "";

console.log(output2); //!  "" (empty_string)

//*  empty string "" is also a falsy value. par "OR" operator ko koi positive/true value nhi milti to ye last falsy value return kr deta hai.

/18/; /////////////////////////////////////////////////

const output3 = [] || 0 || true;

console.log(output3); // []

//* Because empty Array [] & empty Object {} are the true values!

/19/; /////////////////////////////////////////////////

console.log(Promise.resolve(5)); // Promise {<fulfilled>: 5}

/20/; /////////////////////////////////////////////////

console.log("🥳" === "🥳"); //true

//* because emojis/emoticons ka "Unicode" compare ho rha hai and wo same hai isliye it will return "true".

/21/; /////////////////////////////////////////////////

console.log(`${((x) => x)("Namste")} JavaScript`); // Namaste JavaScript

//* IIFE

/22/; /////////////////////////////////////////////////

//JSON.parse(); //? what this method will do?

//* Answer : parse JSON to a JavaScript value

/23/; /////////////////////////////////////////////////

let wifeName = "Surbhi";

function getName() {
  console.log(wifeName);
  let wifeName = "Patni";
}

// getName(); //output: Uncaught ReferenceError: Cannot access 'wifeName' before initialization at getName

//* Because "let" ka block scope hai and pehle humne usko call kiya then declare/initialize kiya isliye it will give an "ERROR".

/24/; /////////////////////////////////////////////////

//? Output should be 6

function sumValues(x, y, z) {
  return x + y + z;
}

console.log(sumValues(...[1, 2, 3])); // 6

//* because of destructuring.

/25/; /////////////////////////////////////////////////

const surname = "Panchal Vishwakarma";

console.log(!typeof surname === "object"); //false
console.log(!typeof surname === "string"); //false
console.log(!typeof surname === false); //true

//* because operator left to right execute hote hai so "!" se first value hi false ho jaegi and "false" ko kisi (except false) se bhi compare krne pr false hi return hoga.

/26/; /////////////////////////////////////////////////

const skill = "Developer";
const salary = 127600;

console.log(isNaN(skill)); //true
console.log(isNaN(salary)); //false

//* isNaN : number nahi hai

/27/; /////////////////////////////////////////////////

let person = { name: "Ravi" };
Object.seal(person); //? can we modify person Object

person.name = "ShreeRaviJi";
person.age = 28; //* it will not work!
console.log(person); // {name: 'ShreeRaviJi'}

//* we can only modify existing propery of a "Sealed Object", but can not add/delete a new property to it.

/28/; /////////////////////////////////////////////////

let output4 = "true"; //? convert output4 into a false value

console.log(!output4); // false
console.log(typeof !output4); // boolean

//* by putting "!" we can revert it's type to a boolean and value to false.

/29/; /////////////////////////////////////////////////

let namesArr = ["Ram", "Max", "Krishna"];
delete namesArr[1];

console.log(namesArr); // ['Ram', empty, 'Krishna']
console.log(namesArr.length); // 3

//* jab bhi array se koi element delete krte hai to "deleted index" pr "empty space" create kr dega. but array ki length same rahegi.

/30/; /////////////////////////////////////////////////

let output5 = 3 ** 3;

console.log(output5); //27

//* Double star "**" Will play a role of "power" so => 3 to the power 3 will give us 27. and "***" will give us an Error.

/31/; /////////////////////////////////////////////////

let j = 2;

setTimeout(() => {
  console.log(j); //100
}, 0);

j = 100;

//* the value of "j" will be 100. bacause setTimeOut "call stack" me sabse baad me execute hoga, and tab tak j ki value 2 se 100 ho chuki hogi.

/32/; /////////////////////////////////////////////////

let k = 5,
  K = 7;
console.log(k, K); // 5 7

//* because small k and Capital K will behave differently or they both can store different values.

/34/; /////////////////////////////////////////////////

let l = 2;
{
  let l = 3;
}

console.log(l); // 2

//* because let has block scope

/35/; /////////////////////////////////////////////////

console.log("like" === `like`); //true

/36/; /////////////////////////////////////////////////

let m = 1,
  n = 2;

console.log(--n === m); //true  1===1

/37/; /////////////////////////////////////////////////

let o = 1,
  p = 1,
  q = 2,
  r = 3,
  s = 4;
console.log((o === p) === --q); //false
console.log(r === --s); //true

//* because "o === p" will return "true" which is a "boolean", and if we compare "boolean" with "number": it will return "false"

/38/; /////////////////////////////////////////////////

//? how to find OS name with JavaScript

console.log(window.navigator.platform);

/39/; /////////////////////////////////////////////////

function output6() {
  console.log(t);
  console.log(u);

  var t = 7;
  let u = 5;
}

// output6(); // it will give us an Uncaught ReferenceError: Cannot access 'u' before initialization

/40/; /////////////////////////////////////////////////

for (var v = 0; v < 3; v++) {
  setTimeout(() => {
    console.log(v); // 5 5 5
  }, v * 1000);
}

//* for loop will execute continuously and because "var v" is global varibale so it's why value of "var v" will increase from 0 to 5 in the memory location and setTimeOut will execute at the end in "callStack" that is why the setTimeOut will print 5 5 5 5 5

/41/; /////////////////////////////////////////////////

for (let v = 0; v < 3; v++) {
  setTimeout(() => {
    console.log(v); // 0 1 2
  }, v * 1000);
}

/42/; /////////////////////////////////////////////////

console.log(+true); // 1
console.log(+false); // 0
console.log(+"true"); // NaN
console.log(typeof +"true"); // number
console.log(typeof +true); // number

//* kisi boolean value ke pehle "+ plus" sign lagane se wo value number me convert ho jaati hai.

/43/; /////////////////////////////////////////////////

console.log(!"Ravi"); //false
console.log(typeof "Ravi"); // string

/44/; /////////////////////////////////////////////////

let aa = { name: "xyz" };
let bb = aa;
bb.name = "abc";

console.log(aa.name); // abc

//* Because memory location same hai.

/45/; /////////////////////////////////////////////////

var cc;
// let cc = 10;
console.log(cc); // Uncaught SyntaxError: Identifier 'cc' has already been declared

/46/; /////////////////////////////////////////////////

function fruit() {
  console.log("Grapes");
}
fruit.name = "apple";

fruit(); // Grapes

/47/; /////////////////////////////////////////////////

function sum(a, b) {
  return a + b;
}

console.log(sum(1, "2")); // 12

/48/; /////////////////////////////////////////////////

let num = 0;

console.log(num++); // 0
console.log(++num); // 2
//* because first console me 0 print hone ke baad iski value increment ke baad 1 ho gai thi. and is console me print hone ke pehle fir se increment ho gya.
console.log(num); // 2

/49/; /////////////////////////////////////////////////

function getAge(...args) {
  console.log(typeof args); // object
}
getAge(21);

//* "args" will return an array but data type of array is "object".

/50/; /////////////////////////////////////////////////

function fun() {
  "use strict";
  ff = 21;
  console.log(ff); // Uncaught ReferenceError: ff is not defined
}
// fun();

//* in "strict mode", hoisting will not work.

/51/; /////////////////////////////////////////////////

const gg = eval("10*5+6");

console.log(gg); //56

/52/; /////////////////////////////////////////////////

const anObj = { 1: "a", 2: "b", 3: "c" };

console.log(anObj.hasOwnProperty("1")); // true
console.log(anObj.hasOwnProperty(1)); // true

//* Object key ka name numeric ho skta hai and key ko hum as numeric and string dono tarah se check kr skte hai.

/53/; /////////////////////////////////////////////////

for (let i = 0; i < 5; i++) {
  if (i === 3) continue;
  console.log(i); // 1 2 4
}

/54/; /////////////////////////////////////////////////

console.log(typeof typeof 1); // string

//* because "typeof 1" => 'number' return krega and typeof 'number' will be string.

/55/; /////////////////////////////////////////////////

const numbers = [1, 2, 3];
numbers[6] = 7;

console.log(numbers); //[1, 2, 3, empty × 3, 7]

/56/; /////////////////////////////////////////////////

const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 500, "One");
});

const secondPromise = new Promise((res, rej) => {
  setTimeout(res, 100, "Two");
});

Promise.race([firstPromise, secondPromise]).then((res) => console.log(res)); // two

/57/; /////////////////////////////////////////////////

console.log(typeof 3 + 4 + "5"); // number45

//* pehle "typeof 3" execute hoga jo "number" return krega then 45.

/58/; /////////////////////////////////////////////////

console.log(typeof (3 + 4 + +"5")); // number

// "5" ke pehle + lagane se wo number me convert ho jaega.

/59/; /////////////////////////////////////////////////
{
  () => {
    let hh = (ii = 10);
  };
}
console.log(typeof ii); // undefined

/60/; /////////////////////////////////////////////////

console.log(!true - true); // -1

//* because !true will give us '0' and that's why => "0 - 1 = -1"

/61/; /////////////////////////////////////////////////

console.log(true + +"10"); // 11

//*  string ke aage + lagane se wo string number me convert ho jaati hai

/62/; /////////////////////////////////////////////////

let dd = 3;
let ee = new Number(3);

console.log(dd == ee); // true
console.log(dd === ee); // false

//* because console.log(typeof ee); // object

/63/; /////////////////////////////////////////////////

console.log([..."array"]); // ['a', 'r', 'r', 'a', 'y']

/64/; /////////////////////////////////////////////////

var xx = 10;
function abc() {
  console.log(xx);
  var xx = 20;
}
abc(); // undefined

//* because function me x ko pehle call kiya hai baad me initialize kiya hai. isliye undefined aaega. xx ko local scope me find krega isliye global xx ki value access nhi krega.

/65/; /////////////////////////////////////////////////

var mainString = "Hello";
var subString = "Hell";
console.log(mainString.includes(subString)); // true

/66/; /////////////////////////////////////////////////

//? make first letter uppercase or make word Capitalize

var string = "capital";

console.log(string.charAt(0).toUpperCase() + string.slice(1)); // Capital

/67/; /////////////////////////////////////////////////

var xyz = "Good Morning";
console.log(xyz.startsWith("Good")); // true
console.log(xyz.startsWith("Morning")); // false

/68/; /////////////////////////////////////////////////

function foo2() {
  return { msg: "hello2" };
}
console.log(JSON.stringify(foo2())); // {"msg":"hello2"}

/69/; /////////////////////////////////////////////////

let yy = 10;
console.log((yy += "5")); // 105

/70/; /////////////////////////////////////////////////

const arr1 = [1, 2, 3, 4, 5];
const arr2 = arr1;
const arr3 = [...arr1];
arr2.push(9);

console.log(arr1); // [1, 2, 3, 4, 5, 9]
console.log(arr2); // [1, 2, 3, 4, 5, 9]
console.log(arr3); // [1, 2, 3, 4, 5]

/71/; /////////////////////////////////////////////////

console.log("hello" && "World"); // World
console.log("hello" || "World"); // hello

/72/; /////////////////////////////////////////////////

//? combine two arrays

const cars = ["🚗", "🚙"];
const trucks = ["🚚", "🚛"];

// Method 1: Concat
const combined1 = [].concat(cars, trucks);

// Method 2: Spread
const combined2 = [...cars, ...trucks];

/73/; /////////////////////////////////////////////////

//? unique name in the array

var names = ["Mike", "Matt", "Nancy", "Jenny", "Nancy"];

var newArr = [...new Set(names)];

console.log(newArr); // ['Mike', 'Matt', 'Nancy', 'Jenny']

///////////////////////////////////////////////////
/74/;

function parent() {
  var a = 3;
  var b = 2;
  function child() {
    alert(a);
  }
  child();
}
parent(); // alert 3
///////////////////////////////////////////////////
/75/;
function parent() {
  var q = 2;
  function child() {
    alert(a);
  }
  child();
  let a = 3;
}
parent(); //  error : Uncaught ReferenceError: Cannot access 'a' before initialization
///////////////////////////////////////////////////
/76/;

let xxx = 0.1 + 0.2;
let yyy = 0.3;
console.log(x == y);
///////////////////////////////////////////////////
/77/;
let xyz = 1 > 2 > 3;
console.log(x);
///////////////////////////////////////////////////
/78/;
let R = [null, 0, "0", false, "a"];
let S = R.filter((value) => value);

console.log(S); // ["0", "a"];
//* false value will filter
///////////////////////////////////////////////////
/79/;

(function () {
  var a = (b = 3);
})();

console.log("a defined? " + (typeof a !== "undefined")); //false
console.log("b defined? " + (typeof b !== "undefined")); //true
///////////////////////////////////////////////////
/80/;
var myObject = {
  foo: "bar",
  func: function () {
    var self = this;
    console.log("outer func:  this.foo = " + this.foo); // bar
    console.log("outer func:  self.foo = " + self.foo); // bar
    (function () {
      console.log("inner func:  this.foo = " + this.foo); // undefined
      console.log("inner func:  self.foo = " + self.foo); // bar
    })();
  },
};
myObject.func();
///////////////////////////////////////////////////
/81/;

var arrX = "john".split("");
var arrY = arrX.reverse();
var arrZ = "jones".split("");
arrY.push(arrZ);
console.log("array 1: length=" + arrX.length + " last=" + arrX.slice(-1));
console.log("array 2: length=" + arrY.length + " last=" + arrY.slice(-1));

///////////////////////////////////////////////////
/82/;

(function (x) {
  return (function (y) {
    console.log(x);
  })(2);
})(1); // 1
///////////////////////////////////////////////////
/82/;
var bbbb = 1;
function outer() {
  var bbbb = 2;
  function inner() {
    bbbb++;
    var bbbb = 3;
    console.log(bbbb);
  }
  inner();
}
outer();
///////////////////////////////////////////////////
/82/;

foo();
let foo = function foo() {
  return 12;
};

// Uncaught ReferenceError: Cannot access 'foo' before initialization

///////////////////////////////////////////////////
/83/;
const firstname = fun();
let naam = "Ravi";
function fun() {
  return `my is ${naam} Panchal`;
}
console.log(firstname);
///////////////////////////////////////////////////

///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
