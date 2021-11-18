import { addCountProduct, substractCountProduct, setvaluePriceSecondOption, setvaluePriceThirdOption, checkedInformationProcessor } from './operation.js'
import { selectInformationProcessor, selectInformationStorage } from './showHideContent.js'
import { showInputFormDetailsAccount, cleanInputFormDetailAccount, showCardDetailsSend } from './details-account.js'
import { showCardDetailsPay } from './details-send.js'


selectInformationProcessor()
selectInformationStorage()
addCountProduct()
substractCountProduct()
setvaluePriceSecondOption()
setvaluePriceThirdOption()
    // checkedInformationProcessor()

showInputFormDetailsAccount()
cleanInputFormDetailAccount()
showCardDetailsSend()
showCardDetailsPay()