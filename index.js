const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let isAlive = true;
let live = true;
const passone = [];
const passtwo = [];
console.log(characters.length)
let passOneEl = document.getElementById("pass-one")
let passTwoEl = document.getElementById("pass-two")
function password() {
if(isAlive === true) {
for(let i = 0; i < 8; i++) {
    passone.push(characters[Math.floor(Math.random()*characters.length)]);
    passOneEl.textContent = passone.join('')
    isAlive = false
}
}

if(live === true){
for(let i = 0; i < 8; i++) {
    
    passtwo.push(characters[Math.floor(Math.random()*characters.length)]);
    passTwoEl.textContent = passtwo.join('')
    live = false;
}
}
}
function newpassword() {
    const newPassOne = [];
    const newPassTwo = [];
    for(let i = 0; i < 8; i++) {
        newPassOne.push(characters[Math.floor(Math.random()*characters.length)]);
        passOneEl.textContent = newPassOne.join('')    
    }
    for(let i = 0; i < 8; i++) {
        newPassTwo.push(characters[Math.floor(Math.random()*characters.length)]);
        passTwoEl.textContent = newPassTwo.join('')    
    }
}