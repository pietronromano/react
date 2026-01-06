import { useEffect, useState } from 'react';

import CoinCard from './components/CoinCard';
import LimitSelector from './components/LimitSelector';
import FilterInput from './components/FilterInput';
import SortSelector from './components/SortSelector';
import CurrencySelector from './components/CurrencySelector';

// Use environment variable for API URL, add the query parameters directly
// NOTE .gitignore already set to ignore .env files: here it's safe to store non-sensitive info like API endpoints ("https://api.coingecko.com/api/v3/coins/markets")
const API_URL = import.meta.env.VITE_API_URL;



const App = () => {
  // State to hold cryptocurrency data, empty array initially
  const [coins, setCoins] = useState([]);
  // State to handle loading and error states, typically useful for HTTP requests
  // Loading is initially true (until data is fetched), error is initially null
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //Selectors
  const [limit, setLimit] = useState(10);
  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState('market_cap_desc');
  // MY ADDITION: Allow displaying price with $ or EUR 
  const [currency, setCurrency] = useState('eur');  //usd'; 

  //async/await syntax in useEffect: is cleaner and more readable, but...
  //There is a small gotcha when learning the async/await syntax: You can't use await directly in the useEffect hook. 
  //You need to create a separate function and call it inside the useEffect hook.
  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch(
          `${API_URL}?vs_currency=${currency}&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false`
          
        );
        if (!res.ok) throw new Error('Failed to fetch data');
        const data = await res.json();
        setCoins(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCoins();
    //Now, we need to update the API call to use the `limit` state. 
    // Update the API call to include the `limit` parameter. you also want this to run whenever the `limit` state changes. 
    //So, update the `useEffect` hook to include the `limit` state as a dependency:
    //MY ADDITION: Also add currency as dependency
  }, [limit, currency]);

  const filteredCoins = coins
  .filter(
    (coin) =>
      coin.name.toLowerCase().includes(filter.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(filter.toLowerCase())
  )
  .slice() // 🔥 Important: make a shallow copy before sorting!
  .sort((a, b) => {
    switch (sortBy) {
      case 'market_cap_desc':
        return b.market_cap - a.market_cap;
      case 'price_desc':
        return b.current_price - a.current_price;
      case 'price_asc':
        return a.current_price - b.current_price;
      case 'change_desc':
        return b.price_change_percentage_24h - a.price_change_percentage_24h;
      case 'change_asc':
        return a.price_change_percentage_24h - b.price_change_percentage_24h;
      default:
        return 0;
    }
  });

  return (
    <div>
      <h1>🚀 Crypto Dash</h1>
       <div className='top-controls'>
        <FilterInput filter={filter} onFilterChange={setFilter} />
        <LimitSelector limit={limit} onLimitChange={setLimit} />
        <SortSelector sortBy={sortBy} onSortChange={setSortBy} />
        <CurrencySelector currency={currency} onCurrencyChange={setCurrency} />
      </div>
      {loading && <p>Loading...</p>}
      {error && (
        <div className='error'>
          <p>❌ {error}</p>
        </div>
      )}

      {/* Make sure that if there is a filter input, we map over those instead of all coins: */}
       {!loading && !error && (
        <div className='grid'>
          {filteredCoins.length > 0 ? (
            filteredCoins.map((coin) => <CoinCard coin={coin} currency={currency} key={coin.id} />)
          ) : (
            <p>No coins match your filter.</p>
          )}
        </div>
      )};
    </div>
  );
 
}

export default App;
