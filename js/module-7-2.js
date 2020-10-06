// 03-input-events (события полей вводов)
// можно все ссылки вписать как значения свойств объекта
const refs = {
  input: document.querySelector('#name-input'),
  name: document.querySelector('#name-output'),
};

// даный метод 'change' лучше не использовать на input, а только на check-box или radio-buttons. Функция возвращает результат только при потере фокуса в инпуте. Поэтому для input лучше использовать метод 'input'
refs.input.addEventListener('change', onInputChange);
function onInputChange(event) {
  console.log(event);
  console.log(event.currentTarget.value);
}

/*
-
    -
        -
            -
                -
                    -
                        -
                            -
                                -
                                    -
                                        -
                                            -
                                                -
                                                    -
                                                        -
                                                            -
                                                                -
                                                                    -
                                                                        -
                                                                            -
*/
// 02-forms -----------------------------------------------------------------------------
const form = document.querySelector('.js-register-form'); // блок выборки элементов

form.addEventListener('submit', onFormSubmit); // блок подписок

// блок обработчиков всех подписок
function onFormSubmit(event) {
  event.preventDefault(); // предотвратить по-умолчанию реакцию браузера на это действие (на перезагрузку страницы при отправке формы)
  console.log('Это сабмит формы');
  console.dir(event.currentTarget.elements.subscription.value);
  console.dir(event.currentTarget.elements[0].value);
  console.dir(event.currentTarget.elements[1].value);

  const formData = new FormData(event.currentTarget);
  console.log(formData);

  formData.forEach((value, name) => {
    console.log('onFormSubmit -> name', name);
    console.log('onFormSubmit -> value', value);
  });
}
/*
-
    -
        -
            -
                -
                    -
                        -
                            -
                                -
                                    -
                                        -
                                            -
                                                -
                                                    -
                                                        -
                                                            -
                                                                -
                                                                    -
                                                                        -
                                                                            -
*/
// 01-События - реакция браузера на действия пользователя -----------------------------------------------------------------------------
// браузер - издатель (publisher), а пользователь - подписчик (subscriber) - отсюда и pub-scribe
const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');

// добавляем слушателя событий на addListenerBtn, который добавит слушателя событий на targetBtn
addListenerBtn.addEventListener('click', event => {
  console.log(event);
  console.log('Вешаю слушателя события на Целевую кнопку');

  targetBtn.addEventListener('click', onTargetBtnClick);
});

// добавляем слушателя событий на addListenerBtn, который удалит слушателя событий с targetBtn
removeListenerBtn.addEventListener('click', event => {
  console.log(event);
  console.log('Снимаю слушателя события с Целевой кнопки');

  targetBtn.removeEventListener('click', onTargetBtnClick);
});

// создаём внешнюю ф-цию, чтоб использовать одну и ту же ссылку для слушателей событий targetBtn, потому что, если использовать ф-ции или объекты, то ссылки разные, они не равны
function onTargetBtnClick(event) {
  console.log(event);
  console.log('Клик по целевой кнопке');
}

// function logMessage() {
//   console.log('Клик по целевой кнопке');
// }

/* Конвенции именования обработчиков событий (выбирать один для всего проекта и с уточнением, не важно какой, но чтобы код был однородным):
- handle*: handleSubjectEvent
- *handle: subjectEventHandler
- on*: onSubjectEvent -----------------------------------------------------------------------------
// Паттерн-1 ----------------------------------------------------------------
// hendle*: handleEvent - паттерн без уточнения куда делается клик?-----------------------------------------------------------------------------
targetBtn.addEventListener('click', handleClick);
function handleClick() {
  console.log('Клик');
}

// hendle*: handleSubjectEvent - паттерн с уточнением куда делается клик! -----------------------------------------------------------------------------
targetBtn.addEventListener('click', handleTargetButtonClick);
function handleTargetButtonClick() {
  console.log('Клик');
}

// Паттерн-2 ----------------------------------------------------------------
// *hendle: eventHandler - паттерн без уточнения куда делается клик?-----------------------------------------------------------------------------
targetBtn.addEventListener('click', ClickHandler);
function ClickHandler() {
  console.log('Клик');
}
// *hendle: subjectEventHandler - паттерн с уточнением куда делается клик! -----------------------------------------------------------------------------
targetBtn.addEventListener('click', targetButtonClickHandler);
function targetButtonClickHandler() {
  console.log('Клик');
}

// Паттерн-3 ----------------------------------------------------------------
// on*: onEvent - паттерн без уточнения куда делается клик?
targetBtn.addEventListener('click', onClick);
function onClick() {
  console.log('Клик');
}

// on*: onSubjectEvent - паттерн с уточнением куда делается клик!
targetBtn.addEventListener('click', onTargetButtonClick);
function onTargetButtonClick() {
  console.log('Клик');
}
*/
