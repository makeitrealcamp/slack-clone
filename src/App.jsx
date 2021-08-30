import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.scss'

function App() {
  return (
    <Container fluid>
      <header className="main">

      </header>
      <Row>
        <Col xs={4}>Channels</Col>
        <Col xs={8}>Messages</Col>
      </Row>
    </Container>
  )
}

export default App
