const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const elementLi = document.createElement("li");
// elementLi.textContent =
const placeToPutLinks = document.getElementById("ingredients");

for (let i = 0; i < ingredients.length; i++) {
  const anchorTag = document.createElement("li");
  const hrefValue = arrayOfLinks[i];
  anchorTag.href = hrefValue;
  placeToPutLinks.appendChild(anchorTag);
}

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.

/* <li class="item">Potatoes</li>
<li class="item">Mushrooms</li>
<li class="item">Garlic</li>
<li class="item">Tomatos</li>
<li class="item">Herbs</li>
<li class="item">Condiments</li> */
