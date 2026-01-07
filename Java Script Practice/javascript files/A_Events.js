//event logic
function sample() {
  alert("Hi");
}
function sample1() {
  alert("Hello");
}
let colorchange = document.getElementById("vlit");
const mousehover = () => {
  colorchange.style.color = "blue";
};
const mouseout = () => {
  colorchange.style.color = "";
};
colorchange.addEventListener("mouseover", mousehover);
colorchange.addEventListener("mouseout", mouseout);

let btnvalue = document.getElementById("Button");
btnvalue.addEventListener("click", sample);
let btnvalue1 = document.getElementById("Button1");
btnvalue1.addEventListener("click", sample1);

let inputvalue = document.getElementById("ip");
let pvalue = document.getElementById("para");
const inputval = () => {
  let userval = inputvalue.value;
  pvalue.textContent = userval;
};
