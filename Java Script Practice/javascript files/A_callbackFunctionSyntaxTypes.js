//Callback function as anonymous function
let prices = [10000, 20000, 30000, 40000, 50000];
const newPrices = prices.map((price) => {
  return price - 5000;
});
console.log(newPrices); // [ 5000, 15000, 25000, 35000, 45000 ]

//Callback function with name
function sample() {
  console.log("Hi!");
}
function demo(callback) {
  return callback;
}
demo(sample()); // Hi!
