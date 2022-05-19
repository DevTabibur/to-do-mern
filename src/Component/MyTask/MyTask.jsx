// @ts-nocheck
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { toast } from "react-toastify";
import useData from "../Hooks/useData";
import ShowTask from "../ShowTask/ShowTask";
import "./MyTask.css";

const MyTask = () => {
  const [userData] = useData();

  const handleComplete = (id) => {
    const { selected } = useData;

    const newSelected = !selected;
    const newSelectedObj = { newSelected };
    const url = `https://enigmatic-sea-26280.herokuapp.com/tasks/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newSelectedObj),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Item Restok successfully");
      });
  };

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      const url = `https://enigmatic-sea-26280.herokuapp.com/tasks/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log('deletd data', data);
        });
    }
  };

  return (
    <>
      <Container>
        <div className="section-title text-center py-4 mb-3">
          <h2>Your own Task</h2>
        </div>
        {userData.map((db) => (
          <ShowTask
            key={db._id}
            db={db}
            handleComplete={handleComplete}
            handleDelete={handleDelete}
          />
        ))}
      </Container>
    </>
  );
};              

export default MyTask;
