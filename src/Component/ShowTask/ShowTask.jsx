import React from "react";
import { Button, Col, Row, Table } from "react-bootstrap";

const ShowTask = ({ db, handleDelete }) => {
  const { id, name, description } = db;
  return (
    <>
      <Row>
        <Col className=" mb-4">
          <Table striped bordered hover className="text-center">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Are you want to Delete?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{description}</td>
                
                <td>
                <Button className="w-25" variant="danger" onClick={() => handleDelete(id)}>
                  Delete
                </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default ShowTask;
