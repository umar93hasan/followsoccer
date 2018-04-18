import React from 'react';
import { Form, FormGroup, Label, Input, FormText, Row, Col, Button, Container } from 'reactstrap';

export default function FollowForm(params) {
 let teams = _.map(params.teams, (tt) => <option key={tt.id} value={tt.name}>{tt.name}</option>);
 let leagues = _.map(params.leagues, (ll) => <option key={ll.id} value={ll.name}>{ll.name}</option>);

 return <Container>
   <Row className="follow-form-row">
     <Col className="follow-form-dropdown-col" xs="auto">
       <Form inline>
         <FormGroup className="mb-2 mr-sm-2 mb-sm-0 follow-form-leagues">
           <Label for="leagues" className="mr-sm-2" hidden>Select league</Label>
           <Input type="select" name="leagues" placeholder="Select league">
             { leagues }
           </Input>
         </FormGroup>
         <FormGroup className="mb-2 mr-sm-2 mb-sm-0 follow-form-teams">
           <Label for="teams" className="mr-sm-2" hidden>Select team</Label>
           <Input type="select" name="teams" placeholder="Select team">
             { teams }
           </Input>
         </FormGroup>
       </Form>
     </Col>
     <Col className="follow-form-button-col">
       <Button className="left-button view-team-button" color="secondary" size="sm">View</Button><Button className="follow-team-button" color="secondary" size="sm">Follow</Button>
     </Col>
   </Row>
 </Container>;
}
