const inputEl = document.querySelector("#validation-input");
const string = "";
inputEl.addEventListener("blur", onInputLength);

function onInputLength() {
  console.log(inputEl.value);
  if (inputEl.value === inputEl.dataset.length) {
    return (inputEl.className = "valid");
  }
  return (inputEl.className = "invalid");
}
