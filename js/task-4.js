let counterValue = Number(`${document.querySelector('#value').textContent}`);

const counterArea = document.querySelector('#value');

const incrementEl = document.querySelectorAll('#counter button')[1];
const decrementEl = document.querySelectorAll('#counter button')[0];

const increment = incrementEl.addEventListener('click', increment => {
  counterArea.textContent = counterValue += 1;
});
const decrement = decrementEl.addEventListener('click', decrement => {
  counterArea.textContent = counterValue -= 1;
});
