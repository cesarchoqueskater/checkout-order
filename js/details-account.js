const $detailsAccount = document.querySelector('.details-account')
const $detailsSend = document.querySelector('.details-send')
const $detailsPay = document.querySelector('.details-pay')
const $contentButtonLogin = document.querySelector('.content-login-button')
const $contentButtonDetails = document.querySelector('.content-details-button')
const $formDetailsAccount = document.querySelector('.form-details-account')

const $btnCancel = document.querySelector('.btn-cancel')
const $btnDetailsSend = document.querySelector('.btn-details-send')


const $emailInput = document.querySelector('#email')
const $passwordInput = document.querySelector('#password')


const $sectionSendHeader = document.querySelector('.section-send')
const $iconBackHeader = document.querySelector('.icon-back')

const $resultEmail = document.querySelector('.resultEmail')
const $resultPassword = document.querySelector('.resultPassword')

$detailsSend.hidden = true
$detailsPay.hidden = true
$contentButtonDetails.hidden = true
$iconBackHeader.hidden = true



export function showInputFormDetailsAccount() {
    $formDetailsAccount.addEventListener('click', showInputComplete)
}

export function cleanInputFormDetailAccount() {
    $btnCancel.addEventListener('click', cleanInputValue)
}

export function showCardDetailsSend() {
    $btnDetailsSend.addEventListener('click', showCardDetailsSendForm)
}

export function showInputComplete() {
    $contentButtonDetails.hidden = false
    $contentButtonLogin.hidden = true
    $emailInput.removeAttribute('disabled')
    $passwordInput.removeAttribute('disabled')
}

export function cleanInputValue() {
    $emailInput.value = ''
    $passwordInput.value = ''
}

export function showCardDetailsSendForm(e) {

    let value = true
    const validateEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

    if ($emailInput.value.length == 0) {
        $resultEmail.innerText = 'El campo de correo esta vacio'
        value = false
    } else if (!validateEmail.test($emailInput.value)) {
        $resultEmail.innerText = 'El campo de correo no tiene la estructura de un correo'
        value = false
    } else {
        $resultEmail.innerText = ''
        $emailInput.setAttribute('aria-checked-validation', true)
    }

    if ($passwordInput.value.length == 0) {
        $resultPassword.innerText = 'El campo de password esta vacio'
        value = false
    } else {
        $resultPassword.innerText = ''
        $passwordInput.setAttribute('aria-checked-validation', true)
    }

    if (value) {
        $btnDetailsSend.textContent = 'Cargando ...'
        setTimeout(() => {
            e.preventDefault()
            $sectionSendHeader.classList.add('text-primary')
            $iconBackHeader.hidden = false
            $detailsAccount.hidden = true
            $detailsSend.hidden = false
        }, 1000)
        return true
    }
    return true
}