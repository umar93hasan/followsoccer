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
        <Row className="match-teams-row">
          <Col className="match-col match-col-left">
            <Container>
              <Row>
                <span className="placeholder"></span>
              </Row>
              <Row className="match-team-name">
                {homeTeam}
              </Row>
            </Container>
          </Col>
          <Col className="match-col match-col-middle">vs</Col>
          <Col className="match-col match-col-right">
            <Container>
              <Row>
                <span className="placeholder"></span>
              </Row>
              <Row className="match-team-name">
                {awayTeam}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </Row>;
}
