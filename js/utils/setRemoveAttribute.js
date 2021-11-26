const $emailInput = document.querySelector('#email')
const $passwordInput = document.querySelector('#password')
const $numberAddressInput = document.querySelector('#numberAddress')
const $addressInput = document.querySelector('#address')
const $zipCodeInput = document.querySelector('#zipcode')
const $nameCreditCardInput = document.querySelector('#nameCreditCard')
const $numberCreditCardInput = document.querySelector('#numberCreditCard')
const $monthInput = document.querySelector('#month')
const $yearInput = document.querySelector('#year')
const $cvcInput = document.querySelector('#cvc')

export function setRemoveAttributeEmailInput(value) {
    if (value) {
        $emailInput.setAttribute('aria-checked-validation', true)
        return true
    } else {
        $emailInput.removeAttribute('aria-checked-validation')
        return true
    }
}

export function setRemoveAttributePasswordInput(value) {
    if (value) {
        $passwordInput.setAttribute('aria-checked-validation', true)
        return true
    } else {
        $passwordInput.removeAttribute('aria-checked-validation')
        return true
    }
}


export function setRemoveAttributeNumberAddressInput(value) {
    if (value) {
        $numberAddressInput.setAttribute('aria-checked-validation', true)
        return true
    } else {
        $numberAddressInput.removeAttribute('aria-checked-validation')
        return true
    }
}

export function setRemoveAttributeAddressInput(value) {
    if (value) {
        $addressInput.setAttribute('aria-checked-validation', true)
        return true
    } else {
        $addressInput.removeAttribute('aria-checked-validation')
        return true
    }
}

export function setRemoveAttributeZipCodeInput(value) {
    if (value) {
        $zipCodeInput.setAttribute('aria-checked-validation', true)
        return true
    } else {
        $zipCodeInput.removeAttribute('aria-checked-validation')
        return true
    }
}

export function setRemoveAttributeNameCreditCardInput(value) {
    if (value) {
        $nameCreditCardInput.setAttribute('aria-checked-validation', true)
        return true
    } else {
        $nameCreditCardInput.removeAttribute('aria-checked-validation')
        return true
    }
}


export function setRemoveAttributeNumberCreditCardInput(value) {
    if (value) {
        $numberCreditCardInput.setAttribute('aria-checked-validation', true)
        return true
    } else {
        $numberCreditCardInput.removeAttribute('aria-checked-validation')
        return true
    }
}


export function setRemoveAttributeMonthInput(value) {
    if (value) {
        $monthInput.setAttribute('aria-checked-validation', true)
        return true
    } else {
        $monthInput.removeAttribute('aria-checked-validation')
        return true
    }
}


export function setRemoveAttributeYearInput(value) {
    if (value) {
        $yearInput.setAttribute('aria-checked-validation', true)
        return true
    } else {
        $yearInput.removeAttribute('aria-checked-validation')
        return true
    }
}


export function setRemoveAttributeCVCInput(value) {
    if (value) {
        $cvcInput.setAttribute('aria-checked-validation', true)
        return true
    } else {
        $cvcInput.removeAttribute('aria-checked-validation')
        return true
    }
}