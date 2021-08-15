import React from 'react';
import AppCarousel from '../components/AppCarousel';
import { useState } from 'react';
import Slides from '../data/slides';

const Welcome = () =>  {

    const [slides, setSlides] = useState(Slides);

    return (
        <div className="Welcome">
            <AppCarousel slides={slides}/>
        </div> 
    );
}

export default Welcome;