const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const arrayLength = ingredients.length;
var temp;
for (let i = 0; i < arrayLength; i++) {
  temp = document.createElement("li");
  temp.className = "item";
  temp.innerHTML = ingredients[i];
  document.getElementsByTagName("ul")[0].appendChild(temp);
}
console.log(temp);
