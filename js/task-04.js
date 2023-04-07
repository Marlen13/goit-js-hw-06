let counterValue = 0;

const btnDecrement = document.querySelector("[data-action = 'decrement']");
const btnIncrement = document.querySelector("[data-action = 'increment']");
const counter = document.querySelector("#value");

btnDecrement.addEventListener("click", decrem);
btnIncrement.addEventListener("click", increm);
//function  -1
function decrem() {
  counterValue -= 1;
  counter.textContent = counterValue;
}
//function +=1
function increm() {
  counterValue += 1;
  counter.textContent = counterValue;
}
