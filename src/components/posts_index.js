import React, { Component } from 'react';
import WPAPI from 'wpapi';

class PostsIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {test: 'yo what up'};


  }

  componentDidMount() {
    this.props.wp.posts().get((err, data) =>{
    }).then((data)=>{
      this.setState({posts: data})
      console.log(this);
    });
  }

  onClick(event) {
    this.setState({test: 'You clicked me'});
  }

  render() {

    return (
      <div onClick={event=>this.onClick(event)}>{this.state.test}</div>
    )
  }
}

export default PostsIndex;
