const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredEl = ingredients.map(i => {
  const itemEl = document.createElement('li');
  itemEl.textContent = i;
  return itemEl;
});

document.querySelector('#ingredients').append(...ingredEl);
