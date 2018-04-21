import React from 'react';
import { Row, Col, Button } from 'reactstrap';

export default function YourTeam(params) {
  let team = params.team;
  let subButton = <Button className="left-button sub-unsub-button" color="secondary" size="sm" onClick={subTeamEmail}>Subscribe</Button>;
  if(team.subscribe=="true"){
    subButton = <Button className="left-button sub-unsub-button" color="secondary" size="sm" onClick={unsubTeamEmail}>Unsubscribe</Button>;
  }
  function unfollowTeam(){
    //console.log(params.id)
    $.ajax("/api/v1/follows/"+params.id, {
      method: "delete",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: "",
      success: (resp) => {
        location.reload(true);
      },
    });
  }
  function subTeamEmail(){
    let data = team;
    data.subscribe = "true";
    data.user_id = params.user.id;
    delete data.id;
    $.ajax("/api/v1/follows/"+params.id, {
      method: "put",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: JSON.stringify({ id: params.id, follow: data }),
      success: (resp) => {
        location.reload(true);
      },
    });
  }
  function unsubTeamEmail(){
    let data = team;
    data.subscribe = "false";
    data.user_id = params.user.id;
    delete data.id;
    $.ajax("/api/v1/follows/"+params.id, {
      method: "put",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: JSON.stringify({ id: params.id, follow: data }),
      success: (resp) => {
        location.reload(true);
      },
    });
  }
  return <Row className="your-team-row">
    <Col className="your-teams-col-left">{team.tname}</Col>

    <Col className="your-teams-col-right">
      <Button className="unfollow-button" color="secondary" size="sm" onClick={unfollowTeam}>Unfollow</Button>
    </Col>
  </Row>;
}
