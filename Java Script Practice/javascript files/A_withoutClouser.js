//with out clouser
let counter = 1; //global declaration
const counterResult = () => {
  let counter = 0; // local declaration it has the first priority
  counter += 1;
  return counter;
};
console.log(counterResult());
console.log(counterResult());
console.log(counterResult());
