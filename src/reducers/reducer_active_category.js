
import { SET_ACTIVE_CATEGORY } from '../actions';


export default function(state={}, action) {
    switch(action.type){
      case SET_ACTIVE_CATEGORY:
        return action.payload;
      default:
        return state;
    }

}
