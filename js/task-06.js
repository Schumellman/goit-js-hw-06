
const input = document.querySelector('input[data-length]');
input.addEventListener('blur', onBlurColorChange);

function onBlurColorChange(evt) {
  evt.preventDefault();
  const expectedLength = parseInt(input.getAttribute('data-length'));
  const enteredLength = input.value.length;
  if (enteredLength === expectedLength) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  }
  else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
  
};
