import React from 'react';
import { Document } from 'react-pdf';

import './resume.css';

class Resume extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Resume</h1>
        <Document file="Jameel.pdf" style={{height: "100%"}}/>
      </div>

    );
  }
}

export default Resume;
