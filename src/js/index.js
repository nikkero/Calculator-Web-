let first = "";
let second = "";
let sign = "";
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "×", "÷"];

const out = document.querySelector(".calculator__screen p");

function clearAll() {
    first = "";
    second = "";
    sign = "";
    finish = false;
    out.textContent = 0;
}

document.querySelector('.clear').addEventListener('click', clearAll)

const keys = document.querySelectorAll('.btn');
keys.forEach(element => {
    element.addEventListener('click', calc);
});

function calc(e) {
    const key = this.textContent;

    if (digit.includes(key)){
        if (second === '' && sign === ''){
            first += key;
            out.textContent = first;
            console.log(first, second, sign);
        }
        else if (!first === '' && !second === '' && finish){
            second = key;
            finish = false;
            out.textContent = second;
        }
        else {
            second += key;
            out.textContent = second;
            console.log(first, second, sign);
        }
    }

    if (action.includes(key)){
        sign = key;
        out.textContent = sign;
        second = '';
        console.log(first, second, sign);
    }

    if (key == '='){
        if (second === '') second = first;
        switch (sign) {
            case '+':
                first = (+first) + (+second);
                break;
            case '×':
                first = first * second;
                break;
            case '-':
                first = first - second;
                break;
            case '÷':
                if (second === '0') {
                    clearAll();
                    return;
                }
                first = first / second;
                break;
        }
        finish = true;
        out.textContent = first;
    }
}
