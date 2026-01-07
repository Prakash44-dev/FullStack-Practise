console.log("First");
setTimeout(() => {
  console.log("Second");
}, 2000);
setTimeout(() => {
  console.log("Third");
}, 0);
console.log("Fourth");
