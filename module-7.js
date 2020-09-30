// console.dir(document);
const headUlEl = document.querySelector('#categories'); // найти хоть какой нибудь ul внутри document
console.log(headUlEl);

const allLiEl = document.querySelectorAll('li'); // найти все li внутри document
console.log(allLiEl);

const allUlOfCategoryEl = headUlEl.querySelectorAll('ul'); // найти все ul внутри headULEL
console.log(allUlOfCategoryEl);

const titleEl = headUlEl.querySelector('h2'); // найти хоть какой нибудь h2 внутри headULEL
console.log(titleEl.textContent); // достать текст из элемента titleEl (только текст)
titleEl.textContent = 'Заглавие'; // изменить текст внутри элемента titleEl на Заглавие
console.log(titleEl.textContent);

const allItems = headUlEl.querySelector('li');
console.log(allItems);
// ----------------------------
const scriptoEl = document.querySelector('script'); // найти script в document и присвоить переменной scriptoEl
console.log(scriptoEl.getAttribute('src'));
console.log(scriptoEl.src);

console.log(scriptoEl.hasAttribute('src')); // есть ли такой атрибут?
console.log(scriptoEl.hasAttribute('srca'));
console.log(scriptoEl.removeAttribute('src')); // удалить такой атрибут!
// console.log(scriptoEl.setAttribute('srca'));
// console.log(scriptoEl.hasAttribute('srca'));
// ----------------------------
const actions = document.querySelectorAll('.js-actions button'); // найти все button внутри .js-actions и присвоить переменной actions
console.log(actions);
console.log(actions[0].dataset.action); // доступ к конкретному атрибуту action элемента с индексом 2 переменной actions
// или
console.log(actions[1].getAttribute('data-action'));
console.log(actions[2].attributes); // показать все атрибуты элемента под индексом 2 в переменной actions
// ----------------------------
// у input значение хранится в свойстве value
const inputEl = document.querySelector('.js-input');
inputEl.value = 'qwerty';
console.log(inputEl.value);

// 03-classlist  ------------------------------------------------------------

const navEl = document.querySelector('.site-nav'); // находим элемент по селектору
console.log(navEl.classList); // возвращает массив из классов элемента
navEl.classList.add('super-cool', 'giveway'); // добавляет классы в элемент (не селектор)
navEl.classList.remove('site-nav', 'giveway'); // удаляет классы в элемент
// navEl.classList.toggle('super-cool'); если есть - уберет класс, если нет - добавит, полезно, когда что-то повторяется
navEl.classList.replace('super-cool', 'site-nav-super'); // замена класса на
console.log(navEl.classList.contains('super-cool')); // возвращает true или..
console.log(navEl.classList.contains('site-nav-super')); //..false от наличия
// ----------------------------
const currentPageUrl = '/about'; // присвоение /portfolio к переменной
const linkEl = document.querySelector(
  `.site-nav__link[href='${currentPageUrl}']`,
); // доступ к href с значением в переменной currentPageUrl по поиску селектора .site-nav__link
linkEl.classList.add('site-nav__link--current'); // добавляем класс
console.log(linkEl);

// 04-dom-traversal  -------------------------------------------------------

const firstNavItemEl = navEl.firstElementChild; // первый элемент внутри navEl присваеваем переменной
console.log(firstNavItemEl);
console.log(navEl.children); // псевдо-массив всех элементов внутри navEl
console.log(navEl.lastElementChild); // последний элемент внутри navEl

// 05-creating-elements  ----------------------------------------------------