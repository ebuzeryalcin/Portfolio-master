import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import rickandmorty from "../../Assets/Projects/rickandmorty.png";
import ecommerce from "../../Assets/Projects/e-commerce.png";
import solarsystem from "../../Assets/Projects/solar-system.png";
import molegame from "../../Assets/Projects/mole-game.PNG";
import NasaImg from "../../Assets/Projects/NasaImg.png";
import MovieApp from "../../Assets/Projects/movie-app.png"
import carrental from "../../Assets/Projects/car-rental.png"
import nextblog from "../../Assets/Projects/nextblog.png"

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
              imgPath={nextblog}
              isBlog={false}
              title="Next-blog"
              description=""
              ghLink="https://github.com/ebuzeryalcin/next-blog"
              demoLink="https://next-blog-93tw25pu4-ebuzeryalcin.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={solarsystem}
              isBlog={false}
              title="Solar-System"
              description=""
              ghLink="https://github.com/ebuzeryalcin/solar-system"
              demoLink="https://storied-cendol-8ca6e0.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MovieApp}
              isBlog={false}
              title="Movie-App"
              description=""
              ghLink="https://github.com/ebuzeryalcin/Movie-App"
              demoLink="https://movie-app-nine-teal.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NasaImg}
              isBlog={false}
              title="Nasa-Image-Explorer"
              description=""
              ghLink="https://github.com/ebuzeryalcin/REACT-TYPESCRIPT-NASA"
              demoLink="https://cool-scone-62c9de.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-commerce"
              description=""
              ghLink="https://github.com/ebuzeryalcin/ecommerce_next"
              demoLink="https://ecommerce-next-eight-peach.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={carrental}
              isBlog={false}
              title="E-commerce"
              description=""
              ghLink="https://github.com/ebuzeryalcin/Car-Rental"
              demoLink="https://car-rental-jade.vercel.app/home"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rickandmorty}
              isBlog={false}
              title="Rick and Morty"
              description=""
              ghLink="https://github.com/ebuzeryalcin/ricknmorty"
              demoLink="https://guileless-squirrel-e0a4f8.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={molegame}
              isBlog={false}
              title="Mole-Game"
              description=""
              ghLink="https://github.com/ebuzeryalcin/MoleGame"
              demoLink="https://ebuzeryalcin.github.io/MoleGame/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
