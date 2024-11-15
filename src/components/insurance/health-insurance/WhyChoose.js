import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function WhyChoose() {
  const data = [
    {
      title: "Tailored Coverage:",
      description:
        "Our Health Insurance plans are not one-size-fits-all. We work with you to understand your health goals and lifestyle, offering plans that provide precisely what you need.",
    },
    {
      title: "Transparent Policies:",
      description:
        "Understanding your coverage is essential. Our policies are transparent, with clear terms and conditions, ensuring you have a complete understanding of your Health Insurance plan.",
    },
    {
      title: "Client-Centric Approach:",
      description:
        "Your health and satisfaction are our top priorities. Our client-centric approach extends from the enrollment process to the claims experience, ensuring you receive the support and care you deserve.",
    },
  ];

  return (
    <section className="sub-banner  pt-5">
      <div className="os_card">
        <h2>
          Why Choose Risk IQ Insurance
          <br /> for Health Insurance:
        </h2>
      </div>
      <Container style={{ marginTop: "70px" }}>
        <Row>
          <Col md={12}>
            <ul className="why-choose-us-li">
              {data.map((dat, index) => (
                <li key={index}>
                  <h4>{dat.title}</h4>
                  <p>{dat.description}</p>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default WhyChoose;
