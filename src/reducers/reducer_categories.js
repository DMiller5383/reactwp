import { FETCH_CATEGORIES } from '../actions';

export default function(state={}, action) {
  switch(action.type) {
    case FETCH_CATEGORIES:
      let categories = action.payload.map((category)=>{
        let categoryData = {
          id: category.id,
          name: category.name,
          slug: category.slug
        }
        return categoryData;
      });
      return categories;
    default:
      return state;
  }
}
