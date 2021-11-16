// console.log("Hola Mundo")


const $optionSelectedInformationProcessor = document.querySelectorAll('.information-processor div')
const $optionSelectedInformationStorage = document.querySelectorAll('.information-storage div')

selectInformationProcessor()
selectInformationStorage()

export function removeAttributeInformationProcessor() {
    $optionSelectedInformationProcessor.forEach((item) => {
        // console.log("Remover todos los aria-selected")
        item.removeAttribute('aria-selected', true)
    })
}

export function selectInformationProcessor() {

    $optionSelectedInformationProcessor.forEach((item) => {
        item.addEventListener('click', function() {
            // console.log("Remover todos los aria-selected Function")
            removeAttributeInformationProcessor()
                // console.log("Agregar el set")
            item.setAttribute('aria-selected', true)
        })
    })
}


export function removeAttributeInformationStorage() {
    $optionSelectedInformationStorage.forEach((item) => {
        item.removeAttribute('aria-selected', true)
    })
}


export function selectInformationStorage() {

    $optionSelectedInformationStorage.forEach((item) => {
        item.addEventListener('click', function() {
            removeAttributeInformationStorage()
            item.setAttribute('aria-selected', true)
        })
    })
}