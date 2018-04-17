import React from 'react';
import { Row, Col, Button } from 'reactstrap';

export default function YourTeam(params) {
  let team = params.team;
  return <Row className="your-team-row">
    <Col className="your-teams-col-left">{team.name}</Col>
    <Col className="your-teams-col-right">
      <Button className="left-button sub-unsub-button" color="secondary" size="sm">Subscribe</Button><Button className="unfollow-button" color="secondary" size="sm">Unfollow</Button>
    </Col>
  </Row>;
}
