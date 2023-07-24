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
  


// Event Listeners: 
form.addEventListener('submit', function(e){
    e.preventDefault(); //prevents the form from submitting
    if(username.value === ''){
        showError(username, 'Username is required');
    } else {
        showSuccess(username);
    }

    if(email.value === ''){
        showError(email, 'Email is required');
    } else if (!isValidEmail(email.value)){
        showError(email, 'Email enterered does not seem correct, please try again');
    } else {
        showSuccess(email);
    }

    if(password.value === ''){
        showError(password, 'Password is required');
    } else {
        showSuccess(password);
    }

    if(password2.value === ''){
        showError(password2, 'Password is required');
    } else {
        showSuccess(password2);
    }
})