// Promises Chaining
const ticketBooking = () => {
  return new Promise((resolve, reject) => {
    resolve(" Ticket Booked ");
  });
};
const PopCorn = (msg) => {
  return new Promise((resolve, reject) => {
    resolve(msg + " PopCorn Bought ");
  });
};
const Coke = (msg) => {
  return new Promise((resolve, reject) => {
    resolve(msg + " Coke Bought ");
  });
};
ticketBooking()
  .then((result) => {
    return PopCorn(result);
  })
  .then((result) => {
    return Coke(result);
  })
  .then((result) => {
    console.log("movie :" + result);
  })
  .catch((error) => {
    console.log(error);
  });
