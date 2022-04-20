import {useEffect} from 'react';
import {options} from './api/newsapi'

const News = ()=> {
    useEffect(() => {
        const url = 'https://crypto-news-live3.p.rapidapi.com/news'
        const fetchData = async () => {
            
              const response = await fetch(url,options);
              const json = await response.json();
              console.log(json);
            }
        
      
          fetchData();
    }, []);
    
    return (
      <div>
          <h1>News</h1>
      </div>
    )
  }
  export {News};