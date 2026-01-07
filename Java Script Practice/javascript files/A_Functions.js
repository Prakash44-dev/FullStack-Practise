//Functions in JS
//with parameters
function showMsg() {
  console.log("HI");
}
showMsg();
//Functions with params
function sumofNumbers(a, b) {
  //a,b are params
  console.log(a + b);
}
sumofNumbers(10, 20); //10,20 are arguments
//return a value from function
function mulNum(c, d) {
  return c * d;
}
let prod = mulNum(2, 3); //while you are returning from a functiojn then you need to assign it to variable ,to store that return val to use it in futuer
//we can also use return(prod = c*d),console.log(prod)
console.log(prod);
//arrowFunction
const arrowDemo = () => {
  //=> is called as fat Arrow notation
  console.log("arrow Function Demo");
};
arrowDemo();
//arrowFunction with parameters
const addNums = (a, b) => {
  console.log(a + b);
};
addNums(45, 45);
//In a Simple way
const addNums1 = (a, b) => a + b;
console.log(addNums1(50, 50)); //or you can also store it in a variable and print that ...
//with return
const mulNums = (a, b) => {
  return a * b;
};
console.log(mulNum(5, 6));
//with out return
const mulNums1 = (a, b) => a * b;
let re = mulNums1(6, 7);
console.log(re);
