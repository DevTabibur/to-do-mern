import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import welcome from '../../assets/images/welcome.png';
import './Home.css';


const Home = () => {
  return (
    <div className='home py-5 my-5'>
        <Container>
            <Row>
            <Col md={6} lg={6} sm={12}>
                <div className="img-div w-100">
                    <img src={welcome} alt="img" />
                </div>
            </Col>
                <Col md={6} lg={6} sm={12} className="d-flex justify-content-center align-items-center">
                    <div className="info">
                    <h2>Welcome to To Do App</h2>
                    <Link className='add-link mt-3 shadow' to="/add-task">Add ToDo</Link>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Home