//Arrays in JS.

//literal syntax
let pnames = ["Redmi", "vivo", "samsung", "narzo", "apple"];

//Ways to create an array.
//Object syntax.
let prices = new Array(10000, 20000, 30000, 40000, 50000, 60000);

//To get array values.
console.log(pnames[2]);

//using loops to retreive all the values from an array.
//We can use [for of] because it directly prints the values, not the indexes like [for in]
for (let i of pnames) {
  console.log(i);
}

//for each is a method
//it is also called as call back function.

let names = pnames.forEach((val) => {
  console.log(val);
});

//To add elements.
//push method, unshift method, splice method.

pnames.push("oneplus+"); //pusing new elements in the existing array.
console.log(pnames);

//unshift.
pnames.unshift("Lava");
console.log(pnames);

//splice
pnames.splice(2, 0, "Pocox3");
console.log(pnames);

//To delete elements.
//Pop(),shift(),splice(),delete operator.
pnames.pop();
console.log(pnames);

//shift()
pnames.shift();
console.log(pnames); //removes the element which is in 1st index.

//splice()
//array.splice(startIndex, deleteCount, item1, item2, ..., itemN);
pnames.splice(2, 1);
console.log(pnames);

delete pnames[1];
console.log(pnames);

//slice method.
//n-1
console.log(pnames.slice(2, 4));

//Negative indexing.
console.log(pnames.slice(-4, -2));

//To search the values in array.
//index of, last index of, include, find --> methods used to find the values from an array.

let newarray = ["Redmi", "vivo", "samsung", "narzo", "apple"];

console.log(pnames.indexOf("samsung"));

//last index of method.
console.log(pnames.lastIndexOf("samsung"));

//find

//sort()
console.log(newarray.sort());

//reverse sorting--> desceding to ascending order.

console.log(newarray.reverse());

//Array advanced method-es6+.
//Reduce method.

//callback method.
let sum = prices.reduce((total, value) => {
  return total + value;
});

console.log(sum);

//map().

let offerprice = prices.map((val) => {
  return val - 5000;
});

console.log(offerprice);

//filter,expose.

//To concate.
let pnames1 = ["samsung", "pocox3"];
let pnames2 = ["redmi", "lava"];
console.log(pnames1.concat(pnames2));

//spread operator.
let brands = [...pnames1, ...pnames2];
console.log(brands);


