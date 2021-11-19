const $detailsAccount = document.querySelector('.details-account')
const $detailsSend = document.querySelector('.details-send')
const $detailsPay = document.querySelector('.details-pay')

const $btnPayOrder = document.querySelector('.btn-pay-order')


const $nameCreditCardInput = document.querySelector('#nameCreditCard')
const $numberCreditCardInput = document.querySelector('#numberCreditCard')
const $monthInput = document.querySelector('#month')
const $yearInput = document.querySelector('#year')
const $cvcInput = document.querySelector('#cvc')


const $resultNameCreditCard = document.querySelector('.resultNameCreditCard')
const $resultNumberCreditCard = document.querySelector('.resultNumberCreditCard')
const $resultMonth = document.querySelector('.resultMonth')
const $resultYear = document.querySelector('.resultYear')
const $resultCVC = document.querySelector('.resultCVC')



export function validateNumberCreditCard() {
    $numberCreditCardInput.addEventListener('input', function(e) {
        if (e.target.value.length < 19) {
            e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1-').trim()
            return true
        } else {
            return true
        }
    });
}

export function showCardPayConfirm() {
    $btnPayOrder.addEventListener('click', showCardPayConfirmForm)
}

export function showCardPayConfirmForm(e) {
    let value = true
    const validateNumber = /^\d+$/;

    if ($nameCreditCardInput.value.length == 0) {
        $resultNameCreditCard.innerText = 'El campo del nombre de tarjeta esta vacio'
        value = false
    } else {
        $resultNameCreditCard.innerText = ''
        $nameCreditCardInput.setAttribute('aria-checked-validation', true)
    }

    if ($numberCreditCardInput.value.length == 0) {
        $resultNumberCreditCard.innerText = 'El campo de número de la Tarjeta esta incompleto o vacio'
        value = false
    } else {
        $resultNumberCreditCard.innerText = ''
        $numberCreditCardInput.setAttribute('aria-checked-validation', true)
    }

    if ($monthInput.value.length !== 2) {
        $resultMonth.innerText = 'El campo del mes esta incompleto o vacio'
        value = false
    } else if (!validateNumber.test($monthInput.value)) {
        $resultMonth.innerText = 'El campo mes tiene que ser númerico'
        value = false
    } else {
        $resultMonth.innerText = ''
        $monthInput.setAttribute('aria-checked-validation', true)
    }

    if ($yearInput.value.length !== 2) {
        $resultYear.innerText = 'El campo año esta incompleto o vacio'
        value = false
    } else if (!validateNumber.test($yearInput.value)) {
        $resultYear.innerText = 'El campo año tiene que ser númerico'
        value = false
    } else {
        $resultYear.innerText = ''
        $yearInput.setAttribute('aria-checked-validation', true)
    }

    if ($cvcInput.value.length !== 3) {
        $resultCVC.innerText = 'El campo CVC esta incompleto o vacio'
        value = false
    } else if (!validateNumber.test($cvcInput.value)) {
        $resultCVC.innerText = 'El campo CVC tiene que ser númerico'
        value = false
    } else {
        $resultCVC.innerText = ''
        $cvcInput.setAttribute('aria-checked-validation', true)
    }
}