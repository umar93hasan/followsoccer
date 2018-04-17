import React from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, CardTexti, Table, Button} from 'reactstrap';

import YourTeam from './your-team';
import FollowForm from './follow-form';

export default function Feed(props) {
  let chelsea = { name: "Chelsea FC", id: 1 };
  let loading = { name: "Loading...", id: 2 };
  let yourTeamList = [chelsea, loading];
  let yourTeams = _.map(yourTeamList, (tt) => <YourTeam key={tt.id} team={tt} />);
  //let yourTeams = _.map(params.teams, (tt) => <YourTeam key={tt.id} team={tt} />);

  let team1 = { name: "Team1", id: 1 };
  let team2 = { name: "Team2", id: 2 };
  let team3 = { name: "Team3", id: 3 };
  let teamList = [team1, team2, team3];
  //let teamList = params.allTeams;
  let league1 = { name: "league1", id: 1 }
  let league2 = { name: "league2", id: 2 }
  let leagueList = [league1, league2];
  //let leagueList = params.allLeagues;

  return (
    <Container className="feed-container">
      <Row className="feed-row">
        <Col className="feed-col your-teams">
          <Card>
            <CardHeader className="card-header">Your Teams</CardHeader>
            <CardBody>
              <Container className="your-teams-container">
                <FollowForm teams={teamList} leagues={leagueList}/>
                <hr />
                { yourTeams }
              </Container>
            </CardBody>
          </Card>
        </Col>
        <Col className="feed-col">
          <Card>
            <CardHeader className="card-header">Schedule</CardHeader>
            <CardBody>
              Blah
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
