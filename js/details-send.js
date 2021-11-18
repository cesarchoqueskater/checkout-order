const $detailsAccount = document.querySelector('.details-account')
const $detailsSend = document.querySelector('.details-send')
const $detailsPay = document.querySelector('.details-pay')

const $btnPay = document.querySelector('.btn-continue-pay')


const $sectionPayHeader = document.querySelector('.section-pay')


export function showCardDetailsPay() {
    $btnPay.addEventListener('click', function(e) {
        showCardDetailsPayForm(e)
    })
}


export function showCardDetailsPayForm(e) {
    e.preventDefault()
    $sectionPayHeader.classList.add('text-primary')
    $detailsSend.hidden = true
    $detailsPay.hidden = false
}