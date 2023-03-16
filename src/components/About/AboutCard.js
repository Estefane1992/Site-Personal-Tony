import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight } from "react-icons/ai";


function AboutCard() {
  return (
    <Card className="quote-card-view " style={{ marginTop: "1em"}}>
      <Card.Body >
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }} data-aos="fade-down" data-aos-duration="1500">
            Sou <span className="primary-header" style={{fontWeight: "bolder"}}>TONY </span> venho trabalhando há mais de 20 anos com treinamento esportivo personalizado, ajudando os meus alunos a obter resultados significativos nos seus objetivos. 
            <br/>
            Minha paixão pelo esporte começou desde a infância.
            <br />
            Hoje busco ajudar as pessoas e impactar positivamente suas vidas, usando o exercício físico como uma ferramenta que faça sentido e traga prazer.
          </p>
          <br/>
          <br/>
          <span data-aos="fade-down" data-aos-duration="1500" style={{fontSize: "1.2em", fontWeight: "bold", color: 'white'}}>Área de atuação:</span>
          <li className="about-activity" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
            <AiOutlineArrowRight/> Personal trainer 
          </li>
          <li className="about-activity" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
            <AiOutlineArrowRight/> Consultor esportivo
          </li>
          <li className="about-activity" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
            <AiOutlineArrowRight/> Avaliador físico
          </li>
          <li className="about-activity" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
            <AiOutlineArrowRight/> Treinamento funcional/Crosstraing
          </li>
        </blockquote>
        
      </Card.Body>
     
    </Card>
    
    
  );
}

export default AboutCard;
