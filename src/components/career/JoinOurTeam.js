import React from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";

function JoinOurTeam() {
  return (
    <section className="sub-banner join-our-team">
      <Container>
        <Row>
          <Col>
            <h2>Join Our Team: Building Careers, Shaping Futures</h2>
            <p style={{ marginTop: "28px" }}>
              Welcome to the career hub of Risk IQ Insurance, where we believe
              in the power of individuals to drive innovation, growth, and
              success. As a dynamic and forward-thinking company, we are on a
              mission to shape the future, and we invite you to be a part of
              this journey.
              <br />
              We understand that your career is a journey, not a destination.
              That’s why we prioritize your professional growth and development.
              Our commitment to continuous learning, mentorship programs, and
              opportunities for advancement ensures that you are equipped with
              the skills and knowledge to reach new heights in your career.
            </p>
          </Col>
        </Row>
        <Row className="align-items-center mt-4">
          <Col lg={{ span: 5, offset: 1 }}>
            <h4>Professional Development Opportunities</h4>
            <p className="git-para">
              We invest in our team’s growth with access to ongoing training,
              certifications, and skill-building workshops, empowering you to
              excel in your career and stay ahead in the insurance industry.
            </p>
          </Col>
          <Col lg={5}>
            <Image
              src="/images/professional-development-opportunities.png"
              alt="professional-development-opportunities"
              className="w-100"
            />
          </Col>
        </Row>
        <Row className="align-items-center mt-4 flex-reverse">
          <Col lg={{ span: 5, offset: 1 }}>
            <Image
              src="/images/health-coverage.png"
              alt="health-coverage"
              className="w-100"
            />
          </Col>
          <Col lg={5}>
            <h4>Comprehensive Health Coverage</h4>
            <p className="git-para">
              RiskIQ provides robust health benefits, including full medical and
              wellness support for you and your family. Our plans are designed
              to ensure peace of mind, with preventive care, mental health
              resources, and financial protection for critical healthcare needs.
            </p>
          </Col>
        </Row>
        <Row className="align-items-center mt-4">
          <Col lg={{ span: 5, offset: 1 }}>
            <h4>Flexible Work Environment</h4>
            <p className="git-para">
              Enjoy the flexibility you need to balance work and life. With
              remote work options, flexible hours, and generous leave policies,
              we support a positive work-life balance that fits your unique
              lifestyle.
            </p>
          </Col>
          <Col lg={5}>
            <Image
              src="/images/work-environment.png"
              alt="work-environment"
              className="w-100"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default JoinOurTeam;
