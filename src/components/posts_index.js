import React, { Component } from 'react';
import PostListItem from './post_list_item';
import PostsPagination from './posts_pagination';

class PostsIndex extends Component {

  constructor(props) {
    super(props);
    this.state = {posts: [], page: 1};
  }

  componentDidMount() {

    this.props.wp.posts().perPage(4).page(this.state.page).get((err, data) =>{
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
        <PostsPagination />
      </div>
    )
  }
}

// mapStateToProps(state) {
//   return {posts: state.posts};
// }
export default PostsIndex;
