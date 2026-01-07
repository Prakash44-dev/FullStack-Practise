//promises logic
const movieRating = new Promise((Resolve, Reject) => {
  let rating = 3;
  if (rating > 4) {
    Resolve("Good movie");
  } else {
    Reject("Boss Waste of our Time");
  }
});
//call promises
movieRating

  .then((Result) => {
    console.log(Result);
  })
  .catch((Result) => {
    console.log(Result);
  });
