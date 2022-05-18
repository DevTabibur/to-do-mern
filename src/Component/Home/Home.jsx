
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <Container>
            <Row>
                <Col>
                    <h2>Welcome to To Do App</h2>
                    <Link className='header-link' to="/add-task">Add ToDo</Link>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Home