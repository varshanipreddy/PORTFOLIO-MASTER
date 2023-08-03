import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import WorkCard from "./WorkCards";
import huawei from "../../Assets/Work/Huawei.png";
import ittiam from "../../Assets/Work/ittiam.png";
import tamu from "../../Assets/Work/tamu.png";

function About() {
  return (
    <Container fluid className="work-section">
      <Particle />
      <Container>
      <h1 className="project-heading">
          Work <strong className="purple">Experience </strong>
        </h1>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col md={9} className="work-card">
              <WorkCard
                imgPath={huawei}
                isBlog={false}
                title="Huawei Technologies India Pvt. Ltd."
                title2 = "Senior Software Engineer"
                title3 = "August 2020 - July 2022"
                // description= "Department: SOC/Consumer Cloud Service Competence Center. Risk Control Tag Development: Development, analysis and deployment of various Payment Risk Control Tags in HiveQL by querying datasets stored in the HDFS. Offline machine learning models/ Scoring Systems: Design, analysis, development and deployment of around 10 risk detection models and scoring systems with greater than 92% accuracy. AI Devops: Troubleshooted issues related to data synchronisation from the HIVE datasets HDFS path to the DevOps HDFS path, MTP model training issues and MEP model deployment issues in the new AIdevops portal. Handled communication between several teams for troubleshooting of models deployment involving several tools such as CloudDragon, AIdevops etc.,"
                description = "Developed and automated 30 Hive tasks to analyze logs and generate tags/features, streamlining workflows in the WiseOper portal. Designed and developed 11 risk detection models in Python, utilizing ML libraries for high accuracy. Orchestrated over 100 Hive tasks for feature calculation, contributing to improved risk assessment with over 92% accuracy. Took ownership of configuring end-to-end DevOps for ML models, reducing development time by more than 60%. Resolved resource allocation, docker images, and model deployment issues in AIdevops MTP environments. Developed 20+ components to manage requests for deployed ML models, handling version deployments and ensuring seamless service delivery. Oversaw service deployments in the AIdevops MEP Production environment, ensuring efficient resource and AZ allocation. Collaborated effectively with cross-functional teams to troubleshoot DevOps issues during Model Deployment. Thoroughly documented end-to-end processes and rulebooks for AIdevops, providing clear guidelines for ML model deployment and management."
              />
            </Col>
        </Row>
        <Row style={{ justifyContent: "center", padding: "10px",paddingBottom: "10px" }}>
            <Col md={9} className="work-card">
              <WorkCard
                imgPath={ittiam}
                isBlog={false}
                title="Ittiam Systems Pvt. Ltd."
                title2 = "Computer Vision Intern"
                title3 = "May 2019 - July 2019"
                description="Project: Enhancement of foreground detection and background modeling in videos using the OpenCV library
                Implementation: Explored diverse solutions to enhance foreground detection & background modeling. Achieved more than 50%
                accuracy improvement on the datasets by interpreting histogram peaks and valleys of the motion. Utilized C++ (vectors) and Python (numpy) for efficient video data-sets processing."
                // ghLink="https://github.com/soumyajit4419/Chatify"
                // demoLink=""
              />
            </Col>
        </Row>

        <Row style={{ justifyContent: "center", padding: "10px",paddingBottom: "10px" }}>
            <Col md={9} className="work-card">
              <WorkCard
                imgPath={tamu}
                isBlog={false}
                title="Texas A&M University"
                title2 = "Student Technitian - Web Developer/ Tester"
                title3 = "July 2023 - Present"
                description = "As a Student Technician, I excel in web development, testing, and technical support, leveraging Microsoft Azure, Kentico, C#, ASP.NET, MVC, IIS Web Server, and Content Management Systems. I specialize in CMS for University websites, ensuring their smooth operation and scalability. Connecting with clients, I efficiently resolve issues, delivering exceptional support and user experiences."
                // ghLink="https://github.com/soumyajit4419/Chatify"
                // demoLink=""
              />
            </Col>
        </Row>

        <Row style={{ justifyContent: "center", padding: "10px",paddingBottom: "10px" }}>
            <Col md={9} className="work-card">
              <WorkCard
                imgPath={tamu}
                isBlog={false}
                title="Texas A&M University"
                title2 = "Student Assistant - Computer Science Grader"
                title3 = "Jan 2023 - May 2023"
                description="I had the privilege of assisting with exams and assignments for CSCE 411, the Design and Analysis of Algorithms course, at Texas A&M University, Department of Computer Science, under the guidance of Prof. Timothy Davis. It was a rewarding experience, supporting students in their academic journey and ensuring fair evaluation of their work. Collaborating with Prof. Davis enriched my understanding of algorithmic principles. "
                // ghLink="https://github.com/soumyajit4419/Chatify"
                // demoLink=""
              />
            </Col>
        </Row>



        {/* <Techstack /> */}


        {/* <Github /> */}
      </Container>
      
    </Container>
  );
}

export default About;
