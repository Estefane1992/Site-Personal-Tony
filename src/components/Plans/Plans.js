import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

import './plans.css'

function Plans(){
    return(
       <Container>
        <h1 className="plans-titulo" data-aos="fade-down" data-aos-duration="2000">PLANOS</h1>
         <Row xs={1} md={3} className="g-5" style={{ justifyContent: "center", paddingBottom: "50px"}}>
            
            <Col>
                <Card  className="plans-card" data-aos="flip-down" data-aos-duration="2000">
                    <Card.Header className="plans-card-titulo">Mensal</Card.Header>
                    <Card.Body>
                        <Card.Title className="plans-preco">R$ <br/>150</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card  className="plans-card" data-aos="flip-down" data-aos-duration="2000">
                    <Card.Header className="plans-card-titulo">Trimestral</Card.Header>
                    <Card.Body>
                        <Card.Title className="plans-preco"> R$ <br/>100</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card  className="plans-card" data-aos="flip-down" data-aos-duration="2000">
                    <Card.Header className="plans-card-titulo">Anual</Card.Header>
                    <Card.Body>
                        <Card.Title className="plans-preco">R$ <br/>99 </Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            
        </Row>
       </Container>
    )
}




export default Plans;