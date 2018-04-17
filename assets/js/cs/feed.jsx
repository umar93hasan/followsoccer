import React from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, CardTexti, Table, Button} from 'reactstrap';

//import YourTeam from './your-team';

export default function Feed(props) {
  //let yourTeams = _.map(params.teams, (tt) => <YourTeam key={tt.id} team={tt} />);
  let yourTeams = <tr><td>Loading team..</td><td>...</td></tr>
  return (
    <Container className="feed-container">
      <Row className="feed-row">
        <Col className="feed-col your-teams">
          <Card>
            <CardHeader className="card-header">Your Teams</CardHeader>
            <CardBody>
              <Table>
                <tbody>
                  <tr>
                    <td>Chelsea FC</td>
                    <td><Button color="secondary">Unfollow</Button>{' '}</td>
                  </tr>
                  { yourTeams }
                </tbody>
              </Table>
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
