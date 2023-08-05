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

    shuffle() {
        let currentIndex = this.cards.length;
        let randomIndex;
        let temp;

        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            temp = this.cards[currentIndex];
            this.cards[currentIndex] = this.cards[randomIndex];
            this.cards[randomIndex] = temp;
        }
    }
}

class Shoe {
    constructor(numberOfDecks) {
        this.numberOfDecks = numberOfDecks;
        this.cards = [];

        for (let i = 0; i < this.numberOfDecks; i++) {
            let deck = new Deck();
            deck.shuffle();
            this.cards.push(...deck.cards);
        }
    }

    deal() {
        return this.cards.pop();// for non JS people: pop() removes the last element of an array and returns that element
    }
}