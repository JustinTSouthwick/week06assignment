// For the final project you will be creating an automated version of the classic card game WAR! 
// There are many versions of the game WAR. In this version there are only 2 players.
// You do not need to do anything special when there is a tie in a round.
// Think about how you would build this project and write your plan down. 
// Consider classes such as: Card, Deck, Player, as well as what properties and methods they may include. 
// You do not need to accept any user input, when you run your code,
// the entire game should play out instantly without any user input inside of your browser’s console.


//Making a card class.

class Card {
    constructor(rank, suit, value){
        this.rank = rank;
        this.suit = suit;
        this.value = value;
    };

    printCard() {
        return `${this.rank} of ${this.suit}`;
    };
};

//Making a deck class.

class Deck {
    constructor() {
        this.cards = [];
    
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10' ,'Jack', 'Queen', 'King', 'Ace'];
        const suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
        const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

//This loop iterates through suits and ranks then combines them into card objects in an array including values.
        for(let i = 0; i < suits.length; i++) {
            for(let j = 0; j < ranks.length; j++) {
                this.cards.push(new Card (ranks[j], suits[i], values[j]));
            }
        };
    };

//added a shuffle function I found on the internet.
    shuffle() {
        for(let i = this.cards.length - 1; i > 0; i--) {
            let randomIndex = Math.floor(Math.random() * (i + 1));
            let currentIndex = this.cards[i];
            this.cards[i] = this.cards[randomIndex];
            this.cards[randomIndex] = currentIndex;
        }
        return this.cards;
    };
};

//Making a player class.

class Player {
    constructor(name) {
        this.playerName = name;
        this.playerCards = []
    }
};

//Making the Game class.
class Game {
    constructor() {
        this.players = [];
    }

    start() {
    
//Adding players to the players array, making/shuffling the deck, and dealing the cards to two players.
        this.players.push(new Player('Player 1'));
        this.players.push(new Player('Player 2'));
        const newDeck = new Deck();
        newDeck.shuffle();
        this.players[0].playerCards = newDeck.cards.slice(0, 26);
        this.players[1].playerCards = newDeck.cards.slice(26, 52);

//Making variables to use in following loops.
        let playerOnePoints = 0;
        let playerTwoPoints = 0;
        let playerOne = this.players[0];
        let playerTwo = this.players[1];
        
//A loop that iterates through the game rounds and compares each players cards.
        while(playerOne.playerCards.length > 0) {
            let playerOneCard = playerOne.playerCards.pop();
            let playerTwoCard = playerTwo.playerCards.pop();
            
            console.log(`Player 1: ${playerOneCard.printCard()} vs. Player 2: ${playerTwoCard.printCard()}`);

        if(playerOneCard.value > playerTwoCard.value) {
            playerOnePoints += 1;
            console.log(`Player 1 wins the round! ${playerOnePoints} points earned.`);
        } else if(playerOneCard.value < playerTwoCard.value){
            playerTwoPoints += 1;
            console.log(`Player 2 wins the round! ${playerTwoPoints} points earned.`);            
        } else {
            console.log('This round is a draw!')
        };
    };

//Determines which player has the most points to declare a winner or return a tie.
        if(playerOnePoints > playerTwoPoints) {
            console.log(`Player 1 score: ${playerOnePoints}. Player 2 score: ${playerTwoPoints}. Player 1 wins the game!`);
        } else if(playerOnePoints < playerTwoPoints) {
            console.log(`Player 1 score: ${playerOnePoints}. Player 2 score: ${playerTwoPoints}. Player 2 wins the game!`);
        } else {
            console.log(`Player 1 score: ${playerOnePoints}. Player 2 score: ${playerTwoPoints}. Tie game!`);
        };
    };
};


let newGame = new Game();
newGame.start();





