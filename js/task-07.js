const inputEl = document.querySelector("#font-size-control");
inputEl.addEventListener("input", header);
function header() {
  let size = inputEl.value;
  document.getElementById("text").style.fontSize = size + "px";
}
