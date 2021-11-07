const spanEl = document.querySelector("#value");
const decrementBtn = document.querySelector("[data-action='decrement']");
const incrementBtn = document.querySelector("[data-action='increment']");

let counter = 0;

decrementBtn.addEventListener("click", () => {
  counter--;
  spanEl.innerHTML = counter;
});
spanEl.innerHTML = counter;
incrementBtn.addEventListener("click", () => {
  counter++;
  spanEl.innerHTML = counter;
});
