const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// --------------------------------- Вариант 1

/* const ingredEl = document.createElement('ul');
ingredEl.id = 'ingredients';

const itemIter = () => {
  ingredients.forEach(i => {
    const itemEl = document.createElement('li');
    itemEl.textContent = i;
    ingredEl.appendChild(itemEl);
  });
};

itemIter();

document.querySelector('#ingredients').replaceWith(ingredEl); */

// --------------------------------- Вариант 2

const ingredEl = ingredients.map(i => {
  const itemEl = document.createElement('li');
  itemEl.textContent = i;
  return itemEl;
});
console.log(ingredEl);
document.querySelector('#ingredients').append(...ingredEl);
