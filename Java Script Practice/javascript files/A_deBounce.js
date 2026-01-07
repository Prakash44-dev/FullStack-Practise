// debounceing demonstaration
//request data gathering
let button = document.getElementById("demo");
let para1 = document.getElementById("sample");
let para2 = document.getElementById("simple");
// business logic
let clickCount = 0;
let triggerCount = 0;
button.addEventListener("click ", function () {
  para1.innerHtml = `the result = ${clickCount}`;
  para2.innerHtml = `the result = ${triggerCount}`;
});
