import { validateFields } from "./validations.js";

const confirmBtn = document.querySelector('.confirm-btn');

confirmBtn.addEventListener('click', () => {

    validateFields();

})


