import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import portfolioimg from "../../Assets/Projects/portfolio.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolioimg}
              isBlog={false}
              title="Portfolio"
              description="A responsive Portfolio website of to give whole description of myself. this website is developed using reactjs and have awesome UI.it provide information related to my projects, education, skills and work experience."
              ghLink="/"
              demoLink="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="ETShare"
              description="It is a file sharing system which is developed used php laravel framwork and mysql as database. it allow user to create a cluster (which is a group of members/class) and add memebers in the cluster where every member have access to upload, download and delete content."
              ghLink="https://github.com/govind7773/ETShare"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Current Weather app"
              description="Current weather app gives current weather information with current time and date of your city ThroughReal Timeweather API. A multi-Pages, responsive website using HTML, CSS Java Script."
              ghLink="https://github.com/govind7773/current-weather-application"
              demoLink="https://govind7773.github.io/current-weather-application/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="FoodShop Web"
              description="A fully responsive web application with the help of pure HTML, CSS, JavaScript as frontend• An informatic and online food restaurant website. Integrated with Node JS"
              ghLink="https://github.com/govind7773/restaurant-web-app"
              demoLink="/"              
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
