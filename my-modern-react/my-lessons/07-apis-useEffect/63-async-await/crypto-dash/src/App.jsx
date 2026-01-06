import { useEffect, useState } from 'react';

const API_URL =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';


const App = () => {
  // State to hold cryptocurrency data, empty array initially
  const [coins, setCoins] = useState([]);
  // State to handle loading and error states, typically useful for HTTP requests
  // Loading is initially true (until data is fetched), error is initially null
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //async/await syntax in useEffect: is cleaner and more readable, but...
  //There is a small gotcha when learning the async/await syntax: You can't use await directly in the useEffect hook. 
  //You need to create a separate function and call it inside the useEffect hook.
  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error('Failed to fetch data');
        const data = await res.json();
        console.log(data);
        setCoins(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    // need to create a separate function and call it inside the useEffect hook:
    fetchCoins();
  }, []);


  return (
    <div >
      {/* To insert the rocket symbol, in VS Code -> Edit -> Emoji & Symbols -> type "rocket" and select the emoji */}
      <h1> 🚀 Crypto Dash</h1>
      {/* Future components will go here */}
    </div>
    
  );
}

export default App;
