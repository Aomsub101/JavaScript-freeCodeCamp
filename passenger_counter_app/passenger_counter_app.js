//document.getElementById("count-el").innerText = 5

//ctrl+k+c
// let count = 0;
// console.log(count)


//initilize the count as 0
//listen for clicks on the increment button
//increment the count variable when the button is clicked
//change the count-el in the HTML to reflect the new count

//camelCase
let countEl = document.getElementById("count-el");
let count = 0;

let saveEl = document.getElementById("save-el")

function increment() {
    count++;
    countEl.textContent = count;
}

function save() {
    let prevEntries = count;
    saveEl.textContent += prevEntries + " - ";
    count = 0;
    countEl.textContent = count;
}
