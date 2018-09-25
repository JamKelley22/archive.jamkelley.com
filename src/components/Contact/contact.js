import React from 'react';
import Form from './Form.js';

import './contact.css';

class Contact extends React.Component {
  render() {
    return (
      <div id='contactForm'>
        <h1 style={{color: "white"}}>Contact Me</h1>
        <Form />
      </div>

    );
  }
}

export default Contact;
