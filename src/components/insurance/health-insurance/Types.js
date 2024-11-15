import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Types() {
  return (
    <>
      <div className="types-cnt">Types of Health Insuarnce Plans</div>
      <section className="sub-banner types-sec">
        <Container>
          <Row>
            <Col xs={12}>
              <h4>1. Hospitalization Plans:</h4>
              <p>
                Hospitalization plans reimburse the hospitalization and medical
                costs of the insured subject to the sum insured. For this
                reason, the plans are also known as indemnity plans.{" "}
              </p>
            </Col>
            <Col xs={12} style={{ marginTop: "46px" }}>
              <h4>2. Hospital Daily Cash Benefit Plans:</h4>
              <p>
                A hospital cash plan pays you a specific prefixed amount for
                each day you are hospitalized. The number of days for which this
                benefit is paid is typically capped. This plan is useful to
                cover ancillary costs (medical and non-medical) that are not
                covered under health insurance plan and to provide for loss of
                income during hospitalization (for self employed ). While
                deciding this plan you need to look into Daily cash limit,
                Number of days of coverage in a policy year and eligibility (or
                pre-conditions) for claiming the benefit.
              </p>
            </Col>
            <Col xs={12} style={{ marginTop: "46px" }}>
              <h4>3. Critical Illness Plans:</h4>
              <p>
                These are benefit-based health insurance plans which pay a
                lumpsum amount on diagnosis of predefined critical illnesses and
                medical procedures. The illnesses are specified at the outset.
                By nature, critical illnesses are high severity and low
                frequency and cost of treatment is higher compared to regular
                medical problems like heart attack. stroke, among others.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Types;
