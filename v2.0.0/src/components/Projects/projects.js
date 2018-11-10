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
    let data = [
      {
        name: "PunchClock",
        desc: "",
        status: "",
        tech: ["", ""],
        tags: [],
        image: "",
        link: "",
        github: ""
      },
      {
        name: "PunchClock",
        desc: "",
        status: "",
        tech: ["", ""],
        tags: [],
        image: "",
        link: "",
        github: ""
      },
      {
        name: "PunchClock",
        desc: "",
        status: "",
        tech: ["", ""],
        tags: [],
        image: "",
        link: "",
        github: ""
      },
      {
        name: "PunchClock",
        desc: "",
        status: "",
        tech: ["", ""],
        tags: [],
        image: "",
        link: "",
        github: ""
      },
    ]
    return (
      <div>
        <div id='projectList'>
          {
            data.map((item, i) => {

            })
          }
          <ProjectTile
            id='projectTile'
            name="PunchClock"
            desc="Track your time spent working!"
            status="Ended"
            tech={["Java", "JavaFX"]}
            tags={[]}
            image="https://i.ytimg.com/vi/yaqe1qesQ8c/maxresdefault.jpg"
            link="https://www.youtube.com/watch?v=w5tWYmIOWGk"
            github="https://github.com/JamKelley22"
            showMailingList={this.showMailingList}
          />
          <ProjectTile
            id='projectTile'
            name="Mood Track"
            desc=""
            status="Ongoing"
            tech={["React-Native"]}
            tags={[]}
            link=""
            showMailingList={this.showMailingList}
          />
          <ProjectTile
            id='projectTile'
            name="CooL:SLiCE SPASS"
            desc=""
            status="Ongoing"
            tech={["React-Native"]}
            tags={[]}
            link="https://coolslice-spass.herokuapp.com"
            showMailingList={this.showMailingList}
          />
          <ProjectTile
            id='projectTile'
            name="ISU Cytes"
            desc=""
            status="Ongoing"
            tech={["Spring", "React"]}
            tags={[]}
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
