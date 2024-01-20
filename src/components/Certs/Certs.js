import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EducationCard from "./CertsCards";
import nitrr from "../../Assets/Education/nitrr.png";
import tamu from "../../Assets/Education/tamu.png";
import awsccp from "../../Assets/Certs/awsccp.png";
import CertCards from "./CertsCards";

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

      </Container>
    </Container>
  );
}

export default Education;
