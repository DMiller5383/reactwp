import {combineReducers} from 'redux';
import PostsReducer from './reducer_posts';
import PaginationActivePageReducer from './reducer_pagination_active_page';
import TotalPagesReducer from './reducer_total_pages';
import CategoriesReducer from './reducer_categories';
import ActiveCategoryReducer from './reducer_active_category';

const rootReducer = combineReducers({
  posts: PostsReducer,
  activePage: PaginationActivePageReducer,
  totalPages: TotalPagesReducer,
  categories: CategoriesReducer,
  activeCategory: ActiveCategoryReducer
})

export default rootReducer;
