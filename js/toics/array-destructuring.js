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

let [first, second] = restaurant.categories;

console.log(first, second); // Italian Pizzeria
///////////////////////////////////////////

//! swap array element with array destructuring

[first, second] = [second, first];

console.log(first, second); // Pizzeria Italian

///////////////////////////////////////////

//! nested array destructuring

const arr = [2, 4, [3, 5]];

const [two, , [three, five]] = arr;

console.log(two, three, five); // 2 3 5

///////////////////////////////////////////

//! default values in array destructuring

const [p = 1, q = 2, r = 3] = [8, 9];

console.log(p, q, r); // 8 9 3

///////////////////////////////////////////
