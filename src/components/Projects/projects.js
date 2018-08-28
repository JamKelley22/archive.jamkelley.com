import React from 'react';

import {Modal, Button} from 'react-bootstrap'
import ProjectTile from './ProjectTile'
import './projects.css'

class Projects extends React.Component {
  state = {
    mailingListVisible: false,
    mailingListProjectName: null
  }

  showMailingList = (projectName) => {
    this.setState({
      mailingListVisible: true,
      mailingListProjectName: projectName
    })
  }

  render() {
    return (
      <div>
        <div id='projectList'>
          <ProjectTile
            name="PunchClock"
            desc="Track your time spent working!"
            status="Ended"
            tech={["Java", "JavaFX"]}
            image="https://i.ytimg.com/vi/yaqe1qesQ8c/maxresdefault.jpg"
            link="https://www.youtube.com/watch?v=w5tWYmIOWGk"
            github="https://github.com/JamKelley22"
            showMailingList={this.showMailingList}
          />
          <ProjectTile
            name="Mood Track"
            desc=""
            status="Ongoing"
            tech={["React-Native"]}
            link=""
            showMailingList={this.showMailingList}
          />
          <ProjectTile
            name="CooL:SLiCE SPASS"
            desc=""
            status="Ongoing"
            tech={["React-Native"]}
            link="https://coolslice-spass.herokuapp.com"
            showMailingList={this.showMailingList}
          />
          <ProjectTile
            name="ISU Cytes"
            desc=""
            status="Ongoing"
            tech={["Spring", "React"]}
            link="https://www.youtube.com/watch?v=k3sgjbpK1io"
            showMailingList={this.showMailingList}
          />
        </div>
        <Modal show={this.state.mailingListVisible}>
          <Modal.Title>Subscribe to {this.state.mailingListProjectName} mailing list!</Modal.Title>
        </Modal>
      </div>
    );
  }
}

export default Projects;
