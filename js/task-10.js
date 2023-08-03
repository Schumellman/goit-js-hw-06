function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const elements = {
  box: document.querySelector('#boxes'),
  input: document.querySelector('input'),
  createButton: document.querySelector('button[data-create]'),
  destroyButton: document.querySelector('button[data-destroy]')
}

elements.createButton.addEventListener('click', onCreateBox);
elements.destroyButton.addEventListener('click', onDestroyButton);

function onDestroyButton() {
  elements.box.innerHTML = '';
  elements.input.value = 0;
}
// add function
function onCreateBox(evt) {
  const value = Number(elements.input.value);
  function createBox(value) {
    let startWidth = 30;
    let startHigth = 30;
    let marcup = '';
    for (let i = 1; i <= value; i += 1) {
      startWidth += 10;
      startHigth += 10;
      marcup += `<div style="width: ${startWidth}px; height: ${startHigth}px; background: ${getRandomHexColor()}"></div>`
    }
    elements.box.insertAdjacentHTML('beforeend', marcup);
  }
  createBox(value);
}
