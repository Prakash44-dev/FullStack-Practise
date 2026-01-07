function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const bubblegame = new Promise((Hscore, Lscore) => {
  let score = getRandomInt(1, 10); //it can also simply write in single line with - Math.floor(Math.random() * 10);

  console.log("your score is :", score);
  if (score > 5) {
    Hscore(" Hurrayyyy ...!! its High score");
  } else {
    Lscore("low score Try again");
  }
});
bubblegame
  .catch((points) => {
    console.log(points);
  })
  .then((points) => {
    console.log(points);
  });
