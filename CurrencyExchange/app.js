const amountInput = document.querySelector('#amount')
const baseCurrency = document.querySelector('#baseCurrency')
const targetCurrency = document.querySelector('#targetCurrency')
const resultDisplay = document.querySelector('#result')
const convertButton = document.querySelector('#buttonConvert')

convertButton.addEventListener("click", currencyExchange)

async function currencyExchange() {
    try {
    const valInput = amountInput.value
    const valBaseCurrency = baseCurrency.value
    const valTargetCurrency = targetCurrency.value

    if(!valInput) {
        resultDisplay.textContent = 'Please enter a valid amount'
        return;
    }

    const res = await fetch(`https://api.frankfurter.app/latest?amount=${valInput}&from=${valBaseCurrency}&to=${valTargetCurrency}`)
    const data = await res.json()

    if(data.rates) {
        const convertedAmount = data.rates[valTargetCurrency].toFixed(2);
        resultDisplay.textContent = `${valInput} ${valBaseCurrency} = ${convertedAmount} ${valTargetCurrency}`
    } else {
        resultDisplay.textContent = 'Error'
    }

    } catch(err) {
        console.log('Invalid currency', err)
    }
    

}
