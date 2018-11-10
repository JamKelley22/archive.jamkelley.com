import React from 'react'

import './projectTile.css'

class ProjectTile extends React.Component {
  render() {
    return (
      <div id='tile'>
        <p id='tileName'>{this.props.name}</p>

          <div id='tileContent'>
            <div id='left'>
              <p id='tileStatus'>Status: {this.props.status}</p>
              <p id='tileDesc'>{this.props.desc}</p>
              <p id='tileTech'>Tech: {this.props.tech.join(', ')}</p>
            </div>
            <div id='right'>
              {this.props.image && <img src={this.props.image}/> || <img/>}
            </div>tar
          </div>
          <div id='tileLinks'>
            {this.props.link && <a href={this.props.link}><i className="fas fa-link"/></a>}
            {this.props.github && <a href={this.props.github}><i className="fab fa-github"/></a>}
          </div>
      </div>
    );
  }

  /*
  render () {
    return (
      <div id='tile'>
        <div id='tileTopRow'>
          <p id='tileName'>{this.props.name}</p>
          <i onClick={() => this.props.showMailingList(this.props.name)} className="fas fa-envelope"></i>
        </div>
        <hr/>
        <div id='tileContent'>
          <div id='left'>
            <p id='tileStatus'>Status: {this.props.status}</p>
            <p id='tileDesc'>{this.props.desc}</p>
            <p id='tileTech'>Tech: {this.props.tech.join(', ')}</p>
          </div>
          <div id='right'>
            {this.props.image && <img src={this.props.image}/> || <img/>}
          </div>
        </div>
        <div id='tileLinks'>
          {this.props.link && <a href={this.props.link}><i className="fas fa-link"/></a>}
          {this.props.github && <a href={this.props.github}><i className="fab fa-github"/></a>}
        </div>
      </div>
    );
  }
  */
}

export default ProjectTile;
