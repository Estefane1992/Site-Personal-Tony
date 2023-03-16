import React from "react";
import { Col, Row, Card} from "react-bootstrap";
import Alimentacao from '../../Assets/Alimentacao.jpg';
import Avaliacao from '../../Assets/avaliacao.jpg';
import Crosstraing from '../../Assets/Crosstraing.jpg';
import Kickboxing from '../../Assets/kickboxing.jpg';
import Musculacao from '../../Assets/musculacao.jpg';


function ActivityCard() {
  return (
    <Row xs={1} md={3} className="g-5" style={{ justifyContent: "center", paddingBottom: "50px" }}>
       
        <Col >
            <Card border="primary" className="activity" data-aos="flip-down" data-aos-duration="2000">
                <Card.Img variant="top" src={Avaliacao} />
                <Card.Body >
                    <Card.Title className="card-titulo" >Avaliação Física</Card.Title>
                </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card border="primary" className="activity" data-aos="flip-down" data-aos-duration="2000">
                <Card.Img variant="top" src={Musculacao} />
                <Card.Body>
                    <Card.Title className="card-titulo">Musculação</Card.Title>
                </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card border="primary" className="activity" data-aos="flip-down" data-aos-duration="2000">
                <Card.Img variant="top" src={Kickboxing} />
                <Card.Body>
                    <Card.Title className="card-titulo">Aulas de Kickboxing</Card.Title>
                </Card.Body>
            </Card>
        </Col>
        
        <Col>
            <Card border="primary" className="activity" data-aos="flip-down" data-aos-duration="2000">
                <Card.Img variant="top" src={Crosstraing} />
                <Card.Body>
                    <Card.Title className="card-titulo">Cross Traing</Card.Title>
                </Card.Body>
             </Card>
        </Col>

    </Row>
  );
}

export default ActivityCard;
