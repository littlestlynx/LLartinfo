import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function ImageCarousel({
    imageSet
}) {
    return (
        <div className="carousel-div">
            <Carousel 
                autoPlay={false}
                useKeyboardArrows={false}
                showArrows={true}
                interval={5000}
                infiniteLoop={true}
                showStatus={true}
                showThumbs={true}
            >
            {imageSet.map(image => (
                <div>
                <img src={image} alt="k"/>
                </div>
            ))}
                

            </Carousel>
        </div>
    )
}