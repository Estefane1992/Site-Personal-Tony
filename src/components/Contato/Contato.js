import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './contato.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


function Contact() {
    return(
        <Container fluid>
            <Container>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col md={7}
                        style={{
                        justifyContent: "center",
                        paddingTop: "50px",
                        paddingBottom: "50px",
                        }} data-aos="flip-down" data-aos-easing="linear" data-aos-duration="3000">
                        <h1 className="primary-header" style={{ fontSize: "3em", paddingTop: "100px", paddingBottom: "25px" }} >ENTRE EM CONTATO </h1>
                        <span >
                            <FontAwesomeIcon className="font-icon" icon={faPhone} /> <a className="contato-telefone" href="tel: 5571123456789">+55-71123456789</a>
                        </span><br/>
                            <br/>
                        <span >
                            <FontAwesomeIcon className="font-icon" icon={faEnvelope}/> <a className="contato-email" href="mailto: tonypersonal@gmail">tonypersonal@gmail</a>
                        </span><br/> 
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}




export default Contact;