const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const arrayLength = ingredients.length;
let liEl;
for (let i = 0; i < arrayLength; i++) {
  liEl = document.createElement("li");
  liEl.className = "item";
  liEl.innerHTML = ingredients[i];
  document.getElementsByTagName("ul")[0].appendChild(liEl);
}
