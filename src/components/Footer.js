import React from "react";

import SocialMedia from "./SocialMedia";
import SocialMediaPlaforms from '../data/socials';

const Footer = () => {

    const [socials, setSocials] = useState(SocialMediaPlaforms);

    return ( 
        <footer class="page-footer center social-colored">
            <div class="container footer-content">
                <div class="row">
                    <div class="">
                        <h5 class="logo">Wonderfullyso</h5>
                    </div>
                    <div class="link-wrap">
                        <ul class="link-ul">
                            <li><a class="" href="#!"><i class="mdi mdi-phone"></i> +270 000 0000</a></li>
                            <li><a class="" href="#!"><i class="mdi mdi-email"></i>email@wonderfullyso.com</a></li>
                            <li><a class="" href="#!"><i class="mdi mdi-map-marker"></i>Cape Town, South Africa</a></li>
                        </ul>
                        <Social socials={socials}/>
                    </div>
                </div>
            </div>

            <div class="footer-copyright">
                <div class="container">
                    &copy; Copyright <a class="" href="https://www.wanderfullyso.com/">Wanderfullyso</a>. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;
