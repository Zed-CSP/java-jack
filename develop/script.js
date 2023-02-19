// This is a blackjack program
// planned odds calculator toggle option
// planned card counting toggle option
// single player against dealer
// user can select number of decks to play with
// user can select number of players
// players abide by basic strategy


//DOM variables and event listeners
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
const values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two'];

//Game variables

let startGame = false,
    gameOver = false,
    playerWon = false,
    deck = [],
    shuffledDeck = [],
    dealerCards = [],
    playerCards = [],
    discardPile = [],
    dealerScore = 0,
    playerScore = 0,
    numDecks = 0,
    numPlayers = 0,
    players = [];

//card objects
// Define card objects using object literals
const playerCard = {
    suit: '',
    value: '' 
};

const dealerCard = {
    suit: '',
    value: ''
};

const discardPile = {
    suit: '',
    value: '' 
};

const playerHand = {
  cards: [],
  score: 0
};