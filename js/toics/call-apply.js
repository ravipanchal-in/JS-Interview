let dtls1 = { name: "asdf", age: 21 };

printDtl = function (home, state) {
  console.log(
    `name: ${this.name} and age: ${this.age} home: ${home} state: ${state} `
  );
};

let dtls2 = { name: "qwerty", age: 25 };

printDtl.call(dtls1, "boda", "MP");
printDtl.apply(dtls2, ["boda", "MP"]);
