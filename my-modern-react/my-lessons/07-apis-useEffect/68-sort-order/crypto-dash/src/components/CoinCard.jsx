const CoinCard = ({ coin, currency }) => {

  //MY ADDITION: Allow displaying price different currencies
  let currencySymbol = '';
  switch (currency) {
    case 'usd':
      currencySymbol = '$';
      break;
    case 'eur':
      currencySymbol = '€';
      break;
    case 'gbp':
      currencySymbol = '£';
      break;
    case 'jpy':
      currencySymbol = '¥';
      break;
    case 'aud':
      currencySymbol = 'A$';
      break;
    default:
      currencySymbol = 'CURRENCY NOT RECOGNIZED';
  }


  return (
    <div className='coin-card' key={coin.id}>
      <div className='coin-header'>
        <img src={coin.image} alt={coin.name} className='coin-image' />
        <div>
          <h2>{coin.name}</h2>
          <p className='symbol'>{coin.symbol.toUpperCase()}</p>
        </div>
      </div>
      {/* MY ADDITION: Allow displaying price with different currency symbols */}
      <p>Price: {currencySymbol}{coin.current_price.toLocaleString()}</p>
      <p
        className={
          coin.price_change_percentage_24h >= 0 ? 'positive' : 'negative'
        }
      >
        24h Change: {coin.price_change_percentage_24h.toFixed(2)}%
      </p>
      <p>Market Cap: ${coin.market_cap.toLocaleString()}</p>
    </div>
  );
};

export default CoinCard;