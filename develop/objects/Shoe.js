import Deck from './Deck.js';
import Card from './Card.js';


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

export default Shoe;