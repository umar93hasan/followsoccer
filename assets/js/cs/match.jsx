import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default function Match(params) {
  let homeTeam = params.match.home.name;
  let awayTeam = params.match.away.name;
  let league = params.match.league.name;
  let date = params.match.date;
  let time = params.match.time;
  return <Row className="match-row">
      <Container className="match-container">
        <Row className="match-info-row">
          {league} &middot; {date}, {time}
        </Row>
        <Row>
          <Col>
            <Row className="team-image-row">
              <span className="placeholder"></span>
            </Row>
            <Row className="match-team-name-row">
              {homeTeam}
            </Row>
          </Col>
          <Col className="match-col">vs</Col>
          <Col className="match-col">
            <Container>
              <Row className="team-image-row">
                <span className="placeholder"></span>
              </Row>
              <Row className="match-team-name-row">
                {awayTeam}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </Row>;
}
