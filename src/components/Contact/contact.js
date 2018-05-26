import React from 'react';
import Form from './Form.js';

import './contact.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1 style={{color: "white"}}>Contact Me</h1>
        <Form />
      </div>

    );
  }
}

export default Contact;
