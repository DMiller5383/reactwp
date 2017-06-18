import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchCategories, setActiveCategory, fetchPosts} from '../actions';
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
      let self = this;
      let categoryListItems = this.props.categories.map(function(category){
        let handleClick = (categoryId) => {
          return (e) => {
            e.preventDefault();
            let test = self.props.setActiveCategory(categoryId);
            let args = {
              page: self.props.activePage,
              category: categoryId
            }
            self.props.fetchPosts(args);

          }
        }
        category.click = handleClick(category.id);
        return new CategoryListItem(category);
      });
      return(
        <div>{categoryListItems}</div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {categories: state.categories, activeCategory: state.activeCategory, activePage: state.activePage}
}
export default connect(mapStateToProps, {fetchCategories, setActiveCategory, fetchPosts})(CategoriesList);
