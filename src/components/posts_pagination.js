import React, { Component } from 'react';
import { fetchPosts, changePage } from '../actions';
import {connect} from 'react-redux';
import PostPaginationPage from './post_pagination_page';
import _ from 'lodash';

class PostsPagination extends Component {

  componentDidMount() {
    return true;
  }

  handleClick(page) {
    return (e)=> {
      e.preventDefault();
      this.props.changePage(page);
      this.props.fetchPosts(page);
    }
  }
  render() {
    if(_.isEmpty(this.props.totalPages)) {
      return(<div></div>);
    } else {
      let pages = [];
      for(let i=1; i<this.props.totalPages; i++){
        let args = {
          click: this.handleClick.bind(this),
          page: i,
          activePage: this.props.activePage
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
  return {totalPages: state.totalPages, activePage: state.activePage }
}
export default connect(mapStateToProps, {changePage, fetchPosts}) (PostsPagination);
