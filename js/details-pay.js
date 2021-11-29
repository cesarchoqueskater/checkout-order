import { cleanInputValue, addInputDetailsAccount, cleanAllInputValues } from './utils/setRemoveInput.js'
import { showHideDetailsOrderContent, showHideSummaryOrderContent, showHideDetailsAccount, showHideDetailsSend, showHideDetailsPay } from './utils/showHideComponents.js'
import { setRemoveAttributeNameCreditCardInput, setRemoveAttributeNumberCreditCardInput, setRemoveAttributeMonthInput, setRemoveAttributeYearInput, setRemoveAttributeCVCInput } from './utils/setRemoveAttribute.js';

const $payConfirmContent = document.querySelector('.pay-section')


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

const $wrapperContent = document.querySelector('.wrapper')
const $btnContinue = document.querySelector('.btn-continue')


const $iconBackHeader = document.querySelector('.icon-back')

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

export function showCardPayConfirmForm(e) {
    let value = true
    const validateNumber = /^\d+$/;

    if ($nameCreditCardInput.value.length == 0) {
        $resultNameCreditCard.innerText = 'El campo del nombre de tarjeta esta vacio'
        value = false
    } else {
        $resultNameCreditCard.innerText = ''
        setRemoveAttributeNameCreditCardInput(true)
    }

    if ($numberCreditCardInput.value.length !== 19) {
        $resultNumberCreditCard.innerText = 'El campo de número de la Tarjeta esta incompleto o vacio'
        value = false
    } else {
        $resultNumberCreditCard.innerText = ''
        setRemoveAttributeNumberCreditCardInput(true)
    }

    if ($monthInput.value.length !== 2) {
        $resultMonth.innerText = 'El campo del mes esta incompleto o vacio'
        value = false
    } else if (!validateNumber.test($monthInput.value)) {
        $resultMonth.innerText = 'El campo mes tiene que ser númerico'
        value = false
    } else {
        $resultMonth.innerText = ''
        setRemoveAttributeMonthInput(true)
    }

    if ($yearInput.value.length !== 2) {
        $resultYear.innerText = 'El campo año esta incompleto o vacio'
        value = false
    } else if (!validateNumber.test($yearInput.value)) {
        $resultYear.innerText = 'El campo año tiene que ser númerico'
        value = false
    } else {
        $resultYear.innerText = ''
        setRemoveAttributeYearInput(true)
    }

    if ($cvcInput.value.length !== 3) {
        $resultCVC.innerText = 'El campo CVC esta incompleto o vacio'
        value = false
    } else if (!validateNumber.test($cvcInput.value)) {
        $resultCVC.innerText = 'El campo CVC tiene que ser númerico'
        value = false
    } else {
        $resultCVC.innerText = ''
        setRemoveAttributeCVCInput(true)
    }
    if (value) {
        $btnPayOrder.textContent = 'Procesando Pago ...'
        setTimeout(() => {
            e.preventDefault()
            showHideDetailsOrderContent(true)
            showHideSummaryOrderContent(true)
            $wrapperContent.style.display = 'none'
            $payConfirmContent.hidden = false
            setRemoveAttributeNameCreditCardInput()
            setRemoveAttributeNumberCreditCardInput()
            setRemoveAttributeMonthInput()
            setRemoveAttributeYearInput()
            setRemoveAttributeCVCInput()
            $btnPayOrder.textContent = 'Pagar ahora'
            return true
        }, 1000);
    }
    e.preventDefault()
    return true
}




export function showCardPayConfirm() {
    $btnPayOrder.addEventListener('click', showCardPayConfirmForm)
}

export function showContinueBuytoHome() {
    $btnContinue.addEventListener('click', function() {
        cleanAllInputValues()
        cleanInputValue()
        addInputDetailsAccount()
        $wrapperContent.style.display = 'block'
        showHideDetailsOrderContent()
        showHideSummaryOrderContent()
        showHideDetailsAccount()
        showHideDetailsSend(true)
        showHideDetailsPay(true)
        $iconBackHeader.hidden = true
        $payConfirmContent.hidden = true

    })
}