import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './styles/_carousel.css';

const AppCarousel = ({slides}) =>  {

    return (
        <Carousel infiniteLoop useKeyboardArrows autoPlay stopOnHover={false} showThumbs={false} dynamicHeight={false} showStatus={false}>
            {slides.map((s, i) => (
                <div key={s.id}>
                    <img src={s.image} />     
                    <p className="legend">{s.caption}</p>
                </div>
            ))}
        </Carousel>
    );
}
  
export default AppCarousel;