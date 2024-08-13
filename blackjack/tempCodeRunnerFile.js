//Blackjack Stuff
// let cards = []; //array - order list of item
// let sum = 0;
// let hasBlackjack = false;
// let isAlive = false;
// let message = "";
// let messageEl = document.getElementById("message-el");
// let sumEl = document.querySelector("#sum-el");
// let cardsEl = document.querySelector("#cards-el");

// //player
// let player = {
//     name: "Aomsub",
//     chips: 145
// }
// let playerEl = document.getElementById("player-el")
// playerEl.textContent = player.name + ": $" +  player.chips;


// function getRandomCard() {
//     let randomNumber = Math.floor(Math.random() * 13) + 1;
//     if (randomNumber === 1)
//         return 11;
//     else if (randomNumber > 10)
//         return 10;

//     return randomNumber;
// }

// function startGame() {
//     let firstCard = getRandomCard();
//     let secondCard = getRandomCard();

//     isAlive = true;
//     cards.push(firstCard, secondCard);
//     sum = firstCard + secondCard;

//     renderGame();
// }

// function renderGame(){
//     cardsEl.textContent = "Cards: "
//     for(let i = 0; i < cards.length; i++){
//         cardsEl.textContent += cards[i] + " ";
//     }
//     sumEl.textContent = "Sum: " + sum;

//     if (sum <= 20){
//         message = "Do you want to draw another card?";
//     }
//     else if (sum === 21){
//         message = "Woohoo! You've got Blackjack";
//         hasBlackjack = true;
//     }
//     else{
//         message = "YOu are out of the game!";
//         isAlive = false;
//     }
//     messageEl.textContent = message;
// }

// function newCard() {
//     if (isAlive === true && hasBlackjack === false){
//         let card = getRandomCard();
//         sum += card;
//         cards.push(card)
//         renderGame();
//     }
// }
