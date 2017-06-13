import { FETCH_POSTS } from '../actions';
import PostListItem from '../components/post_list_item';

export default function (state={}, action) {
  console.log(state);
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
      return posts;
    default:
      return state;
  }
}
