const $contentButtonLogin = document.querySelector('.content-login-button')
const $contentButtonDetails = document.querySelector('.content-details-button')


const $emailInput = document.querySelector('#email')
const $passwordInput = document.querySelector('#password')


const inputText = document.querySelectorAll('input[type="text"]')


export function removeInputDetailsAccount() {
    $contentButtonDetails.hidden = false
    $contentButtonLogin.hidden = true
    $emailInput.removeAttribute('disabled')
    $passwordInput.removeAttribute('disabled')
}

export function addInputDetailsAccount() {
    $contentButtonDetails.hidden = true
    $contentButtonLogin.hidden = false
    $emailInput.setAttribute('disabled', true)
    $passwordInput.setAttribute('disabled', true)
}


export function cleanAllInputValues() {
    inputText.forEach((input) => {
        input.value = ''
    })
}


export function cleanInputValue() {
    $emailInput.value = ''
    $passwordInput.value = ''
}