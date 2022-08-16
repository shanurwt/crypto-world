import React, {useState, useEffect} from 'react'
import {CoinList, AllCoins, TopSeven, VolInc, VolDec} from './api/cryptoapi';
import '../assets/css/CrptoList.css';

export default function CryptoList() {

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

    <div className='cryptolist-container'>
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


// TopCryptos starts from here


export function TopCryptos(){

  const [top_sev, setTop_seven] = useState([])

  useEffect(() => {
    const top_seven = async() =>{
      fetch(TopSeven())
      .then(response => response.json())
      .then((data) => {const arr = []
        for (var i=0; i<5;i++){
          arr.push(data.coins[i]);
        }
        setTop_seven(arr);})
      .catch(err => console.log(err))
    };
    top_seven();
  },[])
  return (
  
  <div>
            <ul className='top_list'>
            {top_sev.map((ele,ind)=>(
                <li className='top_ele' key={ind}>
                    <p className='vol_index'>{ind+1}.</p>
                    <img className='volume_images' src={ele.item.small} alt="" srcset="" />
                    <p className='vol_ele_name'>{ele.item.name}</p>
                </li>
            ))}
            </ul>
        </div>
  )
}


// VolumeInc starts from here



export function VolumeInc(){

  const [vol_inc, setTop_seven] = useState([])

  useEffect(() => {
    const top_seven = async() =>{
      fetch(VolInc())
      .then(response => response.json())
      .then((data) => {setTop_seven(data)})
      .catch(err => console.log(err))
    };
    top_seven();
  },[]);
console.log(vol_inc);
  return (
  
  <div>
            <ul className='top_list'>
            {vol_inc.map((ele,ind)=>(
                <li className='vol_ele' key={ind}>
                    <p  className='vol_index' >{ind+1}.</p>
                    <img className='volume_images' src={ele.image} alt="" srcset="" />
                    <p className='vol_ele_name'>{ele.name}</p>
                </li>
            ))}
            </ul>
        </div>
  )
}


// Volume Dec Starts from here


export function VolumeDec(){

  const [vol_inc, setTop_seven] = useState([])

  useEffect(() => {
    const top_seven = async() =>{
      fetch(VolDec())
      .then(response => response.json())
      .then((data) => {setTop_seven(data)})
      .catch(err => console.log(err))
    };
    top_seven();
  },[]);
console.log(vol_inc);
  return (
  
  <div>
            <ul className='top_list'>
            {vol_inc.map((ele,ind)=>(
                <li className='vol_ele' key={ind}>
                <p  className='vol_index' >{ind+1}.</p>
                <img className='volume_images' src={ele.image} alt="" srcset="" />
                <p className='vol_ele_name'>{ele.name}</p>
            </li>
            ))}
            </ul>
        </div>
  )
}