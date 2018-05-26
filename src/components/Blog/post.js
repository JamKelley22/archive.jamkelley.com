import React from 'react'
import * as Markdown from 'react-markdown'
import moment from 'moment'
import { Button } from 'react-bootstrap'
import './blog.css'

class Post extends React.Component {
  state = {
      isOpen: false
  }

  openPost = () => {
    this.setState({
      isOpen: true
    })
  }

  togglePost = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  getEmbededContent = () => {
    let embedToken = '%%%';
    let lines = this.props.content.split("\n");
    let md = '';
    let tracker = 0;

    //=========================================
    let allEmbeded = lines.map((line,i) => {
      if(line.substring(0,3) === embedToken) {
        console.log("Found one @ line # " + i);
        let embedSrc = line.substring(3);
        let tempMD = md;
        md = '';
        return (
          <React.Fragment key={i}>
            <Markdown source={tempMD} id='postContent'/>
            <img src={embedSrc} alt= {"Inline Image: " + embedSrc}/>
          </React.Fragment>
        );
      }
      else {
        md += "\n" + line;
      }
    })
    //========================================
    return (
      <React.Fragment>
        {allEmbeded}
        <Markdown source={md} id='postContent'/>
      </React.Fragment>
    );

    /*
    for (var i = 0; i < lines.length; i++) {
      if(lines[i].substring(0,3) == embedToken) {
        console.log("Found one @ line # " + i);
      }
    }
    return (
      <Markdown source={this.props.content} id='postContent'/>
    );
    */
  }

  render() {
    let embededContent = this.getEmbededContent();
    return (
      <div className="post">
        <div id='postTitle' onClick={this.togglePost}><h1>{this.props.title}</h1></div>
        {this.state.isOpen && embededContent}
        <hr id='break'/>
          <p id='publishDate'>
            {moment(this.props.date).calendar(null, {
              sameDay: '[Today]',
              lastDay: '[Yesterday]',
              lastWeek: '[Last] dddd',
              sameElse: 'MMM Do YYYY'
            })}
          </p>
      </div>
    );
  }
}

export default Post;
