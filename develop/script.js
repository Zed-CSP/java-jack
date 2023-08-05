//This program was an early functionally based mess, I have since refactored it into a more object oriented approach in a private repository.
//I will be updating this repository with the new code!

// This is a blackjack program
// planned odds calculator toggle option
// planned card counting toggle option
// single player against dealer
// user can select number of decks to play with
// user can select number of players
// players abide by basic strategy

let textArea = document.getElementById('text-area');

const startButton = document.getElementById('start-button');
startButton.addEventListener('click', startGame);

const hitButton = document.getElementById('hit-button');
hitButton.addEventListener('click', hit);

const standButton = document.getElementById('stand-button');
standButton.addEventListener('click', stand);

const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', reset);

//card constants
const suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
const standardValues = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two'];

//****************************************************************************************
//**********************************GAME VARIABLES****************************************
//****************************************************************************************
