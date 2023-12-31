function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

const elements = {
  bodyElement: document.querySelector('body'),
  clickButton: document.querySelector('.change-color'),
  resultSpan: document.querySelector('.color'),
}

elements.clickButton.addEventListener('click', onChangeColor);

function onChangeColor() {
  elements.bodyElement.style.backgroundColor = getRandomHexColor();
  elements.resultSpan.textContent = getRandomHexColor();
}