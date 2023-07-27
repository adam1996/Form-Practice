/*Load elements from DOM: */
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Tooltip Code -->

document.addEventListener("DOMContentLoaded", function () {
    const usernameField = document.getElementById("username");
    const passwordField = document.getElementById("password");
    const emailField = document.getElementById("email");
  
    const usernameTooltip = document.getElementById("username-tooltip");
    const passwordTooltip = document.getElementById("password-tooltip");
    const emailTooltip = document.getElementById("email-tooltip");
  
    usernameField.addEventListener("focus", function () {
      showTooltip(usernameTooltip, usernameField);
    });
  
    passwordField.addEventListener("focus", function () {
      showTooltip(passwordTooltip, passwordField);
    });

    emailField.addEventListener("focus", function () {
        showTooltip(emailTooltip, emailField);
      });
  
    function showTooltip(tooltipElement, inputField) {
      // Calculate the position of the tooltip next to the input field
      const inputRect = inputField.getBoundingClientRect();
      const leftOffset = inputRect.left + inputField.offsetWidth + 10;
      const topOffset = inputRect.top;
  
      // Position and show the tooltip
      tooltipElement.style.left = leftOffset + "px";
      tooltipElement.style.top = topOffset + "px";
      tooltipElement.style.display = "block";
    }
  
    // Hide tooltips when clicking outside the input fields
    document.addEventListener("click", function (event) {
      const target = event.target;
      if (target !== usernameField && target !== passwordField && target !== emailField) {
        usernameTooltip.style.display = "none";
        passwordTooltip.style.display = "none";
        emailTooltip.style.display = "none";
      }
    });
  });
  

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