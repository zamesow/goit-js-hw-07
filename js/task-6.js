const form = document.querySelector('#validation-input');
const dataLength = Number(form.getAttribute('data-length'));

form.addEventListener('blur', onFormCheckLength);

function onFormCheckLength(event) {
  const valueLength = event.currentTarget.value.length;

  switch (valueLength) {
    case dataLength:
      form.classList.replace('invalid', 'valid');
      break;

    default:
      form.classList.add('invalid');
      form.classList.replace('valid', 'invalid');
      break;
  }
}
