// import Carousel from 'react-bootstrap/Carousel'
import React from 'react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../assets/css/Carousel.css'

export default function Header(props) {
  return (
    <>
<Carousel additionalTransfrom={0}
  arrows={false}
  autoPlay
  autoPlaySpeed={1000}
  centerMode={false}
  className=""
  containerClass="container-with-dots"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl={true}
  minimumTouchDrag={80}
  renderButtonGroupOutside={true}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 5,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 2,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 3,
      partialVisibilityGutter: 30
    }
  }}
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable
  >
    {props.coins.map((ele,ind) => (
        <div className='ele-container' key={ind}>
            <img className='ele-img' src={ele.image} alt="First slide" />
            <p className='ele-name'> {ele.name}</p>
            <p className='ele-info'>{ele.price_change_percentage_24h_in_currency.toFixed(2)}%</p>
        </div>
    ))}
</Carousel>
    </>
  )
}

