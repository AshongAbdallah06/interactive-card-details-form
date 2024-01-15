// Card Information
let cardNumber = document.querySelector('.card-number');
let cardHolderName = document.querySelector('.name');
let cardDate = document.querySelector('.date');
let cardCVC = document.querySelector('.cvc');


// Inputs
const cardHolder = document.querySelector('.name-input');
const regex1 = /^[A-Z]/;

const creditCardNumber = document.querySelector('.number');
const creditCardNumberRegex = /[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}/;

const monthInput = document.querySelector('.month-input');
const yearInput = document.querySelector('.year-input');
const dateRegex = /^[0-9]{1,2}$/;

const cvcInput = document.querySelector('.cvc-input');
const cvcRegex = /^[0-9]{3}$/;


// Errors
let nameErrorMessage = document.querySelector('.error-name-message');
let ccNumberErrorMessage = document.querySelector('.error-number-message');
let monthErrorMessage = document.querySelector('.mm-error-message');
let yearErrorMessage = document.querySelector('.yy-error-message');
let cvcErrorMessage = document.querySelector('.cvc-error-message');



// Validate Functions 
function validateName() {
    if (regex1.test(cardHolder.value)) {
        cardHolder.classList.remove('error-border');
        nameErrorMessage.classList.remove('is-showing');
    } else {
        cardHolder.classList.add('error-border');
        nameErrorMessage.classList.add('is-showing');
    }
}


function validateCeditCard() {
    if (creditCardNumberRegex.test(creditCardNumber.value)) {
        creditCardNumber.classList.remove('error-border');
        ccNumberErrorMessage.classList.remove('is-showing');
    } else {
        creditCardNumber.classList.add('error-border');
        ccNumberErrorMessage.classList.add('is-showing');
    }
}


function validateDate() {
    if (+monthInput.value > 12 || !+monthInput.value.match(dateRegex)) {
        monthErrorMessage.textContent = "Invalid Input";
        monthInput.classList.add('error-border');
        monthErrorMessage.classList.add('is-showing');
    } else {
        monthErrorMessage.textContent = "";
        monthInput.classList.remove('error-border');
    }


    if (+yearInput.value < 24 || !+yearInput.value.match(dateRegex)) {
        yearErrorMessage.textContent = "Invalid Input";
        yearInput.classList.add('error-border');
        yearErrorMessage.classList.add('is-showing');
    } else {
        yearErrorMessage.textContent = "";
        yearInput.classList.remove('error-border');
    }
}


function validateCvc() {
    if (!+cvcInput.value.match(cvcRegex)) {
        cvcErrorMessage.textContent = "Invalid Input";
        cvcInput.classList.add('error-border');
        // cvcErrorMessage.classList.add('is-showing');
    } else {
        cvcErrorMessage.textContent = "";
        cvcInput.classList.remove('error-border');
    }
}



function updateCardContent() {
    // Update Card content
    cardHolderName.textContent = cardHolder.value.toUpperCase();
    cardNumber.textContent = creditCardNumber.value;
    cardDate.textContent = `${monthInput.value}/${yearInput.value}`;
    cardCVC.textContent = cvcInput.value;
}


function hideInputValues () { // Hide Input Values
    cardHolder.value = '';
    creditCardNumber.value = '';
    monthInput.value = '';
    yearInput.value = '';
    cvcInput.value = '';    
}


function checkInputBorders() {
    // Check if inputs contain border
    if (cardHolder.classList.contains('error-border') || creditCardNumber.classList.contains('error-border') || monthInput.classList.contains('error-border') || yearInput.classList.contains('error-border') || cvcInput.classList.contains('error-border')) {
        // DO nothing
    } else if (cardHolder.value === '' || creditCardNumber.value === '' || monthInput.value === '' || yearInput.value === '' || cvcInput.value === '') {
        // DO nothing
    } else {
        // Show complete message
        document.querySelector('.complete').classList.add('show-complete');


        updateCardContent();

        hideInputValues();

    }
}



// Main function
export function validateFields() {

    checkInputBorders();

    let continueBtn = document.querySelector('.continue-btn');

    // Go back
    continueBtn.addEventListener('click', () => {
        document.querySelector('.complete').classList.remove('show-complete');
    })

    validateName();

    validateCeditCard();

    validateDate();

    validateCvc();
}