//Load elements from DOM: 
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Show input errors: 
const showError = (input, message) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control error'; //overwrite class name
    const small = formControl.querySelector('small');
    small.innerText = message; 
}

//Show success: 
const showSuccess = (input) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//Verify email: 
const isValidEmail = (email) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(email);
}

//Check required fields
const checkRequired = (inputArr) => {
    inputArr.forEach(function(input) {
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

const getFieldName = (input) => {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


// Event Listeners: 
form.addEventListener('submit', function(e){
    e.preventDefault(); //prevents the form from submitting

    checkRequired([username, email, password, password2]);
})