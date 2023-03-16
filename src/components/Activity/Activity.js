import React from "react";
import { Container } from "react-bootstrap";
import ActivityCard from "./ActivityCard";
import './Activity.css';


function Activity(){
    return (
        <Container fluid className="about-section">
          <Container>
            <h1 id="servicos" className="servico" data-aos="fade-down"  data-aos-duration="1000">ATIVIDADES OFERTADAS</h1>
            <p className="servico-paragrafo" data-aos="fade-down"  data-aos-duration="1500">Conheça os serviços e treinamentos personalizados prestados</p>
            <div >
              <ActivityCard />
            </div> 
            
          </Container>
        </Container>
    );
}





export default Activity;