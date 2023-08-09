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

    start() {
        this.dealer.hands[0].cards[0].faceUp = false;

        if (this.dealer.hands[0].isBlackjack) {
            console.log('Dealer has Blackjack!');
            this.dealer.hands[0].cards[0].faceUp = true;
            this.dealer.hands[0].cards[1].faceUp = true;
            return;
        } elif (this.player.hands[0].isBlackjack) {
            console.log('Player has Blackjack!');
            this.dealer.hands[0].cards[0].faceUp = true;
            this.dealer.hands[0].cards[1].faceUp = true;
            return;
        } else {
            console.log('Dealer is showing ' + this.dealer.hands[0].cards[0].value);
            console.log('Player has ' + this.player.hands[0].value);
            while (this.player.hands[0].value < 21) {
                var choice = prompt('Hit or Stand?');
                if (choice == 'Hit') {
                    this.player.hands[0].cards.push(actions.dealCard(this.shoe));
                    console.log('Player has ' + this.player.hands[0].value);
                } else {
                    break;
                }
            }
            if (this.player.hands[0].value > 21) {
                console.log('Player busts!');
                return;
            }
            this.dealer.hands[0].cards[0].faceUp = true;
            this.dealer.hands[0].cards[1].faceUp = true;
    }

}

// export default Game;