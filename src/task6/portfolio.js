import React, { Component } from "react";
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom"
import Home from "./Home.js";
import About from "./About.js";
import Contact from "./Contact.js";
import Projects from "./Projects.js";
import './styles.css';

class Portfolio extends Component{
    render(){
        return(
            <div className="background">
                <Router>
                    <nav className="nav-bar">
                        <h3 >Portfolio</h3>
                        <Link to='/'>Home</Link> | 
                        <Link to='/about'> About</Link> | 
                        <Link to='/projects'> Projects</Link> | 
                        <Link to='/contact'> Contact</Link>
                    </nav>
                    
                <Routes>
                    <Route path="/"Component={Home}/>
                    <Route path="/about"Component={About}/>
                    <Route path="/projects"Component={Projects}/>
                    <Route path="/contact"Component={Contact}/>
                </Routes>

                </Router>
            </div>
        );
    }
}
export default Portfolio;
