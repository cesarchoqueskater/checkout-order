const $detailsAccount = document.querySelector('.details-account')
const $detailsSend = document.querySelector('.details-send')
const $detailsPay = document.querySelector('.details-pay')

const $btnPay = document.querySelector('.btn-continue-pay')

const $numberAddressInput = document.querySelector('#numberAddress')
const $addressInput = document.querySelector('#address')
const $zipCodeInput = document.querySelector('#zipcode')

const $sectionPayHeader = document.querySelector('.section-pay')

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
        $numberAddressInput.setAttribute('aria-checked-validation', true)
    }

    if ($addressInput.value.length == 0) {
        $resultAddress.innerText = 'El campo nombre de la calle esta vacio'
        value = false
    } else {
        $resultAddress.innerText = ''
        $addressInput.setAttribute('aria-checked-validation', true)
    }

    if ($zipCodeInput.value.length == 0) {
        $resultZipcode.innerText = 'El campo zipcode esta vacio'
        value = false
    } else if (!validateNumber.test($zipCodeInput.value)) {
        $resultZipcode.innerText = 'El campo zipcode tiene que ser númerico'
        value = false
    } else {
        $resultZipcode.innerText = ''
        $zipCodeInput.setAttribute('aria-checked-validation', true)
    }

    if (value) {
        $btnPay.textContent = 'Cargando ...'
        setTimeout(() => {
            e.preventDefault()
            $sectionPayHeader.classList.add('text-primary')
            $detailsSend.hidden = true
            $detailsPay.hidden = false
            return true
        }, 1000)
    }
    return true
}