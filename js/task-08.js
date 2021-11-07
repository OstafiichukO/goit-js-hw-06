const buttonEl = document.querySelector('button');

function message(event) {
  event.preventDefault();
}

buttonEl.addEventListener('submit', message);
