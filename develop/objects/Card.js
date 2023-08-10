import Participant from './Participant.js';  
class Dealer extends Participant {
    constructor() {
        super();
    }

    // Dealer's rule for hitting or standing
    shouldHit() {
        return this.primaryHand.handValue < 17 || (this.primaryHand.handValue === 17 && this.primaryHand.isSoft);
    }

    // Deal the initial hand to the dealer
    initialDeal(card1, card2) {
        card1.faceUp = true;  // The first card is face-up
        card2.faceUp = false; // The second card is face-down
        this.primaryHand.cards.push(card1, card2);
    }

    // Reveal the face-down card
    revealHiddenCard() {
        for (let card of this.primaryHand.cards) {
            card.faceUp = true;
        }
    }

    // Check if dealer has a blackjack
    get hasBlackjack() {
        return this.primaryHand.isBlackjack;
    }

    // Check if dealer's hand is a bust
    get isBust() {
        return this.primaryHand.isBust;
    }

    // Check if dealer's hand is soft
    get isSoft() {
        return this.primaryHand.isSoft;
    }
}

export default Dealer;
