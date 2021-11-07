function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');
console.log(spanEl.textContent);

spanEl.textContent = ${changebackground};

function changebackground() {
  document.body.style.backgroundColor = getRandomHexColor();
}

buttonEl.addEventListener('click', changebackground);
