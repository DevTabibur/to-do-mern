import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Container className="py-3">
        <div className="section-title py-3 text-center">
          <h2>Welcome to To-Do App</h2>
          <p>
            You can add your short note here, also you can manage them after
            register our app.
          </p>
        </div>
        <Row>
          <Col>
            <h2>hello world</h2>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
