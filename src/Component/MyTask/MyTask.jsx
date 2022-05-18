import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import ShowTask from "../ShowTask/ShowTask";
import "./MyTask.css";

const MyTask = () => {
  const [userData, setUserData]= useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setUserData(data)
      });
  }, []);

  const handleDelete = (e) =>{
    alert()
  }
  return (
    <>
      <Container>
      <div className="section-title text-center py-4 mb-3">
        <h2>Your own Task</h2>
      </div>
        {userData.map( db => <ShowTask key={db.id} db={db} handleDelete={handleDelete}/>)}
        
      </Container>
    </>
  );
};

export default MyTask;
