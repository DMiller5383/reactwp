import {combineReducers} from 'redux';
import PostsReducer from './reducer_posts';
import PaginationActivePageReducer from './reducer_pagination_active_page';
import TotalPagesReducer from './reducer_total_pages';
import CategoriesReducer from './reducer_categories';

const rootReducer = combineReducers({
  posts: PostsReducer,
  activePage: PaginationActivePageReducer,
  totalPages: TotalPagesReducer,
  categories: CategoriesReducer
})

export default rootReducer;
