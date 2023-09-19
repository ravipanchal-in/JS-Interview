const airline = "TAP air Portugal";
const plane = "A380";

console.log(plane[0]); // A
console.log(plane[2]); // 8
console.log("A380"[3]); // 0

//////////////////////////////////////////////

console.log(airline.length); // 16
console.log("airline".length); // 7

//////////////////////////////////////////////

console.log(airline.indexOf("r")); // 6
console.log(airline.lastIndexOf("r")); // 10
console.log(airline.lastIndexOf("Portugal")); // 8
console.log(airline.lastIndexOf("portugal")); // -1 //* portugal is not exist because of case sensitivity.

//////////////////////////////////////////////

//! slice with signle parameter
console.log(airline.slice(4)); // air Portugal
//*  specified index ke baad ki poori string return kr dega

//////////////////////////////////////////////

//! slice with two parameter

console.log(airline.slice(4, 7)); // air

//* starts with specified index in 1st parameter and trim till specified another index and returns the piece of string.

//////////////////////////////////////////////

//! slice with signle "- negative" parameter

console.log(airline.slice(-1)); // l

//////////////////////////////////////////////

//! slice with two parameter (positive , negative)

console.log(airline.slice(2, -4)); // P air Port

//* positive parameter string ko start se specified number of character tak trim krta hai
//* negative parameter end se specified number of character trim krta hai

//////////////////////////////////////////////

//! get first word from string

const string = "Jay Shree Krishna";

console.log(string.slice(0, airline.indexOf(" "))); // Jay

//////////////////////////////////////////////

//! get last word from string

console.log(string.slice(string.lastIndexOf(" ") + 1)); //

//*  string.lastIndexOf(" ") se hume last space ka index (9) mil jaega or us index me "+1" add krne pr last word ke first character ka index (10) aa jaega. iske baad slice method first 10 charater ko trim kr dega or last word "Krishna" return ho jaega.

//////////////////////////////////////////////

//!  ***** slice : real life Example *****

function checkSeatPosition(seatNumber) {
  const seatEndNumber = seatNumber.slice(-1);

  if (seatEndNumber === "B" || seatEndNumber === "E") {
    console.log("you got the middle seat 😒");
  } else if (seatEndNumber === "A" || seatEndNumber === "F") {
    console.log("you got window seat 🥳");
  } else {
    console.log("you got aisle seat 🙂");
  }
}

checkSeatPosition("5F");
checkSeatPosition("11B");
checkSeatPosition("25D");

//////////////////////////////////////////////////////

//! expected string : "Lehsun"

const text = "lEhSuN";

//* method 1st
const capitalizeTxt1 =
  text.charAt(0).toUpperCase() + text.toLocaleLowerCase().slice(1);

//* method 2nd
const capitalizeTxt2 =
  text[0].toUpperCase() + text.toLocaleLowerCase().slice(1);

console.log(capitalizeTxt1, capitalizeTxt2); // Lehsun Lehsun

//////////////////////////////////////////////////////

//! expected email : "admin@ravipanchal.in"

const givenEmail = " Admin@RaviPanchal.In \n";

console.log(givenEmail.toLowerCase().trim()); // admin@ravipanchal.in

//////////////////////////////////////////////////////

//! replacing : replace method doesn't mutate the original string

const priceInGreatBritain = "288,97€";
const priceInUnitedState = priceInGreatBritain
  .replace("€", "$")
  .replace(",", ".");

console.log(priceInUnitedState); // 288.97$

//////////////////////////////////////////////////////

//! replacing multiple occurence of "door" with "gate"

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";

//* method 1st
console.log(announcement.replaceAll("door", "gate"));

//* method 2nd
console.log(announcement.replaceAll(/door/g, "gate"));

// output : All passengers come to boarding gate 23. Boarding gate 23!

//////////////////////////////////////////////////////

//! Booleans

const aeroplane = "Airbus A320neo";

console.log(aeroplane.includes("A320")); // true
console.log(aeroplane.includes("Boing")); // false
console.log(aeroplane.startsWith("Air")); // true
console.log(aeroplane.endsWith("A320")); // true

//////////////////////////////////////////////////////

//! split and join

console.log("a+very+nice+string".split("+")); // ['a','very','nice','string']
console.log("Ravi Panchal".split(" ")); // ['Ravi','Panchal']

const [firstName, lastname] = "Ravi Panchal".split(" ");

const newName = ["Mr.", firstName, lastname.toUpperCase()].join(" ");

console.log(newName); // Mr. Ravi PANCHAL

//! padStart()
//! padEnd()
//! repeat()
