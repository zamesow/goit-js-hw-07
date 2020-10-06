let counterValue = Number(`${document.querySelector('#value').textContent}`);

const counterArea = document.querySelector('#value');

const incrementEl = document.querySelectorAll('#counter button')[1];
const decrementEl = document.querySelectorAll('#counter button')[0];

const increment = incrementEl.addEventListener('click', onIncrement);
function onIncrement() {
  counterArea.textContent = counterValue += 1;
}

const decrement = decrementEl.addEventListener('click', onDecrement);
function onDecrement() {
  counterArea.textContent = counterValue -= 1;
}
