import WPAPI from 'wpapi';
import PostListItem from '../components/post_list_item';
import promiseMiddleWare from 'redux-promise';
//import { createAction } from 'redux-actions';
export const CHANGE_PAGE = 'change_page';
export const FETCH_POSTS = 'fetch_posts';



const wp = new WPAPI({endpoint: 'http://reactwp.loc/wp-json'});

// export function fetchPosts() {
//   console.log('yo');
//   const request = wp.posts().perPage(4).get((err, data) => {
//
//   }).then((data)=> {
//       let posts = data.map((post)=>{
//         let postData = {
//           id: post.id,
//           title: post.title.rendered,
//           excerpt: post.excerpt.rendered,
//           link: post.link
//         };
//
//         return PostListItem(postData);
//       });
//
//       return {
//         type: FETCH_POSTS,
//         payload: posts
//       }
//   });
// }

// export function changePage(activePage) {
//   return {
//     type: CHANGE_PAGE,
//     payload: activePage
//   }
// }

export function fetchPosts() {
  const result =  wp.posts().perPage(4).get();
    const action = {
      type: FETCH_POSTS,
      payload: result
    }
    return action;
}
