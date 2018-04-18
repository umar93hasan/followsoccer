import React from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, CardTexti, Table, Button} from 'reactstrap';

import YourTeam from './your-team';
import FollowForm from './follow-form';
import Match from './match';

export default function Feed(props) {
  let team1 = { name: "Team1", id: 1 };
  let team2 = { name: "Team2", id: 2 };
  let team3 = { name: "Team3", id: 3 };
  let teamList = [team1, team2, team3];
  //let teamList = params.allTeams;

  let epl = { name: "Premier League", id: 1 };
  let bund = { name: "Bundesliga", id: 2 };
  let league1 = { name: "league1", id: 3 };
  let league2 = { name: "league2", id: 4 };
  let leagueList = [epl, bund, league1, league2];
  //let leagueList = params.allLeagues;

  let chelsea = { name: "Chelsea FC", id: 1 };
  let loading = { name: "Loading...", id: 2 };
  let yourTeamList = [chelsea, loading];
  let yourTeams = _.map(yourTeamList, (tt) => <YourTeam key={tt.id} team={tt} />);
  //let yourTeams = _.map(params.yourTeams, (tt) => <YourTeam key={tt.id} team={tt} />);


  let match1 = {
    home: chelsea,
    away: team1,
    league: epl,
    date: "Wed, 4/18",
    time: "2:45pm",
    id: 1,
  };
  let match2 = {
    home: team2,
    away: team3,
    league: bund,
    date: "Thu, 4/18",
    time: "2:45pm",
    id: 2,
  };
  let matchList = [match1, match2];
  let yourMatches = _.map(matchList, (mm) => <Match key={mm.id} match={mm} />);
  //let yourMatches = _.map(params.yourMatches, (mm) => <Match key={mm.ide} match={mm} />);

  return (
    <Container className="feed-container">
      <Row className="feed-row">
        <Col className="feed-col teams-col">
          <Row className="follow-form-row">
            <Card className="follow-form-card">
              <CardHeader classname="card-header">Follow a team</CardHeader>
              <CardBody>
                <Container className="follow-form-container">
                  <FollowForm teams={teamList} leagues={leagueList} />
                </Container>
              </CardBody>
            </Card>
          </Row>
          <Row className="your-teams-row">
            <Card className="your-teams-card">
              <CardHeader className="card-header">Your Teams</CardHeader>
              <CardBody>
                <Container className="your-teams-container">
                  { yourTeams }
                </Container>
              </CardBody>
            </Card>
          </Row>
        </Col>
        <Col className="feed-col schedule-col">
          <Card className="schedule-card">
            <CardHeader className="card-header">Schedule</CardHeader>
            <CardBody>
              <Container className="schedule-container">
                { yourMatches }
              </Container>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
