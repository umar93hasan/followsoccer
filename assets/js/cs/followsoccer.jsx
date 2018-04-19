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
            <Feed />
          } />
          <Route path="/teampage/:team_id" exact={true} render={() =>
            <TeamPage />
          } />
        </div>
      </Router>
    );
  }
}
