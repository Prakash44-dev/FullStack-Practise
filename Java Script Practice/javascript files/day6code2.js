const nums = [1, 2, 3, 4, 5];
const users = [
  { name: "A", age: 19 },
  { name: "b", age: 20 },
  { name: "A", age: 21 },
];
const result = users.filter((u) => u.age >= 18);
console.log(result);
const students = [
  { name: "J0", marks: 37 },
  { name: "J1", marks: 87 },
  { name: "J2", marks: 97 },
  { name: "J5", marks: 27 },
];
const pass = students.filter((i) => i.marks >= 40);
console.log("passed students are:", pass);
