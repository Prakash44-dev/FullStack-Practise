// call method
const product = {
  pId: 1001,
  pNmae: "IQOO",
};

const prInfo = {
  pDetails: function (rating, price) {
    return this.pId + " " + this.pNmae + " " + rating + " " + price;
  },
};
console.log(prInfo.pDetails.call(product, 4, 30000)); // call method is used to use call the variables of another object by using this keyword
