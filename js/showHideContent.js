const $optionSelectedInformationProcessor = document.querySelectorAll('.information-processor .selection-option-label')
const $optionSelectedInformationStorage = document.querySelectorAll('.information-storage .selection-option-label')


// Se remueve aria-selected
export function removeAttributeInformationProcessor() {
    $optionSelectedInformationProcessor.forEach((item) => {
        item.removeAttribute('aria-selected', true)
        item.parentElement.classList.remove("selection-option-border")
    })
}

export function removeAttributeInformationStorage() {
    $optionSelectedInformationStorage.forEach((item) => {
        item.removeAttribute('aria-selected', true)
        item.parentElement.classList.remove("selection-option-border")
    })
}

// Se agrega aria-selected
export function selectInformationStorage() {
    $optionSelectedInformationStorage.forEach((item) => {
        item.addEventListener('click', function() {
            removeAttributeInformationStorage()
            item.setAttribute('aria-selected', true)
            item.parentElement.classList.add("selection-option-border")
        })
    })
}

export function selectInformationProcessor() {
    $optionSelectedInformationProcessor.forEach((item) => {
        item.addEventListener('click', function() {
            // debugger
            removeAttributeInformationProcessor()
            item.setAttribute('aria-selected', true)
            item.parentElement.classList.add("selection-option-border")
        })
    })
}