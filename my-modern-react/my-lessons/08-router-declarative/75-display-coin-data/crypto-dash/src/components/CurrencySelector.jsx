// MY ADDITION: Allow displaying price with $ or EUR
const CurrencySelector = ({ currency, onCurrencyChange }) => {
  return (
    <div className='controls'>
      <label htmlFor='currency'>Currency:</label>
      <select
        id='currency'
        value={currency}
        onChange={(e) => onCurrencyChange(e.target.value)}
      >
        <option value='usd'>USD</option>
        <option value='eur'>EUR</option>
        <option value='gbp'>GBP</option>
        <option value='jpy'>JPY</option>
        <option value='aud'>AUD</option>
      </select>
    </div>
  );
};

export default CurrencySelector;