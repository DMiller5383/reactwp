import React, { Component } from 'react';
import { fetchPosts } from '../actions';
import {connect} from 'react-redux';
import {PostPaginationPage} from './post_pagination_page'
import _ from 'lodash';

class PostsPagination extends Component {
  componentDidMount() {
    return true;
  }
  render() {
    if(_.isEmpty(this.props.totalPages)) {
      
    } else {
      console.log('hello');
      let pages = [];
      for(let i=1; i<this.props.totalPages; i++){
        let page = new PostPaginationPage(i);
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
