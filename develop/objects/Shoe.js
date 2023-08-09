import Deck from './Deck.js';

class Shoe extends Deck {
    constructor(numberOfDecks = 1) {
        super(); // Call the constructor of the Deck class
        this.numberOfDecks = numberOfDecks;
        this.populateShoe();
    }

    populateShoe() {
        this.cards.length = 0;  // Empty the current cards

        for (let i = 0; i < this.numberOfDecks; i++) {
            let deck = new Deck();
            this.cards = this.cards.concat(deck.cards);
        }

        this.shuffle();
    }

    // Since Shoe extends Deck, it inherits the shuffle, deal, and reset methods.
    // However, override needed to reset method.
    // this ensures the Shoe is repopulated with the right number of decks.
    reset() {
        this.populateShoe();
    }
}

export default Shoe;