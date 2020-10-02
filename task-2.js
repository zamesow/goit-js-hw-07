const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingred = document.createElement('ul');
ingred.id = 'ingredients';

const itemIter = () => {
  ingredients.forEach(i => {
    const itemEl = document.createElement('li');
    itemEl.textContent = i;
    ingred.appendChild(itemEl);
  });
};

itemIter();

console.log(ingred);

document.querySelector('#ingredients').replaceWith(ingred);
