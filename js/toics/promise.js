/*
 *Promise is an object that represents the eventual completion of an asynchronous operation.
 *Promises are immutable so it can't be altered as a result it helps to get rid off inversion of control that would be occurred in case callback and by chaining of promises we can get out of the callback hell.
 *In chaining of promises we should use return to get the promise result so that we don't miss anything from the chain.
 */

const USERS_API = "https://jsonplaceholder.typicode.com/posts";
const response = fetch(USERS_API);
console.log(response);
response.then((data) => console.log(data));

////////////////       Example     /////////////////////

const cart = ["shirt", "shoes", "pant"];

//! nested callback - callback hell - pyramid of doom - inversion of control -> growing horizontally

createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function (paymentInfo) {
    showOrderSummary(paymentInfo, function () {
      updateWalletBalance();
    });
  });
});

//* promise way with "promise chaining" -> growing vertically

const promise = createOrder(cart);

promise
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function () {
    return updateWalletBalance();
  });

// shortCode
promise
  .then((orderId) => proceedToPayment(orderId))
  .then(() => showOrderSummary(paymentInfo))
  .then(() => updateWalletBalance());
