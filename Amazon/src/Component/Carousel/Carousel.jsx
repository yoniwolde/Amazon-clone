import React from 'react'
import "../Carousel/Carousel.css"
import { Carousel } from "react-responsive-carousel"
import {img} from "./Img/data"
import "react-responsive-carousel/lib/styles/carousel.min.css"; /** style added for carousel */

function CarouselEffect() {
  return (
      <div>
          <Carousel
              autoPlay={true}
              infiniteLoop={true}
              showIndicators={false}
              showThumbs={false}
          >
               {
                  img.map((imageItemLink) => {
                      return <img src={imageItemLink}/>
                  })
              }
              </Carousel>
             <div className='hero_img'></div>
    </div>
  )
}

export default CarouselEffect