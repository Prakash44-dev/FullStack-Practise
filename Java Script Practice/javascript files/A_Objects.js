// objects in js
const movieinfo = {
  Mname: "Mahanati",
  Mdirector: "Nagaswin",
  Mmusic: "Mickey",
  Mprotog: "keerthi",
};
//how to get
console.log(movieinfo.Mdirector);
console.log(movieinfo["Mprotog"]);
//for in
for (const key in movieinfo) {
  console.log(movieinfo[key]);
}
//advanced methods
//object.keys
Object.keys(movieinfo).forEach((element) => {
  console.log(element);
}); //prints the key values like mudic director etc
//object.valaues
Object.values(movieinfo).forEach((element) => {
  console.log(element);
});
//object.entries
Object.entries(movieinfo).forEach((key) => {
  console.log(key[0] + " " + key[1]);
});
//for of with object.entries
for (let [key, pair] of Object.entries(movieinfo)) {
  console.log(key + ":" + pair);
}
//Nested objects
const myObj = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};
console.log(myObj.cars[0].models);
//kart object
const kartItems = {
  products: [
    {
      pid: 101,
      pname: "Drone",
      pcosr: 100000,
    },
    {
      pid: 102,
      pnmae: "AC",
      pname: 70000,
    },
  ],
  shipping_adrs: {
    area: "gnt",
    pin: 522111,
    stree: "busstand",
  },
  userInfo: {
    userId: 1001010,
    username: "Sravan",
  },
};
// getting user name
console.log(kartItems.userInfo.username);
