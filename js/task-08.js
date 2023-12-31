
const formSubmit = document.querySelector('form.login-form');

formSubmit.addEventListener('submit', onFormSubmitProces);


function onFormSubmitProces(event) {
    event.preventDefault();
    const {
        elements: { email, password } } = event.currentTarget;
    
    if (email.value === '' || password.value === '') {
        alert('All fields must be filled');
        return;
    }
    const formData = {
        email: email.value,
        password: password.value
    }
    console.log(formData)
    event.currentTarget.reset();
}

