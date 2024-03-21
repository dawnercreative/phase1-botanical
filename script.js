const API_KEY = 'sk-0XkW65cf040e22c114200'

const baseUrl = 'https://perenual.com/api/species-list?key=[sk-0XkW65cf040e22c114200]';

//Get references to DOM elements
const plantContainer = document.querySelector('.card-container');
const SearchBox = document.querySelector('.search-box');
const SearchButton = document.querySelector('.search-button');


//Function to create plant cards
function createPlantCard({ common_name, scientific_name, cucle, default_image }) {
    const plantCard = document.createElement('div');
    plantCard.className = 'plant-card';
    plantCard.innerHTML = `
    <div class="plant-card">
    <img src="${default_image}" class="plant-image">
    <h2>${common_name}</h2>
    <h3>${scientific_name}</h3>
    <p>${cycle}</p>
    <button id="${id}" class="add-plant-button" > Add to List</button >
    </div>
    return plantCard;
    `};


// Function to handle plant button click event



// Function to display plants on page



//Function to fetch plants from API
