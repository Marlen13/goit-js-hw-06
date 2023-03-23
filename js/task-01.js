//Arr li.item
const list = document.querySelectorAll(".item");
//Length Arr
const numberItem = list.length;
console.dir(`Number of categories: ${numberItem}`);

//Console h2, вкладені li

list.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  console.dir(`Category: ${title}`);

  const countElem = item.querySelectorAll("li").length;
  console.dir(`Elements: ${countElem}`);
});
