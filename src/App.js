import React, {useEffect, useState} from 'react';
import './App.css';
import CurrencyRow from './components/CurrencyRow'

const BASE_URL = "https://v6.exchangerate-api.com/v6/76ee6f89d96ff7a95f220ecf/latest/USD"

function App() {
  
  const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [exchangeRate, setExchangeRate] = useState()
  const [amount, setAmount] = useState(1)
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

  let toAmount, fromAmount

  if (amountInFromCurrency) {
    fromAmount = amount
    toAmount = (amount * exchangeRate)
  } else {
    toAmount = amount
    fromAmount = (amount / exchangeRate)
  }

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        const firstCurrency = Object.keys(data.conversion_rates)[0]
        setCurrencyOptions([data.base, ...Object.keys(data.conversion_rates)])
        setFromCurrency(data.base)
        setToCurrency(firstCurrency)
        setExchangeRate(data.conversion_rates[firstCurrency])
      })
  }, [])

  function handleFromAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(true)
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(false)
  }

  return (
    <div className="container">
    <h1>Convert Currency</h1>
    <CurrencyRow 
      currencyOptions={currencyOptions}
      selectedCurrency={toCurrency} 
      onChangeCurrency={e => setFromCurrency(e.target.value)}
      onChangeAmount={handleFromAmountChange}
      amount={fromAmount}
    />
    <div className="equal">=</div>
    <CurrencyRow 
      currencyOptions={currencyOptions}
      selectedCurrency={fromCurrency}
      onChangeCurrency={e => setToCurrency(e.target.value)}
      onChangeAmount={handleToAmountChange}
      amount={toAmount}
    />
    </div>
    // fragments are empty <>.
  );
}

export default App;
