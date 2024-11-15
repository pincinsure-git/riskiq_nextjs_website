import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function OurServices() {
  const serviceData = [
    {
      id: "01",
      title: "Life Insurances",
      description:
        "Ensure the financial security of your loved ones with our diverse range of life insurance plans.",
      className: "life",
    },
    {
      id: "02",
      title: "Health Insurance",
      description:
        "Protect your health and finances with comprehensive health insurance coverage.",
      className: "health",
    },
    {
      id: "03",
      title: "General Insurance",
      description:
        "Cover a range of needs with our general insurance plans, tailored for various situations.",
      className: "general",
    },
  ];

  return (
    <section className="sub-banner our_services pt-5">
      <div className="os_card">
        <h2>Our Services</h2>
      </div>
      <Container fluid style={{ marginTop: "70px" }}>
        <Row className="row-gap-4">
          {serviceData.map((service, index) => (
            <Col lg={6} xl={4} key={index}>
              <div className={`insurance-card ${service.className}`}>
                <div className="d-flex justify-content-between align-items-center">
                  <h2>{service.id}</h2>
                  <div className="chip">{service.title}</div>
                </div>
                <div className="mt-48">
                  <p>{service.description}</p>
                  <Link href="">
                    <svg
                      width="27"
                      height="17"
                      viewBox="0 0 27 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.5 8.5L25.5 8.5"
                        stroke="#5EDCD4"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.5 1.5L25.5 8.5L18.5 15.5"
                        stroke="#5EDCD4"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
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

export default OurServices;
