import React from 'react';
import { ListGroupItem, Row, Col, Button } from 'reactstrap';

export default function YourTeam(params) {
  let team = params.team;
  let id = 1;
  return <ListGroupItem tag="a" href={"/teampage/" + id}>
    <Row>
      <Col className="your-teams-col-left">{team.name}</Col>
      <Col className="your-teams-col-right">
        <Button className="float-right follow-button" color="secondary" size="sm">Unfollow</Button>
        <Button className="float-right subscribe-button" color="secondary" size="sm">Subscribe</Button>
      </Col>
    </Row>
  </ListGroupItem>;
}
