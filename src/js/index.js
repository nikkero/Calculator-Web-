let first = "";
let second = "";
let sign = "";
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "×", "÷"];

const out = document.querySelector(".calculator__screen p");

function clearALl() {
    first = "";
    second = "";
    sign = "";
    finish = false;
    out.textContent = 0;
}

document.querySelector(".clear").onClick = clearALl;

let keys = document.querySelectorAll(".btn");
console.log(keys);
keys.forEach(element => {
    element.addEventListener('click', calc)    
});

function calc(el) {
    
}