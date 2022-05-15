import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome} from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button , Col, Container, Form, Row} from "react-bootstrap";

function Footer() {
    return (
        <div>
               <footer className="footer">
    <p className="footer__title">Vipin Singh </p>
    <div className="footer__social">
        <Link to="#" className="footer__icon"><i className='bx bxl-facebook' ></i></Link>
        <Link to="#" className="footer__icon"><i className='bx bxl-instagram' ></i></Link>
        <Link to="#" className="footer__icon"><i className='bx bxl-twitter' ></i></Link>
    </div>
    <p>copyright &#169; 2021 Vipin Singh. all right reserved</p>
</footer>
        </div>
    )
}

export default Footer
