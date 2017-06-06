import {combineReducers} from 'redux';
import PaginationReducer from './reducer_pagination';

const rootReducer = combineReducers({
  pagination: PaginationReducer
})

export default rootReducer;
