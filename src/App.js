import React, {useEffect, useState} from 'react';
import './App.css';
import CurrencyRow from './components/CurrencyRow'

const BASE_URL = "https://v6.exchangerate-api.com/v6/76ee6f89d96ff7a95f220ecf/latest/USD"

function App() {
  
  const [currencyOptions, setCurrencyOptions] = useState([])

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        setCurrencyOptions([data.base, ...Object.keys(data.conversion_rates)])
      })
  }, [])

  return (
    <div className="container">
    <h1>Convert Currency</h1>
    <CurrencyRow 
      currencyOptions={currencyOptions}
    />
    <div className="equal">=</div>
    <CurrencyRow 
      currencyOptions={currencyOptions}
    />
    </div>
    // fragments are empty <>.

    

  );
}

export default App;
