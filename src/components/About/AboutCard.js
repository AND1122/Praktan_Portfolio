import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Praktan Khatavkar </span>
            from <span className="purple"> Sawantwadi, Maharastra, India.</span>
            <br />I am bachelor at MIT Academy of Engineering pursuing bachelors in Infromation Technology
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Never loose your focus"{" "}
          </p>
          <footer className="blockquote-footer">Praktan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
