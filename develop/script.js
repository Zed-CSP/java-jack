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

//****************************************************************************************
//**********************************GAME VARIABLES****************************************
//****************************************************************************************

let startGame = false,
    handOver = false,
    gameOver = false,
    dealerTurn = false,
    dealerWon = false,
    playerWon = false,
    playerPush = false,
    deck = [],
    shoe = [],
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
    console.log("Function: createDeck");
// 's' is the suit counter index and 'v' is the value counter index
// I like 's' and 'v' because I think they are neat.
// Because I have a need for a third index im using 'j' 
// this is because lamborghini uses all of those letters as performance badges
// I want a lamborghini, they make cool zoom sounds.
        // (everyone wants to be a cool guy, especially Tom Cruise)
            // Tom Cruise wont let go of the cool guy image as he's aging,
                // he's like 60 and still trying to be a cool guy
                    // the last mission impossible movie was very cringey
                        // (dont even get me started on the new top gun movie)
                    // I think he's trying to be a cool guy because he's afraid of being old.
                    // He's fighting the inevitable passage of time.
                    // Time is cruel to us all.
                        // Valar Morghulis
    for (let j = 0; j < numDecks.length; j++) {
        for (let s = 0; s < suits.length; s++) {
            //console.log(suits[s]);
            for (let v = 0; v < values.length; v++) {
                //console.log(values[v]);
                let card = {
                    suit: suits[s],
                    value: values[v]
                    isVisable: false
                };
                deck.push(card);
            }
        }
    }
}

//function to shuffle deck and place in shoe
function shuffleDeck() {
    console.log("Function: shuffleDeck");
    // while there are still cards in the deck
    while (deck.length > 0) {
        // pick a random card from the deck
        let randomIndex = Math.floor(Math.random() * deck.length);
        // add that card to the shuffled deck
        shoe.push(deck[randomIndex]);
        // remove that card from the deck
        deck.splice(randomIndex, 1);
    }
}

//function to deal cards
function dealCards() {
    console.log("Function: dealCards");
    // deal two cards to each player
    for (let i = 0; i < 2; i++) {
        playerCards.push(shoe.pop());
        //set all player cards to be visable
        playerCards[i].isVisable = true;
        
        dealerCards.push(shoe.pop());
        //set first dealer card to be visable
        dealerCards[0].isVisable = true;        
    }
}

//function to calculate score
function calculateScore(cards) {
    console.log("Function: calculateScore");
    // reset score
    let score = 0;
    // loop through all cards
    for (let i = 0; i < cards.length; i++) {
        // if card is an ace
        if (cards[i].value === 'Ace') {
            // if score is less than 11
            if (score < 11) {
                // add 11 to score
                score += 11;
            } else {
                // add 1 to score
                score += 1;
            }
        } else if (cards[i].value === 'King' || cards[i].value === 'Queen' || cards[i].value === 'Jack') {
            // if card is a face card
            // add 10 to score
            score += 10;
        } else {
            // if card is a number card
            // add the value of the card to the score
            score += parseInt(cards[i].value);
        }
    }
    // return score
    return score;
}

//function to update scores this function will be called after every card is dealt
// 
function updateScores() {
    console.log("Function: updateScores");
    // calculate dealer score
    dealerScore = calculateScore(dealerCards);
    // calculate player score
    playerScore = calculateScore(playerCards);
}

//function to display cards
// text display is a little janky, but it works for now
// plans to display images of cards in the future
function displayCards() {
    console.log("Function: displayCards");
    // clear text area
    textArea.innerText = '';
    // display dealer cards
    for (let i = 0; i < dealerCards.length; i++) {
        // if card is visable
        if (dealerCards[i].isVisable) {
            // display dealer card and add a new line
            textArea.innerText += "dealer is showing: " + dealerCards[i].value + " of " + dealerCards[i].suit + "\n";
        } else {
            // display dealer card and add a new line
            textArea.innerText += "dealer is showing: " + "Face Down Card" + "\n";
        }
    }
    // display player cards
    for (let i = 0; i < playerCards.length; i++) {
        // display player card and add a new line
        textArea.innerText += "player is showing: " + playerCards[i].value + " of " + playerCards[i].suit + "\n";
    }
    // display dealer score
    textArea.innerText += "dealer score: " + dealerScore + "\n";
    // display player score
    textArea.innerText += "player score: " + playerScore + "\n";
}

// ****************************************************
// *************** GAME CHECK FUNCTIONS ***************
// ****************************************************


//function to check for blackjack
function checkForBlackjack() {
    console.log("function: checkForBlackjack");
    // if dealer has blackjack
    // will check if dealer has an ace and a face card
    if (dealerCards[0].value === 'Ace' && dealerCards[1].value === 'King' || dealerCards[1].value === 'Queen' || dealerCards[1].value === 'Jack') {
        // player loses
        playerWon = false;
        // end game
        handOver = true;
        console.log("dealer has blackjack");
    }
    // if dealer has a face card 'peek' for an ace
    if (dealerCards[0].value === 'King' || dealerCards[0].value === 'Queen' || dealerCards[0].value === 'Jack') {
        // if dealer has an ace
        if (dealerCards[1].value === 'Ace') {
            // player loses
            playerWon = false;
            // end game
            handOver = true;
            console.log("dealer has blackjack");
        }
    }
    // if player has blackjack
    if (playerScore === 21) {
        // player wins
        playerWon = true;
        // end game
        handOver = true;
        console.log("player has blackjack");
    }
}

//function to check for bust
function checkForBust() {
    console.log("function: checkForBust");
    // if player has bust
    if (playerScore > 21) {
        // player loses
        playerWon = false;
        // end game
        handOver = true;
        console.log("player has bust");
    }
    // if dealer has bust
    if (dealerScore > 21) {
        // player wins
        playerWon = true;
        // end game
        handOver = true;
        console.log("dealer has bust");
    }
}

//function to check for 21
function checkFor21() {
    console.log("function: checkFor21");
    // if player has 21
    if (playerScore === 21) {
        // player wins
        dealerTurn = true;
        // end game
        handOver = true;
        console.log("player has 21");
    }
    // if dealer has 21
    if (dealerScore === 21) {
        // player loses
        playerWon = false;
        // end game
        handOver = true;
        console.log("dealer has 21");
    }
}

//function to check for winner
function checkForHandWinner() {
    // if player has more points than dealer
    if (playerScore > dealerScore) {
        // player wins
        playerWon = true;
        // end game
        handOver = true;
        console.log("player Win Condition: has more points than dealer");
    } else if (playerScore === dealerScore) {
        // if player and dealer push
        // player ties
        playerPush = true;
        // end game
        handOver = true;
        console.log("player Tie condition: has same points as dealer");
    } else {
        // if player has less points than dealer
        // player loses
        playerWon = false;
        // end game
        handOver = true;
        console.log("player Lose condition: has less points than dealer");
    }
    console.log("function: checkForHandWinner");
}




//function to hit
function hit() {
    // if game is not over, prevents player from hitting button 
    if (!handOver) {
        // deal a card to the player using the pop and push methods nested
        playerCards.push(shoe.pop());
        // set card to be visable
        playerCards[playerCards.length - 1].isVisable = true;
        // update scores
        updateScores();
        // display cards
        displayCards();
        // check for bust
        checkForBust();
        // check for 21
        checkFor21();
    }
    console.log("player hit");
}

//function to stand

//function to double down

//function to split

//function to check for game winner (beat the house over shoe)

//function to check for game tie (rare tied house over shoe)

//function to check for game loser (lost to house over shoe)

//function to check for game over (conditions: shoe empty or out of cash)

