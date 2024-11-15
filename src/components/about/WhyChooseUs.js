import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

function WhyChooseUs() {
  const cardData = [
    {
      imgSrc: "/images/fast-convinient.png",
      altText: "fast_convenient",
      title: "FAST & CONVENIENT",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sollicitudin sit amet augue quis convallis.",
    },
    {
      imgSrc: "/images/economical.png",
      altText: "economical",
      title: "ECONOMICAL",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sollicitudin sit amet augue quis convallis.",
    },
    {
      imgSrc: "/images/paperwork.png",
      altText: "paperwork",
      title: "MINIMUM PAPERWORK",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sollicitudin sit amet augue quis convallis.",
    },
    {
      imgSrc: "/images/transparent.png",
      altText: "transparent",
      title: "TRANSPARENT",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sollicitudin sit amet augue quis convallis.",
    },
  ];

  return (
    <section className="sub-banner why-choose-us">
      <Container>
        <Row>
          <Col>
            <h3>WHY CHOOSE US?</h3>
            <p>
              As your insurance brokers, we strive to offer you the best
              insurance experience. We try to bring to you the cheapest
              insurance plans, suitable for your needs. You can compare and
              choose plans of leading insurance companies.
            </p>
          </Col>
        </Row>
        <Row className="row-gap-4">
          {cardData.map((card, index) => (
            <Col lg={6} key={index}>
              <div className="why-choose-us_card">
                <div>
                  <Image src={card.imgSrc} alt={card.altText} />
                </div>
                <div>
                  <h5>{card.title}</h5>
                  <p>{card.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default WhyChooseUs;
