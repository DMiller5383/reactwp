import {combineReducers} from 'redux';
import PostsReducer from './reducer_posts';
import PaginationActivePageReducer from './reducer_pagination_active_page';
import TotalPagesReducer from './reducer_total_pages';

const rootReducer = combineReducers({
  posts: PostsReducer,
  activePage: PaginationActivePageReducer,
  totalPages: TotalPagesReducer
})

export default rootReducer;
