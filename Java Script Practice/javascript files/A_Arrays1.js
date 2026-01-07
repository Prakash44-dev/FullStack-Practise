// Arrays in js
// Different ways of creating an array:
let pNames = ["IQOO", "LG", "SamSung", "VIVO", "OPPO"]; //Literal syntax
let prices = new Array(10000, 20000, 30000, 40000, 50000); //Object Declaration of an array
// to get array values:
console.log(pNames[2]);
for (let names of pNames) {
  console.log(names);
}
// for each method usage for arrays:
let names = pNames;
console.log("The current brands are");
names.forEach((element) => {
  console.log(element); //call back function:a function which is passed as an parameter to another function
});
// to add elements:
// push(),unshift(),splice()
// Push : adds the new element at the last:
names.push("One Plus");
console.log("The current brands are");
names.forEach((element) => {
  console.log(element);
});
// unshift: adds the new element at the begining of the array
names.unshift("POCO");
console.log("The current brands are");
names.forEach((element) => {
  console.log(element);
});
// splice() :used to add a new element at the middle  : arr.splice(indextoadd,elementtodeleteIndex,addingelement);
names.splice(2, 0, "iPhone", "Redmi");
console.log("The current brands are");
names.forEach((element) => {
  console.log(element);
});
// removing the elements Methods:pop() , shift() ,splice() , Operator:delete
// pop() :- removes the last element of the array
names.pop();
console.log("The current brands are");
names.forEach((element) => {
  console.log(element);
});
// shift() :- removes the first element of the array
names.shift();
console.log("The current brands are");
names.forEach((element) => {
  console.log(element);
});
// splice():-
names.splice(2, 2);
console.log("The current brands are");
names.forEach((element) => {
  console.log(element);
});
// delete Operator: item removed but not memory
// delete names[2];
// console.log(names); //one empty item

// splice to retreive specific records:
console.log(names.slice(2, 4));
console.log(names.slice(-4, -2)); //-n refers to nth ielement from backwards...
// search a specific element in the array we retreive the index:
// indeOf() , lastIndexOf(),includes(),find()
// indexOf() :- Search Left to Right
console.log(names.indexOf("SamSung")); //-1 if not present
// lastIndexOf() :- Seach Right to Left
console.log(names.lastIndexOf("IQOO"));
// Sorting the array: Using arr.sort() method (default as ascending order)
console.log(names.sort());
console.log(names.sort().reverse());
// Advanced array methods: es6+
// reduce() ,some(),every()
let priceSum = prices.reduce((result, element) => {
  return result + element;
}, 0);
console.log(priceSum);
// map :- we want new array from existing result
let offerPrice = prices.map((element) => {
  element = element - 5000;
  return element;
});
offerPrice.forEach((element) => {
  console.log(element);
});
// to conacatination:
let pNames1 = ["Redmi", "One Plus"];
console.log(pNames.concat(pNames1));
// spread operator: used to concatinate multple arguments into one
let brands = [...pNames, ...pNames1];
console.log(brands);
