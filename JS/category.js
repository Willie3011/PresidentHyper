import Categories from './data.js';

const categorySec = document.getElementById("categories");
const container = categorySec.querySelector(".container");


// Map through all the categories and create a card
Categories.forEach(category => {
    console.log(category);
    const card = createCard(category);
    container.appendChild(card);
});

function createCard(category) {
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

