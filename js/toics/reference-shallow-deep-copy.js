//! reference copy  v/s  shallow copy  v/s  deep copy

let obj1 = {
  name: "Ravi",
  age: 26,
  address: {
    city: "Boda",
  },
  fun: function aaa() {
    console.log("Hi");
  },
};

////////////////////////////////////////////////////

// *** Reference copy *** //

let referenceCopy = obj1;

////////////////////////////////////////////////////

// *** shallow copy *** //

// (1st method)
let shallowCopy1 = Object.assign({}, obj1);

// (2nd method)
let shallowCopy2 = { ...obj1 };

////////////////////////////////////////////////////

// *** deep copy *** //

// (1st method)
let deepCopy1 = JSON.parse(JSON.stringify(obj1));

// (2nd method)
const createDeepCopy = (input) => {
  if (typeof input !== Object) {
    return input;
  }

  let copy = Array.isArray(input) ? [] : {};

  for (key in input) {
    const value = input[key];
    copy[key] = createDeepCopy(value);
  }
  return copy;
};

let deepCopy2 = createDeepCopy(obj1);

// (3rd method) using lodash library
let deepCopy3 = _.cloneDeep(obj1);
