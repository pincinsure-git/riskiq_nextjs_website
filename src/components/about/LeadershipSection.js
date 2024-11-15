import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

function LeadershipSection() {
  const cardData = [
    {
      imgSrc: "/images/placeholder.png",
      altText: "placeholder",
      name: "Mr.xyz",
      designation: "Managing Director",
    },
    {
      imgSrc: "/images/placeholder.png",
      altText: "placeholder",
      name: "Mr.xyz",
      designation: "Director",
    },
    {
      imgSrc: "/images/placeholder.png",
      altText: "placeholder",
      name: "Mr.xyz",
      designation: "Principle Officer",
    },
    {
      imgSrc: "/images/placeholder.png",
      altText: "placeholder",
      name: "Mr.xyz",
      designation: "Managing Director",
    },
    {
      imgSrc: "/images/placeholder.png",
      altText: "placeholder",
      name: "Mr.xyz",
      designation: "Director",
    },
    {
      imgSrc: "/images/placeholder.png",
      altText: "placeholder",
      name: "Mr.xyz",
      designation: "Principle Officer",
    },
  ];
  return (
    <section className="sub-banner leadership-section">
      <Container>
        <Row>
          <Col>
            <div className="choose-us-cnt">
              <h2>Our Leadership</h2>
            </div>
          </Col>
        </Row>
        <Row className="row-gap-7 mt-5 mt-md-5 pt-md-5">
          {cardData.map((card, index) => (
            <Col md={4} key={index}>
              <div className="leadership-card">
                <div className="position-relative d-table">
                  <Image src={card.imgSrc} alt={card.altText} />
                  <div className="position-absolute leadership-card-cnt">
                    <h4>{card.name}</h4>
                    <p>{card.designation}</p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default LeadershipSection;
