//// creating INPUT field with dom manipulation ////
const root = document.getElementById("root");

const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Search here...");
input.setAttribute("onkeyup", "onkeyupHandler()");

root.appendChild(input);

//* debouncing

let counter = 0;
const getData = () => {
  console.log("Fetching data...", ++counter);
};

// const debounce = function (fn, delay) {
//   let timer;
//   return function () {
//     let context = this,
//       args = arguments;
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       getData.apply(context, arguments);
//     }, delay);
//   };
// };

const debounce = function (fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData();
    }, delay);
  };
};

const onkeyupHandler = debounce(getData, 300);
