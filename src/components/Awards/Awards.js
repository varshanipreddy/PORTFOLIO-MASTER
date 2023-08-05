import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AwardsCards from "./AwardsCards";
import nitrr from "../../Assets/Education/nitrr.png";
import tamu from "../../Assets/Education/tamu.png";
import tamu2 from "../../Assets/Work/tamu2.png";
import huawei from "../../Assets/Work/Huawei.png";

function Awards() {
  return (  
    <Container fluid className="awards-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="awards-heading" style={{ justifyContent: "center" , padding: "10px", paddingBottom: "40px" }}>
           <strong className="purple">Awards / Honours </strong>
        </h1>
          <Row style={{ justifyContent: "center", padding: "20px" }}>
            <Col md={9} className="awards-card">
              <AwardsCards
                imgPath={huawei}
                isBlog={false}
                title="Excellent Contributor Award"
                title2 = " "
                description = "I am privileged and honored to have been presented with the Excellent Contributor Award at Huawei Technologies India Pvt. Ltd., a testament to my unwavering dedication and impactful contributions."

              />
            </Col>


          </Row>

          <Row style={{ justifyContent: "center", padding: "20px",paddingBottom: "40px"  }}>
          <Col md={9} className="awards-card">
              <AwardsCards
                imgPath={tamu}
                isBlog={false}
                title="Scholarship for exceptional academic performance"
                title2 = " "
                description = "Recognized for my outstanding academic performance, I was awarded a distinguished scholarship by the Department of Computer Science and Engineering at Texas A&M University. This esteemed honor serves as a testament to my dedication, commitment, and passion for the field."

              />
            </Col>
          </Row>

          <Row style={{ justifyContent: "center", padding: "20px" }}>
            <Col md={9} className="awards-card">
              <AwardsCards
                imgPath={huawei}
                isBlog={false}
                title="Management Improvement award"
                title2 = " "
                description = "Secured the distinguished Management Improvement Award at Huawei Technologies India Pvt. Ltd. by skillfully orchestrating collaborative efforts among cross-functional teams, leading to the proficient resolution of complex DevOps challenges during Model Development and Deployment."

              />
            </Col>


          </Row>
      </Container>
    </Container>
  );
}

export default Awards;
