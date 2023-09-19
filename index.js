const myPromise = new Promise((resolve, reject) => {
  resolve("Promise resolved!!");
});

async function getData() {
  return myPromise;
}
//* asynch function always returns promise, if we return any string or any other from it it wraps that value with promise and returns.

const promiseData = getData();

promiseData.then((res) => console.log(res));
