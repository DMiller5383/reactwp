import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchCategories} from '../actions';
import CategoryListItem from './category_list_item';
import _ from 'lodash';

class CategoriesList extends Component {

  componentDidMount() {
    this.props.fetchCategories();
  }

  getCategoryListItems() {
    console.log(this.props.categories);
    return this.props.categories;
  }
  render() {
    if(_.isEmpty(this.props.categories)) {
      return(<div></div>);
    } else {
      let categoryListItems = this.props.categories.map(function(category){
        return new CategoryListItem(category);
      });
      return(
        <div>{categoryListItems}</div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {categories: state.categories}
}
export default connect(mapStateToProps, {fetchCategories})(CategoriesList);
