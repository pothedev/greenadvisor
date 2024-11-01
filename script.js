// Prevent the page from reloading when clicking category links
function showCategory(event, category) {
    event.preventDefault(); // Prevent default link behavior
    createCardsByCategory(category);
}

// Store the vegetable, fruit, berry, and herb data
const vegetables = [
    { name: "Tomato", image: "images/tomato1.jpg" },
    { name: "Cucumber", image: "images/cucumber.jpg" },
    { name: "Potato", image: "images/potato.jpg" },
    { name: "Cabbage", image: "images/cabbage.jpg" },
    { name: "Carrot", image: "images/carrot.jpg" },
    { name: "Brussels Sprouts", image: "images/brussel.jpg" },
    { name: "Cauliflower", image: "images/cauliflower.jpg" },
    { name: "Beetroot", image: "images/beetroot.jpg" },
    { name: "Onion", image: "images/onion.jpg" },
    { name: "Garlic", image: "images/garlic.jpg" },
    { name: "Pepper", image: "images/pepper.jpg" },
    { name: "Radish", image: "images/radish.jpg" },
    { name: "Zucchini", image: "images/zucchini.jpg" },
    { name: "Pumpkin", image: "images/pumpkin.jpg" },
    { name: "Eggplant", image: "images/eggplant.jpg" },
    { name: "Lettuce", image: "images/lettuce.jpg" },
    { name: "Spinach", image: "images/spinach.jpg" },
    { name: "Broccoli", image: "images/broccoli.jpg" },
    { name: "Corn", image: "images/corn.jpg" },
    { name: "Peas", image: "images/peas.jpg" },
    { name: "Bean", image: "images/bean.jpg" },
    { name: "Asparagus", image: "images/asparagus.jpg" }
];


const fruits = [
    { name: "Apple", image: "images/apple.jpg" },
    { name: "Pear", image: "images/pear.jpg" },
    { name: "Plum", image: "images/plum.jpg" },
    { name: "Cherry", image: "images/cherry.jpg" },
    { name: "Peach", image: "images/peach.jpg" },
    { name: "Apricot", image: "images/apricot.jpg" },
    { name: "Grape", image: "images/grape.jpg" },
    { name: "Cherry Plum", image: "images/cherryplum.jpg" },
    { name: "Melon", image: "images/melon.jpg" },
    { name: "Nectarine", image: "images/nectarine.jpg" },
    { name: "Mulberry", image: "images/mulberry.jpg" }
];

const berries = [
    { name: "Strawberry", image: "images/strawberry.jpg" },
    { name: "Raspberry", image: "images/raspberry.jpg" },
    { name: "Blackberry", image: "images/blackberry.jpg" },
    { name: "Blueberry", image: "images/blueberry.jpg" },
    { name: "Currant", image: "images/currant.jpg" },
    { name: "Gooseberry", image: "images/gooseberry.jpg" },
    { name: "Sea Buckthorn", image: "images/seabuckthorn.jpg" },
    { name: "Cowberry", image: "images/cowberry.jpg" },
    { name: "Elderberry", image: "images/elderberry.jpg" },
    { name: "Watermelon", image: "images/watermelon.jpg" }
];

const herbs = [
    { name: "Dill", image: "images/dill.jpg" },
    { name: "Parsley", image: "images/parsley.jpg" },
    { name: "Chives", image: "images/chives.jpg" },
    { name: "Cilantro", image: "images/cilantro.jpg" },
    { name: "Thyme", image: "images/thyme.jpg" },
    { name: "Mint", image: "images/mint.jpg" },
    { name: "Oregano", image: "images/oregano.jpg" },
    { name: "Lovage", image: "images/lovage.jpg" },
    { name: "Basil", image: "images/basil.jpg" },
    { name: "Rosemary", image: "images/rosemary.jpg" }
];

// Store translations for text elements in both languages
const translations = {
    uk: {
        "description": "Розкрийте секрети успішного садівництва з нашими всеосяжними путівниками по рослинах, індивідуальними порадами по догляду та практиками сталого вирощування. Green Advisor тут, щоб допомогти вам вирощувати здорові рослини та вдосконалювати ваші навички садівництва та городництва.",
        "main-banner-text": "Ваш надійний помічник!",
        "guides-title": "Путівник з вирощування",
        "category-dropdown": "Категорії",
        "search": "Пошук",
        "Tomato": "Помідор",
        "Cucumber": "Огірок",
        "Potato": "Картопля",
        "Cabbage": "Капуста",
        "Carrot": "Морква",
        "Brussels Sprouts": "Брюссельська капуста",
        "Cauliflower": "Цвітна капуста",
        "Beetroot": "Буряк",
        "Onion": "Цибуля",
        "Garlic": "Часник",
        "Pepper": "Перець",
        "Radish": "Редиска",
        "Zucchini": "Кабачок",
        "Pumpkin": "Гарбуз",
        "Eggplant": "Баклажан",
        "Lettuce": "Салат",
        "Spinach": "Шпинат",
        "Broccoli": "Броколі",
        "Corn": "Кукурудза",
        "Peas": "Горох",
        "Bean": "Фасоль",
        "Asparagus": "Спаржа",
        "Apple": "Яблуко",
        "Pear": "Груша",
        "Plum": "Слива",
        "Cherry": "Вишня",
        "Peach": "Персик",
        "Apricot": "Абрикос",
        "Grape": "Виноград",
        "Cherry Plum": "Алича",
        "Melon": "Диня",
        "Nectarine": "Нектарин",
        "Mulberry": "Шовковиця",
        "Strawberry": "Полуниця",
        "Raspberry": "Малина",
        "Blackberry": "Ожина",
        "Blueberry": "Чорниця",
        "Currant": "Смородина",
        "Gooseberry": "Аґрус",
        "Sea Buckthorn": "Обліпиха",
        "Cowberry": "Брусниця",
        "Elderberry": "Бузина",
        "Watermelon": "Кавун",
        "Dill": "Кріп",
        "Parsley": "Петрушка",
        "Chives": "Зелена цибуля",
        "Cilantro": "Коріандр",
        "Thyme": "Тим'ян",
        "Mint": "М'ята",
        "Oregano": "Орегано",
        "Lovage": "Любисток",
        "Basil": "Базилік",
        "Rosemary": "Розмарин"
    },
    en: {
        "description": "Unlock the secrets of successful gardening with our comprehensive plant guides, tailored care tips, and sustainable growing practices. Green Advisor is here to help you nurture healthy plants and enhance your gardening skills.",
        "main-banner-text": "Your Growing Partner",
        "guides-title": "Growing Guides",
        "category-dropdown": "Categories",
        "search": "Search",
        "Tomato": "Tomato",
        "Cucumber": "Cucumber",
        "Cabbage": "Cabbage",
        "Carrot": "Carrot",
        "Potato": "Potato",
        "Brussels Sprouts": "Brussels Sprouts",
        "Cauliflower": "Cauliflower",
        "Beetroot": "Beetroot",
        "Onion": "Onion",
        "Garlic": "Garlic",
        "Pepper": "Pepper",
        "Radish": "Radish",
        "Zucchini": "Zucchini",
        "Pumpkin": "Pumpkin",
        "Eggplant": "Eggplant",
        "Lettuce": "Lettuce",
        "Spinach": "Spinach",
        "Broccoli": "Broccoli",
        "Corn": "Corn",
        "Peas": "Peas",
        "Bean": "Bean",
        "Asparagus": "Asparagus",
        "Apple": "Apple",
        "Pear": "Pear",
        "Plum": "Plum",
        "Cherry": "Cherry",
        "Peach": "Peach",
        "Apricot": "Apricot",
        "Grape": "Grape",
        "Cherry Plum": "Cherry Plum",
        "Melon": "Melon",
        "Nectarine": "Nectarine",
        "Mulberry": "Mulberry",
        "Strawberry": "Strawberry",
        "Raspberry": "Raspberry",
        "Blackberry": "Blackberry",
        "Blueberry": "Blueberry",
        "Currant": "Currant",
        "Gooseberry": "Gooseberry",
        "Sea Buckthorn": "Sea Buckthorn",
        "Cowberry": "Cowberry",
        "Elderberry": "Elderberry",
        "Watermelon": "Watermelon",
        "Dill": "Dill",
        "Parsley": "Parsley",
        "Chives": "Chives",
        "Cilantro": "Cilantro",
        "Thyme": "Thyme",
        "Mint": "Mint",
        "Oregano": "Oregano",
        "Lovage": "Lovage",
        "Basil": "Basil",
        "Rosemary": "Rosemary"
    }
};



let currentLanguage = 'uk'; // Default language to Ukrainian
let currentCategory = 'vegetables'; // Default category

// Function to toggle language
function toggleLanguage(forceUk = false) {
    // Set language to Ukrainian if it's the first load
    if (forceUk) {
        currentLanguage = 'uk';
    } else {
        // Toggle between languages on click
        currentLanguage = currentLanguage === 'en' ? 'uk' : 'en';
    }

    // Update flag icon
    const flagIcon = document.getElementById("language-flag");
    flagIcon.src = currentLanguage === 'en' ? "images/ukraine.png" : "images/uk.png";

    // Translate static text elements
    document.querySelectorAll("*").forEach((element) => {
        const elementId = element.id;
        if (elementId && translations[currentLanguage][elementId]) {
            element.innerText = translations[currentLanguage][elementId];
        }
    });

    // Translate the search placeholder
    const searchInput = document.getElementById("search");
    if (searchInput && translations[currentLanguage]["search"]) {
        searchInput.placeholder = translations[currentLanguage]["search"];
    }

    // Update cards with the selected category in the new language
    createCardsByCategory(currentCategory);
}


// Function to create cards based on the selected category
function createCardsByCategory(category) {
    currentCategory = category; // Set current category for use in toggleLanguage
    const cardContainer = document.querySelector('.card-container');
    cardContainer.innerHTML = ''; // Clear previous cards

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

    // Create cards for the selected items with language-aware names
    items.forEach(({ name, image }) => createVegetableCard(name, image));
}

// Initialize content on DOM load
document.addEventListener('DOMContentLoaded', () => {
    toggleLanguage(true); // Force initial load to Ukrainian
    createCardsByCategory('vegetables'); // Load default category
});

document.addEventListener('DOMContentLoaded', () => {
    // Retrieve saved category and scroll position
    const savedCategory = localStorage.getItem('selectedCategory') || 'vegetables';
    const savedScrollPosition = localStorage.getItem('scrollPosition') || 0;

    // Load the saved category
    createCardsByCategory(savedCategory);

    // Scroll to the saved position
    setTimeout(() => {
        window.scrollTo(0, savedScrollPosition);
    }, 0); // Use timeout to ensure DOM is fully loaded before scrolling
});


// Store the current category and scroll position
function saveState(category) {
    localStorage.setItem('selectedCategory', category);
    localStorage.setItem('scrollPosition', window.scrollY); // Save the vertical scroll position
}

// Call `saveState` with the current category before navigating to the guide page
function showCategory(event, category) {
    event.preventDefault();
    createCardsByCategory(category);
    saveState(category); // Save the state before navigating
}

function createVegetableCard(name, imagePath) {
    let name2 = name.replace(" ", "_");
    const cardContainer = document.querySelector('.card-container');
    const link = document.createElement('a');
    link.href = `guide.html?name=${name2.toLowerCase()}`;
    link.classList.add('card-link');
    link.onclick = () => saveState(currentCategory); // Save state when clicking a card

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

// Initialize content on DOM load
document.addEventListener('DOMContentLoaded', () => {
    createCardsByCategory('vegetables'); // Load default category on page load
});

document.addEventListener('DOMContentLoaded', () => {
    // Retrieve saved category and scroll position
    const savedCategory = localStorage.getItem('selectedCategory') || 'vegetables';
    const savedScrollPosition = localStorage.getItem('scrollPosition') || 0;

    // Load the saved category
    createCardsByCategory(savedCategory);

    // Scroll to the saved position
    setTimeout(() => {
        window.scrollTo(0, savedScrollPosition);
    }, 0); // Use timeout to ensure DOM is fully loaded before scrolling
});

