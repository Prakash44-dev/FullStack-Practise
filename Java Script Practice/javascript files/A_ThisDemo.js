// this keyword
const empInfo = {
  fName: "Prakash",
  lastName: "Ragi",
  FullNmae: function () {
    return this.fName + " " + this.lastName;
  },
};
console.log(empInfo.FullNmae());
