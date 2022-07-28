// import functions and grab DOM elements
const waterDropdownEl = document.getElementById ('water-dropdown');
const cityDropdownEl = document.getElementById ('city-dropdown');
const mountainDropdownEl = document.getElementById ('mountain-dropdown');

const waterImgTag = document.getElementById('water-img');
const cityImgTag = document.getElementById('city-img');
const mountainImgTag = document.getElementById('mountain-img');

const timesChangedEl = document.getElementById ('times-changed');
const sloganButtonEl = document.getElementById ('slogan-button');
const sloganInputEl = document.getElementById ('slogan-input');

const slogansEl = document.getElementById('slogans');
// let state

let changeWater = 0;
let changeCity = 0;
let changeMountain = 0;

let slogans = ['rosebud;!', 'Veronia', 'Lost City of Pedantis'];

displayStats ();

// use user input to update state 
sloganButtonEl.addEventListener('click', () => {

    const newSlogan = sloganInputEl.value;

    slogans.push(newSlogan);
  
    displaySlogans();
  
    sloganInputEl.value = '';
});

// set event listeners // update DOM to reflect the new state
waterDropdownEl.addEventListener('change', () => {

    waterImgTag.src = `assets/${waterDropdownEl.value}.png`;

    changeWater++;
    
    displayStats();

});

cityDropdownEl.addEventListener('change', () => {

    cityImgTag.src = `assets/${cityDropdownEl.value}.png`;

    changeCity++;

    displayStats();

});
mountainDropdownEl.addEventListener('change', () => {

    mountainImgTag.src = `assets/${mountainDropdownEl.value}.png`;

    changeMountain++;

    displayStats();
});

   // get user input  

function displayStats() {
    timesChangedEl.textContent = `you changed the water ${changeWater} times, the city ${changeCity} times, and the mountains ${changeMountain} times`;
}

function displaySlogans() {
    slogansEl.textContent = '';
    
    for (let slogan of slogans) {
        const sloganEl = document.createElement('p');
    
        sloganEl.textContent = slogan;

        sloganEl.classList.add('slogan');

        slogansEl.append(sloganEl);
    }
}



displaySlogans();
