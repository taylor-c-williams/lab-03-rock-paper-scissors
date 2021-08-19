// import functions and grab DOM elements
const playButton = document.querySelector('#play-button');
const resetButton = document.querySelector('#reset-button');

const resultsDisplay = document.querySelector('#results-display');
const winsDisplay = document.querySelector('#wins');
const lossesDisplay = document.querySelector('#losses');
const tiesDisplay = document.querySelector('#ties');
const throwDisplay = document.querySelector('#throw-display');
const resetsDisplay = document.querySelector('#resets-display');

import { didUserWin, getRandomThrow } from './get-random-throw.js';

// initialize global state
let wins = 0;
let losses = 0;
let ties = 0;
let resets = 0;


// set event listeners 
playButton.addEventListener('click', () =>{
    const computerThrow = getRandomThrow();
    const selectedInputEl = document.querySelector('input:checked');
    const throwDisplay = document.querySelector('#throw-display');
    let result = didUserWin(selectedInputEl.value, computerThrow);

    if (result === 'draw') {
        ties++;
    } else if (result === 'player') {
        wins++;
    } else if (result === 'computer') {
        losses++;
    }

    throwDisplay.textContent = (computerThrow);
    winsDisplay.textContent = (wins);
    lossesDisplay.textContent = (losses);
    tiesDisplay.textContent = (ties);
});

resetButton.addEventListener('click', () =>{
  resets++;
  let wins = 0;
  let losses = 0;
  let ties = 0;
  throwDisplay.textContent = '';
  winsDisplay.textContent = '0';
  lossesDisplay.textContent = '0';
  tiesDisplay.textContent = '0';
  resetsDisplay.textContent = resets;
});