const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let isAlive = true
let live = true
const passone = [];
const passtwo = [];
console.log(characters.length)
let passOneEl = document.getElementById("pass-one")
let passTwoEl = document.getElementById("pass-two")
function password() {
if(isAlive === true) {
for(let i = 0; i < 8; i++) {
    let s = Math.floor(Math.random()*92)
    passone[i] = characters[s]
    passOneEl.textContent += passone[i]
    isAlive = false
}
}

if(live === true){
for(let j = 0; j < 8; j++) {
    let g = Math.floor(Math.random()*92)
    passtwo[j] = characters[g]
    passTwoEl.textContent += passtwo[j]
    live = false
}
}
}