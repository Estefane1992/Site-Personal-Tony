import React from "react";
import { Col, Row } from "react-bootstrap";



function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col md={5} className="card-missao">
        <span data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">MISSÃO</span><br/><br/>
        <p style={{textAlign: "justify"}} data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">Oferecer o que existe de mais eficiente na área de preparação física, proporcionando uma nova experiência a cada dia de treinamento</p>
        
      </Col>
      <Col md={5} className="card-valores">
        <span data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">VALORES</span>
        <br/><br/>
        <li className="about-activity" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
        Comprometimento
            
        </li>
        <li className="about-activity" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
        Ética Profissional
            
        </li>
        <li className="about-activity"data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
        Atenção ao aluno e seus objetivos
            
        </li>
      </Col> 
    </Row>
  );
}

export default Techstack;
