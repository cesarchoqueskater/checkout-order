import { setRemoveAttributeNumberAddressInput, setRemoveAttributeAddressInput, setRemoveAttributeZipCodeInput } from './utils/setRemoveAttribute.js'
import { showHideDetailsSend, showHideDetailsPay, colorTextHeaderDetailsSend } from './utils/showHideComponents.js'

const $btnPay = document.querySelector('.btn-continue-pay')

const $numberAddressInput = document.querySelector('#numberAddress')
const $addressInput = document.querySelector('#address')
const $zipCodeInput = document.querySelector('#zipcode')

const $resultnumberAddress = document.querySelector('.resultnumberAddress')
const $resultAddress = document.querySelector('.resultAddress')
const $resultZipcode = document.querySelector('.resultZipcode')

export function showCardDetailsPay() {
    $btnPay.addEventListener('click', showCardDetailsPayForm)
}

export function showCardDetailsPayForm(e) {
    let value = true
    const validateNumber = /^\d+$/;

    if ($numberAddressInput.value.length == 0) {
        $resultnumberAddress.innerText = 'El campo de direccion esta vacio'
        value = false
    } else {
        $resultnumberAddress.innerText = ''
        setRemoveAttributeNumberAddressInput(true)
    }

    if ($addressInput.value.length == 0) {
        $resultAddress.innerText = 'El campo nombre de la calle esta vacio'
        value = false
    } else {
        $resultAddress.innerText = ''
        setRemoveAttributeAddressInput(true)
    }

    if ($zipCodeInput.value.length == 0) {
        $resultZipcode.innerText = 'El campo zipcode esta vacio'
        value = false
    } else if (!validateNumber.test($zipCodeInput.value)) {
        $resultZipcode.innerText = 'El campo zipcode tiene que ser númerico'
        value = false
    } else {
        $resultZipcode.innerText = ''
        setRemoveAttributeZipCodeInput(true)
    }

    if (value) {
        $btnPay.textContent = 'Cargando ...'
        setTimeout(() => {
            e.preventDefault()
            setRemoveAttributeNumberAddressInput()
            setRemoveAttributeAddressInput()
            setRemoveAttributeZipCodeInput()
            showHideDetailsSend(true)
            showHideDetailsPay()
            colorTextHeaderDetailsSend(true)
            $btnPay.textContent = 'Continuar al pago'
            return true
        }, 1000)
    }
    e.preventDefault()
    return true
}