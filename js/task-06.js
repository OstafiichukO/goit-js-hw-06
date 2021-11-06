const validation = document.querySelector("#validation-input");
const validationText = validation.textContent;
validation.addEventListener("blur", () => {
  validationText.length = validation.dataset.length
    ? validation.classList.add("validation-input.valid")
    : validation.classList.add("validation-input.valid");
});
