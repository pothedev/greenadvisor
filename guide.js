import { translations, plantData } from './data.js';

// Function to load plant data based on URL parameter
function loadPlantData() {
    const params = new URLSearchParams(window.location.search);
    const plantName = params.get('name');

    if (plantData[plantName]) {
        const plant = plantData[plantName];

        // Update the page content with plant information
        document.getElementById('plant-name').textContent = translations['uk'][plant.name] || plant.name;
        document.getElementById('plant-image').src = plant.image;

        // Populate guide sections
        generatePlantGuide(plantName);
    } else {
        document.getElementById('plant-name').textContent = "Рослину не знайдено";
        document.getElementById('plant-image').style.display = "none";
    }
}

// Function to generate plant guide sections dynamically
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

// Load content on DOM load
document.addEventListener('DOMContentLoaded', loadPlantData);