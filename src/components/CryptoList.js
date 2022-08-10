import React, {useState, useEffect} from 'react'
import {CoinList, AllCoins} from './api/cryptoapi';
import '../assets/css/CrptoList.css';

function CryptoList() {

  const [item,setItem] = useState('');
  const [list_coins, setListcoins] = useState([]);
  const [all_list_coins,setAllListcoins] = useState([]);
  
  useEffect(() => {
    const fetchList_coins = async() =>{
        fetch(CoinList('inr'))
        .then(response => response.json())
        .then((data) => {
          const arr = []
          for (var i=0; i<data.length;i++){
            arr.push(data[i]);
          }
          setListcoins(arr);
        })
        .catch(err => console.log(err))
      };
      const fetchAllListcoins = async() =>{
        fetch(AllCoins('inr'))
        .then(response => response.json())
        .then((data) => {
          const arr = []
          for (var i=0; i<data.length;i++){
            arr.push(data[i])
          }
          setAllListcoins(arr);
        })
        .catch(err => console.log(err))
      }

      fetchList_coins();
      fetchAllListcoins();
  }, [])

//   console.log(list_coins);
//   console.log(all_list_coins);
  return (

    <div>
        <form className='search_box'>
            <label htmlFor="Search">Search:</label>
            <input type="text" value={item} onChange={e=> setItem(e.target.value)} />
        </form>
        { item ?
            <div className="list_container">
            <ul className='ul_list'>
            {all_list_coins.filter(coin=> coin.name.toLowerCase().startsWith(item.toLowerCase())).map((ele,ind)=> (
                <div className='list_ele' key={ind}>
                    <img className='list_ele_icon' src={ele.image} alt="First slide" />
                    <p className='ele_name'>{ele.name}</p>
                    <p className='ele_price'>{ele.current_price}₹</p>
            </div>
            ))}
            </ul>
            {/* {console.log('1st one')} */}
            </div>
        : 
        <div className="list_container">
            <ul className='ul_list'>
            {list_coins.map((ele,ind)=>(
                <div className='list_ele' key={ind}>
                    <img className='list_ele_icon' src={ele.image} alt="First slide" />
                    <p className='ele_name'>{ele.name}</p>
                    <p className='ele_price'>{ele.current_price}₹</p>
                </div>
            ))}
            </ul>
        {/* {console.log('2nd one')} */}
        </div>
       }
    </div>
  )
}

export default CryptoList