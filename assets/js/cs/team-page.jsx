import React from 'react';
import { ListGroup, ListGroupItem, Container, Row, Col, Card, CardHeader, CardBody, Table, Button } from 'reactstrap';
import Match from './match';
import Standing from './standing';

export default function TeamPage(params) {
  let monch = { name: "Monchengladbach", id: 1};
  let bund = { name: "Bundesliga", id: 1};
  let homeCrestUrl = "http://upload.wikimedia.org/wikipedia/commons/8/81/Borussia_Mönchengladbach_logo.svg";
  let awayCrestUrl = "http://upload.wikimedia.org/wikipedia/commons/8/81/Borussia_Mönchengladbach_logo.svg";
  let teamName = monch.name;
  //let teamName = params.team.name;
  let leagueName = bund.name;
  //let leagueName = params.team.league.name;

  let team1 = { name: "Team1", id: 1};
  let team2 = { name: "Team2", id: 2};
  let team3 = { name: "Team3", id: 3};

  let match1 = {
    home: monch,
    homeCrestUrl: homeCrestUrl,
    away: team1,
    awayCrestUrl: awayCrestUrl,
    league: bund,
    date: "Wed, 4/18",
    time: "2:45pm",
    id: 1,
  };
  let match2 = {
    home: team2,
    homeCrestUrl: homeCrestUrl,
    away: team3,
    awayCrestUrl: awayCrestUrl,
    league: bund,
    date: "Thu, 4/19",
    time: "2:45pm",
    id: 2,
  };
  let matchList = [match1, match2];
  let matches = _.map(matchList, (mm) => <Match key={mm.id} match={mm} />);

  let standing1 = {
    rank: 1,
    team: "team1",
    points: 22,
    goals: 24,
    goalsAgainst: 8,
    goalDifference: 12,
    id: 1,
  };
  let standing2 = {
    rank: 2,
    team: "team2",
    points: 22,
    goals: 24,
    goalsAgainst: 8,
    goalDifference: 12,
    id: 2,
  };
  let standing3 = {
    rank: 3,
    team: "Monchengladbach",
    points: 22,
    goals: 24,
    goalsAgainst: 8,
    goalDifference: 12,
    id: 3,
  };
  let standing4 = {
    rank: 4,
    team: "team4",
    points: 22,
    goals: 24,
    goalsAgainst: 8,
    goalDifference: 12,
    id: 4,
  };
  let standing5 = {
    rank: 5,
    team: "team5",
    points: 22,
    goals: 24,
    goalsAgainst: 8,
    goalDifference: 12,
    id: 5,
  };
  let standingsList = [standing1, standing2, standing3, standing4, standing5];
  let standings = _.map(standingsList, (ss) => <Standing key={ss.id} standing={ss} />);

  return (
    <Container>
      <Row className="team-page-row">
        <Col xs="auto" className="team-page-col">
          <img className="team-page-crest" src={homeCrestUrl} />
        </Col>
        <Col className="team-page-col">
          <Row>
            <b>{teamName}</b>
          </Row>
          <Row className="team-page-header-row">
            {leagueName}
          </Row>
        </Col>
        <Col xs="auto" className="team-page-col">
          <Button className="float-right follow-button" color="secondary" size="sm">Follow</Button>
          <Button className="float-right subscribe-button" color="secondary" size="sm">Subscribe</Button>
        </Col>
      </Row>
      <Row className="team-page-row">
        <Col>
          <Row className="standings-row">
            <ListGroup className="standings-card">
              <ListGroupItem className="standings-header card-header">Standings</ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col sm="2">Rank</Col>
                  <Col>Team</Col>
                  <Col>
                    <Row>
                      <Col>G</Col>
                      <Col>GA</Col>
                      <Col>GD</Col>
                      <Col>Pts</Col>
                    </Row>
                  </Col>
                </Row>
              </ListGroupItem>
              { standings }
            </ListGroup>
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
        <Col className="team-page-col">
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
