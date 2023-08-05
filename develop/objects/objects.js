class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }

    get cardvalue() {
        if (this.value == J || this.value == Q || this.value == K) {
            return 10;
        } else if (this.value == A) {
            return 11;
        } else {
            return parseInt(this.value);
        }
    }
}

class Deck {
    constructor() {
        this.cards = [];
        this.suits = [C, D, H, S];
        this.values = [A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K];

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
            deck.shuffle(); // shuffle the deck
            this.cards.push(...deck.cards); // add every card of the the deck to the shoe
        }
    }
}