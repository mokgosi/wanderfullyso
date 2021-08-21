import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
// import './styles/_navbar.css';

const Navbar = () => {
    return ( 
        <div className="footer-menu circular">
            <Router>
                <ul>
                    <li><Link to="/"><i className="mdi mdi-home-outline"></i><span>Home</span></Link></li>
                    <li><Link to="/tips"><i className="mdi mdi-comment-check-outline"></i><span>Local Tips</span></Link></li>
                    <li><Link to="/book"><i className="mdi mdi-cart-outline"></i><span>Book</span></Link></li>
                    <li><Link to="/discover"><i className="mdi mdi-menu"></i><span>Discover</span></Link></li>
                    <li><Link to="/feedback"><i className="mdi mdi-feather"></i><span>Feedback</span></Link></li>
                </ul>
            </Router>
        </div>
    );
}

export default Navbar;  