import React from "react";
import {Jumbotron, Button, Container, Row, Col} from 'react-bootstrap'
import LoginForm from "../Components /LoginForm";

function Login() {
  return (
    <div className="login">
      <Jumbotron
        lead=""
        bg-variant="info"
        text-variant="white"
      >

          <h1>React.js Chat</h1>
          <h4>Powered by Chatkit SDK and React-Bootstrap</h4>
        <p>For more information visit website</p>
        <Button
         target="_blank" href="https://pusher.com/chatkit">
          More Info
        </Button>
      </Jumbotron>
      <Container>
        <Row>
            <Col lg='4' md='3'></Col>
            <Col lg='4' md='6'>
                <LoginForm />
            </Col>
            <Col lg='4' md='3'></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
