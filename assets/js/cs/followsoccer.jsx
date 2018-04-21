import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './nav';
import Feed from './feed';
import TeamPage from './team-page';

export default function followsoccer_init() {
  let root = document.getElementById('root');
  ReactDOM.render(<Followsoccer />, root);
}

  let team1 = { name: "Team1", id: 1 };
  let team2 = { name: "Team2", id: 2 };
  let team3 = { name: "Team3", id: 3 };
  let gladBach = { name: "Monchengladbach", id: 5 };
  let teamList = [team1, team2, team3];
  let yourTeamList = [gladBach, team1];
  
  let epl = { name: "Premier League", id: 1 };
  let bund = { name: "Bundesliga", id: 2 };
  let league1 = { name: "league1", id: 3 };
  let league2 = { name: "league2", id: 4 };
  let leagueList = [epl, bund, league1, league2];

  let homeCrestUrl = "http://upload.wikimedia.org/wikipedia/commons/8/81/Borussia_Mönchengladbach_logo.svg";
  let awayCrestUrl = "http://upload.wikimedia.org/wikipedia/de/d/da/Manchester_United_FC.svg";

  let match1 = {
    home: gladBach,
    homeCrestUrl: homeCrestUrl,
    away: team1,
    awayCrestUrl: awayCrestUrl,
    league: epl,
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
    date: "Thu, 4/18",
    time: "2:45pm",
    id: 2,
  };
  let matchList = [match1, match2];

  let standing1 = {
    rank: 1,
    team: team1.name,
    points: 22,
    goals: 24,
    goalsAgainst: 8,
    goalDifference: 12,
    id: 1,
  };
  let standing2 = {
    rank: 2,
    team: team2.name,
    points: 22,
    goals: 24,
    goalsAgainst: 8,
    goalDifference: 12,
    id: 2,
  };
  let standing3 = {
    rank: 3,
    team: gladBach.name,
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

  let messages = ["bob: hello", "mary: longer message", "josh: hola", "bob: how's it going? this to test for a longer message. blah blah blah blah blah blah", "mary: what's up guys?", "josh: yo", "bob: my name is bob!", "mary: alsdkfja;sldkfja;lsdkjfasldkfj", "josh: hey"];

class Followsoccer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  render() {
    return(
      <Router>
        <div>
          <Nav />
          <Route path="/feed" exact={true} render={() =>
            <Feed unfollowedTeams={teamList} leagues={leagueList} yourTeams={yourTeamList} yourTeamMatches={matchList} />
          } />
          <Route path="/teampage/:team_id" exact={true} render={() =>
            <TeamPage team={gladBach} league={bund} crest={homeCrestUrl} matches={matchList} standings={standingsList} messages={messages} />
          } />
        </div>
      </Router>
    );
  }
}
