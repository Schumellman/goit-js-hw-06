const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector("#ingredients");

const totalLiIngredients = [];

ingredients.map((el) => {
  const liIngredients = document.createElement("li");
  liIngredients.classList.add("item");
  liIngredients.textContent = el;
  totalLiIngredients.push(liIngredients);
})
listIngredients.append(...totalLiIngredients);
