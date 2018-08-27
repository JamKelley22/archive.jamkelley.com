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
        <h1>Projects</h1>
        <div id='projectList'>
          <ProjectTile
            name="Cheerleader"
            desc="Saving the world and your butt"
            status="Ended"
            tech="Superpowers"
            image="https://i.ytimg.com/vi/yaqe1qesQ8c/maxresdefault.jpg"
            link="https://www.youtube.com/watch?v=w5tWYmIOWGk"
            github="https://github.com/JamKelley22"
            showMailingList={this.showMailingList}
          />
          <ProjectTile
            name="Exterminate"
            desc="Killing all things"
            status="Ongoing"
            tech="Lasers"
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
