
const inputEl = document.querySelector(`#name-input`)
const spanEl = document.querySelector(`#name-output`)

inputEl.addEventListener(`input`, (event) => {
    if (event.currentTarget.value === ``) {
        return spanEl.textContent = `Anonymous`;
    }    
    return spanEl.textContent = event.currentTarget.value
}) 