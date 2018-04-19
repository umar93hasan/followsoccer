import React from 'react';
import { ListGroup, ListGroupItem, Container, Row, Col, Card, CardHeader, CardBody, CardTexti, Table, Button} from 'reactstrap';

import YourTeam from './your-team';
import FollowForm from './follow-form';
import Match from './match';

export default function Feed(params) {
  let yourTeams = _.map(params.yourTeams, (tt) => <YourTeam key={tt.id} team={tt} />);
  let yourMatches = _.map(params.yourTeamMatches, (mm) => <Match key={mm.id} match={mm} />);

  return (
    <Container>
      <Row>
        <Col>
          <Row className="section-row">
            <Card className="section-card">
              <CardHeader>Follow a team</CardHeader>
              <CardBody>
                <Container>
                  <FollowForm teams={params.unfollowedTeams} leagues={params.leagues} />
                </Container>
              </CardBody>
            </Card>
          </Row>
          <Row>
            <ListGroup className="section-card">
              <ListGroupItem className="card-header">Your Teams</ListGroupItem>
              { yourTeams }
            </ListGroup>
          </Row>
        </Col>
        <Col>
          <Card className="section-card">
            <CardHeader>Schedule</CardHeader>
            <CardBody>
              <Container>
                { yourMatches }
              </Container>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
