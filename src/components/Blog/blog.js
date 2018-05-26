import React from 'react'
import * as contentful from 'contentful'
import Post from './post.js';

import './blog.css'

class Blog extends React.Component {
  state = {
    posts: []
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
      posts: response.items
    })
  }

  render() {
    return (
      <div id='postList'>
        { this.state.posts.map((obj, i) =>
          {
            if(i < this.state.posts.length - 1) {
              return(
                <React.Fragment key={i}>
                  <Post
                    date={obj.sys.createdAt}
                    title={obj.fields.title}
                    content={obj.fields.content}
                  />
                <hr id='postBreakLine'/>
                </React.Fragment>
              );
            }
            else {
              return (
                <Post
                  key={i}
                  date={obj.sys.createdAt}
                  title={obj.fields.title}
                  content={obj.fields.content}
                />
              );
            }
          }
        )}
      </div>
    );
  }
}
export default Blog
