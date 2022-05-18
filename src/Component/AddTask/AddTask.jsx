import React from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import { useHref } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import MyTask from "../MyTask/MyTask";
import "./AddTask.css";

const AddTask = () => {
  const handleForm = (e) => {
      e.preventDefault();
    const name = e.target.name.value;
    const description = e.target.description.value;

    const user = {name, description};
     // send this newItem info to server
     const url = `http://localhost:5000/add-task`;
     fetch(url, {
       method: "POST",
       headers: {
         "content-type": "application/json",
       },
       body: JSON.stringify(user),
     })
       .then((res) => res.json())
       .then((data) => {
       e.target.reset();

         toast.success("Added Successfully", {toastId : "SUCCESS"})
       });

    
  };

  return (
    <>
      <Container className="py-4">
      <ToastContainer/>
        <div className="section-title py-3 text-center mb-3">
          <h2>Welcome to To-Do App</h2>
          <p>
            You can add your short note here, also you can manage them after
            register our app.
          </p>
        </div>
        <Row>
          <Col md={2} lg={2}></Col>
          <Col md={8} lg={8} sm={12}>
            <div className="to-do-app">
              <Form onSubmit={handleForm} className="form-parent">
                <Form.Group className="mb-3">
                  <Form.Label>Enter Your Name</Form.Label>
                  <Form.Control type="text" name="name" placeholder="Enter Name" required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Enter notes here</Form.Label>
                  <FloatingLabel
                    controlId="floatingTextarea"
                    label="Description"
                    className="mb-3"
                  >
                    <Form.Control
                      as="textarea"
                      name="description"
                      placeholder="Leave a description here"
                      required
                    />
                  </FloatingLabel>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Add Task
                </Button>
              </Form>
            </div>
          </Col>
          <Col md={2} lg={2}></Col>
        </Row>

        <Row>
          <MyTask/>
        </Row>

      </Container>
    </>
  );
};

export default AddTask;