const nameInput = document.querySelector("input#name-input");
const nameOutput = document.querySelector("span#name-output");

nameInput.addEventListener("input", (event) => {
  nameOutput.textContent = event.currentTarget.value || "Anonymous";
});
