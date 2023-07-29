// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.
// const elements = {
//     inputValue: document.querySelector('#validation-input'),
//     dataValue: document.querySelector('input [data-length]'),
//     borderValid: document.querySelector('#validation-input.valid'),
//     borderInvalid: document.querySelector('#validation-input.invalid')
// }
// const expectedLength = Number(elements.dataValue);
// const enteredLength = elements.inputValue.textContent.length;

// elements.inputValue.addEventListener('blur', onBlurColorChange);

// function onBlurColorChange(evt) {
//     if (Number(elements.dataValue) === evt.currentTarget.value.length) {
//         input.classList.add('valid');
//         input.classList.remove('invalid');
//     }
//     else {
//         input.classList.add('invalid');
//         input.classList.remove('valid');
//     }

// }
const input = document.querySelector('input[data-length]');
input.addEventListener('blur', onBlurColorChange);

function onBlurColorChange(evt) {
    const expectedLength = Number(input);
    const enteredLength = input.value.length;
    f (enteredLength === expectedLength) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
//   }
}


// input.addEventListener('blur', () => {
//   const expectedLength = parseInt(input.getAttribute('data-length'));
//   const enteredLength = input.value.length;

//   if (enteredLength === expectedLength) {
//     input.classList.add('valid');
//     input.classList.remove('invalid');
//   } else {
//     input.classList.add('invalid');
//     input.classList.remove('valid');
//   }
// });
