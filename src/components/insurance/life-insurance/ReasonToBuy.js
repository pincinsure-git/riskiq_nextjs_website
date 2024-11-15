import HandIcon from "@/components/shared/icon/HandIcon";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

function ReasonToBuy() {
  const data = [
    {
      icon: "/images/icon/hand.png",
      list: "How they will be able to maintain same lifestyle?",
    },
    {
      icon: "/images/icon/hand.png",
      list: "What happens to various liabilities like Car Loan, Home Loan and other EMI?",
    },
    {
      icon: "/images/icon/hand.png",
      list: "Whatwill happen to education of the kids?",
    },
    {
      icon: "/images/icon/hand.png",
      list: "What will happen to medical bills of the parents?",
    },
    {
      icon: "/images/icon/hand.png",
      list: "How will family bear the marriage expenses of kids?",
    },
    {
      icon: "/images/icon/hand.png",
      list: "How long will the savings last?",
    },
  ];
  return (
    <>
      <div className="types-cnt xl">Reasons To Buy Term Life Insuarnce</div>
      <section className="sub-banner types-sec xl">
        <Container>
          <Row>
            <Col>
              <p>
                Uncertainty is the second name of life. However, in our busy
                life, we always live in today and don't think about
                uncertainties of tomorrow. One of the biggest uncertainties is
                the life itself. Nobody is sure about the continuity of life.
                However, the question “What if die tomorrow” is never asked.
                <br />
                One of the biggest uncertainties is the life itself. Nobody is
                sure about the continuity of life. However, the question “What
                if die ”tomorrow” is never asked.
              </p>
              <p className="mt-5 mb-0">
                In case of sudden unfortunate incident like death, the family is
                faced with the following unpleasant questions:
              </p>
              <ul className="reasons-li">
                {data.map((dat, index) => (
                  <li key={index}>
                    <Image src="/images/icon/hand.png" /> {dat.list}
                  </li>
                ))}
              </ul>
              <p className="mt-5 mb-0">
                Term Insurance provides the answers to the above-mentioned
                questions.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ReasonToBuy;
