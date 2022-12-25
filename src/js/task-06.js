const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener(`blur`, onInputBlur);

function onInputBlur(event, onInputBlurRemove) {
    if (event.currentTarget.value.length === Number(validationInput.dataset.length)) {
        validationInput.classList.remove(`invalid`);
        validationInput.classList.add(`valid`);
    }
    else
        if (event.currentTarget.value.length !== Number(validationInput.dataset.length)) {
        validationInput.classList.remove(`valid`);
        validationInput.classList.add(`invalid`);
    }
}
