const inputEl = document.querySelector("#validation-input");

function onInputLength() {
  const textRequiredLength = Number(inputEl.dataset.length);
  if (textRequiredLength === inputEl.dataset.length) {
    inputEl.classList.add("valid");
  }
  inputEl.classList.add("invalid");
}

inputEl.addEventListener("blur", onInputLength);
console.log(textRequiredLength);
