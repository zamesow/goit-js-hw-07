const form = document.querySelector('#validation-input');
const dataLength = form.getAttribute('data-length');

form.addEventListener('focus', onFormFocus);
form.addEventListener('blur', onFormCheckLength);
// form.addEventListener('input', onFormCheckLength);

function onFormFocus(event) {
  form.classList.remove('');
}

function onFormCheckLength(event) {
  const valueLength = event.currentTarget.value.length;
  form.classList.add('invalid');
  valueLength < dataLength
    ? form.classList.replace('valid', 'invalid')
    : form.classList.replace('invalid', 'valid');
}
