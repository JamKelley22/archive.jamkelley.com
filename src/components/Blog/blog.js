import React from 'react'
import * as contentful from 'contentful'
import Post from './post.js';
import { FormControl } from 'react-bootstrap'

import './blog.css'

class Blog extends React.Component {
  state = {
    posts: [],
    filteredPosts: [],
    searchTerm: '',
    isLoading: true,
    searchTags: new Set()
  }

  client = contentful.createClient({
    space: 'zjf63t3lh4zt',
    accessToken: '6ad21883bedbaf26311bb3b3e3cdacfb0297f94df9f7406ff347dee555254477'
  })

  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }

  fetchPosts = () => this.client.getEntries()

  setPosts = response => {
    this.setState({
      posts: response.items,
      filteredPosts: response.items,
      isLoading: false
    })
  }

  handleSearchChange = (e) => {
    e.preventDefault();
    this.setState({
      searchTerm: e.target.value
    }, () => {
      let newFilteredPosts = [];
      //check all posts
      newFilteredPosts = this.state.posts.filter(this.postFilterSearchTermAndTag);
      //set filteredPosts
      this.setState({
        filteredPosts: newFilteredPosts
      })

    })
  }

  postContainsSearchTerm = (post) => {
    if(post.fields.title.includes(this.state.searchTerm)) {
      return true;
    }
    else if (post.fields.description.includes(this.state.searchTerm)) {
      return true;
    }
    return false;
  }

  postContainsSearchTags = (post) => {
    return [...this.state.searchTags].every(elem => post.fields.tags.indexOf(elem) > -1);
  }

  postFilterSearchTermAndTag = (post) => {
    return this.postContainsSearchTags(post) && this.postContainsSearchTerm(post);
  }

  addTag = (tag) => {
    var newSearchTagSet = new Set(this.state.searchTags);
    newSearchTagSet = newSearchTagSet.add(tag);
    this.setState({
      searchTags: newSearchTagSet
    },() => {
      let newFilteredPosts = [];
      //check all posts
      newFilteredPosts = this.state.posts.filter(this.postFilterSearchTermAndTag);
      //set filteredPosts
      this.setState({
        filteredPosts: newFilteredPosts
      })
    });
  }

  removeTag = (tag) => {
    var newSearchTagSet = new Set(this.state.searchTags);
    newSearchTagSet.delete(tag);
    this.setState({
      searchTags: newSearchTagSet
    }, () => {
      let newFilteredPosts = [];
      //check all posts
      newFilteredPosts = this.state.posts.filter(this.postFilterSearchTermAndTag);
      //set filteredPosts
      this.setState({
        filteredPosts: newFilteredPosts
      })
    });
  }

  openSearchTagModal = () => {

  }

  render() {
    const SearchBar =
      <form onSubmit={e => { e.preventDefault(); }}>
        <FormControl
          type='text'
          placeholder='Search...'
          onChange={this.handleSearchChange}
          value={this.state.searchTerm}
        />
      </form>;


    let SearchTagList;

    let searchTagList = [...this.state.searchTags].map((tag,i) =>
      <p id='searchTag' key={i} onClick={() => this.removeTag(tag)}>{tag}<span id='searchTagX'>x</span></p>
    );

    SearchTagList =
      <div id='searchTagList'>{searchTagList}<button id='addTagBtn' onClick={this.openSearchTagModal}>Add Search Tag</button></div>

    if(!this.state.isLoading) {
      return (
        <div id='postList'>
          {SearchBar}
          {SearchTagList}
          {this.state.filteredPosts.length > 0 && this.state.filteredPosts.map((obj, i) =>
            {
              if(i < this.state.filteredPosts.length - 1) {
                return(
                  <React.Fragment key={i}>
                    <div id='singlePost'>
                      <Post
                        id='singlePost'
                        date={obj.sys.createdAt}
                        title={obj.fields.title}
                        content={obj.fields.content}
                        image={obj.fields.image}
                        description={obj.fields.description}
                        tags={obj.fields.tags}
                        searchTerm={this.state.searchTerm}
                        addTag={this.addTag}
                      />
                    </div>
                    <hr id='postBreakLine'/>
                  </React.Fragment>
                );
              }
              else {
                return (
                  <div id='singlePost' key={i}>
                    <Post
                      id='singlePost'
                      date={obj.sys.createdAt}
                      title={obj.fields.title}
                      content={obj.fields.content}
                      image={obj.fields.image}
                      description={obj.fields.description}
                      tags={obj.fields.tags}
                      searchTerm={this.state.searchTerm}
                      addTag={this.addTag}
                    />
                  </div>
                );
              }
            }
          )}
          {this.state.filteredPosts.length === 0 &&
            <h3>Sorry, try refining your search</h3>
          }
        </div>
      );
    }
    else {
      return (
        <h1>Loading...</h1>
      );
    }
  }
}
export default Blog
