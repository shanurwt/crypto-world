import React, { useRef, useEffect } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import '../assets/css/Welcome.css'
import gsap from 'gsap';



function Welcome() {
    const crypto = useRef();
    useEffect(() => {
      gsap.killTweensOf(crypto, 
        {
        //   scrollTrigger:{
        //     trigger: crypto,
        //     toggleActions: "restart none none none",
        //   },
          x: 1500,
          rotation: 90,
          duration: 3,
      });
    }, [])
    
  return (
    <div className='wel_container'>
        
    <Box  className='box' sx={{ width: '100%', maxWidth: 900 }}>
        <div ref={crypto}>
      <Typography  variant="h1" align='center' component="div" gutterBottom>
        What is Crypto?
      </Typography>
      <Typography className='defination' sx={{ width: '100%', marginLeft: 15, maxWidth: 600 }} align='center'>
      <p >
      A crypto or cryptocurrency is a digital or virtual currency that is secured by cryptography, which makes it nearly impossible to counterfeit or double-spend. Many cryptocurrencies are decentralized networks based on blockchain technology—a distributed ledger enforced by a disparate network of computers. A defining feature of cryptocurrencies is that they are generally not issued by any central authority, rendering them theoretically immune to government interference or manipulation.
      </p>
      </Typography>
      </div>
      <Typography variant="h1" align='center' component="div" gutterBottom>
        What we provide?
      </Typography>
      <Typography align='center' sx={{ width: '100%', marginLeft: 15, maxWidth: 600, marginBottom: 10}}>
      We provide you the latest news about the crypto and the trending crypto's, volume gainers and losers in 24hrs, and a lot more, percentage changed in crypto and you can also search your crypto here. 
      The news is provided through crypto-news-live3 API and the everything rest is provided by coingecko API.
      </Typography>

      <Typography variant="h1" align='center' component="div" gutterBottom>
        Today's Trend
      </Typography>
    </Box>
    </div>
  )
}

export default Welcome