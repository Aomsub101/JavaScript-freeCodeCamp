//Greeting Function
const welcomeEl = document.getElementById("welcome-el")

function greetUser(greeting, name, emoji){
    welcomeEl.textContent = `${greeting}, ${name} ${emoji}`
}
greetUser("Hi", "Aomsub", "✋")

//Numbers function
const sumEl = document.getElementById("sum-el")

function add(num1, num2){
    sumEl.textContent = `The sum is ${num1 + num2}`
}
add(2,40)

//arrays as a paremeter
const arrEl = document.getElementById("arr-el")
let arr = [50,2,"Hello"]

function getFirst(arr){
    arrEl.textContent = `${arr[0]} is the first elements of the array`
}
getFirst(arr)

//LocalStorage Test
localStorage.setItem("credit", "100") //delete this line and see the console still logging out 100

myCredit = localStorage.getItem("credit")
console.log(myCredit)

//AddEventListener test
const logBtn = document.getElementById("log-btn")

let data = [
    {
        player: "Jane",
        score: 52
    },
    {
        player: "Mark",
        score: 41
    }
]

logBtn.addEventListener("click", function(){
    console.log(data[0].score);
})

//generate sentences test
let desc1 = "largest countries"
let arr1 = ["China", "India", "USA"]
let desc2 = "best fruits"
let arr2 = ["Apples", "Bananas"]
function generateSentence(desc, arr){
        let seq = ""
        for (let i = 0; i < arr.length; i++){
            if(i != arr.length -1)
                seq += `${arr[i]},`
            else
                seq += arr[i]
        }
        return `The ${arr.length} ${desc} are ${seq}`
}
console.log(generateSentence(desc1, arr1))

//render images
const imgs = [
    "images/pic1.jpg",
    "images/pic2.jpg",
    "images/pic3.jpg"
]
const containerEl = document.getElementById("container")
function renderImages(){
    let listImg = ""
    for (let i = 0;i < imgs.length; i++){
        listImg += `<img alt="Employee in the company" class="team-img" src=${imgs[i]}>`
    }
    containerEl.innerHTML = listImg;
}

renderImages()