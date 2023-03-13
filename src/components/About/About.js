import React, { useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import PersonalImg from "../../Assets/academia.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css'

import "./about.css";

function About() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "90px",
              paddingBottom: "70px",
            }}
          >
            <h1 id="sobre" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">QUEM SOU</h1>
            <p id="paragrafo" data-aos="fade-down" data-aos-duration="2000">Conheça o meu método de trabalho e alguns detalhes sobre a minha carreira como personal trainer</p>
            <div>
              <Aboutcard />
            </div>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "350px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img data-aos="flip-up" data-aos-duration="2500"
              id="personal-img"
              src={PersonalImg}
              alt="about"
              className="img-fluid"
              
            />
          </Col>
        </Row>
        
        <div>
          <Techstack />
        </div> 

        
      </Container>
    </Container>
  );
}

export default About;
