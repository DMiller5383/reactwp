import { FETCH_POSTS } from '../actions';
import PostListItem from '../components/post_list_item';

export default function (state={}, action) {
  switch(action.type) {
    case FETCH_POSTS:
      let posts = action.payload.map((post)=>{
        let postData = {
          id: post.id,
          title: post.title.rendered,
          excerpt: post.excerpt.rendered,
          link: post.link
        }
        return PostListItem(postData);
      });
      let paging = action.payload._paging;
      let postsIndex = {
        posts,
        paging
      }
      let newState = {...state, posts: postsIndex};
      state = newState;
      return newState;
    default:
      return state;
  }
}
