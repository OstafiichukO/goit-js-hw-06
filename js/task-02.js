const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsUlEl = document.querySelector('#ingredients')
ingredients.map((el) => {
  const createLi = document.createElement('li');
  createLi.textContent = el;
  ingredientsUlEl.append(createLi);
});



// const arrayLength = ingredients.length;
// let liEl;
// for (let i = 0; i < arrayLength; i++) {
//   liEl = document.createElement("li");
//   liEl.className = "item";
//   liEl.innerHTML = ingredients[i];
//   document.getElementsByTagName("ul")[0].appendChild(liEl);
// }
