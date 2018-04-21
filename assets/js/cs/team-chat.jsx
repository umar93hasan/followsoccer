import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button, Form, FormGroup, Input, FormText, Container, Row, Col, Label } from 'reactstrap';
import ChatMessage from './chat-message';

export default function TeamChat(params) {
  let messages = _.map(params.messages, (mm) => <ChatMessage key={mm+Math.random().toString()} message={mm} />);

  return <Card className="section-card chat-card">
    <CardHeader className="card-header"><font className="header-font">Team Chat</font></CardHeader>
    <CardBody className="team-chat-cardbody">
      { messages }
    </CardBody>
    <CardFooter>
      <Container className="chat-input-div">
        <Row>
          <Col>
            <FormGroup className="chat-input-formgroup">
              <Label for="textarea" hidden>Text Area</Label>
              <Input type="textarea" name="text" id="chatInput" className="chat-input-textarea"/>
            </FormGroup>
          </Col>
          <Col xs="auto">
            <Button>Send</Button>
          </Col>
        </Row>
      </Container>
    </CardFooter>
  </Card>;
}
