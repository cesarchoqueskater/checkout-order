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


const $info = document.querySelectorAll('.information-processor .selection-option .input-radio')

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

        // const valueOptionInformationProcessor = checkedInformationProcessor()

        // Imprimo cantidad del producto
        const countProduct = Number($valueCountProduct.textContent) + 1
        $valueCountProduct.innerText = countProduct


        const valueCountFinal = (valueInitialProduct * countProduct)

        // const valueFinal = valueCountFinal + valueOptionInformationProcessor
        $subTotalValue.innerText = valueCountFinal.toLocaleString()
        totalProduct()
    })
}

export function actualizad() {

}

export function substractCountProduct() {
    $btnRemoveProduct.addEventListener('click', function() {
        console.log("Se hizo click en boton para restar -1")
        if (Number($valueCountProduct.textContent) == 1) {
            Number($valueCountProduct.textContent)
            totalProduct()
        } else {
            const countProduct = Number($valueCountProduct.textContent) - 1
            $valueCountProduct.innerText = countProduct

            const valueCountFinal = valueInitialProduct * countProduct
            $subTotalValue.innerText = valueCountFinal.toLocaleString()
            totalProduct()
        }
    })
}

export function totalProduct() {
    $totalValue.innerText = $subTotalValue.textContent
}


export function checkedInformationProcessor() {

    let valueSelected = 0

    $info.forEach((item) => {
        item.addEventListener('click', function() {
            if (item.checked) {
                // console.log(item.value);
                valueSelected = item.value
                    // debugger
                    // let result = Number($subTotalValue.textContent) + Number(valueSelected)
                    // debugger
                $subTotalValue.innerText = result.toLocaleString()
            } else {
                console.log("noo")
            }

        })
    })
    return Number(valueSelected);
    // console.log(valorRescatable)
}