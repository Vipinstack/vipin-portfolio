import React from 'react'
import { Button , Col, Container, Form, Row} from "react-bootstrap";


function Contact() {
    return (
        <div>
          <section className="about section " id="about">
        <h2 className="section-title">Contact Me</h2>
        <Container className="mt-5">
          <Row>

          <Col lg={4} md={6} sm={12} className="text-center mt-4 p-3">
          <img src="assets/img/user_.png" className="icon-img"  alt=""  />
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
          
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary btn-block" type="submit">Login
                </Button>
            </Form>
            </Col>

            <Col lg={8} md={6} sm={12}>
            <img src="assets/img/user_img.png" className=""  alt=""  />

            </Col>
            </Row>
        </Container>
        </section>
        </div>
    )
}

export default Contact
