import Card from './Card.js';

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

export default Deck;