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

export function showCardDetailsSendForm() {
    $sectionSendHeader.classList.add('text-primary')
    $iconBackHeader.hidden = false
    $detailsAccount.hidden = true
    $detailsSend.hidden = false
}