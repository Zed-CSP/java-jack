// This is a blackjack program
// planned odds calculator toggle option
// planned card counting toggle option
// single player against dealer
// user can select number of decks to play with
// user can select number of players
// players abide by basic strategy

// --- I'm going to use a lot of comments in this code ---
    // Its a personal project and I want to be able to look back at it and laugh
    // maybe you'll laugh too, but I'm not going to hold my breath.



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
    // Because I have a need for a third index im using 'j' 
    // this is because lamborghini uses all of those
    // and I want a lamborghini, they make cool zoom sounds.
        // (everyone wants to be a cool guy, especially Tom Cruise)
            // Tom Cruise wont let go of the cool guy image as he's aging,
            // he's like 60 and still trying to be a cool guy
            // the last mission impossible movie was very cringey
                // (dont even get me started on the new top gun movie)
            // I think he's trying to be a cool guy because he's afraid of being old.
            // He's fighting the inevitable passage of time.
                //Time is cruel to us all.
                    //Valar Morghulis
    for (let j = 0; j < numDecks.length; j++) {
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
}

//function to shuffle deck
function shuffleDeck() {
    // while there are still cards in the deck
    while (deck.length > 0) {
        // pick a random card from the deck
        let randomIndex = Math.floor(Math.random() * deck.length);
        // add that card to the shuffled deck
        shuffledDeck.push(deck[randomIndex]);
        // remove that card from the deck
        deck.splice(randomIndex, 1);
    }
}
