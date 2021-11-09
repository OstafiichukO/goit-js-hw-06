const сategoriesEl = document.querySelectorAll("ul#categories .item");
console.log(`Number of categories: ${сategoriesEl.length}`);

const items = document.querySelectorAll("ul#categories .item");

сategoriesEl.forEach.call(items, (element) => {
  const title = element.querySelector("h2").innerHTML;
  const itemsLength = element.querySelectorAll("li").length;
  console.log(`Category: ${title}
  Element: ${itemsLength}`);
});
