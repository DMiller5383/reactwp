import {combineReducers} from 'redux';
import PostsReducer from './reducer_posts';
import TotalPagesReducer from './reducer_total_pages';

const rootReducer = combineReducers({
  posts: PostsReducer,
  totalPages: TotalPagesReducer

})

export default rootReducer;
