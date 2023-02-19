// This is a blackjack program
// planned odds calculator toggle option
// planned card counting toggle option
// single player against dealer
// user can select number of decks to play with
// user can select number of players
// players abide by basic strategy


// DOM variables and event listeners.
    // DOM stands for Document Object Model, I'm going to use these terms.
    // using acronyms is a good way to make yourself sound smart.
    // even though you'll likely forget what they exact definition is in a few months
    // and then you'll have to look it up again.
    // but that's okay, because I'll still retain the concept assigned to DOM in my brain.
    // Because I'll have been using it for so long.  
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

//card objects?
// Define card objects using object literals
// might use object orientation later for more complex features
// havent decided yet
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

const dealerHand = {
    cards: [],
    score: 0
};  

//function to create deck
function createDeck() {
    // 's' is the suit counter index and 'v' is the value counter index
    // I like 's' and 'v' because I think they are neat.
    // If i had a need for a third index i would use 'j' 
    // this is because lamborghini uses all of those
    // and I want a lamborghini, they make neat zoom sounds.
        // I'll make j a function for multiple decks later.
    for (let s = 0; s < suits.length; s++) {
        //console.log(suits[s]);
        for (let v = 0; v < values.length; v++) {
            //console.log(values[v]);
            let card = {
                suit: suits[s],
                value: values[v]
            };
            deck.push(card);
        }
    }
}

