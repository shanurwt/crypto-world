import React, { useRef, useLayoutEffect } from 'react'
import '../assets/css/Welcome.css'
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Welcome() {
    const crypto = useRef();
    const cdef = useRef();
    const ser = useRef();
    const serdef = useRef();

    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
      var well = gsap.timeline();
 
      well.from(crypto.current, 
        {
          opacity: 0,
          ease: "none",
        });
        well.to(crypto.current, 
        {
          opacity: 1,
          duration: 3,
          y: -200,
          ease:"easeIn",
          scrollTrigger: {
            trigger: crypto.current,
            start: "top center",
            end: "bottom center",
            // markers:true,
            pin:true,
            toggleActions: "play reset resume reset",
          },
        },
      );


      well.from(cdef.current, 
        {
          opacity: 0,
          ease: "none",
        });
        well.to(cdef.current, 
        {
          opacity: 1,
          duration: 3,
          y: -300,
          ease:"easeIn",
          scrollTrigger: {
            trigger: cdef.current,
            start: "-200 center",
            end: "bottom center",
            // markers:true,
            pin:true,
            toggleActions: "play reset resume reset",
          },
        },
      );

      well.from(ser.current, 
        {
          opacity: 0,
          ease: "none",
        });
        well.to(ser.current, 
        {
          opacity: 1,
          duration: 3,
          y: -300,
          ease:"easeIn",
          scrollTrigger: {
            trigger: ser.current,
            start: "-200 center",
            end: "bottom center",
            // markers:true,
            pin:true,
            toggleActions: "play reset resume reset",
          },
        },
      );

      well.from(serdef.current, 
        {
          opacity: 0,
          ease: "none",
        });
        well.to(serdef.current, 
        {
          opacity: 1,
          duration: 3,
          y: -300,
          ease:"easeIn",
          scrollTrigger: {
            trigger: serdef.current,
            start: "-200 center",
            end: "bottom center",
            // markers:true,
            pin:true,
            toggleActions: "play reset resume reset",
          },
        },
      );
    }, [])
    
  return (
    <div  className='wel_container'>
        <div >
          <h1 ref={crypto} className='ques1'>
          What is Crypto?
          </h1>
        </div>
        <div ref={cdef} >
          <p  className='defination'>
          A crypto or cryptocurrency is a digital or virtual currency that is secured by cryptography, which makes it nearly impossible to counterfeit or double-spend. Many cryptocurrencies are decentralized networks based on blockchain technology—a distributed ledger enforced by a disparate network of computers. A defining feature of cryptocurrencies is that they are generally not issued by any central authority, rendering them theoretically immune to government interference or manipulation.
          </p>
          </div>
        <div>
            <h1 ref={ser} className='ques2'>
                What we provide?
            </h1>
            <p ref={serdef} className='defination'>
            We provide you the latest news about the crypto and the trending crypto's, volume gainers and losers in 24hrs, and a lot more, percentage changed in crypto and you can also search your crypto here. 
            The news is provided through crypto-news-live3 API and the everything rest is provided by coingecko API.
            </p>
        </div>
        <div >
            <h1 className='trend'>
                Today's Trend
            </h1>
        </div>
        </div>
  )
}

export default Welcome