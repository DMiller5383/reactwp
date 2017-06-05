import React, { Component } from 'react';
import PostListItem from './post_list_item';

class PostsIndex extends Component {

  constructor(props) {
    super(props);
    this.state = {posts: []};
  }

  componentDidMount() {
    this.props.wp.posts().perPage(4).page(2).get((err, data) =>{
    }).then((data)=>{
      let posts = data.map((post)=>{
        let postData = {
          id: post.id,
          title: post.title.rendered,
          excerpt: post.excerpt.rendered,
          link: post.link
        };

        return PostListItem(postData);
      });
      this.setState({posts})

    });
  }


  render() {

    return (
      <div>
        {this.state.posts}
      </div>
    )
  }
}

export default PostsIndex;