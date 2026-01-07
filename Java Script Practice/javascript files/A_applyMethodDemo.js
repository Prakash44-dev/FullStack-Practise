// apply Method
const stdInfo = {
  sRoll: 1000,
  sNmae: "Prakash",
};
const stdQual = {
  Qual: function (branch, prog) {
    return this.sRoll + " " + this.sNmae + " " + branch + " " + prog;
  },
};
console.log(stdQual.Qual.apply(stdInfo, ["cse", " btech"])); //apply method is very similar one to call method but "apply" has large scalability unlike call method
