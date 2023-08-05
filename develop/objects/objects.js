import actions from "./actions";

class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }

    get cardvalue() {
        if (this.value == 'Jack' || this.value == 'Queen' || this.value == 'King') {
            return 10;
        } else if (this.value == 'Ace') {
            return 11;
        } else {
            return parseInt(this.value);
        }
    }

    get cardname() {
        return this.value + ' of ' + this.suit;
    }
}

class Deck {
    constructor() {
        this.cards = [];
        this.suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
        this.values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

        for (let suit of this.suits) { // for each suit
            for (let value of this.values) { // for each value
                this.cards.push(new Card(suit, value)); // create a new card and add it to the deck
            }
        }
    }
}

class Shoe {
    constructor(numberOfDecks) {
        this.numberOfDecks = numberOfDecks;
        this.cards = [];

        for (let i = 0; i < this.numberOfDecks; i++) { // for each deck
            let deck = new Deck(); // create a new deck
            this.cards = this.cards.concat(deck.cards); // add the deck to the shoe

        }
    }
}

class Hand {
    constructor() {
        this.cards = [];
    }

    get handvalue() {
        let handvalue = 0;
        for (let card of this.cards) { // for each card in the hand
            handvalue += card.cardvalue; // add the card's value to the hand's value
        }
        if (handvalue > 21 && this.isSoft) { // if the hand is over 21 and the hand is soft
            handvalue -= (10 * this.cards.filter(card => card.value == 'Ace').length); // subtract 10 for each ace in the hand (aces are worth 11 or 1
        }
        return handvalue;
    }

    get isSoft() {
        for (let card of this.cards) {
            if (card.value == 'Ace') {
                return true;
            }
        }
        return false;
    }

    get isBust() {
        return this.handvalue > 21;
    }

    get isBlackjack() {
        return this.handvalue == 21 && this.cards.length == 2;
    }

    get isTwentyOne() {
        return this.handvalue == 21;
    }

    get isPair() {
        return this.cards[0].value == this.cards[1].value; // if the first card's value is the same as the second card's value
    }
}

class Player {
    constructor() {
        this.hands = [];
        this.hands.push(new Hand());
    }

    get hand() {
        return this.hands[0];
    }

    get isBust() {
        return this.hand.isBust;
    }

    get isBlackjack() {
        return this.hand.isBlackjack;
    }

    get isTwentyOne() {
        return this.hand.isTwentyOne;
    }

    get isPair() {
        return this.hand.isPair;
    }

    get isSoft() {
        return this.hand.isSoft;
    }

    get handvalue() {
        return this.hand.handvalue;
    }

    get numberOfHands() {
        return this.hands.length;
    }
}

class Dealer extends Player {
    constructor() {
        super();
    }

    get isShowingAce() {
        return this.hand.cards[0].value == 'Ace';
    }

    get isShowingFace() {
        return this.hand.cards[0].cardvalue == 10 || this.hand.cards[0].value == 'Ace';
    }

}

class Game {
    constructor(numberOfDecks) {
        this.shoe = new Shoe(numberOfDecks);
        this.dealer = new Dealer();
        this.player = new Player();
        this.dealer.hands[0].cards.push(actions.dealCard(this.shoe)); // deal the dealer a card
        this.dealer.hands[0].cards.push(actions.dealCard(this.shoe)); // deal the dealer a card
        this.player.hands[0].cards.push(actions.dealCard(this.shoe)); // deal the player a card
        this.player.hands[0].cards.push(actions.dealCard(this.shoe)); // deal the player a card
    }

    
}
