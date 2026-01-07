//multiline strings (backticks)
let info = `hello hello  evry one this prakash how can i help you 
, iam here to asssist you regarding the college`;
console.log(info);
// string intrepolation
let fname = "Ragi";
let Lname = "Prakash";
console.log(`${fname},${Lname}`);
// array destrucuting
let pname = ["realme", "lg", "vivo"];
let [b1, b2, b3] = pname;
console.log(b1);
console.log(b2);
console.log(b3);
// object destructing
const movie = {
  movieName: "Bahubali",
  Mdirector: "rajamouli",
  producer: "shobu yarlagadda$prasad devineni",
};
let { info1, info2, info3 } = movie;
console.log(info1);
console.log(info2);
console.log(info3);
