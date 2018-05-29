import React from 'react'
import * as Markdown from 'react-markdown'
import moment from 'moment'
import './blog.css'
import './post.css'

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

    let embedMD = [];

    //=========================================
    let allEmbeded = lines.forEach((line,i) => {
      if(line.substring(0,3) === embedToken) {
        let embedSrc = line.substring(3);
        let tempMD = md;
        md = '';
        embedMD.push(<Markdown source={tempMD} id='postContent'/>);
        embedMD.push(<img src={embedSrc} alt= {"Inline Image: " + embedSrc}/>);
      }
      else {
        md += "\n" + line;
      }
    })
    //========================================
    return (
      <React.Fragment>
        {embedMD}
        <Markdown source={md} id='postContent'/>
      </React.Fragment>
    );
  }

  getHighlightedText = (text, higlight) => {
    let escaped = this.escapeRegExp(higlight);
    // Split on higlight term and include term into parts, ignore case
    let regx = new RegExp(`(${escaped})`, 'gi');
    let parts = text.split(regx);
    return <span> { parts.map((part, i) =>
        <span key={i} style={part.toLowerCase() === higlight.toLowerCase() ? { fontWeight: 'bold' } : {} }>
            { part }
        </span>)
    } </span>;
  }

  escapeRegExp = (string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
  }

  render() {
    let embededContent = this.getEmbededContent();
    let searchedTitle = this.props.title;
    let searchedDescription = this.props.description;
    if(this.props.searchTerm.length > 0) {
      searchedTitle = this.getHighlightedText(this.props.title,this.props.searchTerm);
      searchedDescription = this.getHighlightedText(this.props.description,this.props.searchTerm);
    }

    let Tags;

    if(this.props.tags) {
      let tagList = this.props.tags.map((tag,i) =>
        <p id='tag' key={i} onClick={() => this.props.addTag(tag)}>{tag}</p>
      );

      Tags =
        <div id='tags'>{tagList}</div>
    }
    else {
      Tags =
        <div id='tags'></div>
    }

    let PostDate = moment(this.props.date).calendar(null, {
      sameDay: '[Today]',
      lastDay: '[Yesterday]',
      lastWeek: '[Last] dddd',
      sameElse: 'MMM Do YYYY'
    })

    let UpdateDate = moment(this.props.updatedDate).calendar(null, {
      sameDay: '[Today]',
      lastDay: '[Yesterday]',
      lastWeek: '[Last] dddd',
      sameElse: 'MMM Do YYYY'
    })

    return (
      <div className="post">
        <div id='postTitle' onClick={this.togglePost}><h1>{searchedTitle}</h1></div>
        {!this.state.isOpen && this.props.image && <img id='coverImage' alt="Post Cover" src={this.props.image.fields.file.url}/>}
        {!this.state.isOpen && <h4 id='description'>{searchedDescription}</h4>}
        {this.state.isOpen && embededContent}
        <hr id='break'/>
        {Tags}
        <p id='publishDate'>
          {"Posted: "}
          {PostDate}
          {PostDate !== UpdateDate && " | Updated: " }
          {PostDate !== UpdateDate && UpdateDate}
        </p>
      </div>
    );
  }
}

export default Post;
