import React from 'react';
import { Form, FormGroup, Label, Input, FormText, Row, Col, Button, Container } from 'reactstrap';


export default function FollowForm(params) {
 let teams = _.map(params.teams, (tt) => <option key={tt._links.self.href.substring(38)} value={tt._links.self.href}>{tt.name}</option>);
 let leagues = _.map(params.leagues, (ll) => <option key={ll.id} value={ll.lcode}>{ll.lname}</option>);
 let selectedTeamName = "";
 let selectedTeamCode = 0;
 function listTeams(ev){
   let tgt = $(ev.target);
   //console.log(tgt.attr("name"));
   localStorage.setItem('selLeagueCode', tgt.val());
   params.leagueSelect(tgt.val());
 }


 function selectTeam(ev){
   let tgt = $(ev.target);
   //console.log(tgt.val());
   $.ajax({
     headers: { 'X-Auth-Token': '1d330847318f42d1811168dde434b3a6'},
     url: tgt.val(),
     method: "get",
     dataType: "json",
     contentType: "application/json; charset=UTF-8",
     success: (resp) => {
       params.teamSelect(resp.name,resp._links.self.href.substring(38));
     },
     error: (error) =>{
     }
   });
 }
 function followTeam(ev){
   if(params.selTeam.tcode==0){
     alert("Please select a team to follow!");
   }else{
     //console.log("team::"+params.selTeam.tname);
     //console.log("code::"+params.selTeam.tcode);
     let data = {
       tname: params.selTeam.tname,
       tcode: params.selTeam.tcode,
       subscribe: false,
       user_id: params.user.id,
     };
       //console.log(JSON.stringify(data));
     $.ajax("/api/v1/follows", {
      method: "post",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: JSON.stringify({ follow: data }),
      success: (resp) => {
        location.reload(true);
      }
    });
   }
 }

 function viewTeamPage(ev){
   if(params.selTeam.tcode==0){
     alert("Please select a team!");
   }else{
     localStorage.setItem('selTeamCode', params.selTeam.tcode);
     localStorage.setItem('selTeamName', params.selTeam.tname);
     window.location.href = "/soccerteams/"+params.selTeam.tcode;
   }
   //params.history.push('/soccerteams/'+params.selTeam.tcode);
 }

 return <Container>
   <Row className="follow-form-row">
     <Col className="follow-form-dropdown-col" xs="auto">
       <Form inline>
         <FormGroup className="mb-2 mr-sm-2 mb-sm-0 follow-form-leagues">
           <Label for="leagues" className="mr-sm-2" hidden>Select league</Label>
           <Input type="select" name="leagues" placeholder="Select league" onChange={listTeams}>
             <option value="0" hidden>-select-</option>
               { leagues }
           </Input>
         </FormGroup>
         <FormGroup className="mb-2 mr-sm-2 mb-sm-0 follow-form-teams">
           <Label for="teams" className="mr-sm-2" hidden>Select team</Label>
           <Input type="select" name="teams" placeholder="Select team" onChange={selectTeam}>
             <option value="0" hidden>-select-</option>
               { teams }
           </Input>
         </FormGroup>
       </Form>
     </Col>
     <Col className="follow-form-button-col">
       <Button className="left-button view-team-button" color="secondary" size="sm" onClick={viewTeamPage}>View</Button>
       <Button className="follow-team-button" color="secondary" size="sm" onClick={followTeam}>Follow</Button>
     </Col>
   </Row>
 </Container>;
}
