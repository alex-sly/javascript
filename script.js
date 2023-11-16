const btn = document.getElementById("btn");
const text = document.getElementById("text");
const square = document.getElementById("square");
const eBtn = document.getElementById("e_btn");
const range = document.getElementById("range");
const span = document.getElementById("range-span");
const circle = document.getElementById("circle");

const logger = function (event) {
  span.textContent = event.target.value;
  circle.style.height = span.textContent + "%";
  circle.style.width = span.textContent + "%";
};

btn.addEventListener("click", function () {
  square.style.backgroundColor = text.value;
});

eBtn.style.display = "none";

range.addEventListener("change", logger);
