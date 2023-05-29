import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { ImLaptop } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <ul>
            <li className="about-activity">
              <ImLaptop /> <span className="purple"> Persistent Systems: </span>
              <br />
              <br />
              <p style={{ textAlign: "justify" }}>
              Got training on the fundamentals of computer science like data structures, C++, DBMS,<br /> operating systems, and computer networks
            <br /></p><br />
            </li>

            {/* <li className="about-activity">
              <ImLaptop /> <span className="purple"> CodeKul pvt. ltd: </span>
              <br />
              <br />
              <p style={{ textAlign: "justify" }}>
              During this internship, my team worked to make an app where the user can view the videos <br />he has made for advertising. Using his login credentials.
Here we have used the "video view" library <br /> of the android. And during this internship, I got the opportunity to be a team lead.
            <br /></p><br />
            </li> */}

            {/* <li className="about-activity">
              <ImPointRight /> Playing/Watching Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Self - Growth literature
            </li> */}
          </ul>
          {/* <ul>
            <li className="about-activity">
              <ImLaptop /> History and Geography
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing/Watching Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Self - Growth literature
            </li>
          </ul> */}

          {/* <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Atharva Batwe </span>
            from <span className="purple"> Pune, India.</span>
            <br />I am pursuing Bachelor in Information Technology in MIT AOE
            , Alandi(D.), Pune.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          
          <p style={{ color: "rgb(155 126 172)" }}>
            "Actions are what matters"{" "}
          </p>
          <footer className="blockquote-footer">AtharvS</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
