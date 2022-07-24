import React from 'react';

function CurrencyRow(props) {
    const { 
        currencyOptions
    } = props;

    return (
        <div>
            <input type="number" className="input" />
            <select>
            {currencyOptions.map(option => (
                <option value={option}>{option}</option>
            ))}
            </select>
        </div>
    )
}

export default CurrencyRow;