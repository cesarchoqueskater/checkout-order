// console.log("Hola Mundo")


const $optionSelectedInformationProcessor = document.querySelectorAll('.information-processor div')
const $optionSelectedInformationStorage = document.querySelectorAll('.information-storage div')
const $btnAddProduct = document.querySelector('.btn-add')
const $btnRemoveProduct = document.querySelector('.btn-minus')
const $valueCountProduct = document.querySelector('.count-product-value')


selectInformationProcessor()
selectInformationStorage()
addCountProduct()
substractCountProduct()

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

export function addCountProduct() {
    $btnAddProduct.addEventListener('click', function() {
        console.log("Se hizo click en boton para agregar +1")
        let countProduct = Number($valueCountProduct.textContent) + 1
        $valueCountProduct.innerText = countProduct
    })
}

export function substractCountProduct() {
    $btnRemoveProduct.addEventListener('click', function() {
        console.log("Se hizo click en boton para restar -1")
        let countProduct;
        if (Number($valueCountProduct.textContent) == 0) {
            Number($valueCountProduct.textContent)
        } else {
            let countProduct = Number($valueCountProduct.textContent) - 1
            $valueCountProduct.innerText = countProduct
        }

    })
}