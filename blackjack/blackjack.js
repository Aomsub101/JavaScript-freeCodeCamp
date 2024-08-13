//Blackjack Stuff
let cards = []; //array - order list of item
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

//player
let player = {
    name: "Aomsub",
    chips: 145
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" +  player.chips;


function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber === 1)
        return 11;
    else if (randomNumber > 10)
        return 10;

    return randomNumber;
}

function startGame() {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();

    isAlive = true;
    cards.push(firstCard, secondCard);
    sum = firstCard + secondCard;

    renderGame();
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20){
        message = "Do you want to draw another card?";
    }
    else if (sum === 21){
        message = "Woohoo! You've got Blackjack";
        hasBlackjack = true;
    }
    else{
        message = "YOu are out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    if (isAlive === true && hasBlackjack === false){
        let card = getRandomCard();
        sum += card;
        cards.push(card)
        renderGame();
    }
}
//Practice 1
//*************************************************//
// let person = {
//     name: "Aomsub",
//     age: 10,
//     country: "Thailand"
// }

// function logData() {
//     console.log(person.name + " is " + person.age + " years old and lives in " + person.country);
// }

// logData()

//Practice 2
//*************************************************//
// let largeCountries = ["Tevalu", "India", "USA", "Indonesia", "Monaco"]

// largeCountries.pop();
// largeCountries.push("Pakistan");
// largeCountries.shift();
// largeCountries.unshift("China");

// console.log(largeCountries);

//Practice 3
//*************************************************//
// let hands = ["rock", "paper", "scissor"]

// function randHands(){
//     return hands[Math.floor(Math.random() *3)];
// }

// console.log(randHands())

//Practice 4
//*************************************************//

// let fruit = ["🍎","🟠","🍎","🍎","🟠"]

// for (let i = 0; i < fruit.length; i++){
//     if (fruit[i] === "🟠"){
//         let orangeEl = document.getElementById("orange-shelf")
//         orangeEl.textContent += fruit[i];
//     }
//     else if (fruit[i] === "🍎"){
//         let appleEl = document.getElementById("apple-shelf")
//         appleEl.textContent += fruit[i];
//     }
// }