// Bind method demonstration
const movieInfo = {
  movieDetails: function () {
    return this.heroName + " " + this.villanName;
  },
};
const Pushpa = {
  heroName: "AllluArjun",
  villanName: "FahadhFazil",
};
console.log(movieInfo.movieDetails.bind(Pushpa)());
