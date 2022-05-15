import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome} from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button , Col, Container, Form, Row} from "react-bootstrap";

function Header() {
    return (
        <div>
                      <header className="l-header">
    <nav className="nav bd-grid">
        <div>
        <Link to="Home" className="nav__logo"> <img src="assets/img/v.png" className="logo-img"  alt=""  /><span className="logo">Singh.</span></Link>
        </div>

        <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
                <li className="nav__item"><Link to="/Home" className="nav__link active">Home</Link></li>
                <li className="nav__item"><Link to="/About" className="nav__link">About</Link></li>
                <li className="nav__item"><Link to="/Skills" className="nav__link">Skills</Link></li>
                <li className="nav__item"><Link to="/Work" className="nav__link">Work</Link></li>
                <li className="nav__item"><Link to="/Contact" className="nav__link">Contact</Link></li>
            </ul>
        </div>

        <div className="nav__toggle" id="nav-toggle">
            <i className='bx bx-menu'></i>
        </div>
    </nav>
</header>
        </div>
    )
}

export default Header
