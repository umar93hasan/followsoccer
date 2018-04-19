import React from 'react';
import { Form, FormGroup, Label, Input, FormText, Row, Col, Button, Container } from 'reactstrap';

export default function FollowForm(params) {
  let teams = _.map(params.teams, (tt) => <option key={tt.id} value={tt.name}>{tt.name}</option>);
  let leagues = _.map(params.leagues, (ll) => <option key={ll.id} value={ll.name}>{ll.name}</option>);

  return <Row>
    <Col xs="auto">
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="leagues" className="mr-sm-2" hidden>Select league</Label>
          <Input type="select" name="leagues" placeholder="Select league">
            { leagues }
          </Input>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="teams" className="mr-sm-2" hidden>Select team</Label>
          <Input type="select" name="teams" placeholder="Select team">
            { teams }
          </Input>
        </FormGroup>
      </Form>
    </Col>
    <Col>
      <Button className="float-right follow-button" color="secondary" size="sm">Follow</Button>
      <Button className="float-right view-button" color="secondary" size="sm">View</Button>
    </Col>
  </Row>;
}
