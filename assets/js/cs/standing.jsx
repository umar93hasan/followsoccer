import React from 'react';
import { ListGroupItem, Container, Row, Col, } from 'reactstrap';

export default function Standing(params) {
  let standing = params.standing;

  return <ListGroupItem className="standing-row">
    <Row>
      <Col sm="2">{standing.position}</Col>
      <Col>{standing.teamName}</Col>
      <Col>
        <Row>
        <Col>{standing.points}</Col>
        <Col>{standing.goals}</Col>        
        <Col>{standing.goalDifference}</Col>

        </Row>
      </Col>
    </Row>
  </ListGroupItem>;
}
