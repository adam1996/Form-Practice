/*Load elements from DOM: */
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
const checkEmail = (input) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
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

//Check input lengths
const checkLength = (input, min, max) => {
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters.`);
    } else if (input.value.length > max){
        showError(input, `${getFieldName(input)} must be less than ${max} characters.`);
    } else {
        showSuccess(input);
    }
}
//Check password: 
const checkPasswordMatch = (p1, p2) => {
    if (p1.value !== p2.value){
        showError(p2, 'Passwords do not match');
    }
}
const getFieldName = (input) => {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


// Event Listeners: 
form.addEventListener('submit', function(e){
    e.preventDefault(); //prevents the form from submitting

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordMatch(password, password2);
})