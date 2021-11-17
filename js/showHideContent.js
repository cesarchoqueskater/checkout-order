const $optionSelectedInformationProcessor = document.querySelectorAll('.information-processor .selection-option-label')
const $optionSelectedInformationStorage = document.querySelectorAll('.information-storage .selection-option-label')


// Se remueve aria-selected
export function removeAttributeInformationProcessor() {
    $optionSelectedInformationProcessor.forEach((item) => {
        item.removeAttribute('aria-selected', true)
    })
}

export function removeAttributeInformationStorage() {
    $optionSelectedInformationStorage.forEach((item) => {
        item.removeAttribute('aria-selected', true)
    })
}

// Se agrega aria-selected
export function selectInformationStorage() {
    $optionSelectedInformationStorage.forEach((item) => {
        item.addEventListener('click', function() {
            removeAttributeInformationStorage()
            item.setAttribute('aria-selected', true)
        })
    })
}

export function selectInformationProcessor() {
    $optionSelectedInformationProcessor.forEach((item) => {
        item.addEventListener('click', function() {
            removeAttributeInformationProcessor()
            item.setAttribute('aria-selected', true)
        })
    })
}