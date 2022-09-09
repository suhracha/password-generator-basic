const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generateEl = document.getElementById("generate-el")
let passOneEl = document.getElementById("passOne-el")
let passTwoEl = document.getElementById("passTwo-el")
let length = 0
let isAlive = false
let incrementEL = document.getElementById("increment-btn")
let decrementEL = document.getElementById("decrement-btn")
let lengthEL = document.getElementById("length-el")
function incre() {
    length += 1
    lengthEL.textContent = length 
    isAlive = true
}
function decre() {
    length -= 1
    lengthEL.textContent = length
    isAlive = true
}
function generate() {
    if (isAlive===true) {
        for (let i=0; i<length ; i++) {
         passOneEl.textContent += characters[Math.floor(Math.random()*characters.length)]
         passTwoEl.textContent += characters[Math.floor(Math.random()*characters.length)]
        }
    }   
    isAlive = false
}


