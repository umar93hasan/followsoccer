import React from 'react';
import { ListGroup, ListGroupItem, Container, Row, Col, Card, CardHeader, CardBody, Table, Button, Input } from 'reactstrap';
import Match from './match';
import Standing from './standing';
import TeamChat from './team-chat';


export default function TeamPage(params) {
  //console.log("teamPage");
  //console.log(localStorage['selTeamCode']);
  //params.getFixtures(localStorage['selTeamCode']);
  //console.log(params.state);


  let teamName = localStorage['selTeamName'];
  //let teamName = params.team.name;
  //let leagueName = bund.name;
  //let leagueName = params.team.league.name;
  function joinChannel(ev){
    params.joinChannel(localStorage['selTeamCode'])
  }
  let msgValue = "";
  function updateMsg(ev){
    let tgt=$(ev.target);
    msgValue=msgValue+tgt.val();
    params.updateMsg(msgValue);
  }
  function sendMsg(ev){
    if(params.state.channel.topic=="soccerteams:0"){
      alert("Click on Join Chat to enter chat");
    }else{
      params.sendMsg();
    }
  }
  let standingsList=[];
  let matchList = [];
  matchList = params.state.fixtureList;
  standingsList = params.state.standing;
  //console.log("matchList:"+params.state.fixtureList);
  let matches = _.map(matchList, (mm) => <Match key={mm+Math.random().toString()} match={mm} />);
  let standings = _.map(standingsList, (ss) => <Standing key={ss+Math.random().toString()} standing={ss} />);
  return (
    <Container>
      <Row className="team-page-header-row">
        <Col className="team-page-col">
          <b>{teamName}</b>
        </Col>
      </Row>
      <Row className="team-page-header-row">
        <Col className="team-page-col">
        </Col>
      </Row>
      <Row className="team-page-row">
        <Col>
          <Row>
            <Card>
             <Button className="float-right follow-button" color="secondary" size="sm" onClick={joinChannel}>Join Chat</Button>
           <CardBody>
             <TeamChat messages={params.messages}/>
             <Input type="text" name="msgInput" value={params.state.msg} placeholder="enter message" onChange={updateMsg}></Input>
             <Button className="follow-team-button" color="secondary" size="sm" onClick={sendMsg}>Send</Button>
           </CardBody>
         </Card>
          </Row>
          <Row className="standings-row">
            <ListGroup className="standings-card">
              <ListGroupItem className="standings-header card-header">Standings</ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col sm="2">Rank</Col>
                  <Col>Team</Col>
                  <Col>
                    <Row>
                      <Col>Pts</Col>
                      <Col>G</Col>
                      <Col>GD</Col>
                    </Row>
                  </Col>
                </Row>
              </ListGroupItem>
              { standings }
            </ListGroup>
          </Row>

        </Col>
        <Col>
          <Row className="schedule-row">
          <Card className="schedule-card">
            <CardHeader className="card-header">Results</CardHeader>
            <CardBody>
              <Container>
                { matches }
              </Container>
            </CardBody>
          </Card>
          </Row>
        </Col>

      </Row>
    </Container>
  );
}
