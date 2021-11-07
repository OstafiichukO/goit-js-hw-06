const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputLength);
const textRequiredLength = inputEl.dataset.length;
function onInputLength(event) {
  const textRequiredLength = event;
  if (textRequiredLength.length === inputEl.dataset.length) {
    return inputEl.classList.add("valid");
  }
  return inputEl.classList.add("invalid");
}
