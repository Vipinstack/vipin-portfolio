import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome} from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button , Col, Container, Form, Row} from "react-bootstrap";
import About from './About';
import Skills from './Skills';
import Work from './Work';
import Contact from './Contact';

function Home() {
    return (
        <div>
              <section className="home bd-grid" id="home">
        <div className="home__data">
            <h1 className="home__title">Hi,<br />I'am <span className="home__title-color">Vipin</span><br /> Web Designer</h1>

           <span> <Link to="/Contact"><button type="button" class="button">Contact</button></Link> &nbsp;
           <Link to="D:/portfolio-react-js/portfolio/public/assets/img/Vipin Resume .pdf" target="_blank"><button type="button" class="button">Resume</button></Link></span>
        </div>

        <div className="home__social">
            <Link to="" className="home__social-icon"><i className='bx bxl-linkedin'></i></Link>
            <Link to="" className="home__social-icon"><i className='bx bxl-behance' ></i></Link>
            <Link to="" className="home__social-icon"><i className='bx bxl-github' ></i></Link>
        </div>

        <div className="home__img">    
            <img src="assets/img/home.png" alt="" />
        </div>
    </section>
    <section>
        <About />
    </section>
    <section>
        <Skills />
    </section>
    <section>
        <Work />
    </section>
    <section>
        <Contact />
    </section>
        </div>
    )
}

export default Home
