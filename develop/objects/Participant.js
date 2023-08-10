import Hand from './Hand.js';

class Participant {
    constructor() {
        this.hands = [new Hand()];
    }

    get primaryHand() {
        return this.hands[0];
    }

    get isBust() {
        return this.primaryHand.isBust;
    }

    get hasBlackjack() {
        return this.primaryHand.isBlackjack;
    }

    get isTwentyOne() {
        return this.primaryHand.isTwentyOne;
    }

    get isPair() {
        return this.primaryHand.isPair;
    }

    get isSoft() {
        return this.primaryHand.isSoft;
    }

    get handValue() {
        return this.primaryHand.handValue;
    }

    get numberOfHands() {
        return this.hands.length;
    }
}

export default Participant