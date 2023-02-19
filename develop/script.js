// This is a blackjack program
// planned odds calculator toggle option
// planned card counting toggle option
// single player against dealer
// user can select number of decks to play with
// user can select number of players
// players abide by basic strategy

//card constants
const suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
const values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two'];

//DOM variables
let textArea = document.getElementById('text-area');
let newGameButton = document.getElementById('#startButton');
let hitButton = document.getElementById('#hit-button'); 
let stayButton = document.getElementById('#stay-button');

//Game variables
let gameStarted = false,
    gameOver = false,
    playerWon = false,
    dealerCards = [],
    playerCards = [],
    dealerScore = 0,
    playerScore = 0,
    deck = [],
    numDecks = 0,
    numPlayers = 0,
    players = [];

//card objects
function Player() {
    .cards = [];
    this.score = 0;
}

//event listeners
