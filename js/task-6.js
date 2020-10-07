const form = document.querySelector('#validation-input');
const dataLength = Number(form.getAttribute('data-length'));

form.classList.add('invalid');

form.addEventListener('blur', onFormCheckLength);

function onFormCheckLength(event) {
  const valueLength = event.currentTarget.value.length;

  valueLength === dataLength
    ? form.classList.replace('invalid', 'valid')
    : form.classList.replace('valid', 'invalid');
}
