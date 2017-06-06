export default function(state, action) {
  switch(action.type) {
    case CHANGE_PAGE:
      return action.payload;
  }

  return state;
}
