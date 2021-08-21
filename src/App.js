import React from 'react';
import logo from './logo.svg';


import './App.css';
// import 'materialize-css/dist/css/materialize.min.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";

import Home from './pages/Home';
import Tips from './pages/Tips';
import Book from './pages/Book';
import Discover from './pages/Discover';
import Feedback from './pages/Feedback';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MiniClose from './components/MiniClose';
import Preloader from './components/Preloader';

function App() {
  return (
        <div>
        {/* <Preloader />     */}
        <Topbar />
        <MiniClose />
        <div className="content-area">
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/tips" component={Tips} />
                    <Route path="/book" component={Book} />
                    <Route path="/discover" component={Discover} />
                    <Route path="/feedback" component={Feedback} />
                </Switch>
                <ScrollToTop smooth />
            </Router>
        </div>  
        <Footer />
        <Navbar />
        </div>  
  );
}

export default App;
