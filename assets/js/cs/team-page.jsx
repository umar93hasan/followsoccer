import React from 'react';
import { ListGroup, ListGroupItem, Container, Row, Col, Card, CardHeader, CardBody, Table, Button } from 'reactstrap';
import Match from './match';
import Standing from './standing';

export default function TeamPage(params) {
  let matches = _.map(params.matches, (mm) => <Match key={mm.id} match={mm} />);
  let standings = _.map(params.standings, (ss) => <Standing key={ss.id} standing={ss} />);

  return (
    <Container>
      <Row className="section-row">
        <Col xs="auto" className="team-page-col">
          <img className="team-page-crest" src={params.crest} />
        </Col>
        <Col>
          <Row className="section-row">
            <b>{params.team.name}</b>
          </Row>
          <Row>
            <font className="muted-font">{params.league.name}</font>
          </Row>
        </Col>
        <Col xs="auto">
          <Button className="float-right follow-button" color="secondary" size="sm">Follow</Button>
          <Button className="float-right subscribe-button" color="secondary" size="sm">Subscribe</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row className="section-row">
            <ListGroup className="section-card">
              <ListGroupItem className="card-header">Standings</ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col sm="2"><font className="muted-font">Rank</font></Col>
                  <Col><font className="muted-font">Team</font></Col>
                  <Col>
                    <Row>
                      <Col><font className="muted-font">G</font></Col>
                      <Col><font className="muted-font">GA</font></Col>
                      <Col><font className="muted-font">GD</font></Col>
                      <Col><font className="muted-font">Pts</font></Col>
                    </Row>
                  </Col>
                </Row>
              </ListGroupItem>
              { standings }
            </ListGroup>
          </Row>
          <Row>
            <Card className="section-card">
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
         <Card className="section-card chat-card">
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
