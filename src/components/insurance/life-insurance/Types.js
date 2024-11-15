import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Types() {
  return (
    <>
      <div className="types-cnt">Types of Term Life Insuarnce Plans</div>
      <section className="sub-banner types-sec">
        <Container>
          <Row>
            <Col xs={12}>
              <h4>1. Level Term Plans Or Standard Term Plans:</h4>
              <p>
                “This is the most basic. simple form of term insurance where the
                sum assured or death benefit is constant throughout the policy
                tenure, and benefits will be paid to the nominee on the death of
                the life insured.
              </p>
            </Col>
            <Col xs={12} style={{ marginTop: "46px" }}>
              <h4>2. Return Of Premium Term Plans:</h4>
              <p>
                These type of Term plans come with maturity benefit wherein the
                total premium paid will be returned to the life insured if
                she/he survives the policy tenure.
              </p>
            </Col>
            <Col xs={12} style={{ marginTop: "46px" }}>
              <h4>3.Convertible Term Plans:</h4>
              <p>
                These plans come with an option wherein the policyholder can
                convert these plans into any other type of plan at a future
                date. For instance, a term insurance can be converted into an
                endowment plan, a whole life insurance plan, etc. after the
                specified number of years.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Types;
