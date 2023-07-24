//Load elements from DOM: 
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Show input errors: 
const showError = (input, message) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control error'; //overwrite class name. 
}

// Event Listeners: 
form.addEventListener('submit', function(e){
    e.preventDefault(); //prevents the form from submitting
    if(username.value === ''){
        showError(username, 'Username is required');
    } else {
        showSuccess(username);
    }
})