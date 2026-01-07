// const nums = [1, 2, 3, 4, 5];
// function sum(acc, n) {
//   return acc + n;
// }
// const result = nums.reduce(sum, 1);
// console.log(result);
const students = [
  { name: "A", marks: 40, att: 20 },
  { name: "B", marks: 70, att: 30 },
  { name: "C", marks: 80, att: 50 },
  { name: "D", marks: 30, att: 70 },
];
const total = students
  .filter((i) => i.marks >= 50)
  .filter((j) => j.att >= 40)
  .map((i) => i.marks)
  .reduce((sum, m) => sum + m, 0);
console.log(total);
