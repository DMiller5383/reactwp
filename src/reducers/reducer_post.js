import { GET_POST, NEW_POST } from '../actions';

export default function (state={}, action) {
  switch(action.type) {
    case GET_POST:
      return action.payload;
    case NEW_POST:
      return action.payload;
    default:
      return state;
  }

}
