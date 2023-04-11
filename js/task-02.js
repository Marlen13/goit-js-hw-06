const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ul = document.querySelector("#ingredients");

let arr = [];
for (let i = 0; i < ingredients.length; i += 1) {
  const listIngr = document.createElement("li");
  listIngr.textContent = ingredients[i];
  listIngr.classList.add("item");
  arr.push(listIngr);
}
ul.append(...arr);
