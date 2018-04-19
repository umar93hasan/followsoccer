import React from 'react';
import { ListGroupItem, Container, Row, Col, } from 'reactstrap';

export default function Standing(params) {
  let standing = params.standing;

  return <ListGroupItem tag="a" href="/teampage/1">
    <Row>
      <Col sm="2">{standing.rank}</Col>
      <Col>{standing.team}</Col>
      <Col>
        <Row>
        <Col>{standing.goals}</Col>
        <Col>{standing.goalsAgainst}</Col>
        <Col>{standing.goalDifference}</Col>
        <Col>{standing.points}</Col>
        </Row>
      </Col>
    </Row>
  </ListGroupItem>;
}
