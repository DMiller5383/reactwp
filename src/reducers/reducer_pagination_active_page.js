import { CHANGE_PAGE } from '../actions';

export default function(state={}, action) {
  switch(action.type) {
    case CHANGE_PAGE:
      return action.payload;
    default:
      return state;
  }
}
