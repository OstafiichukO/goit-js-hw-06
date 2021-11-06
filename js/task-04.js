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

// console.log(decrementBtn);
// console.log(spanEl);
// console.log(incrementBtn);

// const spanEl = document.querySelector("#value");
// spanEl.addEventListener("click", handler);
// const button = document.querySelector(".my-button");

// button.addEventListener("click", () => {
//   console.log("Button was clicked");
// });
// const button = document.querySelector(".my-button");

// const handleClick = () => {
//   console.log("Button was clicked");
// };

// button.addEventListener("click", handleClick);
