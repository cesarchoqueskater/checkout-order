const $detailsContent = document.querySelector('.details-order-content')
const $summaryContent = document.querySelector('.summary-order-content')


const $detailsAccount = document.querySelector('.details-account')
const $detailsSend = document.querySelector('.details-send')
const $detailsPay = document.querySelector('.details-pay')


const $iconBackHeader = document.querySelector('.icon-back')

const $headerDetailsSend = document.querySelector('.section-send')
const $headerDetailsPay = document.querySelector('.section-pay')

export function showHideDetailsOrderContent(value) {
    if (value) {
        $detailsContent.hidden = true
        return true
    } else {
        $detailsContent.hidden = false
        return true
    }
}

export function showHideSummaryOrderContent(value) {
    if (value) {
        $summaryContent.hidden = true
        return true
    } else {
        $summaryContent.hidden = false
        return true
    }
}

export function showHideDetailsAccount(value) {
    if (value) {
        $detailsAccount.hidden = true
        return true
    } else {
        $detailsAccount.hidden = false
        return true
    }
}

export function showHideDetailsSend(value) {
    if (value) {
        $detailsSend.hidden = true
        $headerDetailsSend.classList.remove('text-primary')
        return true
    } else {
        $detailsSend.hidden = false
        $iconBackHeader.hidden = false
        $headerDetailsSend.classList.add('text-primary')
        return true
    }
}

export function showHideDetailsPay(value) {
    if (value) {
        $detailsPay.hidden = true
        $headerDetailsPay.classList.remove('text-primary')
        return true
    } else {
        $detailsPay.hidden = false
        $iconBackHeader.hidden = false
        $headerDetailsPay.classList.add('text-primary')
        return true
    }
}

export function colorTextHeaderDetailsSend(value) {
    if (value) {
        $headerDetailsSend.classList.add('text-primary')
    } else {
        $headerDetailsSend.classList.remove('text-primary')
    }
}

export function backSectionContent() {

    $iconBackHeader.addEventListener('click', function() {
        const $optionHeader = document.querySelector('.section-pay.text-primary')

        if ($optionHeader) {
            showHideDetailsSend()
            showHideDetailsAccount(true)
            showHideDetailsPay(true)
            colorTextHeaderDetailsSend(true)
        } else {
            showHideDetailsSend(true)
            showHideDetailsAccount()
        }
    })
}