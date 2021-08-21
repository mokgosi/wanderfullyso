import AppCarousel from '../components/AppCarousel';
import { useState } from 'react';

import Slides from '../data/home-slides';
import LatesBlogs from '../data/blogs';
import LikeALocalData from '../data/like-a-local';
import TestimonialsData from '../data/testimonials';

import BookVirtualTour from '../components/BookVirtualTour';
import LikeALocal from '../components/LikeALocal';
import Blogs from '../components/Blogs';
import Testimonials from '../components/Testimonials';

const Home = () => {

    const [slides, setSlides] = useState(Slides);
    const [blogs, setBlogs] = useState(LatesBlogs);
    const [locals, setLocals] = useState(LikeALocalData);
    const [testimonials, setTestimonials] = useState(TestimonialsData);

    return ( 
        <div className="Home">
            <AppCarousel slides={slides}/>
            <div className="theme-bg">
                <div className="container home-iconbox">
                    <div className="section pb0">
                        <div className="spacer"></div>
                        <div className="row mb0">
                            <div className="col s12 pad-0">
                                <div className="row">
                                    <div className="col s6 m6 l3">
                                        <div className="icon-block block">
                                            <div className="icon-area center primary-text"><i className="mdi mdi-city"></i></div>
                                            <h7 className="title-area center">Search Virtual <br/> Experiences </h7>
                                        </div>
                                    </div>
                                    <div className="col s6 m6 l3">
                                        <div className="icon-block block">
                                            <div className="icon-area center primary-text"><i className="mdi mdi-bus-double-decker"></i></div>
                                            <h7 className="title-area center">Virtually Connect <br/> with Locals</h7>
                                        </div>
                                    </div>
                                    <div className="col s6 m6 l3">
                                        <div className="icon-block block">
                                            <div className="icon-area center primary-text"><i className="mdi mdi-candycane"></i></div>
                                            <h7 className="title-area center">Get Local <br/> Tips</h7>
                                        </div>
                                    </div>
                                    <div className="col s6 m6 l3">
                                        <div className="icon-block block">
                                            <div className="icon-area center primary-text"><i className="mdi mdi-chili-medium"></i></div>
                                            <h7 className="title-area center">Book Day Trips &<br/> Activities(Coming Soon)</h7>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- VIRTUAL TOURS COMPONENT --> */}

            <BookVirtualTour />

            {/* <!-- BLogs --> */}

            <div className="container">
                <div className="section">
                    <div className="row mb0">
                        <div className="col s12 pad-0">
                            <h5 className="bot-20 sec-tit center ">Blogs</h5>
                            <Blogs blogs={blogs}/>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- VIRTUAL TOURS COMPONENT --> */}

            <BookVirtualTour />

            {/* <!-- LIKE A LOCAL COMPONENT  --> */}

            <div className="theme-bg">
                <div className="container">
                    <div className="section pb0">
                        <div className="row ">
                            <div className="col s12 pad-0">
                                <LikeALocal locals={locals}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- TESTIMONIALS COMPONENT  --> */}

            <Testimonials testimonials={testimonials}/>


        </div>
    );
}
 
export default Home;