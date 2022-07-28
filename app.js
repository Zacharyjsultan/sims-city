// import functions and grab DOM elements
const waterDropdownEl = document.getElementById ('water-dropdown');
const cityDropdownEl = document.getElementById ('city-dropdown');
const mountainDropdownEl = document.getElementById ('mountain-dropdown');

const waterImgTag = document.getElementById('water-img');
const cityImgTag = document.getElementById('city-img');
const mountainImgTag = document.getElementById('mountain-img');

const timesChangedEl = document.getElementById ('times-changed');
const sloganButtonEl = document.getElementById ('slogan-button');

// let state

let changeWater = 0;
let changeCity = 0;
let changeMountain = 0;

// set event listeners 
waterDropdownEl.addEventListener('change', () => {

    waterImgTag.src = `assets/${waterDropdownEl.value}.png`;

    changeWater++;
    
    displayStats();

});

cityDropdownEl.addEventListener('change', () => {

    cityImgTag.src = `assets/${cityDropdownEl.value}.png`;

    changeCity++;

});
mountainDropdownEl.addEventListener('change', () => {

    mountainImgTag.src = `assets/${mountainDropdownEl.value}.png`;

    changeMountain++;

});

button
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
