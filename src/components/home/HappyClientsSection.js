import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import ClientsCarosel from "./ClientsCarosel";

function HappyClientsSection({title}) {
  return (
    <section className="sub-banner">
      <Container>
        <Row className="align-items-center">
          <Col xl={12} className="our-partner-cnt text-center">
            <h3>{title}</h3>
            <Image src="/images/wave.png" alt="wave" />
            <ClientsCarosel />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HappyClientsSection;
