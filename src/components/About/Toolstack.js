import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiMicrosoft,
  SiAmazonaws
  
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <a
          href = "https://www.credly.com/badges/e29e4162-63b9-48a5-9f47-1f2e118f0ad5/public_url"
          style={{ color: "white" }}
          target="_blank"
        >
        <SiMicrosoft />
        </a>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <a
          href = "https://www.credly.com/badges/640e4f83-f57b-449a-a2be-baea0c564f86/public_url"
          style={{ color: "white" }}
          target="_blank"
        >
        <SiAmazonaws />
        </a>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <a
          href = "https://www.credly.com/badges/9abf0114-f67a-4434-84d8-ad93bb43e278/public_url"
          style={{ color: "white" }}
          target="_blank"
        >
        <SiAmazonaws />
        </a>
      </Col>

      {/* <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
      </Col> */}
    </Row>
  );
}

export default Toolstack;
