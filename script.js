import {
    translations,
    vegetables,
    fruits,
    berries,
    herbs
} from './data.js';

let currentCategory = 'vegetables'; // Default category
let isScrollLocked = false;
let initialScrollPosition = 0; // Store initial scroll position for search

// Function to create cards based on the selected category or filtered by search
function createCardsByCategory(category, searchQuery = '') {
    currentCategory = category;
    const cardContainer = document.querySelector('.card-container');
    cardContainer.innerHTML = '';

    // Define items based on category unless there's a search query
    let items;
    if (searchQuery) {
        items = [...vegetables, ...fruits, ...berries, ...herbs]; // Search across all categories
    } else {
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
    }

    // Filter items based on the search query if one is provided
    const filteredItems = items.filter(({ name }) =>
        translations['uk'][name]?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Create cards only for the filtered items
    filteredItems.forEach(({ name, image }) => createVegetableCard(translations['uk'][name] || name, image));

    // If scroll is locked, maintain the initial scroll position
    if (isScrollLocked) {
        setTimeout(() => {
            window.scrollTo(0, initialScrollPosition);
        }, 0);
    }
}

// Save the category and scroll position to sessionStorage
function saveState(category) {
    sessionStorage.setItem('selectedCategory', category);
    sessionStorage.setItem('scrollPosition', window.scrollY);
}

// Show category and prevent page reload
function showCategory(event, category) {
    event.preventDefault();
    saveState(category);
    createCardsByCategory(category); 
}

// Function to create individual plant cards with Ukrainian names
function createVegetableCard(name, imagePath) {
    const cardContainer = document.querySelector('.card-container');
    const link = document.createElement('a');
    const translated = translations.en2[name];
    link.href = `guide.html?name=${translated.replace(" ", "_").toLowerCase()}`;
    link.classList.add('card-link');
    link.onclick = () => saveState(currentCategory);

    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.src = imagePath;
    img.alt = name;

    const cardText = document.createElement('div');
    cardText.classList.add('card-text');
    cardText.textContent = name; // Display name in Ukrainian

    card.appendChild(img);
    card.appendChild(cardText);
    link.appendChild(card);
    cardContainer.appendChild(link);
}

// Load content on DOM load
document.addEventListener('DOMContentLoaded', () => {
    const savedCategory = sessionStorage.getItem('selectedCategory') || 'vegetables';
    createCardsByCategory(savedCategory);

    // Translate static text elements
    document.querySelectorAll("[data-translate]").forEach((element) => {
        const key = element.getAttribute("data-translate");
        if (translations['uk'][key]) {
            element.innerText = translations['uk'][key];
        }
    });

    const savedScrollPosition = sessionStorage.getItem('scrollPosition') || 0;
    setTimeout(() => {
        window.scrollTo(0, savedScrollPosition);
    }, 0);
});

// Attach search functionality to search bar
document.getElementById('search').addEventListener('input', (event) => {
    const searchQuery = event.target.value;

    // Lock scroll position only at the beginning of the search
    if (!isScrollLocked) {
        initialScrollPosition = window.scrollY;
        isScrollLocked = true;
    }

    createCardsByCategory(currentCategory, searchQuery); // Filter cards based on search input
});

// Listen for scroll events to release the scroll lock
window.addEventListener('scroll', () => {
    isScrollLocked = false; // Allow scrolling again if user scrolls manually
});

window.showCategory = showCategory;
const about = document.getElementById('about');
const advices = document.getElementById('advices');
const title = document.getElementById('link');
about.onclick = () => saveState(currentCategory);
advices.onclick = () => saveState(currentCategory);
title.onclick = () => saveState(currentCategory);