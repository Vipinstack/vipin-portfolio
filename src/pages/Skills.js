import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome} from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button , Col, Container, Form, Row} from "react-bootstrap";

function Skills() {
    return (
        <div>
            <section className="skills section" id="skills">
        <h2 className="section-title">Skills</h2>

        <div className="skills__container bd-grid">          
            <div>
                <h2 className="skills__subtitle">Profesional Skills</h2>
                <p className="skills__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit optio id vero amet, alias architecto consectetur error eum eaque sit.</p>
                <div className="skills__data">
                    <div className="skills__names">
                    {/* <i className="fab fa-html5 skills__icon"></i> */}
                        <i className='bx bxl-html5 skills__icon'></i>
                        <span className="skills__name">HTML5</span>
                    </div>
                    <div className="skills__bar skills__html">

                    </div>
                    <div>
                        <span className="skills__percentage">95%</span>
                    </div>
                </div>
                <div className="skills__data">
                    <div className="skills__names">
                    <i className="fab fa-css3-alt "></i>
                        <i className='bx bxl-css3 skills__icon'></i>
                        <span className="skills__name">CSS3</span>
                    </div>
                    <div className="skills__bar skills__css">
                        
                    </div>
                    <div>
                        <span className="skills__percentage">85%</span>
                    </div>
                </div>
                <div className="skills__data">
                    <div className="skills__names">
                        <i className='bx bxl-javascript skills__icon' ></i>
                        <span className="skills__name">JAVASCRIPT</span>
                    </div>
                    <div className="skills__bar skills__js">
                        
                    </div>
                    <div>
                        <span className="skills__percentage">65%</span>
                    </div>
                </div>

                <div className="skills__data">
                    <div className="skills__names">
                        <i className='bx bxl-react skills__icon' ></i>
                        <span className="skills__name">REACT</span>
                    </div>
                    <div className="skills__bar skills__react">
                        
                    </div>
                    <div>
                        <span className="skills__percentage">60%</span>
                    </div>
                </div>

                <div className="skills__data">
                    <div className="skills__names">
                        <i className='bx bxl-nodejs skills__icon' ></i>
                        <span className="skills__name">NODEJS</span>
                    </div>
                    <div className="skills__bar skills__nodejs">
                        
                    </div>
                    <div>
                        <span className="skills__percentage">60%</span>
                    </div>
                </div>
                <div className="skills__data">
                    <div className="skills__names">
                        <i className='bx bxl-data skills__icon' ></i>
                        <span className="skills__name">MONGODB</span>
                    </div>
                    <div className="skills__bar skills__mongodb">
                        
                    </div>
                    <div>
                        <span className="skills__percentage">60%</span>
                    </div>
                </div>

                <div className="skills__data">
                    <div className="skills__names">
                        <i className='bx bxl-data skills__icon' ></i>
                        <span className="skills__name">EXPRESS</span>
                    </div>
                    <div className="skills__bar skills__express">
                        
                    </div>
                    <div>
                        <span className="skills__percentage">60%</span>
                    </div>
                </div>
            </div>

            

            
            
            <div>              
                <img src="assets/img/work3.jpg" alt="" className="skills__img"/>
            </div>
        </div>
    </section>
        </div>
    )
}

export default Skills
