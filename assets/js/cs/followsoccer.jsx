import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Nav from './nav';
import Feed from './feed';
import TeamPage from './team-page';
import socket from "../socket"

export default function followsoccer_init(channel,user,followedTeams) {
  let root = document.getElementById('root');
  ReactDOM.render(<Followsoccer channel={channel} user={user} followedTeams={followedTeams} />, root);
}

class Followsoccer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: props.user,
      leagues: [],
      league_teams: [],
      followedTeams: props.followedTeams,
      mySchedule: [],
      selTeam: {tname:"", tcode:0},
      fixtureList: [],
      standing: [],
      channel: props.channel,
      msg:"",
      chat:[],
    };
    this.joinChannel = this.joinChannel.bind(this);
    this.updateMsg = this.updateMsg.bind(this);
    this.sendMsg = this.sendMsg.bind(this);
    this.leagueSelect = this.leagueSelect.bind(this);
    this.teamSelect = this.teamSelect.bind(this);
    this.getFixtures = this.getFixtures.bind(this);
    ////console.log(this.state);
  }



  joinChannel(teamCode){
    let channel = socket.channel("soccerteams:"+teamCode);
       channel.join()
         .receive("ok", resp => {
           //console.log("joinedSucc::"+resp.chat[0]);
           this.setState({
             channel: channel,
             chat: resp.chat
           });
           //console.log(this.state);
          })
         .receive("error", resp => {  });
  }

  updateChat(chat){
    //console.log("chat::"+chat);
    this.setState({
      chat: chat
    });
  }

  teamSelect(teamName,teamCode){
    this.setState({
      selTeam: {tname: teamName, tcode: teamCode}
    });
    //console.log(this.state);
  }
  leagueSelect(leagueNo) {
    //e.preventDefault();
    ////console.log(e);
    $.ajax({
      headers: { 'X-Auth-Token': '1d330847318f42d1811168dde434b3a6'},
      url: 'https://api.football-data.org/v1/competitions/'+leagueNo+'/teams',
      method: "get",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      success: (resp) => {
        //console.log(resp.teams);
        this.setState({
          league_teams: resp.teams,
          selTeam: {tname:"", tcode:0}
        });
      }
    });
    //this.setState({
    //  someVar: someValue
    //})
  }

  getFixtures(teamCode){
    if(this.state.fixtureList==[]){
      ////console.log("gettingFixtures");
      $.ajax({
        headers: { 'X-Auth-Token': '1d330847318f42d1811168dde434b3a6'},
        url: 'https://api.football-data.org/v1/teams/'+localStorage['selTeamCode']+'/fixtures',
        method: "get",
        dataType: "json",
        contentType: "application/json; charset=UTF-8",
        success: (resp) => {
          this.setState({
              fixtureList: resp.fixtures
          });
        }
      });
    }
  }

  updateMsg(mm){
    this.setState({
      msg: mm
    });
  }
  sendMsg(){
    if(this.state.msg!=""){
        let textToSend = this.state.user.name+": "+ this.state.msg;
        //console.log("msg::"+textToSend);
        let channel = this.state.channel;
        channel.push("sendMessage",textToSend)
        .receive("ok", );
      }else{
        alert("Enter message");
      }
  }
  componentDidUpdate(){
    let channel = this.state.channel;
    channel.on("message", msg => {
      if(this.state.chat.length!=msg.chat.length){
        this.setState({
          chat: msg.chat
        });
      }
      ////console.log(this.state.chat);
    });
  }

  componentDidMount(){

    //get leaguesList
    $.ajax("/api/v1/leagues",{
      method: "get",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      success: (resp) => {
        //////console.log(resp);
        this.setState({
          leagues: resp.data
        });
      }
    });
    let teams = this.state.followedTeams;
    //console.log("running");
    ////console.log(teams.tcode);

    $.ajax({
      headers: { 'X-Auth-Token': '1d330847318f42d1811168dde434b3a6'},
      url: 'https://api.football-data.org/v1/teams/'+localStorage['selTeamCode']+'/fixtures',
      method: "get",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      success: (resp) => {
        this.setState({
            fixtureList: resp.fixtures
        });
      }
    });

    $.ajax({
      headers: { 'X-Auth-Token': '1d330847318f42d1811168dde434b3a6'},
      url: 'https://api.football-data.org/v1/competitions/'+localStorage['selLeagueCode']+'/leagueTable',
      method: "get",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      success: (resp) => {
        this.setState({
            standing: resp.standing
        });
      }
    });

    for(var i=0;i<teams.length;i++){
      let mySchedule = [];
      $.ajax({
        headers: { 'X-Auth-Token': '1d330847318f42d1811168dde434b3a6'},
        url: 'https://api.football-data.org/v1/teams/'+teams[i].tcode+'/fixtures',
        method: "get",
        dataType: "json",
        contentType: "application/json; charset=UTF-8",
        success: (resp) => {
          ////console.log(resp.fixtures);
          for(var j=0;j<resp.count;j++){
            if(resp.fixtures[j].status=="TIMED"){
              ////console.log(resp.fixtures[j]);
              ////console.log(resp.fixtures[j-1]);
              mySchedule.push(resp.fixtures[j]);
              mySchedule.push(resp.fixtures[j-1]);
              ////console.log(mySchedule);
              this.setState({
                mySchedule: this.state.mySchedule.concat(mySchedule)
              });
              //console.log(this.state);
              break;
            }
          }
        }
      });

    }

  }

  render() {
    return(
      <Router>
        <div>
          <Nav />
          <Route path="/feed" exact={true} render={() =>
            <Feed state={this.state} leagueSelect = {this.leagueSelect} teamSelect = {this.teamSelect} />
          } />
        <Route path="/soccerteams/:soccerteams" exact={true} render={() =>
            <TeamPage state={this.state} getFixtures={this.getFixtures} joinChannel={this.joinChannel} updateMsg={this.updateMsg} sendMsg={this.sendMsg} messages={this.state.chat} />
          } />
        </div>
      </Router>
    );
  }
}
