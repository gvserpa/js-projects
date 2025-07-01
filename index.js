const num = document.querySelector('div.result h2');

let count = 0;

function btnAdd () {
    count++;
    num.textContent = count;
}

function btnMinus () {
    count--;
    num.textContent = count;
}

function btnReset () {
    count = 0;
    num.textContent = count;
}

