// Takes in USD give back CAD
// e.g 23 USD is worth XX CAD , you can spend these in the follwing countries


// api 1 http://api.fixer.io/latest, 
// http://api.fixer.io/latest?base=USD

// api 2 https://restcountries.eu/rest/v2/currency/{currency}

const axios = require('axios');

const getExchangeRate = (from, to) => {
    return axios.get(`http://api.fixer.io/latest?base=${from}`)
        .then((res) => {
            return res.data.rates[to]
        })    
}

const getCountries = (currencyCode) => {
    return axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`)
        .then((res) => {
            return countries = res.data.map((country) => country.name)
        })
}

const convertCurrency = (from, to , amount) => {
    return getCountries(to).then((countries) => {
        return getExchangeRate(from,to)
    }).then((rate) => {
        return `${amount} ${from} is worth ${rate * amount} ${to}, ${to} can be spent in ${countries.join(',')}`;
    })
}

const convertCurrencyAlt = async (from, to, amount) => {
    const countries = await getCountries(to);
    const rate = await getExchangeRate(from, to);
    return `${amount} ${from} is worth ${rate * amount} ${to}, ${to} can be spent in ${countries.join(',')}`;
}

// getExchangeRate('USD', 'CAD').then((res) => {
//     console.log(res);
// })

// getCountries('CAD').then(res => console.log(res));

// convertCurrency('USD', 'CAD', 100).then((res) => {
//     console.log(res)
// })


convertCurrencyAlt('USD', 'CAD', 100).then((res) => {
    console.log(res)
})