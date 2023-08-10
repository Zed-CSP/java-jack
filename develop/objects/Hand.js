import Card from './Card.js';


class Hand {
    constructor() {
        this.cards = [];
    }

    get handvalue() {
        let handvalue = 0;
        for (let card of this.cards) { // for each card in the hand
            handvalue += card.cardvalue; // add the card's value to the hand's value
        }
        if (handvalue > 21 && this.isSoft) { // if the hand is over 21 and the hand is soft
            handvalue -= (10 * this.cards.filter(card => card.value == 'Ace').length); // subtract 10 for each ace in the hand (aces are worth 11 or 1
        }
        return handvalue;
    }

    get isSoft() {
        for (let card of this.cards) {
            if (card.value == 'Ace') {
                return true;
            }
        }
        return false;
    }

    get isBust() {
        return this.handvalue > 21;
    }

    get isBlackjack() {
        return this.handvalue == 21 && this.cards.length == 2;
    }

    get isTwentyOne() {
        return this.handvalue == 21;
    }

    get isPair() {
        return this.cards[0].value == this.cards[1].value; // if the first card's value is the same as the second card's value
    }

    get canSplit() {
        return this.cards.length === 2 && this.isPair;
    }
    

}

export default Hand;