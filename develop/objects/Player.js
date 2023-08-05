import { Hand } from './Hand.js';


class Player {
    constructor() {
        this.hands = [];
        this.hands.push(new Hand());
        this.hands.cards.faceUp = true;
    }

    get hand() {
        return this.hands[0];
    }

    get isBust() {
        return this.hand.isBust;
    }

    get hasBlackjack() {
        return this.hand.isBlackjack;
    }

    get isTwentyOne() {
        return this.hand.isTwentyOne;
    }

    get isPair() {
        return this.hand.isPair;
    }

    get isSoft() {
        return this.hand.isSoft;
    }

    get handvalue() {
        return this.hand.handvalue;
    }

    get numberOfHands() {
        return this.hands.length;
    }
}

export default Player;