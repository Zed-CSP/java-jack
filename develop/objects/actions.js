const actions = {
    //Fisher-Yates shuffle
    shuffle(array) {
        let currentIndex = array.length, randomIndex; // currentIndex is the index of the card we are currently looking at
        while (currentIndex != 0) { // while we haven't looked at every card
            randomIndex = Math.floor(Math.random() * currentIndex); // pick a random card
            currentIndex--; // decrement the currentIndex
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]; // swap the current card with the random card
        }
        return array;
    },

    dealCard(shoe) {
        return shoe.cards.pop(); // for non JS people: pop() is a built in method that removes the last element of an array and returns that element
    },

    dealHand(shoe) {
        return [this.dealCard(shoe), this.dealCard(shoe)]; // deal two cards
    },

    hit(hand, shoe) {
        hand.push(this.dealCard(shoe)); // add a card to the hand
        return hand;
    }

    


};