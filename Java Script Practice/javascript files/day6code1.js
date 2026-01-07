let array = ["abc", "cde", "efg", "hi"];
console.log("Initial ele are :", array);
array.push("jk");
console.log("after push:", array);
array.pop();
console.log("after pop ele are:", array);
let b = array.pop();
console.log(" pop ele is:", b);
array.unshift("123");
console.log("after unshift ele are :", array);
array.shift();
console.log("after shift ele are :", array);
function exp2() {
  let num = [1, 2, 3, 4, 5, 6, 7];
  num.forEach((num) => console.log(num * num));
  //map
  let sq = num.map((num) => console.log(num * 2));
  console.log(sq);
  console.log(num);
}
function ex3() {
  let ages = [12, 23, 34, 45, 56];
  let adults = ages.filter((age) => age >= 18);
  console.log("all ages :", ages);
  console.log("adults:", adults);
  console.log("include 25 ?", ages.includes(25));
  console.log("include 23 ?", ages.includes(23));
}
function exp4() {
  let prices = [10.99, 25.5, 5.99, 15.0];
  let total = prices.reduce((sum, price) => sum + price, 0);
  console.log("prices:", prices);
  console.log("Total:", total.toFixed(2));
}

exp2();
ex3();
exp4();
