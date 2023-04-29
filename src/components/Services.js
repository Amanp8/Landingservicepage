import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../Assests/3.jpg";
import img2 from "../Assests/4.jpg";
export default function Services() {
  return (
   <div className="services">
    <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={1000} showThumbs={false}>
        
        <div>
            <img src={img1} alt="item1" />
            <p className='legend'>Full Stack</p>
        </div>
        <div>
            <img src={img2} alt="item2"/>
            <p className='legend'>Support peer to peer</p>
        </div>
    </Carousel>

   </div>
  )
}
