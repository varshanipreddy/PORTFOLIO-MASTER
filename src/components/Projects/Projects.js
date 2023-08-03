import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import crm from "../../Assets/Projects/crm.png";
import vote from "../../Assets/Projects/vote.png";
import chat from "../../Assets/Projects/chat.png";
import fridge from "../../Assets/Projects/fridge.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Academic/Other <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Presenting a selection of projects I have undertaken, excluding my work experience.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fridge}
              isBlog={false}
              title="Fridge2Table"
              description="To enhance the personalized recipe recommendation system, we can incorporate a hybrid approach that combines content-based and collaborative filtering techniques. By leveraging user preferences, dietary restrictions, and available ingredients, the system can provide more accurate and diverse recipe suggestions. Additionally, implementing incremental learning and context-aware recommendations will ensure that the system stays up-to-date and offers timely and relevant recipes based on user interactions and situational context."
              ghLink="https://github.com/varshanipreddy/fridge2table"
              // demoLink=""
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="HealthBot"
              description="HealthBot is an innovative Android application that utilizes Machine Learning and Google DialogFlow to serve as a chatbot focused on detecting early-stage disability symptoms in children. Through interactive conversations, the app collects relevant information, analyzes it using ML algorithms, and provides valuable insights to caregivers and parents. This user-friendly tool aims to enhance early intervention and support, contributing to better healthcare outcomes for children."
              ghLink="https://github.com/varshanipreddy/HealthBot"
              // demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vote}
              isBlog={false}
              title="Blockchain-Enabled Electronic Voting System"
              description="An innovative e-voting platform that combines Hyperledger Fabric, the IBM Blockchain Platform, and JavaScript. With the integration of IoT devices, it enhances security for e-polling and counting. The system guarantees tamper-proof voting and transparent electoral outcomes, ensuring a trustworthy and reliable e-voting experience."
              ghLink="https://github.com/varshanipreddy/blockchain_enhanced_e_voting"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crm}
              isBlog={false}
              title="FashioNXT-CRM-Service"
              description="FashioNXT CRM Service is a robust solution built on Ruby on Rails and PostgreSQL, catering to the needs of the FashioNXT agency. It offers a feature-rich CRM system encompassing event invites, website analytics, user access management, and efficient data handling. This comprehensive platform empowers the agency with streamlined operations and improved customer engagement, fostering growth and success in the fashion industry."
              ghLink="https://github.com/varshanipreddy/FashioNXT-CRM-Service"
              // demoLink=""
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
