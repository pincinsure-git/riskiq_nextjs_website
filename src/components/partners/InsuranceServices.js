import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import RightArrow from "../shared/icon/RightArrow";

function InsuranceServices() {
  const services = [
    {
      id: "01",
      type: "Life Insurance",
      description:
        "Ensure the financial security of your loved ones with our diverse range of life insurance plans.",
      className: "life",
    },
    {
      id: "02",
      type: "Health Insurance",
      description:
        "Protect yourself and your family with our comprehensive health insurance plans.",
      className: "health",
    },
    {
      id: "03",
      type: "General Insurance",
      description:
        "Cover a wide range of risks with our general insurance solutions tailored to your needs.",
      className: "general",
    },
  ];

  return (
    <section className="sub-banner our_services pt-2">
      <div className="os_card">
        <h2>Our Insurance Services</h2>
      </div>
      <Container fluid style={{ marginTop: "70px" }}>
        <Row className="row-gap-4">
          {services.map((service, index) => (
            <Col key={index} md={6} lg={4}>
              <div className={`insurance-card ${service.className}`}>
                <div className="d-flex justify-content-between align-items-center">
                  <h2>{service.id}</h2>
                  <div className="chip">{service.type}</div>
                </div>
                <div className="mt-48">
                  <p>{service.description}</p>
                  <Link href="">
                    <RightArrow />
                  </Link>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default InsuranceServices;
