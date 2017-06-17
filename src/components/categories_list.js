import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchCategories} from '../actions';
import CategoryListItem from './category_list_item';
import _ from 'lodash';

class CategoriesList extends Component {

  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    if(_.isEmpty(this.props.categories)) {
      return(<div></div>);
    } else {
      let categoryListItems = this.props.categories.map(function(category){
        let handleClick = (categoryId) => {
          console.log(this);
          return (e) => {
            e.preventDefault();
            console.log(categoryId);
          }
        }
        category.click = handleClick(category.id);
        console.log(category);
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
