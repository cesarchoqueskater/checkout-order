import { removeInputDetailsAccount, cleanInputValue } from './utils/setRemoveInput.js'
import { setRemoveAttributeEmailInput, setRemoveAttributePasswordInput } from './utils/setRemoveAttribute.js'
import { showHideDetailsAccount, showHideDetailsSend } from './utils/showHideComponents.js'

const $formDetailsAccount = document.querySelector('.form-details-account')

const $btnCancel = document.querySelector('.btn-cancel')
const $btnDetailsSend = document.querySelector('.btn-details-send')

const $emailInput = document.querySelector('#email')
const $passwordInput = document.querySelector('#password')

const $resultEmail = document.querySelector('.resultEmail')
const $resultPassword = document.querySelector('.resultPassword')


export function showInputFormDetailsAccount() {
    $formDetailsAccount.addEventListener('click', removeInputDetailsAccount)
}

export function cleanInputFormDetailAccount() {
    $btnCancel.addEventListener('click', cleanInputValue)
}

export function showCardDetailsSend() {
    $btnDetailsSend.addEventListener('click', showCardDetailsSendForm)
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
        setRemoveAttributeEmailInput(true)
    }

    if ($passwordInput.value.length == 0) {
        $resultPassword.innerText = 'El campo de password esta vacio'
        value = false
    } else {
        $resultPassword.innerText = ''
        setRemoveAttributePasswordInput(true)
    }

    if (value) {
        $btnDetailsSend.textContent = 'Cargando ...'
        setTimeout(() => {
            e.preventDefault()
            showHideDetailsAccount(true)
            showHideDetailsSend()
            setRemoveAttributeEmailInput()
            setRemoveAttributePasswordInput()
            $btnDetailsSend.textContent = 'Detalles de envió'
        }, 1000)
        return true
    }
    return true
}