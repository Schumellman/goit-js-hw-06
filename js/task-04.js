
let counterValue = 0;


const span = document.querySelector('#counter #value');
const reduce = document.querySelector('button[data-action="decrement"]');
const increase = document.querySelector('button[data-action="increment"]');



increase.addEventListener('click', onAddIncrease);
reduce.addEventListener('click', onRemReduce);

function onAddIncrease() {
    counterValue += 1;
    span.textContent = counterValue;
}

function onRemReduce() {
    if (counterValue !== 0) {
        counterValue -= 1;
        span.textContent = counterValue;
    }
}