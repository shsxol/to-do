const CC = require('currency-converter-lt')

let currencyConverter = new CC({from:"USD", to:"NPR" })


currencyConverter.convert().then((response) => {
    console.log(response) //or do something else
})

