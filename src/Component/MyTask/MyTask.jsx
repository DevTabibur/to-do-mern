// @ts-nocheck
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import useData from "../Hooks/useData";
import ShowTask from "../ShowTask/ShowTask";
import "./MyTask.css";

const MyTask = () => {
  const [userData] = useData();

  const handleDelete = (id) =>{
    const proceed = window.confirm("Are you sure you want to delete?");
    if(proceed){
      const url = `http://localhost:5000/tasks/${id}`;
      fetch(url, {
        method: "DELETE"
      })
      .then(res => res.json())
      .then( data =>{
        // console.log('deletd data', data);
      })
    }
  }

  return (
    <>
      <Container>
      <div className="section-title text-center py-4 mb-3">
        <h2>Your own Task</h2>
      </div>
        {userData.map( db => <ShowTask key={db._id} db={db} handleDelete={handleDelete}/>)}
        
      </Container>
    </>
  );
};

export default MyTask;
