
const inputControl = document.querySelector('#font-size-control');
const textValue = document.querySelector('#text');

const fontSizeControl = inputControl.addEventListener('input', handleFontSizeControl);


function handleFontSizeControl(event) {
    const fontSize = event.target.value;
    textValue.style.fontSize = fontSize + "px";
}









