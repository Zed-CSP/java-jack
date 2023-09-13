import Shoe from './Shoe.js';
import Player from './Player.js';
import Dealer from './Dealer.js';

class BlackjackGame {
    constructor(numberOfDecks = 1, initialBankroll = 1000) {
        this.shoe = new Shoe(numberOfDecks);
        this.player = new Player(initialBankroll);
        this.dealer = new Dealer();
        this.isRoundOver = false;
    }

    startNewRound(betAmount) {
        // Clear previous hands
        this.player.hands = [];
        this.dealer.reset();

        // Place bet
        this.player.placeBet(betAmount);

        // Deal initial cards
        this.player.hands.push(new Hand([this.shoe.drawCard(), this.shoe.drawCard()]));
        this.dealer.initialDeal(this.shoe.drawCard(), this.shoe.drawCard());

        // Check for immediate blackjacks
        if (this.player.primaryHand.isBlackjack && this.dealer.showingCard.cardvalue === 10) {
            // Check if dealer also has blackjack
            if (this.dealer.hand.isBlackjack) {
                this.player.push();
            } else {
                this.player.winBet();
            }
            this.isRoundOver = true;
        } else if (this.player.primaryHand.isBlackjack) {
            this.player.winBet();
            this.isRoundOver = true;
        } else if (this.dealer.showingCard.cardvalue === 10 && this.dealer.hand.isBlackjack) {
            this.player.loseBet();
            this.isRoundOver = true;
        }
    }

    playerAction(action) {
        if (this.isRoundOver) {
            console.error("Round is over, start a new round!");
            return;
        }

        switch (action) {
            case 'hit':
                this.player.primaryHand.cards.push(this.shoe.drawCard());
                if (this.player.primaryHand.isBust) {
                    this.player.loseBet();
                    this.isRoundOver = true;
                }
                break;

            case 'stand':
                this.dealerAction();
                break;

            case 'double':
                if (this.player.canDoubleDown) {
                    this.player.doubleDown();
                    this.player.primaryHand.cards.push(this.shoe.drawCard());
                    if (this.player.primaryHand.isBust || this.dealer.hand.isBlackjack) {
                        this.player.loseBet();
                    } else {
                        this.dealerAction();
                    }
                }
                break;

            case 'split':
                if (this.player.canSplit()) {
                    this.player.splitHand();
                    this.playerAction('hit');  // Hit first hand after split
                }
                break;

            default:
                console.error("Invalid action.");
                break;
        }
    }

    dealerAction() {
        while (this.dealer.hand.handvalue < 17 || (this.dealer.hand.handvalue === 17 && this.dealer.hand.isSoft)) {
            this.dealer.hand.cards.push(this.shoe.drawCard());
        }

        if (this.dealer.hand.isBust || this.player.primaryHand.handvalue > this.dealer.hand.handvalue) {
            this.player.winBet();
        } else if (this.player.primaryHand.handvalue === this.dealer.hand.handvalue) {
            this.player.push();
        } else {
            this.player.loseBet();
        }

        this.isRoundOver = true;
    }
}

export default BlackjackGame;