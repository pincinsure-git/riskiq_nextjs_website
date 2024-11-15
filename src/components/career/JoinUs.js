import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import CareerForm from "../shared/form/CareerForm";

const formFields = [
  {
    controlId: "formFullName",
    type: "text",
    placeholder: "Full Name",
    col: 12,
  },
  { controlId: "formEmail", type: "email", placeholder: "Email Id", col: 12 },
  {
    controlId: "formContact",
    type: "text",
    placeholder: "Contact No",
    col: 12,
  },
  { controlId: "formSubject", type: "text", placeholder: "Subject", col: 12 },
];

function JoinUs() {
  return (
    <section className="sub-banner join-us">
      <div className="os_card">
        <h2>Join Us</h2>
      </div>
      <p style={{ color: "#00308D" }} className="my-3 mx-4">
        Explore the areas of work where you can apply your unique skills.
      </p>
      <Container fluid style={{ marginTop: "70px" }}>
        <Row>
          <Col xl={{ span: 8, offset: 2 }} lg={{ span: 10, offset: 1 }}>
            <div className="card-wrapper rounded-3 ">
              <Col xl={{ span: 8, offset: 2 }}  lg={{ span: 6, offset: 3 }}>
                <CareerForm />
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default JoinUs;
