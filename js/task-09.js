function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const buttonEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');

function changebackground() {
  document.body.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor()
}
buttonEl.addEventListener('click', changebackground);