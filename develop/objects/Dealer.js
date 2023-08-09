import Player from './Player.js';

class Dealer extends Player {
    constructor() {
        super();
    }
    
    get isShowingFace() {
        return this.hand.cards[0].cardvalue == 10 || this.hand.cards[0].value == 'Ace';
    }

    showcards() {
        this.hand.cards.faceUp = true;
    }
}

export default Dealer;