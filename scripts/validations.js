const cardHolderName = document.querySelector('.name-input');
const regex1 = /^[A-Z]/;

const creditCardNumber = document.querySelector('.number');
const creditCardNumberRegex = /[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}/;

const monthInput = document.querySelector('.month');
const yearInput = document.querySelector('.year');
const dateRegex = /^[0-9]{1,2}$/;

const cvcInput = document.querySelector('.cvc-input');
const cvcRegex = /^[0-9]{3}$/;


let nameErrorMessage = document.querySelector('.error-name-message');
let ccNumberErrorMessage = document.querySelector('.error-number-message');
let monthErrorMessage = document.querySelector('.error-month-message');
let yearErrorMessage = document.querySelector('.error-year-message');
let cvcErrorMessage = document.querySelector('.error-cvc-message');




function validateName() {
    if (regex1.test(cardHolderName.value)) {
        cardHolderName.classList.remove('error-border');
        nameErrorMessage.classList.remove('is-showing');
    } else {
        cardHolderName.classList.add('error-border');
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
        cvcErrorMessage.classList.add('is-showing');
    } else {
        cvcErrorMessage.textContent = "";
        cvcInput.classList.remove('error-border');
    }
}


export function validateFields() {
    if (cardHolderName.classList.contains('error-border') || creditCardNumber.classList.contains('error-border') || monthInput.classList.contains('error-border') || yearInput.classList.contains('error-border') || cvcInput.classList.contains('error-border')) {
        // DO nothing
    } else if (cardHolderName.value === '' || creditCardNumber.value === '' || monthInput.value === '' || yearInput.value === '' || cvcInput.value === '') {
        // DO nothing
    } else {
        document.querySelector('.complete').classList.add('show-complete');
        cardHolderName.value = '';
        creditCardNumber.value = '';
        monthInput.value = '';
        yearInput.value = '';
        cvcInput.value = '';
    }


    let continueBtn = document.querySelector('.continue-btn');

    continueBtn.addEventListener('click', () => {
        document.querySelector('.complete').classList.remove('show-complete');
    })

    validateName();

    validateCeditCard();

    validateDate();

    validateCvc();
}