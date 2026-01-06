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

  //useEffect to fetch data when the component mounts, empty dependency array indicates it runs only once
  //We will use the fetch function to make the request. 
  //We use the .then() syntax and later will refactor to async/await, because there are a few gotchas.
  useEffect(() => {
      fetch(API_URL)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Failed to fetch data');
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setCoins(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
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
