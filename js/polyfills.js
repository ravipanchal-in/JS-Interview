//********* map pollyfill *********

Array.prototype.ourMap = function (logic) {
  const output = [];
  for (i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};

//********* filter pollyfill *********
