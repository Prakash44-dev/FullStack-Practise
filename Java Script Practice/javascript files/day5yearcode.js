let days = 100;
let years = Math.floor(days / 365);
let month = Math.floor(days % 365);

let months = Math.floor(month / 30);

let remdays = Math.floor(month % 30);
console.log(years);
console.log(months);
console.log(remdays);
