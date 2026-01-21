const numEl = document.querySelector(".all-elements");
const numbers = ["13", "15", "14", "76", "24", "12"];
let allNumbers = "";
for (let i = 0; i < numbers.length; i++) {
  allNumbers = allNumbers + numbers[i];
  if (i < numbers.length - 1) {
    allNumbers = allNumbers + ", ";
  }
}
numEl.textContent = allNumbers;

const minBtn = document.querySelector(".min");
const minEl = document.querySelector(".minNumber");

minBtn.onclick = function () {
  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  minEl.textContent = min;
};

const maxBtn = document.querySelector(".max");
const maxEl = document.querySelector(".maxNumber");

maxBtn.onclick = function () {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  maxEl.textContent = max;
};
