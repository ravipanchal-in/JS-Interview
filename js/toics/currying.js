//* with bind method

let multiply = function (x, y) {
  console.log(x * y);
};

let multiplyBy_2 = multiply.bind(this, 2);
multiplyBy_2(5);

let multiplyBy_5 = multiply.bind(this, 2);
multiplyBy_5(7);
