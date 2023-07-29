
const elements = {
    textInput: document.querySelector('#name-input'),
    outputValue: document.querySelector('#name-output'),
}
elements.textInput.addEventListener("input", onSubstituteSpan);

   function onSubstituteSpan(evt) {
    const inputValue = elements.textInput.value.trim();
    elements.outputValue.textContent = inputValue !== '' ? inputValue : 'Anonymous';
}
