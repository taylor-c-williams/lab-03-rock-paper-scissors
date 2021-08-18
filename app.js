// import functions and grab DOM elements
const selectedInputEl = document.querySelector('input:checked');
const playButton = document.querySelector('#play-button');
const resultsDisplay = document.querySelector('#results-display');
const winsDisplay = document.querySelector('#wins');
const lossesDisplay = document.querySelector('#losses');
const tiesDisplay = document.querySelector('#ties');

import { getRandomThrow } from './get-random-throw.js';
// initialize global state
let wins = 0;
let losses = 0;
let ties = 0;


// set event listeners 
playButton.addEventListener('click', () =>{
   console.log(getRandomThrow());

   
});


  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
