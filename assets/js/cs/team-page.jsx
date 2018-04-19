import React from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, Table, Button } from 'reactstrap';
import Match from './match';

export default function TeamPage(params) {
  let monch = { name: "Monchengladbach", id: 1};
  let bund = { name: "Bundesliga", id: 1};

  let teamName = monch.name;
  //let teamName = params.team.name;
  let leagueName = bund.name;
  //let leagueName = params.team.league.name;

  let team1 = { name: "Team1", id: 1};
  let team2 = { name: "Team2", id: 2};
  let team3 = { name: "Team3", id: 3};

  let match1 = {
    home: monch,
    away: team1,
    league: bund,
    date: "Wed, 4/18",
    time: "2:45pm",
    id: 1,
  };
  let match2 = {
    home: team2,
    away: team3,
    league: bund,
    date: "Thu, 4/19",
    time: "2:45pm",
    id: 2,
  };
  let matchList = [match1, match2];
  let matches = _.map(matchList, (mm) => <Match key={mm.id} match={mm} />);

  return (
    <Container>
      <Row className="team-page-header-row">
        <Col className="team-page-col">
          <b>{teamName}</b>
        </Col>
      </Row>
      <Row className="team-page-header-row">
        <Col className="team-page-col">
          {leagueName}
        </Col>
        <Col className="team-page-col">
          <Button className="float-right follow-button" color="secondary" size="sm">Follow</Button>
          <Button className="float-right subscribe-button" color="secondary" size="sm">Subscribe</Button>
        </Col>
      </Row>
      <Row className="team-page-row">
        <Col>
          <Row className="standings-row">
            <Card className="standings-card">
              <CardHeader className="card-header">Standings</CardHeader>
              <CardBody>
                <Container className="standings-container">
                  Standings
                </Container>
              </CardBody>
            </Card>
          </Row>
          <Row className="schedule-row">
            <Card className="schedule-card">
              <CardHeader className="card-header">Schedule</CardHeader>
              <CardBody>
                <Container>
                  { matches }
                </Container>
              </CardBody>
            </Card>
          </Row>
        </Col>
        <Col>
         <Card className="chat-card">
           <CardHeader className="card-header">Team Chat</CardHeader>
           <CardBody>
             Team Chat
           </CardBody>
         </Card>
        </Col>
      </Row>
    </Container>
  );
}
