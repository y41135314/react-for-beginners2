import { useState, useEffect } from "react";

function App() {

  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [exchange, setExchange] = useState(0);
  const [trans, setTrans] = useState(0);

  // init 시에만 코인 목록 불러오기
  useEffect(()=> {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then( json => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const onChange = (event) =>{
    setExchange(event.target.value);
    let price = 0;
    if(coins.length > 0){
      price = coins.filter((itm) => itm.name === 'Bitcoin')[0].quotes.USD.price;
    }

    setTrans(exchange/price);
  }

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? 
        <strong>Loading...</strong> : 
        (
          <select>
            {coins.map((coin) => (
              <option key={coin.id} value={coin.symbol}>{coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD</option>
            ))}
          </select>
        )
      }

      <input value={exchange} onChange={onChange}/>
      <h2>{trans}</h2>

      

      
    </div>
  );
}

export default App;
