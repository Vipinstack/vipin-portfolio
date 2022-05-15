import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome} from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button , Col, Container, Form, Row} from "react-bootstrap";

function Work() {
    return (
        <div>
             <section className="work section" id="work">
        <h2 className="section-title">Work</h2>

        <div className="work__container bd-grid">
            <div className="work__img">
                <img src="assets/img/work1.jpg" alt="" />
            </div>
            <div className="work__img">
                <img src="assets/img/work2.jpg" alt="" />
            </div>
            <div className="work__img">
                <img src="assets/img/work3.jpg" alt="" />
            </div>
            <div className="work__img">
                <img src="assets/img/work4.jpg" alt="" />
            </div>
            <div className="work__img">
                <img src="assets/img/work5.jpg" alt="" />
            </div>
            <div className="work__img">
                <img src="assets/img/work6.jpg" alt="" />
            </div>
        </div>
    </section>

        </div>
    )
}

export default Work
