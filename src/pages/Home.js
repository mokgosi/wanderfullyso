import AppCarousel from '../components/AppCarousel';
import { useState } from 'react';

import Slides from '../data/home-slides';
import LatesBlogs from '../data/blogs';
import likeALocalData from '../data/like-a-local';

import BookVirtualTour from '../components/BookVirtualTour';
import LikeALocal from '../components/LikeALocal';
import Blogs from '../components/Blogs';

const Home = () => {

    const [slides, setSlides] = useState(Slides);
    const [blogs, setBlogs] = useState(LatesBlogs);
    const [locals, setLocals] = useState(likeALocalData);

    return ( 
        <div className="Home">
            <AppCarousel slides={slides}/>
            <div class="theme-bg">
                <div class="container home-iconbox">
                    <div class="section pb0">
                        <div class="spacer"></div>
                        <div class="row mb0">
                            <div class="col s12 pad-0">
                                <div class="row">
                                    <div class="col s6 m6 l3">
                                        <div class="icon-block block">
                                            <div class="icon-area center primary-text"><i class="mdi mdi-city"></i></div>
                                            <h7 class="title-area center">Search Virtual <br/> Experiences </h7>
                                        </div>
                                    </div>
                                    <div class="col s6 m6 l3">
                                        <div class="icon-block block">
                                            <div class="icon-area center primary-text"><i class="mdi mdi-bus-double-decker"></i></div>
                                            <h7 class="title-area center">Virtually Connect <br/> with Locals</h7>
                                        </div>
                                    </div>
                                    <div class="col s6 m6 l3">
                                        <div class="icon-block block">
                                            <div class="icon-area center primary-text"><i class="mdi mdi-candycane"></i></div>
                                            <h7 class="title-area center">Get Local <br/> Tips</h7>
                                        </div>
                                    </div>
                                    <div class="col s6 m6 l3">
                                        <div class="icon-block block">
                                            <div class="icon-area center primary-text"><i class="mdi mdi-chili-medium"></i></div>
                                            <h7 class="title-area center">Book Day Trips &<br/> Activities(Coming Soon)</h7>
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

            <div class="section">
                <div class="row mb0">
                    <div class="col s12 pad-0">
                        <h5 class="bot-20 sec-tit center ">Blogs</h5>
                        <Blogs blogs={blogs}/>
                    </div>
                </div>
            </div>

            {/* <!-- VIRTUAL TOURS COMPONENT --> */}

            <BookVirtualTour />

            {/* <!-- LIKE A LOCAL COMPONENT  --> */}

            <div class="theme-bg">
                <div class="container">
                    <div class="section pb0">
                        <div class="row ">
                            <div class="col s12 pad-0">
                                <LikeALocal locals={locals}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- TESTIMONIALS COMPONENT  --> */}







        </div>
    );
}
 
export default Home;