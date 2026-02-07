import { useEffect, useState } from 'react';

import CoinCard from './components/CoinCard';
import LimitSelector from './components/LimitSelector';

// Use environment variable for API URL, add the query parameters directly
// NOTE .gitignore already set to ignore .env files: here it's safe to store non-sensitive info like API endpoints ("https://api.coingecko.com/api/v3/coins/markets")
const API_URL = import.meta.env.VITE_API_URL;
// MY ADDITION: Allow displaying price with $ or EUR 
const currency = 'eur'; //usd'; 


const App = () => {
  // State to hold cryptocurrency data, empty array initially
  const [coins, setCoins] = useState([]);
  // State to handle loading and error states, typically useful for HTTP requests
  // Loading is initially true (until data is fetched), error is initially null
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //Selectors
  const [limit, setLimit] = useState(10);

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
}, [limit]);


  return (
    <div>
      <h1>🚀 Crypto Dash</h1>
      <LimitSelector limit={limit} onLimitChange={setLimit} />
      {loading && <p>Loading...</p>}
      {error && (
        <div className='error'>
          <p>❌ {error}</p>
        </div>
      )}

      {!loading && !error && (
        <main className='grid'>
          {coins.map((coin) => (
            <CoinCard coin={coin} currency={currency} key={coin.id} />
          ))}
        </main>
      )}
    </div>
  );
 
}

export default App;
