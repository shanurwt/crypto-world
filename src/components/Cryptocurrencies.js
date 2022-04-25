import {TrendingCoins} from './api/cryptoapi'
import { useEffect , useState} from 'react';
import Header from './Carousel'

export function Cryptocurrencies (){

  const [coins, setCoins] = useState([]);
  // const url = 'https://api.coingecko.com/api/v3/coins';
  useEffect(() => {
    const fetchData = async() =>{
      fetch(TrendingCoins('inr'))
      .then(response => response.json())
      .then((data) => {
        const arr = []
        for (var i=0; i<data.length;i++){
          arr.push(data[i])
        }
        console.log(arr);
        setCoins(arr);
      })
      .catch(err => console.log(err))
    }
    fetchData()
  }, [])
  
    return (
      <div>
          <h1>Trending Coins</h1>
          <Header coins={coins}/>
      </div>
    )
  }
  