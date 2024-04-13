const quantityElements = document.querySelectorAll(`#categories .item`)
console.log(`Number of categories: ${quantityElements.length}`)
quantityElements.forEach(element => {
const categoryName = element.querySelector(`h2`).textContent;
    const categoryItems = element.querySelectorAll(`ul li`).length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryItems}`);
})
