import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import medicine from "../../Assets/Medicine.jpg"
import travel from "../../Assets/Travelgo.jpg"
import bus from "../../Assets/Bus_B.jpg"
import movie from "../../Assets/movie.jpg"
import song from "../../Assets/Song.png"


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
              imgPath={movie}
              isBlog={false}
              title="Capstone Project"
              description="In recent times, the abundance of textual data, particularly
              in the form of movie reviews, has witnessed a remarkable
              increase on the internet. Analyzing and categorizing these
              reviews can yield valuable insights for a range of applications,
              including sentiment analysis, recommendation systems, and
              market research. A critical aspect of this process is movie
              review tagging, which involves automatically assigning sentiment labels to reviews, enabling the uprooting of meaningful
              information from vast amounts of textual data."
              ghLink="https://github.com/AND1122/Medicines_at_your_finger_tips"
              demoLink="https://github.com/AND1122/Medicines_at_your_finger_tips"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medicine}
              isBlog={false}
              title="Medicine at your finger tips"
              description="The website is designed to target people who are engrossed in medicine, medical department or those who need medicine info at the one stop portal.
              This website provides easy access and a user friendly experience to users to identify and recognize the medicine. An AI chatbot is built with a neural
              network and PyTorch library for functioning and different modules such as speech recognition and different modules of health related domains."
              ghLink="https://github.com/AND1122/Medicines_at_your_finger_tips"
              demoLink="https://github.com/AND1122/Medicines_at_your_finger_tips"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel}
              isBlog={false}
              title="Travelogo"
              description="This website is designed for providing information about travel and tourism. This website dynamically manages travelling and allow users to book the
              tickets and view their booking as per the requirement. It also has a payment gateway for making online payments.
              "
              ghLink="https://github.com/AND1122/Travelogo-main"
              demoLink="https://github.com/AND1122/Travelogo-main"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bus}
              isBlog={false}
              title="Bus Booking System"
              description="The transportation industry has undergone a significant transformation in recent years, driven by technological advancements and changing consumer behavior. One of the key areas that have seen significant innovation is the bus booking system. Bus booking systems are critical components of the transportation ecosystem, facilitating the efficient booking and management of bus journeys for both passengers and operators. However, despite the 
              numerous benefits that these systems offer, they still face several challenges that impede their effectiveness."
              ghLink="https://github.com/AND1122/Bus_Booking_System"
              demoLink="https://github.com/AND1122/Bus_Booking_System"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={song}
              isBlog={false}
              title="Song Recommendation System"
              description="Introducing the groundbreaking Song Recommendation System by Face Emotions! In this innovative approach, we harness the power of facial recognition technology to revolutionize the way you discover and connect with music. By analyzing the emotions expressed on your face, our system can accurately gauge your mood and preferences, providing you with personalized song recommendations tailored 
              to your current state of mind. Whether you're feeling joyful, nostalgic, or introspective, our intelligent algorithm ensures that you'll find the perfect soundtrack to match your emotions. Say goodbye to endless scrolling and let your face guide you to the music that truly resonates with you. Get ready to embark on a musical journey like never before with our Song Recommendation System by Face Emotions."
              ghLink="https://github.com/AND1122/Medicines_at_your_finger_tips"
              demoLink="https://github.com/AND1122/Medicines_at_your_finger_tips"
            />
          </Col>
          

          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
