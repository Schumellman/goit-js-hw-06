

const listCategories = document.querySelector("#categories");
const numberCateg = listCategories.childElementCount;
console.log(`Number of categories: ${numberCateg}`);

const listItems = document.querySelectorAll("ul#categories li.item");

listItems.forEach(element => {
    const title = element.querySelector("h2").textContent;
    const count = element.querySelectorAll("li").length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${count} `);
});