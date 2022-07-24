import './App.css';
import CurrencyRow from './components/CurrencyRow'

function App() {
  return (
    <>
    <h1>Convert</h1>
    <CurrencyRow />
    <div className="equal">=</div>
    <CurrencyRow />
    </>
    // fragments are empty <>.

  );
}

export default App;
