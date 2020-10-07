const form = document.querySelector('#validation-input');
const dataLength = Number(form.getAttribute('data-length'));

form.addEventListener('blur', onFormCheckLength);

function onFormCheckLength(event) {
  form.classList.add('invalid');
  const valueLength = event.currentTarget.value.length;

  switch (valueLength) {
    case dataLength:
      form.classList.replace('invalid', 'valid');
      break;

    case 0:
      form.classList.remove('invalid');
      break;
  }
}
