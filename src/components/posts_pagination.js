import React, { Component } from 'react';
import { fetchPosts } from '../actions';
import {connect} from 'react-redux';
import PostPaginationPage from './post_pagination_page';
import _ from 'lodash';

class PostsPagination extends Component {
  componentDidMount() {
    return true;
  }

  handleClick(num) {
    return (num)=> {

      console.log(num);
    }
  }
  render() {
    if(_.isEmpty(this.props.totalPages)) {
      return;
    } else {
      let pages = [];
      for(let i=1; i<this.props.totalPages; i++){
        let args = {
          click: this.handleClick(i),
          page: i
        }
        let page = new PostPaginationPage(args);
        pages.push(page);
      }
      return(
        <div>
          <ul>
            {pages}
          </ul>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {totalPages: state.totalPages }
}

export default connect(mapStateToProps) (PostsPagination);
