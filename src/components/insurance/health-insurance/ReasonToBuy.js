import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const reasons = [
  { src: "/images/cost-of-treatmnet.png", alt: "cost-of-treatment", label: "Rising Cost Of Treatment", offset: 0 },
  { src: "/images/security.png", alt: "financial-security", label: "Financial Security", offset: 4 },
  { src: "/images/taxs.png", alt: "tax-benefits", label: "Tax Benefits", offset: 8 },
];

function ReasonToBuy() {
  return (
    <>
      <div className="types-cnt xl">REASON TO BUY HEALTH INSURANCE</div>
      <section className="sub-banner types-sec xl">
        <Container>
          {reasons.map((reason, index) => (
            <Row className="mb-lg-0 mb-4">
              <Col key={index} lg={{ span: 4, offset: reason.offset }}>
                <div className="d-flex gap-3 align-items-center">
                  <div className="reasons-img">
                    <Image src={reason.src} alt={reason.alt} />
                  </div>

                  <p style={{ color: "#00308D" }} className="m-0">
                    • {reason.label}
                  </p>
                </div>
              </Col>
            </Row>
          ))}

        </Container>
      </section>
    </>
  );
}

export default ReasonToBuy;
