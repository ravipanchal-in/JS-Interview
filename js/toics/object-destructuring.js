"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//////////////////////////////////////////

//! object destructuring

let { name, openingHours, categories } = restaurant;

console.log(name, openingHours, categories);

//////////////////////////////////////////

//! can specify/assign new name in object destructuring

let {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

//////////////////////////////////////////

//! can put default value

let { menu = [], starterMenu: starters = [] } = restaurant;

//* menu is not available in restaurant Obj, that is why it will take menu's default value which is [].

//////////////////////////////////////////

//! Mutating variables

let a = 111,
  b = 999;

const obj = { a: 23, b: 7, c: 19 };

({ a, b } = obj);

console.log(a, b); // 23 7

//////////////////////////////////////////

//! Nested Objects

const {
  fri: { open, close },
} = openingHours;

console.log(open, close); // 11 23

//////////////////////////////////////////

//!  Specify name

const {
  fri: { open: openTime, close: closeTime },
} = openingHours;

console.log(openTime, closeTime, lehsun); // 11 23
