//instead of promises in ES6 Async and Await are introduced in ES7 it can be handled with try and catch block
let movieRating = () => {
  return new Promise((resolve, reject) => {
    let Rating = 4.5;
    if (Rating > 4) {
      resolve("good movie");
    } else {
      resolve("bad one");
    }
  });
};
//how to call promises with async/await
const movieResult = async () => {
  try {
    const result = await movieRating();
    console.log(result);
  } catch (err) {
    console.log(error);
  }
};
movieResult();
