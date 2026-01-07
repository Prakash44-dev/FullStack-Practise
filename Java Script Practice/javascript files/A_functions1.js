//functions in js.

function Greet() {
  console.log("Hi");
}
Greet();

//functions with parameters.

function sumoftwonumbers(a, b) {
  console.log(a + b);
}
sumoftwonumbers(10, 20);

//written a value from function.

function returntype(a, b) {
  return a * b;
}

console.log(returntype(10, 20));

//in future we can use the value which we return from the funciton.

//arrow function(es6 new features).

const arrowdemo = () => {
  console.log("hi");
};
arrowdemo();

//arrow function with parameters

let a = (a, b) => {
  console.log(a + b);
};
a(10, 20);

//arrow function in a simple way.
//return type.
const addnums1 = (num1, num2) => num1 + num2;
console.log(addnums1(10, 20)); //without reuturn type

//with return type.
const multiplication = (num1, num2) => {
  return num1 * num2;
};
console.log(multiplication(10, 20));
