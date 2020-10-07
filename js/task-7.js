const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputEl.addEventListener('cange', onChangeSizeFont);

function onChangeSizeFont(event) {
  spanEl.style.fontSize = event.currentTarget.value + 'px';
}
