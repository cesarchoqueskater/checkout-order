import { subTotalValueGenerate } from './addMinusCountProduct.js'

const $optionSelectedInformationProcessor = document.querySelectorAll('.information-processor .selection-option-label')
const $optionSelectedInformationStorage = document.querySelectorAll('.information-storage .selection-option-label')

let informationStorageValue = 0
let informationProcessorValue = 0

const arrayPricesValuesSelected = [{ "priceProcessor": 0, "priceStorage": 0, "countProduct": 1 }]

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
            informationStorageValue = item.parentElement.querySelector('.input-radio').value
            arrayPricesValuesSelected[0].priceStorage = Number(informationStorageValue)
            subTotalValueGenerate()
        })
    })
}

export function selectInformationProcessor() {
    $optionSelectedInformationProcessor.forEach((item) => {
        item.addEventListener('click', function() {
            removeAttributeInformationProcessor()
            item.setAttribute('aria-selected', true)
            item.parentElement.classList.add("selection-option-border")
            informationProcessorValue = item.parentElement.querySelector('.input-radio').value
            arrayPricesValuesSelected[0].priceProcessor = Number(informationProcessorValue)
            subTotalValueGenerate()
        })
    })
}

export function arrayValuesPrice() {
    return arrayPricesValuesSelected
}