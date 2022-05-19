import React from "react";
import { Button, Col, Row, Table } from "react-bootstrap";

const ShowTask = ({ db, handleDelete, handleComplete }) => {
  const { _id, name, description, selected } = db;

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
                <td>{_id}</td>
                <td className={selected ? "line-through" : ""}>{name}</td>
                <td>{description}</td>
                
                <td>
                <Button className="w-25 me-3" variant="danger" onClick={() => handleDelete(_id)}>
                  Delete
                </Button>
                <Button className="w-25" variant="primary" onClick={() => handleComplete(_id)}>
                  Complete
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
