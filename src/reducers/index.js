import {combineReducers} from 'redux';
import PostsReducer from './reducer_posts';
//import PaginationReducer from './reducer_pagination';

console.log(PostsReducer);
const rootReducer = combineReducers({
  posts: PostsReducer
})

export default rootReducer;
