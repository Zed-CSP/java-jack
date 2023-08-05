import { Shoe } from './shoe.js';
import { Player } from './player.js';
import { Dealer } from './dealer.js';
import { Hand } from './hand.js';
import { Card } from './card.js';
import { Deck } from './deck.js';

// This is a blackjack program
// planned odds calculator toggle option
// planned card counting toggle option
// single player against dealer
// user can select number of decks to play with
// user can select number of players
// players abide by basic strategy

let textArea = document.getElementById('text-area');

const startButton = document.getElementById('start-button');
startButton.addEventListener('click', startGame);

const hitButton = document.getElementById('hit-button');
hitButton.addEventListener('click', hit);

const standButton = document.getElementById('stand-button');
standButton.addEventListener('click', stand);

const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', reset);

//****************************************************************************************
//**********************************GAME VARIABLES****************************************
//****************************************************************************************


let game = {
    shoe: new Shoe(1),