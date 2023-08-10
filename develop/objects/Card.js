class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
        this.faceUp = false;
    }

    flip() {
        this.faceUp = !this.faceUp;
    }

    get cardValue() {
        if (['Jack', 'Queen', 'King'].includes(this.value)) {
            return 10;
        } else if (this.value == 'Ace') {
            return 11;  // I'll need more logic in the Hand class to deal with Aces
        } else {
            return parseInt(this.value);
        }
    }

    get cardName() {
        return this.value + ' of ' + this.suit;
    }
}

export default Card;