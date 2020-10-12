const input = document.querySelector('[type="number"]');
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const boxes = document.querySelector('#boxes');

// ф-ция добавления блоков при нажатии Создать
function onClickRenderBtn(e) {
  let inputValue = input.value;
  if (inputValue === '') {
    return;
  }

  //ф-ция создания блоков
  const items = [];

  function createBoxes(amount) {
    for (let i = 1; i <= amount; i += 1) {
      const createDiv = document.createElement('div');

      createDiv.style.backgroundColor = randomRgb();
      createDiv.style.width = i * 10 + 20 + 'px';
      createDiv.style.height = i * 10 + 20 + 'px';

      items.push(createDiv);
    }
  }
  const divEl = createBoxes(inputValue);

  boxes.append(...items);
  console.log(boxes);
}

// ф-ция удаления блоков и значения при нажатии Удалить
function onClickDestroyBtn(e) {
  input.value = '';
  boxes.innerHTML = '';
}

// ф-ция создания рандомного цвета
function randomRgb() {
  const random = (min, max) => Math.round(Math.random() * (max - min) + min);

  const red = random(0, 255);
  const green = random(0, 255);
  const blue = random(0, 255);

  return `rgb(${red},${green},${blue})`;
}

// слушатели кнопок
renderBtn.addEventListener('click', onClickRenderBtn);
destroyBtn.addEventListener('click', onClickDestroyBtn);
