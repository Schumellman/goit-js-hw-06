
let counterValue = 0;


const span = document.querySelector('#counter #value');
const reduce = document.querySelector('button[data-action="decrement"]');
const increase = document.querySelector('button[data-action="increment"]');



increase.addEventListener('click', addIncrease);
reduce.addEventListener('click', remReduce);

function addIncrease() {
    counterValue += 1;
    span.textContent = counterValue;
}

function remReduce() {
    if (counterValue !== 0) {
        counterValue -= 1;
        span.textContent = counterValue;
    }
}