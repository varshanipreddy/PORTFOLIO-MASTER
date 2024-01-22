import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EducationCard from "./CertsCards";
import nitrr from "../../Assets/Education/nitrr.png";
import tamu from "../../Assets/Education/tamu.png";
import awsccp from "../../Assets/Certs/awsccp.png";
import udemy from "../../Assets/Certs/udemy.jpg";
import CertCards from "./CertsCards";
import huawei from "../../Assets/Work/Huawei.png";

function Education() {
  return (  
    <Container fluid className="education-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="education-heading" style={{ justifyContent: "center" , padding: "10px", paddingBottom: "40px" }}>
           <strong className="purple">Certificates </strong>
        </h1>
          <Row style={{ justifyContent: "center", padding: "20px" }}>
            <Col md={9} className="education-card">
              <CertCards
                imgPath={awsccp}
                isBlog={false}
                title="AWS Certified Cloud Practitioner"
                description = "Achieved AWS Certified Cloud Practitioner certification with a perfect score of 1000/1000, showcasing expertise in cloud computing fundamentals, AWS services, and best practices for building secure and scalable solutions."
                ghLink="https://www.credly.com/badges/4cec4a8c-d1ec-4261-96c4-d0ce3264fb6e/public_url"
              />
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", padding: "20px" }}>
            <Col md={9} className="education-card">
              <CertCards
                imgPath={udemy}
                isBlog={false}
                title="NLP - Natural Language Processing with Python"
                // description = "Achieved AWS Certified Cloud Practitioner certification with a perfect score of 1000/1000, showcasing expertise in cloud computing fundamentals, AWS services, and best practices for building secure and scalable solutions."
                ghLink="https://www.udemy.com/certificate/UC-66c19d1c-88cd-4e4d-9627-fae02997222d/"
              />
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", padding: "20px" }}>
            <Col md={9} className="education-card">
              <CertCards
                imgPath={udemy}
                isBlog={false}
                title="The Data Science Course 2021: Complete Data Science Bootcamp "
                // description = "Achieved AWS Certified Cloud Practitioner certification with a perfect score of 1000/1000, showcasing expertise in cloud computing fundamentals, AWS services, and best practices for building secure and scalable solutions."
                ghLink="https://www.udemy.com/certificate/UC-5068a549-cf97-49fa-988b-0215b99a31c2/"
              />
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", padding: "20px" }}>
            <Col md={9} className="education-card">
              <CertCards
                imgPath={huawei}
                isBlog={false}
                title="Java - ECQ (Java Enhance Code Quality Exam)"
                // description = "Achieved AWS Certified Cloud Practitioner certification with a perfect score of 1000/1000, showcasing expertise in cloud computing fundamentals, AWS services, and best practices for building secure and scalable solutions."
                // ghLink="https://www.udemy.com/certificate/UC-5068a549-cf97-49fa-988b-0215b99a31c2/"
              />
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", padding: "20px" }}>
            <Col md={9} className="education-card">
              <CertCards
                imgPath={udemy}
                isBlog={false}
                title="Blockchain A-Z : How to build your first blockchain "
                // description = "Achieved AWS Certified Cloud Practitioner certification with a perfect score of 1000/1000, showcasing expertise in cloud computing fundamentals, AWS services, and best practices for building secure and scalable solutions."
                ghLink="https://www.udemy.com/certificate/UC-e094fc4b-1d2f-4eb9-b05a-e937d5558d44/"
              />
            </Col>
          </Row>

      </Container>
    </Container>
  );
}

export default Education;
