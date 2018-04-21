import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default function ChatMessage(params) {
  let message = params.message;
  let sep = message.indexOf(': ');
  let name = message.substring(0, sep);
  let text = message.substring(sep+1);
  return <div className="chat-message-container">
      <div className="chat-message-row"><font color="orange">{name}</font></div>
      <div className="chat-message-row">{text}</div>
    </div>;
}
