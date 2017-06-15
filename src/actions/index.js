import WPAPI from 'wpapi';
import PostListItem from '../components/post_list_item';
import promiseMiddleWare from 'redux-promise';
//import { createAction } from 'redux-actions';
export const CHANGE_PAGE = 'change_page';
export const FETCH_POSTS = 'fetch_posts';

const wp = new WPAPI({endpoint: 'http://reactwp.loc/wp-json'});

export function fetchPosts(page=1) {
  const result =  wp.posts().perPage(4).get();
    const action = {
      type: FETCH_POSTS,
      payload: result
    }
    return action;
}

export function changePage(page) {
  const action = {
    type: CHANGE_PAGE,
    payload: page
  }
  return action;
}
