import {Categories, dailyProducts, bakeryProducts} from './data.js';
//Category elements
const categorySec = document.getElementById("categories");
const container = categorySec.querySelector(".container");

// Map through all the categories and create a card
Categories.forEach(category => {
    console.log(category);
    const card = createCategoryCard(category);
    container.appendChild(card);
});

function createCategoryCard(category) {
    const card = document.createElement("div");
    card.classList.add("category-card");
    card.id = category.id
    
    const imgEl = document.createElement("img");
    imgEl.src = category.imageUrl;

    const textEl = document.createElement("div");
    textEl.classList.add("category-text");

    const h4El = document.createElement("h4");
    h4El.textContent = category.name;

    textEl.appendChild(h4El);
    card.appendChild(imgEl);
    card.appendChild(textEl);

    return card;
}

//Products Elements 
const productsSec = document.getElementById("Shop");
const dailyContainer = productsSec.querySelector(".daily-container");
const BakeryContainer = productsSec.querySelector(".bakery-container");

dailyProducts.map((product, index) => {
    const productCard = createProductCard(product, index);
    dailyContainer.appendChild(productCard);
})

bakeryProducts.map(product => {
    const productCard = createProductCard(product);
    BakeryContainer.appendChild(productCard);
})

// Products.forEach(product => {
//     const productCard = createProductCard(product);
//     productsContainer.appendChild(productCard);
// })

function createProductCard(product){
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.id = product.id

    const imageEl = document.createElement("img");
    imageEl.src = product.imageUrl;

    const divEl = document.createElement("div");
    divEl.classList.add("product-text");

    const button = document.createElement("button");
    const icon = document.createElement("i");
    icon.classList.add("bx");
    icon.classList.add("bx-plus");
    button.appendChild(icon);

    const h4El = document.createElement("h4");
    h4El.textContent = product.name;
    
    const priceEl = document.createElement("div");
    priceEl.classList.add("price");

    const priceArr = product.price.split('.');
    const p = document.createElement("p");
    const span = document.createElement("span");
    p.textContent = `R${priceArr[0]}`;
    span.textContent = priceArr[1];
    priceEl.appendChild(p);
    priceEl.appendChild(span);
    divEl.appendChild(priceEl)
    divEl.appendChild(h4El);
    card.appendChild(imageEl);
    card.appendChild(divEl);
    card.appendChild(button);

    return card;
}