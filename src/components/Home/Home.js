import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type";
import "./home.css";


function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
              Olá!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  {/* 👋🏻 */}
                </span>{" "}
                Eu sou
              </h1>

              <h1 className="heading-name">
                <strong className="main-name"> TONY</strong>
              </h1>
              <div style={{ padding: 30 }} className="type">
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
