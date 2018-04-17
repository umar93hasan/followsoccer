import React from 'react';
import { Table, Button } from 'reactstrap';

export default function YourTeam(params) {
  let team = params.team;
  return <tr>
    <td>{team.name}</td>
    <td><Button color="secondary">Unfollow</Button>{' '}</td>
  </tr>
}
