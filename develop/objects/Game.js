import Shoe from './Shoe.js';
import Dealer from './Dealer.js';
import Player from './Player.js';
import Hand from './Hand.js';
import Card from './Card.js';
import Deck from './Deck.js';
import actions from './actions.js';


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

// export default Game;