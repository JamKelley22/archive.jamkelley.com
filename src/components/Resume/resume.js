import React from 'react';
import { Document, Page } from 'react-pdf';

import './resume.css';

class Resume extends React.Component {
  render() {
    return (
      <div id='resumeDoc'>
        <Document file="Jameel.pdf">
          <Page pageNumber={1} scale={1}/>
        </Document>
      </div>

    );
  }
}

export default Resume;
