//Loops in JavaScript
//1. For Loop
for (let i = 1; i <= 10; i++) {
  console.log("the i value is :", i);
}
//2. While Loop
let i = 1;
while (i <= 10) {
  console.log("the i value in while is :", i);
  i++;
}
//3. Do While Loop
let j = 1;
do {
  console.log("the j value in do while is :", j);
  j++;
} while (j <= 10);
//New Loops in ES6
//4. For..in Loop and For..of Loop-these loops are used to iterate over objects ,strings and arrays
const productNames = ["Samsung", "LG", "MI", "Apple"]; //for of loop
for (let names of productNames) {
  console.log(names);
}
for (let names in productNames) {
  console.log(productNames[names]); //for in loop
}
let employinfo = {
  eid: 1001,
  ename: "prakash",
  esalary: 45000,
};
for (let emp in employinfo) {
  console.log(employinfo[emp]);
}
// How to retrive from String
let clg = "Vignan";
for (let ch of clg) {
  console.log(ch);
}
for (let c in clg) {
  console.log(clg[c]);
}
