import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function BannerSection() {
  return (
    <section className="sub-banner hero partner">
      <Container>
        <Row>
          <Col>
            <h1 className="text-center  text-light sub-banner-title">Life Insurance</h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default BannerSection;