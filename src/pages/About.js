import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome} from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button , Col, Container, Form, Row} from "react-bootstrap";

function About() {
    return (
        <div>
              <section className="about section " id="about">
        <h2 className="section-title">About</h2>

        <div className="about__container bd-grid">
            <div className="about__img">
                <img src="assets/img/about_.jpg" alt="" />
            </div>
            
            <div>
                <h2 className="about__subtitle">I'am Vipin </h2>
                <p className="about__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum expedita quo culpa tempora, assumenda, quis fugiat ut voluptates soluta, aut earum nemo recusandae cumque perferendis! Recusandae alias accusamus atque.</p>           
            </div>                                   
        </div>
    </section>
        </div>
    )
}

export default About
