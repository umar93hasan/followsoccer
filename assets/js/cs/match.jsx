import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default function Match(params) {
  let homeTeam = params.match.homeTeamName;
  let awayTeam = params.match.awayTeamName;
  let hGoals = "-";
  let aGoals = "-";
  if(params.match.result.goalsHomeTeam!=null){
    hGoals=params.match.result.goalsHomeTeam;
  }
  if(params.match.result.goalsAwayTeam!=null){
    aGoals=params.match.result.goalsAwayTeam;
  }
  let date = "Date: " + params.match.date.substring(0,10);
  return <Row className="match-row">
      <Container className="match-container">
        <Row className="match-info-row">
          {date}
        </Row>
        <Row className="match-teams-row">
          <Col className="match-col match-col-left">
            <Container>
              <Row>
                <span className="placeholder">{hGoals}</span>
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
                <span className="placeholder">{aGoals}</span>
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
