// Sample plant data
import{
    translations,
    plantData
} from './data.js';


let currentLanguage = 'uk'; // Default language
let currentCategory = 'vegetables'; // Default category

// Function to toggle language
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'uk' : 'en';

    // Update flag icon
    const flagIcon = document.getElementById("language-flag");
    flagIcon.src = currentLanguage === 'en' ? "images/ukraine.png" : "images/uk.png";

    // Translate static text elements
    document.querySelectorAll("*").forEach((element) => {
        const elementId = element.id;
        const elementTitle= element.title;
        if (elementId && translations[currentLanguage][elementId]) {
            element.innerText = translations[currentLanguage][elementId];
        }
        else if (elementTitle && translations[currentLanguage][elementTitle]){
            element.innerText = translations[currentLanguage][elementTitle];
        }
    });

    // Update cards with the selected category in the new language
    createCardsByCategory(currentCategory);
}



// Function to get plant data based on URL parameter
function loadPlantData() {
    // Get the plant name from the URL parameter
    const params = new URLSearchParams(window.location.search);
    const plantName = params.get('name');

    // Check if the plant data exists
    if (plantData[plantName]) {
        const plant = plantData[plantName];

        // Update the page content with plant information
        if (currentLanguage === 'uk') {
            document.getElementById('plant-name').textContent = translations[currentLanguage][plant.name] || plant.name;
        } else {
            document.getElementById('plant-name').textContent = plant.name;
        }

        document.getElementById('plant-name').title = plant.name;
        document.getElementById('plant-image').src = plant.image;

        // Generate the plant guide based on the current language
        generatePlantGuide(plantName);
        
    } else {
        // Handle case where plant is not found
        document.getElementById('plant-name').textContent = "Plant Not Found";
        document.getElementById('plant-image').style.display = "none";
    }
}


function generatePlantGuide(name) {
    const plantGuide = plantData[name];
    if (!plantGuide) return;

    const contentDiv = document.querySelector('.content');
    plantGuide.guide.forEach(section => {
        const sectionElement = document.createElement('section');
        const titleElement = document.createElement('h2');
        titleElement.textContent = section[0];
        sectionElement.appendChild(titleElement);
        
        for (let i = 1; i < section.length; i++) {
            const paragraphElement = document.createElement('p');
            paragraphElement.textContent = section[i];
            sectionElement.appendChild(paragraphElement);
        }
        
        contentDiv.appendChild(sectionElement);
    });
}

// Run the function on page load
document.addEventListener('DOMContentLoaded', loadPlantData);
window.toggleLanguage = toggleLanguage;
