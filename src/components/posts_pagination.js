import React, { Component } from 'react';
import { fetchPosts, changePage } from '../actions';
import {connect} from 'react-redux';
import PostPaginationPage from './post_pagination_page';
import _ from 'lodash';

class PostsPagination extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    return true;
  }

  handleClick(num) {
    return (e)=> {
      e.preventDefault();
      this.props.changePage();
    }
  }
  render() {
    if(_.isEmpty(this.props.totalPages)) {
      return;
    } else {
      let pages = [];
      for(let i=1; i<this.props.totalPages; i++){
        let args = {
          click: this.handleClick.bind(this),
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
  return {totalPages: state.totalPages, activePage: state.activePage }
}
export default connect(mapStateToProps, {changePage}) (PostsPagination);
