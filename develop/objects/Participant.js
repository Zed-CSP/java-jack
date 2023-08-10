import Hand from './Hand.js';

class Participant {
    constructor() {
        this.hands = [new Hand()];
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

    get handvalue() {
        return this.hand.handvalue;
    }
}


export default Participant;