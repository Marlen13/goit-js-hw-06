const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ul = document.querySelector("#ingredients");
console.dir(ul);
let arr = [];
for (let i = 0; i < ingredients.length; i += 1) {
  const listIngr = document.createElement("li");
  listIngr.textContent = ingredients[i];
  listIngr.classList.add("item");
  arr.push(listIngr);
  console.log(arr);
  console.log(listIngr);
}
ul.insertAdjacentHTML("afterbegin", arr);

// const listIngr = ingredients
//   .map((ingredient) => {
//     const liSt = document.createElement("li");
//     liSt.textContent = "ingredient";
//     liSt.classList.add("item");
//   })
//   .join("");
// console.log(listIngr);

// const li1 = document.createElement("li");
// li1.textContent = "Potatoes";
// li1.classList.add("item");
// const li2 = document.createElement("li");
// li2.textContent = "Mushrooms";
// li2.classList.add("item");
// const li3 = document.createElement("li");
// li3.textContent = "Garlic";
// li3.classList.add("item");
// const li4 = document.createElement("li");
// li4.textContent = "Tomatos";
// li4.classList.add("item");
// const li5 = document.createElement("li");
// li5.textContent = "Herbs";
// li5.classList.add("item");
// const li6 = document.createElement("li");
// li6.textContent = "Condiments";
// li6.classList.add("item");
// ul.append(li1, li2, li3, li4, li5, li6);
