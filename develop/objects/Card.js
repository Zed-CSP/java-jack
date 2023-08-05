

class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
        this.faceUp = false;
    }

    get cardvalue() {
        if (this.value == 'Jack' || this.value == 'Queen' || this.value == 'King') {
            return 10;
        } else if (this.value == 'Ace') {
            return 11;
        } else {
            return parseInt(this.value);
        }
    }

    get cardname() {
        return this.value + ' of ' + this.suit;
    }
}

export default Card;