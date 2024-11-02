import {
    translations,
    vegetables,
    fruits,
    berries,
    herbs
} from './data.js';

let currentLanguage = 'uk'; // Default language to Ukrainian
let currentCategory = 'vegetables'; // Default category


// Function to create cards based on the selected category
function createCardsByCategory(category) {
    currentCategory = category;
    const cardContainer = document.querySelector('.card-container');
    cardContainer.innerHTML = '';

    let items;
    switch (category) {
        case 'vegetables':
            items = vegetables;
            break;
        case 'fruits':
            items = fruits;
            break;
        case 'berries':
            items = berries;
            break;
        case 'herbs':
            items = herbs;
            break;
        default:
            items = [];
    }

    items.forEach(({ name, image }) => createVegetableCard(name, image));

    // Restore scroll position after switching categories
    const savedScrollPosition = sessionStorage.getItem('scrollPosition') || 0;
    setTimeout(() => {
        window.scrollTo(0, savedScrollPosition);
    }, 0);
}

// Save the category and scroll position to sessionStorage
function saveState(category) {
    sessionStorage.setItem('selectedCategory', category);
    sessionStorage.setItem('scrollPosition', window.scrollY);
}

// Reset scroll position to the top for the About page
function resetScrollForAboutPage() {
    sessionStorage.setItem('scrollPosition', 0); // Set scroll position to 0
}

// Attach the resetScrollForAboutPage function to the About link
document.querySelector('.about-link').addEventListener('click', resetScrollForAboutPage);

// Load content on DOM load
document.addEventListener('DOMContentLoaded', () => {
    const savedCategory = sessionStorage.getItem('selectedCategory') || 'vegetables';
    createCardsByCategory(savedCategory);

    // Set scroll position after loading, default to 0 if recently set to 0 for About
    const savedScrollPosition = sessionStorage.getItem('scrollPosition') || 0;
    setTimeout(() => {
        window.scrollTo(0, savedScrollPosition);
    }, 0);
});


// Show category and prevent page reload
function showCategory(event, category) {
    event.preventDefault();
    saveState(category); 
    createCardsByCategory(category); 
}

// Function to create individual vegetable cards
function createVegetableCard(name, imagePath) {
    let name2 = name.replace(" ", "_");
    const cardContainer = document.querySelector('.card-container');
    const link = document.createElement('a');
    link.href = `guide.html?name=${name2.toLowerCase()}`;
    link.classList.add('card-link');
    link.onclick = () => saveState(currentCategory);

    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.src = imagePath;
    img.alt = name;

    const cardText = document.createElement('div');
    cardText.classList.add('card-text');

    const translatedName = translations[currentLanguage][name] || name;
    cardText.textContent = translatedName;

    card.appendChild(img);
    card.appendChild(cardText);
    link.appendChild(card);
    cardContainer.appendChild(link);
}


window.showCategory = showCategory;
