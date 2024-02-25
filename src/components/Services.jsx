import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import img from "../assets/msi1.jpg"
import img1 from "../assets/msi2.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const Services = () => {
    return (
        <div className='services'>
            <Carousel
                infiniteLoop autoPlay showStatus={false} showArrows={false} interval={1000} showThumbs={false}>
                <div>
                    <img src={img} alt="" />
                    <p className='legend'>Dragon</p>
                </div>
                <div>
                    <img src={img1} alt="" />
                    <p className='legend'>Dragon 2</p>
                </div>
            </Carousel>
        </div>
    );
}

export default Services;
