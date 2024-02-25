const quantityItems = document.querySelectorAll("ul li.item");
console.log(`Number of categories: ${quantityItems.length}`);

quantityItems.forEach((quantityItem) => {
  const elementTitle = quantityItem.firstElementChild.textContent;
  console.log(`Category: ${elementTitle}`);
  const quantityElem = quantityItem.lastElementChild.children.length;
  console.log(`Elements: ${quantityElem}`);
});
