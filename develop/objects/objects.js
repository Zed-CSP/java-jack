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