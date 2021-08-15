import React from 'react';
import { Link } from 'react-router-dom';
import './styles/_navbar.css';

const Navbar = () => {
    return ( 
        <nav className="footer-menu circular">
            <ul>
                <li><Link to="/"><i class="mdi mdi-home-outline"></i><span>Home</span></Link></li>
                <li><Link to="/tips"><i class="mdi mdi-comment-check-outline"></i><span>Local Tips</span></Link></li>
                <li><Link to="/book"><i class="mdi mdi-cart-outline"></i><span>Book</span></Link></li>
                <li><Link to="/discover"><i class="mdi mdi-menu"></i><span>Discover</span></Link></li>
                <li><Link to="/feedback"><i class="mdi mdi-feather"></i><span>Feedback</span></Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;  