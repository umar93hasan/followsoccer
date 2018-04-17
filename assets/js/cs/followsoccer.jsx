import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './nav';
import Feed from './feed';

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
          <Feed />
        </div>
      </Router>
    );
  }
}
