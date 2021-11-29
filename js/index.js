import { addCountProduct, substractCountProduct, setvaluePriceSecondOption, setvaluePriceThirdOption, subTotalValueGenerate } from './addMinusCountProduct.js'
import { selectInformationProcessor, selectInformationStorage } from './showHideContentInformationExtra.js'
import { showInputFormDetailsAccount, cleanInputFormDetailAccount, showCardDetailsSend } from './details-account.js'
import { showCardDetailsPay } from './details-send.js'
import { showCardPayConfirm, validateNumberCreditCard, showContinueBuytoHome } from './details-pay.js'
import { backSectionContent } from './utils/showHideComponents.js'


const $detailsSend = document.querySelector('.details-send')
const $detailsPay = document.querySelector('.details-pay')
const $contentButtonDetails = document.querySelector('.content-details-button')
const $iconBackHeader = document.querySelector('.icon-back')
const $payConfirmContent = document.querySelector('.pay-section')

$detailsSend.hidden = true
$detailsPay.hidden = true
$contentButtonDetails.hidden = true
$iconBackHeader.hidden = true
$payConfirmContent.hidden = true

// Selection Extra product
selectInformationProcessor()
selectInformationStorage()


// Operation add - minus count Product
addCountProduct()
substractCountProduct()
setvaluePriceSecondOption()
setvaluePriceThirdOption()

// Validate Number by Credit Card
validateNumberCreditCard()

// Show Input First Card
showInputFormDetailsAccount()

// Clean Input First Card
cleanInputFormDetailAccount()

// Show Card
showCardDetailsSend()
showCardDetailsPay()
showCardPayConfirm()

// Btn to continue Pay
showContinueBuytoHome()

// Option to back content card
backSectionContent()

// Calculate SubTotalPrice
subTotalValueGenerate()