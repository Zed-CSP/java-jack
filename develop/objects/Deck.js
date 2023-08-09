import Card from './Card.js';

class Deck {
    constructor() {
        this.cards = [];
        this.suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
        this.values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

        this.populate();
    }

    populate() {
        this.cards.length = 0;  // Empty the array
        for (let suit of this.suits) {
            for (let value of this.values) {
                this.cards.push(new Card(suit, value));
            }
        }
    }

    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]; // Swap cards, this kind of shuffle is called the "Fisher-Yates" shuffle, Its code is aesthetically pleasing and simple, but it's not the most efficient and 'random' shuffle. It's good enough for my purposes.
        }
    }

    deal() {
        if (this.cards.length > 0) {
            return this.cards.pop();
        } else {
            console.error('The deck is empty! Cannot deal.');
            return null;
        }
    }

    reset() {
        this.populate();
        this.shuffle();
    }
}

export default Deck;
