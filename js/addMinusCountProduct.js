import { arrayValuesPrice } from './showHideContentInformationExtra.js'

const $btnAddProduct = document.querySelector('.btn-add')
const $btnRemoveProduct = document.querySelector('.btn-minus')
const $valueCountProduct = document.querySelector('.count-product-value')
const $subTotalValue = document.querySelector('.subtotal-value-product')
const $totalValue = document.querySelector('.total-value-product')

const valueInitialProduct = 52999
const setvaluePriceSecondOptionProduct = 5500
const setvaluePriceThirdOptionProduct = 8000

const $valuePriceSecondOption = document.querySelectorAll('.second-option span')
const $valuePriceThirdOption = document.querySelector('.third-option span')

export function setvaluePriceSecondOption() {
    $valuePriceSecondOption.forEach((item) => {
        item.innerText = setvaluePriceSecondOptionProduct.toLocaleString()
    })
}

export function setvaluePriceThirdOption() {
    $valuePriceThirdOption.innerText = setvaluePriceThirdOptionProduct.toLocaleString()
}

export function addCountProduct() {
    $btnAddProduct.addEventListener('click', function() {
        console.log("Se hizo click en boton para agregar +1")
        $btnRemoveProduct.removeAttribute('disabled')
        const countProduct = Number($valueCountProduct.textContent) + 1
        $valueCountProduct.innerText = countProduct

        const pricesCharacteristicSelected = subTotalValueGenerate()
        const valueCountFinal = (valueInitialProduct * countProduct) + pricesCharacteristicSelected.valuePriceProcessor + pricesCharacteristicSelected.valuePriceStorage

        $subTotalValue.innerText = valueCountFinal.toLocaleString()
        totalProduct()
    })
}

export function substractCountProduct() {
    $btnRemoveProduct.addEventListener('click', function() {
        console.log("Se hizo click en boton para restar -1")
        if (Number($valueCountProduct.textContent) == 1) {
            Number($valueCountProduct.textContent)
            $btnRemoveProduct.setAttribute('disabled', true)
            totalProduct()
        } else {
            const countProduct = Number($valueCountProduct.textContent) - 1
            $valueCountProduct.innerText = countProduct
            const pricesCharacteristicSelected = subTotalValueGenerate()

            const valueCountFinal = (valueInitialProduct * countProduct) + pricesCharacteristicSelected.valuePriceProcessor + pricesCharacteristicSelected.valuePriceStorage
            $subTotalValue.innerText = valueCountFinal.toLocaleString()
            totalProduct()
        }
    })
}

export function totalProduct() {
    $totalValue.innerText = $subTotalValue.textContent
}


export function subTotalValueGenerate() {
    // console.log(arrayValuesPrice())
    const valuePriceProcessor = arrayValuesPrice()[0].priceProcessor
    console.log("🚀  valuePriceProcessor : ", valuePriceProcessor)
    const valuePriceStorage = arrayValuesPrice()[0].priceStorage
    console.log("🚀  valuePriceStorage : ", valuePriceStorage)


    const countProduct = Number($valueCountProduct.textContent)
    const valueCountFinal = (countProduct * valueInitialProduct) + valuePriceProcessor + valuePriceStorage

    $subTotalValue.innerText = valueCountFinal.toLocaleString()
    totalProduct()

    return { valuePriceProcessor, valuePriceStorage }
}