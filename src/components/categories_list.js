import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchCategories} from '../actions';
import _ from 'lodash';

class CategoriesList extends Component {

  componentDidMount() {
    this.props.fetchCategories();
  }
  render() {
    if(_.isEmpty(this.props.categories)) {
      return(<div></div>);
    }
    return(
      <div>Comments Would go here</div>
    )
  }
}

function mapStateToProps(state) {
  return {categories: state.categories}
}
export default connect(mapStateToProps, {fetchCategories})(CategoriesList);
