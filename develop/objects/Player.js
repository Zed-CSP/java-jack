import Hand from './Hand.js';  // Assuming default export

class Player {
    constructor() {
        this.hands = [new Hand()];
        // Ensure the first card of the first hand is face-up
        if (this.hands[0].cards.length > 0) {
            this.hands[0].cards[0].faceUp = true;
        }
        this.bankroll = initialBankroll; // Player's total money
        this.currentBet = 0; // The amount the player has bet for the current round
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

    placeBet(amount) {
        if (amount <= this.bankroll && amount > 0) {
            this.currentBet = amount;
            this.bankroll -= amount; // Deducting the bet from the bankroll
        } else {
            console.error(`Invalid bet. You only have ${this.bankroll} available.`);
        }
    }

    winBet() {
        this.bankroll += this.currentBet * 2; // Win returns double the bet
        this.currentBet = 0; // Reset the current bet
    }

    loseBet() {
        // Player loses the amount they bet. No need to subtract from bankroll, it was already deducted when the bet was placed.
        this.currentBet = 0; // Reset the current bet
    }

    push() {
        // A push means the player neither wins nor loses, so they get their bet back.
        this.bankroll += this.currentBet;
        this.currentBet = 0; // Reset the current bet
    }

    doubleDown() {
        if (this.bankroll >= this.currentBet) {
            // Player can double down only if they have enough money.
            this.bankroll -= this.currentBet; // Deducting another bet from the bankroll
            this.currentBet *= 2; // Doubling the current bet
        } else {
            console.error("Not enough funds to double down.");
        }
    }

    // This assumes a method in Hand class to check if splitting is possible
    canSplit() {
        return this.primaryHand.canSplit();
    }

    splitHand() {
        if (this.canSplit()) {
            const cardToMove = this.primaryHand.cards.pop(); // Take the last card from the primary hand
            const newHand = new Hand([cardToMove]);
            this.hands.push(newHand);
        } else {
            console.error("Cannot split this hand.");
        }
    }
}

export default Player;